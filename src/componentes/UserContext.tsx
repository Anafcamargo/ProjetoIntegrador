import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
    token: string | null;
    userId: string | null;
}

interface UserContextType {
    user: User;
    login: (token: string, userId: string) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>(() => {
        const storedToken = localStorage.getItem('token');
        const storedUserId = localStorage.getItem('userId');
        return { token: storedToken, userId: storedUserId };
    });

    const login = (token: string, userId: string) => {
        setUser({ token, userId });
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
    };

    const logout = () => {
        setUser({ token: null, userId: null });
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
