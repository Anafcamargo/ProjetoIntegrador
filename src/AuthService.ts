import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', // Base URL do seu backend
});

export class AuthService {
    async login(dados: { telefone: string; senha: string }): Promise<void> {
        try {
            const response = await api.post('/usuarios/login', dados);
            localStorage.setItem('userId', response.data.userId);
        } catch (error) {
            console.error('Erro no login:', error);
            throw error;
        }
    }

    async cadastrar(dados: { nome: string; telefone: string; senha: string }): Promise<void> {
        try {
            await api.post('/usuarios/cadastro', dados);
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            throw error;
        }
    }

    // Outros métodos...

    async loginvoluntario(dados: { EMAIL: string; SENHA: string }): Promise<void> {
        try {
            const response = await api.post('/voluntarios/login', dados);
            localStorage.setItem('userId', response.data.userId);
        } catch (error) {
            console.error('Erro no login:', error);
            throw error;
        }
    }
}
