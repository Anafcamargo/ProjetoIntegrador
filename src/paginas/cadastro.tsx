// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Cabecalho2 from "../componentes/cabecalho2";
// import Rodape from "../componentes/rodape";
// import "../estilo/estilo.css";
// import { Moduloapi } from "../types/api";

// function Cadastro() {
//   const [tipoCadastro, setTipoCadastro] = useState("usuario");
//   const [formData, setFormData] = useState({
//     nome: "",
//     telefone: "",
//     cpf: "",
//     Nascimento: "", 
//     email: "",
//     endereco: "",
//     numero: "",
//     bairro: "",
//     cidade: "",
//     senha: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); // Para redirecionar após o sucesso

//   const handleTipoChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
//     setTipoCadastro(event.target.value);
//     setFormData({
//       nome: "",
//       telefone: "",
//       cpf: "",
//       Nascimento: "",
//       email: "",
//       endereco: "",
//       numero: "",
//       bairro: "",
//       cidade: "",
//       senha: "",
//     });
//   };

//   const handleChange = (event: { target: { name: any; value: any; }; }) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   const HandleAddUsuario = async () => {
//     try {
//         const json = await Moduloapi.CadastrarUsuario(formData.nome, formData.telefone, formData.senha);

//         // Verifica se a resposta contém um ID
//         if (json.id) {
//             alert('Usuário criado com sucesso: ' + json.id);
//             navigate('/login'); // Redireciona após sucesso
//         } else {
//             alert('Falha ao inserir usuário: ' + json.message);
//         }
//     } catch (error) {
//         alert('Erro: ' + (error instanceof Error ? error.message : 'Erro desconhecido'));
//     }
// };



//   const HandleAddVoluntario = async () => {
//     const Nascimento = new Date(formData.Nascimento); // Converte aqui

//     if (isNaN(Nascimento.getTime())) {
//       alert("Data de nascimento inválida.");
//       return;
//     }
//     const NascimentoTimestamp = Nascimento.getTime();

//     let json = await Moduloapi.CadastrarVoluntario(
//       formData.nome,
//       formData.cpf,
//       NascimentoTimestamp,
//       formData.email,
//       formData.telefone,
//       formData.endereco,
//       formData.numero,
//       formData.bairro,
//       formData.cidade,
//       formData.senha,
//     );

//     if (json.id) {
//       alert('Voluntário Criado com sucesso ' + json.id);
//       navigate('/login'); 
//     } else {
//       alert('Falha ao inserir voluntário. ' + json.message);
//     }
//   };

//   const handleSubmit = async (event: { preventDefault: () => void; }) => {
//     event.preventDefault();

//     // Validação básica
//     if (!formData.nome || !formData.telefone || !formData.senha || 
//       (tipoCadastro === "voluntario" && (!formData.cpf || !formData.email || !formData.endereco || !formData.numero || !formData.bairro || !formData.cidade))) {
//     setError("Por favor, preencha todos os campos obrigatórios.");
//     return;
//   }

//   try {
//     if (tipoCadastro === "usuario") {
//       await HandleAddUsuario();
//     } else {
//       await HandleAddVoluntario();
//     }
//   } catch (error) {
//     setError(error instanceof Error ? error.message : 'Erro desconhecido');
//   }
// };

//   return (
//     <>
//       <div className="bodyCadastro">
//         <Cabecalho2 />
//         <div className="containerCadastro">
//           <h2 className="title">Cadastre-se</h2>
//           {error && <p className="error">{error}</p>}
//           <div className="radioGroup">
//             <label className="radioLabel">
//               <input
//                 type="radio"
//                 value="usuario"
//                 checked={tipoCadastro === "usuario"}
//                 onChange={handleTipoChange}
//                 className="radioInput"
//               />
//               Usuário
//             </label>
//             <label className="radioLabelUsuario">
//               <input
//                 type="radio"
//                 value="voluntario"
//                 checked={tipoCadastro === "voluntario"}
//                 onChange={handleTipoChange}
//                 className="radioInput"
//               />
//               Voluntário
//             </label>
//           </div>

//           <form onSubmit={handleSubmit}>
//             {tipoCadastro === "usuario" && (
//               <div className="formContainerUsuario">
//                 <div className="formGroup">
//                   <label className="label">Nome Completo</label>
//                   <input
//                     type="text"
//                     name="nome"
//                     placeholder="Digite seu nome completo"
//                     className="input"
//                     value={formData.nome}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="formGroup">
//                   <label className="label">Telefone</label>
//                   <input
//                     type="text"
//                     name="telefone"
//                     placeholder="Digite seu número de WhatsApp"
//                     className="input"
//                     value={formData.telefone}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="formGroup">
//                   <label className="label">Senha</label>
//                   <input
//                     type="password"
//                     name="senha"
//                     placeholder="Digite sua senha"
//                     className="input"
//                     value={formData.senha}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <button type="submit" onClick={HandleAddUsuario} className="button">
//                   Criar conta
//                 </button>
//                 <Link to='/'><button type="button" className="back-button-cad">Voltar</button></Link>
//               </div>
//             )}

