// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { text } from "stream/consumers";
// import Cabecalho2 from "../componentes/cabecalho2";
// import Rodape from "../componentes/rodape";
// import "../estilo/estilo.css"

  

// function Cadastro() {

  
//   const [tipoCadastro, setTipoCadastro] = useState("usuario");

//   const handleTipoChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
//     setTipoCadastro(event.target.value);
//   };

//   return (
//     <><body className=" bodyCadastro">
//       <Cabecalho2/>

      
//       <div className="containerCadastro">
        
//         <h2 className="title">Cadastre-se</h2>

//         <div className="radioGroup">
          
//           <label className="radioLabel">
//             <input
//               type="radio"
//               value="usuario"
//               checked={tipoCadastro === "usuario"}
//               onChange={handleTipoChange}
//               className="radioInput" />
//             Usuário
//           </label>
//           <label className="radioLabelUsuario">
//             <input
//               type="radio"
//               value="voluntario"
//               checked={tipoCadastro === "voluntario"}
//               onChange={handleTipoChange}
//               className="radioInput" />
//             Voluntário
//           </label>
//         </div>

//         {tipoCadastro === "usuario" && (
//           <div className="formContainerUsuario">
//             <div>
              
//               <div className="formGroup">
//                 <label className="label">Nome Completo</label>
//                 <input type="text" placeholder="Digite seu nome completo" className="input" />
//               </div>
              
//               <div className="formGroup">
//                 <label className="label">Telefone</label>
//                 <input type="text" placeholder="Digite seu número de WhatsApp" className="input" />
//               </div>

//               <div className="formGroup">
//                 <label className="label">Senha</label>
//                 <input type= "text" placeholder="Digite sua senha" className="input" />
//               </div>

//               <button type="submit" className="button">
//                 Criar conta
//               </button>
              
//              <Link to='/login'><button className="back-button-cad">Voltar</button></Link>
//             </div>
//           </div>
//         )}

//         {tipoCadastro === "voluntario" && (
//           <div className="formContainer">
//             <div>
              
//               <div className="formGroup">
//                 <label className="label">Nome Completo</label>
//                 <input type="text" placeholder="Digite seu nome completo" className="input" />
//               </div>
              
//               <div className="formGroup">
//                 <label className="label">CPF</label>
//                 <input type="text" placeholder="Digite seu CPF" className="input" />
//               </div>
              
//               <div className="formGroup">
//                 <label className="label">Data de nascimento</label>
//                 <input type="date" className="input" />
//               </div>
              
//               <div className="formGroup">
//                 <label className="label">E-mail</label>
//                 <input type="email" placeholder="Digite seu e-mail" className="input" />
//               </div>
              
//               <div className="formGroup">
//                 <label className="label">Telefone</label>
//                 <input type="text" placeholder="Digite seu telefone" className="input" />
//               </div>
              
//               <div className="formGroup">
//                 <label className="label">Endereço</label>
//                 <input type="text" placeholder="Digite seu endereço" className="input" />
//               </div>
              
//               <div className="formGroup">
//                 <label className="label">Número</label>
//                 <input type="text" placeholder="Número" className="input" />
//               </div>
              
//               <div className="formGroup">
//                 <label className="label">Bairro</label>
//                 <input type="text" placeholder="Digite seu bairro" className="input" />
//               </div>

//               <div className="formGroup">
//                 <label className="label">Senha</label>
//                 <input type="text" placeholder="Digite sua senha" className="input" />
//               </div>

//               <button type="submit" className="button">
//                 Criar conta
//               </button>
//               <Link to='/login'><button className="back-button-cad2">Voltar</button></Link>
//             </div>
            
//           </div>
//         )}

//       </div> <br />
//       <br />


//     </body><Rodape /></>
    
    
//   );
// }
// export default Cadastro;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cabecalho2 from "../componentes/cabecalho2";
import Rodape from "../componentes/rodape";
import "../estilo/estilo.css";

