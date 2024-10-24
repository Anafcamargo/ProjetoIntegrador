


// import React, { FormEvent, useEffect, useState } from 'react';
// import Cabecalho2 from "../componentes/cabecalho2";
// import Rodape from "../componentes/rodape";
// import '../estilo/estilo.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { Moduloapi } from '../types/api';
// import { useUser } from '../componentes/UserContext';

// interface FormData {
//     name: string;
//     contact: string;
//     issue: string;
//     urgency: string;
// }

// export function Chamado() {
//     const [formData, setFormData] = useState<FormData>({
//         name: '',
//         contact: '',
//         issue: '',
//         urgency: 'baixa',
//     });
//     const [formSubmitted, setFormSubmitted] = useState(false);
//     const [error, setError] = useState('');
//     // const { userId } = useUser(); // Usando o contexto
//     const [userId, setUserId] = useState('');
//     const navigate = useNavigate();

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//         const { name, value } = event.target;
//         setFormData({ ...formData, [name]: value });
//     };

    

//     useEffect(() => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//           navigate('/login'); // Redireciona para a página de login
//       } else {
//           const storedUserId = localStorage.getItem('userId');
//           if (storedUserId) {
//               setUserId(storedUserId); // Define o ID do usuário logado
//           }
//       }
//   }, [navigate]);

//   const verificarUsuario = async (usuarioId: string) => {
//     try {
        
//         const response = await fetch(`http://localhost:3000/chamados/usuario/${usuarioId}`);
        
//         if (!response.ok) {
//             throw new Error('Usuário não encontrado');
//         }

//         const usuario = await response.json();
//         console.log('Usuário encontrado:', usuario); // Log para verificar o que está retornando

//         return usuario.ID !== undefined; // Retorna true se o usuário existe
//     } catch (error) {
//         console.error('Erro ao verificar usuário:', error);
//         return false; // Retorna false em caso de erro
//     }
// };


//     const HandleAddChamado = async (event: FormEvent<HTMLFormElement>) => {
//         event.preventDefault(); // Previne o comportamento padrão do formulário

//         const userId = localStorage.getItem('userId');
        

//         console.log('UserId recuperado do localStorage:', userId);
    

//         if (!userId || !(await verificarUsuario(userId))) {
//             alert('Usuário não está logado ou não encontrado.');
//             return;
//         }
    
//         try {
//             // Aqui você desestrutura os dados do formData
//             const response = await Moduloapi.CadastrarChamado(
//                 formData.name,      // NOME
//                 formData.contact,   // TELEFONE
//                 formData.issue,     // DESCRICAO
//                 formData.urgency,   // CATEGORIA
//                 userId              // IDUSUARIO
//             );
    
//             console.log('Resposta da API após cadastrar o chamado:', response);

//             if (response.id) {
//                 alert('Chamado criado com sucesso: ' + response.id);
//                 setFormSubmitted(true);
//             } else {
//                 alert('Falha ao inserir chamado. ' + response.message);
//             }
//         } catch (error) {
//             setError('Houve um erro ao cadastrar o chamado.');
//         }
//     };
    
    
//     return (
//         <>
//             <Cabecalho2 />
//             <div className="BodyUsuario">
//                 <div className="containerTelaUsuario">
//                     {!formSubmitted ? (
//                         <>
//                             <h1 className="textoinicalusuario">Bem-vindo ao Suporte Técnico</h1>
//                             <p className="ptelausuario">Preencha as informações abaixo para abrir um chamado:</p>
//                             {error && <p className="error">{error}</p>}
//                             <form onSubmit={HandleAddChamado}>
//                                 <h2 className="textoinicalusuario">
//                                     <label htmlFor="name" className="labelUsuario">Nome:</label>
//                                 </h2>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     name="name"
//                                     required
//                                     placeholder="Nome Completo"
//                                     className="inputsUsuario"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                 />
//                                 <h2 className="textoinicalusuario">
//                                     <label htmlFor="contact" className="labelUsuario">Telefone:</label>
//                                 </h2>
//                                 <input
//                                     type="text"
//                                     id="contact"
//                                     name="contact"
//                                     required
//                                     placeholder="( ) 99999-9999"
//                                     className="inputsUsuario"
//                                     value={formData.contact}
//                                     onChange={handleChange}
//                                 />
//                                 <h2 className="textoinicalusuario">
//                                     <label htmlFor="issue" className="labelUsuario">Descreva o seu Problema:</label>
//                                 </h2>
//                                 <textarea
//                                     id="issue"
//                                     name="issue"
//                                     rows={5}
//                                     required
//                                     placeholder="Descreva o seu problema técnico de maneira simples e direta"
//                                     className="inputsUsuario"
//                                     onChange={handleChange}
//                                     value={formData.issue}
//                                 />
//                                 <h2 className="textoinicalusuario">
//                                     <label htmlFor="urgency" className="labelUsuario">Categorias:</label>
//                                 </h2>
//                                 <select
//                                     id="urgency"
//                                     name="urgency"
//                                     className="inputsUsuario"
//                                     value={formData.urgency}
//                                     onChange={handleChange}
//                                 >
//                                     <option value="alta">Problema com o celular</option>
//                                     <option value="media">Problema com o computador</option>
//                                     <option value="baixa">Problema com o tablet</option>
//                                     <option value="media">Problema com o notebook</option>
//                                     <option value="media">Outro problema</option>
//                                 </select>
//                                 <br />
//                                 <button type="submit" className="botãoEnviarChamado">Registrar Chamado</button>
//                             </form>
//                         </>
//                     ) : (
//                         <div id="confirmationMessage">
//                             <h2>Obrigado!</h2>
//                             <p className="ptelausuario">Seu chamado foi registrado com sucesso. Em breve um de nossos voluntários entrará em contato com você.</p>
//                         </div>
//                     )}
//                 </div>
//                 <Link to="/*"> .</Link>
//                 <Rodape />
//             </div>
//         </>
//     );
// }

