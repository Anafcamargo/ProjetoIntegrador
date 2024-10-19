import axios from "axios";



export class AuthService {
    async login(dados: { telefone: string; senha: string }): Promise<void> {
        try {
            const response = await axios.post('/usuarios/login', dados); // URL do seu backend
            localStorage.setItem('userId', response.data.userId); // Armazena o ID do usuário
        } catch (error) {
            console.error('Erro no login:', error);
            throw error; // Lança erro para tratamento posterior
        }
    }

    async cadastrar(dados: { nome: string; telefone: string; senha: string }): Promise<void> {
        try {
            await axios.post('/usuarios/cadastro', dados); // URL do seu backend
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            throw error; // Lança erro para tratamento posterior
        }
    }

    // Outros métodos de autenticação podem ser adicionados aqui, se necessário
}
