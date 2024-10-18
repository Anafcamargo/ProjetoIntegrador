// import React, { useState } from 'react';
// import Cabecalho2 from "../componentes/cabecalho2";
// import Rodape from "../componentes/rodape";
// import '../estilo/estilo.css';
// import { Link } from 'react-router-dom';
// import { Moduloapi } from '../types/api';

// interface FormData {
//   cNome(cNome: any, cTelefone: any, cDescricao: any, cCategoria: any): unknown;
//   cTelefone(cNome: any, cTelefone: any, cDescricao: any, cCategoria: any): unknown;
//   cDescricao(cNome: any, cTelefone: any, cDescricao: any, cCategoria: any): unknown;
//   cCategoria(cNome: any, cTelefone: any, cDescricao: any, cCategoria: any): unknown;
//   name: string;
//   contact: string;
//   issue: string;
//   urgency: string;
// }

// function Chamado() {
//   const [formData, setFormData] = useState<FormData>({
//     nome: '',
//     Telefone: '',
//     Descricao: '',
//     Categoria: 'baixa',
//   });
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const HandleAddChamado = async () => {
//     let json = await Moduloapi.CadastrarChamado(formData.cNome, formData.cTelefone, formData.cDescricao, formData.cCategoria);

//     if (json.id) {
//       alert('Usuário Criado com sucesso ' + json.id);
//       navigate('/login'); // Redireciona após sucesso
//     } else {
//       alert('Falha ao inserir usuário. ' + json.message);
//     }
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('http://localhost:3000/chamados/cadastro', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       console.log('Response:', response); // Verifica a resposta da API

//       if (!response.ok) {
//         throw new Error('Erro ao enviar o chamado. Tente novamente.');
//       }

//       // Se a resposta for bem-sucedida, atualize o estado
//       setFormSubmitted(true);
//       setError(''); // Limpa qualquer erro anterior
//       setFormData({ name: '', contact: '', issue: '', urgency: 'baixa' }); // Limpa o formulário
//     } catch (error: any) {
//       setError(error.message);
//     }
//   };

//   return (
//     <>
//       <Cabecalho2 />
//       <div className="BodyUsuario">
//         <div className="containerTelaUsuario">
//           {!formSubmitted ? (
//             <>
//               <h1 className="tesxtoinicalusuario">Bem-vindo ao Suporte Técnico</h1>
//               <p className="ptelausuario">Preencha as informações abaixo para abrir um chamado:</p>

//               {error && <p className="error">{error}</p>} {/* Mensagem de erro */}

//               <form onSubmit={handleSubmit}>
//                 <h2 className="tesxtoinicalusuario">
//                   <label htmlFor="name" className="labelUsuario">Nome:</label>
//                 </h2>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   placeholder="Nome Completo"
//                   className="inputsUsuario"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />

//                 <h2 className="tesxtoinicalusuario">
//                   <label htmlFor="contact" className="labelUsuario">Telefone:</label>
//                 </h2>
//                 <input
//                   type="text"
//                   id="contact"
//                   name="contact"
//                   required
//                   placeholder="( ) 99999-9999"
//                   className="inputsUsuario"
//                   value={formData.contact}
//                   onChange={handleChange}
//                 />

//                 <h2 className="tesxtoinicalusuario">
//                   <label htmlFor="issue" className="labelUsuario">Descreva o seu Problema:</label>
//                 </h2>
//                 <textarea
//                   id="issue"
//                   name="issue"
//                   rows={5}
//                   required
//                   placeholder="Descreva o seu problema técnico de maneira simples e direta"
//                   onChange={handleChange}
//                   value={formData.issue}
//                 />

//                 <h2 className="tesxtoinicalusuario">
//                   <label htmlFor="urgency" className="labelUsuario">Categorias:</label>
//                 </h2>
//                 <select
//                   id="urgency"
//                   name="urgency"
//                   className="inputsUsuario"
//                   value={formData.urgency}
//                   onChange={handleChange}
//                 >
//                   <option value="alta">Celular</option>
//                   <option value="media">Computador</option>
//                   <option value="baixa">Tablet</option>
//                   <option value="media">Notebook/Laptop</option>
//                 </select>
//                 <br />
//                 <button type="submit" className="botãoEnviarChamado">Enviar Chamado</button>
//               </form>
//             </>
//           ) : (
//             <div id="confirmationMessage">
//               <h2>Obrigado!</h2>
//               <p className="ptelausuario">Seu chamado foi registrado com sucesso. Em breve um de nossos voluntários entrará em contato com você.</p>
//             </div>
//           )}
          
//         </div>
//         <Link to="/*"> .</Link>
//         <Rodape />
//       </div>
//     </>
//   );
// }

// export default Chamado;

import React, { useState } from 'react';
import Cabecalho2 from "../componentes/cabecalho2";
import Rodape from "../componentes/rodape";
import '../estilo/estilo.css';
import { Link, useNavigate } from 'react-router-dom';
import { Moduloapi } from '../types/api';
import { useUser } from '../componentes/UserContext'; // Importando o contexto

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
  const navigate = useNavigate(); // Para redirecionar após o sucesso
  const { userId, setUserId } = useUser(); // Usando o contexto

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const verificarUsuario = async (usuarioId: string) => {
    const response = await fetch(`http://localhost:3000/usuario/${usuarioId}`);
    const usuario = await response.json();
    return usuario.id !== undefined; // Retorna true se o usuário existe
  };

  const HandleAddChamado = async () => {
    if (!userId) {
      alert('Usuário não está logado.');
      return;
    }

    const usuarioId = userId; // Usando o ID do usuário do contexto
    const voluntarioId = '67890'; // Exemplo, se aplicável

    const usuarioExiste = await verificarUsuario(usuarioId);

    if (!usuarioExiste) {
      alert('Usuário não encontrado. Não é possível cadastrar o chamado.');
      return;
    }

    try {
      const json = await Moduloapi.CadastrarChamado(
        formData.name,
        formData.contact,
        formData.issue,
        formData.urgency,
        usuarioId,
        voluntarioId
      );

      if (json.id) {
        alert('Chamado criado com sucesso: ' + json.id);
        setFormSubmitted(true); // Atualiza o estado para indicar que o formulário foi enviado
      } else {
        alert('Falha ao inserir chamado. ' + json.message);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await HandleAddChamado(); // Chama a função para adicionar o chamado
  };

  return (
    <>
      <Cabecalho2 />
      <div className="BodyUsuario">
        <div className="containerTelaUsuario">
          {!formSubmitted ? (
            <>
              <h1 className="tesxtoinicalusuario">Bem-vindo ao Suporte Técnico</h1>
              <p className="ptelausuario">Preencha as informações abaixo para abrir um chamado:</p>
              {error && <p className="error">{error}</p>} {/* Mensagem de erro */}

              <form onSubmit={handleSubmit}>
                <h2 className="tesxtoinicalusuario">
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

                <h2 className="tesxtoinicalusuario">
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

                <h2 className="tesxtoinicalusuario">
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

                <h2 className="tesxtoinicalusuario">
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


