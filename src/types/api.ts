export const Moduloapi = {

    CarregarUsuarios: async () => {
        try {
            let response = await fetch("http://localhost:3000/usuarios/listar"); 
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

    
    CadastrarUsuario: async (sNome: string, sTelefone: string, sSenha: string) => {
        try {
            let response = await fetch("http://localhost:3000/usuarios/cadastro", {
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
            let response = await fetch("http://localhost:3000/usuarios/remove-:id", {
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
            let response = await fetch("http://localhost:3000/usuarios/:id", {
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

        /* Chamado */

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

    CarregarVoluntarios: async () => {
        try {
            let response = await fetch(""); 
            if (!response.ok) {
                throw new Error(`Erro ao carregar voluntários: ${response.statusText}`);
            }
            let json = await response.json();
            return json;
        } catch (error) {
            console.error('Erro:', error);
            throw error;
        }
    },


    CadastrarVoluntario: async ( nome: string, CPF: string,Nascimento:Number,email: string, telefone: string, Endereco: string, numero: string, bairro: string, senha: string ) => {
        try {
            let response = await fetch("http://localhost:3000/voluntarios/cadastro", { 
                method: 'POST',
                body: JSON.stringify({
                    NOME: nome,
                    CPF: CPF,
                    NASCIMENTO: Nascimento,
                    EMAIL: email,
                    TELEFONE: telefone,
                    ENDERECO: Endereco,
                    NUMEROCASA: numero,
                    BAIRRO: bairro,
                    SENHA: senha

                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
           
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