// export default Chamado;

import React, { FormEvent, useEffect, useState } from 'react';
import Cabecalho2 from "../componentes/cabecalho2";
import Rodape from "../componentes/rodape";
import '../estilo/estilo.css';
import { Link, useNavigate } from 'react-router-dom';
import { Moduloapi } from '../types/api';

interface FormData {
    name: string;
    contact: string;
    issue: string;
    urgency: string;
}

export function Chamado() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        contact: '',
        issue: '',
        urgency: 'baixa',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); // Redireciona para a página de login
        } else {
            const storedUserId = localStorage.getItem('userId');
            if (storedUserId) {
                setUserId(storedUserId); // Define o ID do usuário logado
            }
        }
    }, [navigate]);

    const verificarUsuario = async (usuarioId: string) => {
        try {
            const response = await fetch(`http://localhost:3000/chamados/usuario/${usuarioId}`);

            if (!response.ok) {
                throw new Error('Usuário não encontrado');
            }

            const usuario = await response.json();
            console.log('Usuário encontrado:', usuario); // Log para verificar o que está retornando

            return usuario.ID !== undefined; // Retorna true se o usuário existe
        } catch (error) {
            console.error('Erro ao verificar usuário:', error);
            return false; // Retorna false em caso de erro
        }
    };

    const HandleAddChamado = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        const userId = localStorage.getItem('userId');
        console.log('UserId recuperado do localStorage:', userId);

        if (!userId || !(await verificarUsuario(userId))) {
            alert('Usuário não está logado ou não encontrado.');
            return;
        }

        try {
            // Aqui você desestrutura os dados do formData
            const response = await Moduloapi.CadastrarChamado(
                formData.name,      // NOME
                formData.contact,   // TELEFONE
                formData.issue,     // DESCRICAO
                formData.urgency,   // CATEGORIA
                userId              // IDUSUARIO
            );

            console.log('Resposta da API após cadastrar o chamado:', response);

            if (response.id) {
                alert('Chamado criado com sucesso: ' + response.id);
                setFormSubmitted(true);
            } else {
                alert('Falha ao inserir chamado. ' + response.message);
            }
        } catch (error) {
            setError('Houve um erro ao cadastrar o chamado.');
            console.error('Erro ao cadastrar chamado:', error); // Log do erro
        }
    };

    return (
        <>
            <Cabecalho2 />
            <div className="BodyUsuario">
                <div className="containerTelaUsuario">
                    {!formSubmitted ? (
                        <>
                            <h1 className="textoinicalusuario">Bem-vindo ao Suporte Técnico</h1>
                            <p className="ptelausuario">Preencha as informações abaixo para abrir um chamado:</p>
                            {error && <p className="error">{error}</p>}
                            <form onSubmit={HandleAddChamado}>
                                <h2 className="textoinicalusuario">
                                    <label htmlFor="name" className="labelUsuario">Nome:</label>
                                </h2>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Nome Completo"
                                    className="inputsUsuario"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <h2 className="textoinicalusuario">
                                    <label htmlFor="contact" className="labelUsuario">Telefone:</label>
                                </h2>
                                <input
                                    type="text"
                                    id="contact"
                                    name="contact"
                                    required
                                    placeholder="( ) 99999-9999"
                                    className="inputsUsuario"
                                    value={formData.contact}
                                    onChange={handleChange}
                                />
                                <h2 className="textoinicalusuario">
                                    <label htmlFor="issue" className="labelUsuario">Descreva o seu Problema:</label>
                                </h2>
                                <textarea
                                    id="issue"
                                    name="issue"
                                    rows={5}
                                    required
                                    placeholder="Descreva o seu problema técnico de maneira simples e direta"
                                    className="inputsUsuario"
                                    onChange={handleChange}
                                    value={formData.issue}
                                />
                                <h2 className="textoinicalusuario">
                                    <label htmlFor="urgency" className="labelUsuario">Categorias:</label>
                                </h2>
                                <select
                                    id="urgency"
                                    name="urgency"
                                    className="inputsUsuario"
                                    value={formData.urgency}
                                    onChange={handleChange}
                                >
                                    <option value="alta">Problema com o celular</option>
                                    <option value="media">Problema com o computador</option>
                                    <option value="baixa">Problema com o tablet</option>
                                    <option value="media">Problema com o notebook</option>
                                    <option value="media">Outro problema</option>
                                </select>
                                <br />
                                <button type="submit" className="botãoEnviarChamado">Registrar Chamado</button>
                            </form>
                        </>
                    ) : (
                        <div id="confirmationMessage">
                            <h2>Obrigado!</h2>
                            <p className="ptelausuario">Seu chamado foi registrado com sucesso. Em breve um de nossos voluntários entrará em contato com você.</p>
                        </div>
                    )}
                </div>
                <Link to="/*"> .</Link>
                <Rodape />
            </div>
        </>
    );
}

export default Chamado;
