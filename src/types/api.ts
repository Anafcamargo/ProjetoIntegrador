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

     LoginUsuario: async (NOME: string, SENHA: string) => {
        try {
            const response = await fetch("http://localhost:3000/usuarios/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ NOME, SENHA }), // Enviando telefone e senha
            });
    
            if (!response.ok) {
                throw new Error(`Erro ao fazer login: ${response.statusText}`);
            }
    
            const json: Response = await response.json();
            return json; // Retorna os dados do usuário ou um token
        } catch (error) {
            console.error('Erro:', error);
            throw error; // Re-throw para lidar no chamador
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

        CadastrarChamado: async (cNome: string, cTelefone: string, cDescricao: string, cCategoria: string, usuarioId: string, voluntarioId: string) => {
            try {
                
              const response = await fetch("http://localhost:3000/chamados/cadastro", { 
                method: 'POST',
                body: JSON.stringify({
                  NOME: cNome,
                  TELEFONE: cTelefone,
                  DESCRICAO: cDescricao,
                  CATEGORIA: cCategoria,
                  IDUSUARIO: usuarioId, // Enviando o ID do usuário
                  IDVOLUNTARIO: voluntarioId // Enviando o ID do voluntário
                }),
                headers: {
                  'Content-Type': 'application/json'
                }
              });
          
              // Aqui, você pode retornar o JSON ou o status da resposta
              const jsonResponse = await response.json();
              return jsonResponse; // Retorna a resposta da API
            } catch (error) {
              throw new Error('Erro ao cadastrar chamado');
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


    CadastrarVoluntario: async (nome: string, CPF: string, NASCIMENTO: number, email: string, telefone: string, Endereco: string, numero: string, bairro: string, cidade: string, senha: string) => {
        try {
            let response = await fetch("http://localhost:3000/voluntarios/cadastro", { 
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