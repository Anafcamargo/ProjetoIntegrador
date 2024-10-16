// // import Cabecalho from "../componentes/cabecalho";

// // import React, { useState } from 'react';
// // import '../estilo/estilo.css'
// // import Cabecalho2 from "../componentes/cabecalho2";
// // import Rodape from "../componentes/rodape";

// // function Chamado() {
// //   const [formSubmitted, setFormSubmitted] = useState(false);

// //   const handleSubmit = (event: { preventDefault: () => void; }) => {
// //     event.preventDefault();
// //     setFormSubmitted(true);
// //   };

// //   return (
// //     <><Cabecalho2 /><body className="BodyUsuario">

// //       <div className="containerTelaUsuario">

// //         {!formSubmitted ? (
// //           <>
// //             <h1 className="tesxtoinicalusuario">Bem-vindo ao Suporte Técnico</h1>
// //             <p className="ptelausuario">Preencha as informações abaixo para abrir um chamado:</p>

// //             <form onSubmit={handleSubmit}>
// //               <h2 className="tesxtoinicalusuario"> <label htmlFor="name" className="labelUsuario">Nome:</label> </h2>
// //               <input type="text" id="name" name="name" required placeholder="Nome Completo" className="inputsUsuario" />

// //               <h2 className="tesxtoinicalusuario"> <label htmlFor="contact" className="labelUsuario">Telefone:</label> </h2>
// //               <input type="text" id="contact" name="contact" required placeholder="( ) 99999-9999" className="inputsUsuario" />

// //               <h2 className="tesxtoinicalusuario"> <label htmlFor="issue" className="labelUsuario">Descreva o seu Problema:</label> </h2>
// //               <textarea id="issue" name="issue" rows={5} required placeholder="Descreva o seu problema técnico de maneira simples e direta"></textarea>

// //               <h2 className="tesxtoinicalusuario"> <label htmlFor="urgency" className="labelUsuario">Categorias:</label> </h2>
// //               <select id="urgency" name="urgency">
// //                 <option value="baixa">Celular</option>
// //                 <option value="media">Computador</option>
// //                 <option value="alta">Tablet</option>
// //                 <option value="baixa">Notebook/Laptop</option>
// //               </select>
// //               <br />
// //               <button type="submit" className="botãoEnviarChamado">Enviar Chamado</button>
// //             </form>
// //           </>
// //         ) : (
// //           <div id="confirmationMessage">
// //             <h2>Obrigado!</h2>
// //             <p className="ptelausuario">Seu chamado foi registrado com sucesso. Em breve um de nossos voluntarios entrará em contato com você.</p>
// //           </div>
// //         )}
// //       </div>
// //       <Rodape />
// //     </body></>
// //   );
// // }

// // export default Chamado;

// import React, { useState } from 'react';
// import Cabecalho2 from "../componentes/cabecalho2";
// import Rodape from "../componentes/rodape";
// import '../estilo/estilo.css';

// interface FormData {
//   name: string;
//   contact: string;
//   issue: string;
//   urgency: string;
// }

// function Chamado() {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     contact: '',
//     issue: '',
//     urgency: 'baixa',
//   });
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
    
//     try {
//       const response = await fetch('http://localhost:3000/chamados/cadastro', { // URL da API
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Erro ao enviar o chamado. Tente novamente.');
//       }

//       setFormSubmitted(true);
//       setError(''); // Limpa qualquer erro anterior
//     } catch (error: any) {
//       setError(error.message);
//     }
//   };

//   return (
//     <>
//       <Cabecalho2 />
//       <body className="BodyUsuario">
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
//         <Rodape />
//       </body>
//     </>
//   );
// }

// export default Chamado;


import React, { useState } from 'react';
import Cabecalho2 from "../componentes/cabecalho2";
import Rodape from "../componentes/rodape";
import '../estilo/estilo.css';
import { Link } from 'react-router-dom';

interface FormData {
  name: string;
  contact: string;
  issue: string;
  urgency: string;
}

function Chamado() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contact: '',
    issue: '',
    urgency: 'baixa',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/chamados/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response:', response); // Verifica a resposta da API

      if (!response.ok) {
        throw new Error('Erro ao enviar o chamado. Tente novamente.');
      }

      // Se a resposta for bem-sucedida, atualize o estado
      setFormSubmitted(true);
      setError(''); // Limpa qualquer erro anterior
      setFormData({ name: '', contact: '', issue: '', urgency: 'baixa' }); // Limpa o formulário
    } catch (error: any) {
      setError(error.message);
    }
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
                  <option value="alta">Celular</option>
                  <option value="media">Computador</option>
                  <option value="baixa">Tablet</option>
                  <option value="media">Notebook/Laptop</option>
                </select>
                <br />
                <button type="submit" className="botãoEnviarChamado">Enviar Chamado</button>
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
