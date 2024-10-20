import React, { createContext, useContext, useEffect, useState } from 'react';

interface Voluntario {
    nome: string;
    email: string;
    // Adicione outros campos conforme necessário
}

interface VoluntarioContextType {
    voluntario: Voluntario | null;
    setVoluntario: React.Dispatch<React.SetStateAction<Voluntario | null>>;
}

const VoluntarioContext = createContext<VoluntarioContextType | undefined>(undefined);

export const VoluntarioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [voluntario, setVoluntario] = useState<Voluntario | null>(null);

    useEffect(() => {
        const fetchVoluntario = async () => {
            try {
                const response = await fetch('http://localhost:3000/voluntario/login', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Erro ao buscar dados do voluntário');
                }

                const voluntarioData: Voluntario = await response.json();
                setVoluntario(voluntarioData);
            } catch (error) {
                console.error('Erro:', error);
            }
        };

        fetchVoluntario();
    }, []);

    return (
        <VoluntarioContext.Provider value={{ voluntario, setVoluntario }}>
            {children}
        </VoluntarioContext.Provider>
    );
};

export const useVoluntario = () => {
    const context = useContext(VoluntarioContext);
    if (!context) {
        throw new Error('useVoluntario must be used within a VoluntarioProvider');
    }
    return context;
};