function Cadastro() {
  const [tipoCadastro, setTipoCadastro] = useState("usuario");
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    cpf: "",
    dataNascimento: "",
    email: "",
    endereco: "",
    numero: "",
    bairro: "",
    senha: "",
  });
  const [error, setError] = useState("");

  const handleTipoChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setTipoCadastro(event.target.value);
    setFormData({
      nome: "",
      telefone: "",
      cpf: "",
      dataNascimento: "",
      email: "",
      endereco: "",
      numero: "",
      bairro: "",
      senha: "",
    });
  };

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // Validação básica
    if (!formData.nome || !formData.telefone || !formData.senha || 
        (tipoCadastro === "voluntario" && (!formData.cpf || !formData.email || !formData.endereco || !formData.numero || !formData.bairro))) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Requisição para a API de cadastro
    try {
      const response = await fetch('http://localhost:3000/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar conta');
      }

      const data = await response.json();
      console.log('Cadastro bem-sucedido:', data);
      // Redirecionar ou exibir uma mensagem de sucesso
    } catch (Error) {
      setError(error);
    }
  };

  return (
    <>
      <div className="bodyCadastro">
        <Cabecalho2 />
        <div className="containerCadastro">
          <h2 className="title">Cadastre-se</h2>
          {error && <p className="error">{error}</p>}
          <div className="radioGroup">
            <label className="radioLabel">
              <input
                type="radio"
                value="usuario"
                checked={tipoCadastro === "usuario"}
                onChange={handleTipoChange}
                className="radioInput"
              />
              Usuário
            </label>
            <label className="radioLabelUsuario">
              <input
                type="radio"
                value="voluntario"
                checked={tipoCadastro === "voluntario"}
                onChange={handleTipoChange}
                className="radioInput"
              />
              Voluntário
            </label>
          </div>

          <form onSubmit={handleSubmit}>
            {tipoCadastro === "usuario" && (
              <div className="formContainerUsuario">
                <div className="formGroup">
                  <label className="label">Nome Completo</label>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Digite seu nome completo"
                    className="input"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formGroup">
                  <label className="label">Telefone</label>
                  <input
                    type="text"
                    name="telefone"
                    placeholder="Digite seu número de WhatsApp"
                    className="input"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formGroup">
                  <label className="label">Senha</label>
                  <input
                    type="password"
                    name="senha"
                    placeholder="Digite sua senha"
                    className="input"
                    value={formData.senha}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                
                <Link to='/login'>
                <button type="submit" className="button">
                  Criar conta
                </button>
                </Link>
                <button type="button" className="back-button-cad">Voltar</button>
              </div>
            )}

            {tipoCadastro === "voluntario" && (
              <div className="formContainer">
                <div className="formGroup">
                  <label className="label">Nome Completo</label>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Digite seu nome completo"
                    className="input"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formGroup">
                  <label className="label">CPF</label>
                  <input
                    type="text"
                    name="cpf"
                    placeholder="Digite seu CPF"
                    className="input"
                    value={formData.cpf}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formGroup">
                  <label className="label">Data de Nascimento</label>
                  <input
                    type="date"
                    name="dataNascimento"
                    className="input"
                    value={formData.dataNascimento}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formGroup">
                  <label className="label">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    className="input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formGroup">
                  <label className="label">Telefone</label>
                  <input
                    type="text"
                    name="telefone"
                    placeholder="Digite seu telefone"
                    className="input"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formGroup">
                  <label className="label">Endereço</label>
                  <input
                    type="text"
                    name="endereco"
                    placeholder="Digite seu endereço"
                    className="input"
                    value={formData.endereco}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formGroup">
                  <label className="label">Número</label>
                  <input
                    type="text"
                    name="numero"
                    placeholder="Número"
                    className="input"
                    value={formData.numero}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formGroup">
                  <label className="label">Bairro</label>
                  <input
                    type="text"
                    name="bairro"
                    placeholder="Digite seu bairro"
                    className="input"
                    value={formData.bairro}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formGroup">
                  <label className="label">Senha</label>
                  <input
                    type="password"
                    name="senha"
                    placeholder="Digite sua senha"
                    className="input"
                    value={formData.senha}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                
                <Link to='/login'>
                <button type="submit" className="button">
                  Criar conta
                </button>
                </Link>
                <button type="button" className="back-button-cad2">Voltar</button>
              </div>
            )}
          </form>
        </div>
      </div>
      <Rodape />
    </>
  );
}

export default Cadastro;
