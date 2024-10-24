interface ChamadoResponse {
    id: string; // ou o tipo apropriado
    message: string;
}

export const Moduloapi = {
    CarregarUsuarios: async () => {
        try {
            const response = await fetch("http://localhost:3000/usuarios/listar");
            if (!response.ok) {
                throw new Error(`Erro ao carregar usuários: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Erro:', error);
            throw error;
        }
    },

    LoginUsuario: async (TELEFONE: string, SENHA: string) => {
        try {
            const response = await fetch("http://localhost:3000/usuarios/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ TELEFONE, SENHA }),
            });

            if (!response.ok) {
                throw new Error(`Erro ao fazer login: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Erro:', error);
            throw error;
        }
    },

    CadastrarUsuario: async (sNome: string, sTelefone: string, sSenha: string): Promise<{ id: string; message: string }> => {
        try {
            const response = await fetch("http://localhost:3000/usuarios/cadastro", {
                method: 'POST',
                body: JSON.stringify({
                    NOME: sNome,
                    TELEFONE: sTelefone,
                    SENHA: sSenha
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error('Erro ao cadastrar usuário: ' + errorText);
            }

            return await response.json();
        } catch (error) {
            console.error('Erro:', error);
            throw error;
        }
    },

    RemoverUsuario: async (userID: string) => {
        try {
            const response = await fetch(`http://localhost:3000/usuarios/remove-${userID}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`Erro ao remover usuário: ${response.statusText}`);
            }
            return { message: 'Usuário removido com sucesso' };
        } catch (error) {
            console.error('Erro:', error);
            throw error;
        }
    },

    AlterarUsuario: async (userID: number, dadosAtualizados: { title?: string, body?: string }) => {
        try {
            const response = await fetch(`http://localhost:3000/usuarios/${userID}`, {
                method: 'PUT',
                body: JSON.stringify(dadosAtualizados),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erro ao alterar usuário: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Erro:', error);
            throw error;
        }
    },

    CadastrarChamado: async (
        NOME: string,
        TELEFONE: string,
        DESCRICAO: string,
        CATEGORIA: string,
        usuarioId: string
    ): Promise<ChamadoResponse> => {
        try {
            
            const token = localStorage.getItem('token'); // Obtém o token do localStorage
            const requestBody = {
                NOME,
                TELEFONE,
                DESCRICAO,
                CATEGORIA,
                IDUSUARIO: usuarioId,
            };
            
            console.log('RequestBody enviado para a API:', requestBody);

            const response = await fetch("http://localhost:3000/chamados/cadastro", {
                method: 'POST',
                body: JSON.stringify(requestBody),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Inclui o token no cabeçalho
                },
            });
    
            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Erro ao cadastrar chamado');
            }
    
            return await response.json();
        } catch (error) {
            throw new Error('Erro ao cadastrar chamado: ' + (error instanceof Error ? error.message : 'Erro desconhecido'));
        }
    },

    
      
    
    // Voluntários
    CarregarVoluntarios: async () => {
        try {
            const response = await fetch("http://localhost:3000/voluntarios/listar"); // Ajustar URL
            if (!response.ok) {
                throw new Error(`Erro ao carregar voluntários: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Erro:', error);
            throw error;
        }
    },

    CarregarVoluntarioLogado: async () => {
        try {
            const userId = localStorage.getItem('userId'); // Recupera o ID do usuário logado
            if (!userId) {
                throw new Error('Usuário não está logado.');
            }
    
            const response = await fetch(`http://localhost:3000/voluntarios/${userId}`); // Ajustar URL conforme necessário
            if (!response.ok) {
                throw new Error(`Erro ao carregar voluntário: ${response.statusText}`);
            }
    
            return await response.json(); // Retorna os dados do voluntário
        } catch (error) {
            console.error('Erro:', error);
            throw error; // Lança erro para tratamento posterior
        }
    },

    LoginVoluntario: async (EMAIL: string, SENHA: string): Promise<any> => {
        try {
            const response = await fetch("http://localhost:3000/voluntarios/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ EMAIL, SENHA }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `Erro ao fazer login: ${response.statusText}`);
            }
    
            return await response.json();
        } catch (error) {
            console.error('Erro:', error);
            throw error;
        }
    },
    

    CadastrarVoluntario: async (nome: string, CPF: string, NASCIMENTO: number, email: string, telefone: string, Endereco: string, numero: string, bairro: string, cidade: string, senha: string) => {
        try {
            const response = await fetch("http://localhost:3000/voluntarios/cadastro", {
                method: 'POST',
                body: JSON.stringify({
                    NOME: nome,
                    CPF: CPF,
                    NASCIMENTO: NASCIMENTO,
                    EMAIL: email,
                    TELEFONE: telefone,
                    ENDERECO: Endereco,
                    NUMEROCASA: numero,
                    BAIRRO: bairro,
                    CIDADE: cidade,
                    SENHA: senha
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return await response.json();
        } catch (error) {
            console.error('Erro:', error);
            throw error;
        }
    },

    RemoverVoluntario: async (voluntarioID: number) => {
        try {
            const response = await fetch(`http://localhost:3000/voluntarios/remove-${voluntarioID}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`Erro ao remover voluntário: ${response.statusText}`);
            }
            return { message: 'Voluntário removido com sucesso' };
        } catch (error) {
            console.error('Erro:', error);
            throw error;
        }
    },

    AlterarVoluntario: async (voluntarioID: number, dadosAtualizados: { nome?: string, email?: string }) => {
        try {
            const response = await fetch(`http://localhost:3000/voluntarios/${voluntarioID}`, {
                method: 'PUT',
                body: JSON.stringify(dadosAtualizados),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erro ao alterar voluntário: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Erro:', error);
            throw error;
        }
    },

    
      
};