//             {tipoCadastro === "voluntario" && (
//               <div className="formContainer">
//                 <div className="formGroup">
//                   <label className="label">Nome Completo</label>
//                   <input
//                     type="text"
//                     name="nome"
//                     placeholder="Digite seu nome completo"
//                     className="input"
//                     value={formData.nome}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="formGroup">
//                   <label className="label">CPF</label>
//                   <input
//                     type="text"
//                     name="cpf"
//                     placeholder="Digite seu CPF"
//                     className="input"
//                     value={formData.cpf}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="formGroup">
//                   <label className="label">Data de Nascimento</label>
//                   <input
//                     type="date"
//                     name="Nascimento"
//                     className="input"
//                     value={formData.Nascimento}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="formGroup">
//                   <label className="label">E-mail</label>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Digite seu e-mail"
//                     className="input"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="formGroup">
//                   <label className="label">Telefone</label>
//                   <input
//                     type="text"
//                     name="telefone"
//                     placeholder="Digite seu telefone"
//                     className="input"
//                     value={formData.telefone}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="formGroup">
//                   <label className="label">Endereço</label>
//                   <input
//                     type="text"
//                     name="endereco"
//                     placeholder="Digite seu endereço"
//                     className="input"
//                     value={formData.endereco}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="formGroup">
//                   <label className="label">Número</label>
//                   <input
//                     type="text"
//                     name="numero"
//                     placeholder="Número"
//                     className="input"
//                     value={formData.numero}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="formGroup">
//                   <label className="label">Bairro</label>
//                   <input
//                     type="text"
//                     name="bairro"
//                     placeholder="Digite seu bairro"
//                     className="input"
//                     value={formData.bairro}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="formGroup">
//                   <label className="label">Cidade</label>
//                   <input
//                     type="text"
//                     name="cidade"
//                     placeholder="Digite seu cidade"
//                     className="input"
//                     value={formData.cidade}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="formGroup">
//                   <label className="label">Senha</label>
//                   <input
//                     type="password"
//                     name="senha"
//                     placeholder="Digite sua senha"
//                     className="input"
//                     value={formData.senha}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <button type="submit" onClick={HandleAddVoluntario} className="button">
//                   Criar conta
//                 </button>
//                 <Link to='/'><button type="button" className="back-button-cad2">Voltar</button></Link>
//               </div>
//             )}
//           </form>
//         </div>
//         <Rodape />
//       </div>
//     </>
//   );
// }

// export default Cadastro;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cabecalho2 from "../componentes/cabecalho2";
import Rodape from "../componentes/rodape";
import "../estilo/estilo.css";
import { Moduloapi } from "../types/api";

function Cadastro() {
  const [tipoCadastro, setTipoCadastro] = useState("usuario");
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    cpf: "",
    Nascimento: "", 
    email: "",
    endereco: "",
    numero: "",
    bairro: "",
    cidade: "",
    senha: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleTipoChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setTipoCadastro(event.target.value);
    setFormData({
      nome: "",
      telefone: "",
      cpf: "",
      Nascimento: "",
      email: "",
      endereco: "",
      numero: "",
      bairro: "",
      cidade: "",
      senha: "",
    });
  };

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitUsuario = async () => {
    try {
      const json = await Moduloapi.CadastrarUsuario(formData.nome, formData.telefone, formData.senha);
      if (json.id) {
        alert('Usuário criado com sucesso: ' + json.id);
        navigate('/login');
      } else {
        alert('Falha ao inserir usuário: ' + json.message);
      }
    } catch (error) {
      alert('Erro: ' + (error instanceof Error ? error.message : 'Erro desconhecido'));
    }
  };

  const handleSubmitVoluntario = async () => {
    const Nascimento = new Date(formData.Nascimento);
    if (isNaN(Nascimento.getTime())) {
      alert("Data de nascimento inválida.");
      return;
    }
    const NascimentoTimestamp = Nascimento.getTime();

    try {
      const json = await Moduloapi.CadastrarVoluntario(
        formData.nome,
        formData.cpf,
        NascimentoTimestamp,
        formData.email,
        formData.telefone,
        formData.endereco,
        formData.numero,
        formData.bairro,
        formData.cidade,
        formData.senha,
      );

      if (json.id) {
        alert('Voluntário Criado com sucesso ' + json.id);
        navigate('/login');
      } else {
        alert('Falha ao inserir voluntário. ' + json.message);
      }
    } catch (error) {
      alert('Erro: ' + (error instanceof Error ? error.message : 'Erro desconhecido'));
    }
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (!formData.nome || !formData.telefone || !formData.senha || 
      (tipoCadastro === "voluntario" && (!formData.cpf || !formData.email || !formData.endereco || !formData.numero || !formData.bairro || !formData.cidade))) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setError(""); // Clear any previous errors

    if (tipoCadastro === "usuario") {
      await handleSubmitUsuario();
    } else {
      await handleSubmitVoluntario();
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
                
                <button type="submit" className="button">
                  Criar conta
                </button>
                <Link to='/'><button type="button" className="back-button-cad">Voltar</button></Link>
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
                    name="Nascimento"
                    className="input"
                    value={formData.Nascimento}
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
                  <label className="label">Cidade</label>
                  <input
                    type="text"
                    name="cidade"
                    placeholder="Digite seu cidade"
                    className="input"
                    value={formData.cidade}
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

                <button type="submit" className="button">
                  Criar conta
                </button>
                <Link to='/'><button type="button" className="back-button-cad2">Voltar</button></Link>
              </div>
            )}
          </form>
        </div>
        <Rodape />
      </div>
    </>
  );
}

export default Cadastro;
