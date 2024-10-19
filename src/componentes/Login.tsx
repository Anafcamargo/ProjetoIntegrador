import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../AuthService'; // Importa o serviço de autenticação

const Login: React.FC = () => {
    const [formData, setFormData] = useState({ telefone: '', senha: '' });
    const navigate = useNavigate();
    const authService = new AuthService();

    const handleLogin = async () => {
        try {
            await authService.login(formData);
            navigate('/cadastro-chamado'); // Redireciona após o login
        } catch (error) {
            alert('Erro ao realizar login: ' + (error instanceof Error ? error.message : 'Erro desconhecido'));
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Telefone"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            />
            <input
                type="password"
                placeholder="Senha"
                value={formData.senha}
                onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
