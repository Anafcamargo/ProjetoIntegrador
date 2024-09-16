export const Moduloapi = {

    CarregarUsuarios: async () => {
        try {
            let response = await fetch(""); 
            if (!response.ok) {
                throw new Error(`Erro ao carregar usuários: ${response.statusText}`);
            }
            let json = await response.json();
            return json;
        } catch (error) {
            console.error('Erro:', error);
            throw error;
        }
    },

    CadastroUsuarios: async (title: string, body: string, userID: number) => {
        try {
            let response = await fetch("", {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    body,
                    userID
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erro ao cadastrar usuário: ${response.statusText}`);
            }
            let json = await response.json();
            console.log(json);
            return json;
        } catch (error) {
            console.error('Erro:', error);
            throw error;
        }
    },

    RemoverUsuario: async (userID: number) => {
        try {
            let response = await fetch("", {
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
            let response = await fetch("", {
                method: 'PUT',
                body: JSON.stringify(dadosAtualizados),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erro ao alterar usuário: ${response.statusText}`);
            }
            let json = await response.json();
            return json;
        } catch (error) {
            console.error('Erro:', error);
            throw error;
        }
    },

    AbrirChamado: async (title: string, description: string) => {
        try {
            let response = await fetch("", { 
                method: 'POST',
                body: JSON.stringify({
                    title,
                    description
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erro ao abrir chamado: ${response.statusText}`);
            }
            let json = await response.json();
            return json;
        } catch (error) {
            console.error('Erro:', error);
            throw error;
        }
    },

    /* Voluntario */

    CadastroVoluntario: async (dados: { nome: string, email: string }) => {
        try {
            let response = await fetch("", { 
                method: 'POST',
                body: JSON.stringify(dados),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erro ao cadastrar voluntário: ${response.statusText}`);
            }
            let json = await response.json();
            return json;
        } catch (error) {
            console.error('Erro:', error);
            throw error;
        }
    },

    RemoverVoluntario: async (voluntarioID: number) => {
        try {
            let response = await fetch("", { 
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
            let response = await fetch("", {
                method: 'PUT',
                body: JSON.stringify(dadosAtualizados),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erro ao alterar voluntário: ${response.statusText}`);
            }
            let json = await response.json();
            return json;
        } catch (error) {
            console.error('Erro:', error);
            throw error;
        }
    }
};