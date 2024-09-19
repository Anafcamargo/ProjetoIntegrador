import React, { useState } from "react";
import Cabecalho2 from "../componentes/cabecalho2";
import Rodape from "../componentes/rodape";
import "../estilo/estilo.css"

  

function Cadastro() {

  
  const [tipoCadastro, setTipoCadastro] = useState("usuario");

  const handleTipoChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setTipoCadastro(event.target.value);
  };

  return (
    <><body className=" bodyCadastro">
      <Cabecalho2/>

      
      <div className="containerCadastro">
        
        <h2 className="title">Cadastre-se</h2>

        <div className="radioGroup">
          
          <label className="radioLabel">
            <input
              type="radio"
              value="usuario"
              checked={tipoCadastro === "usuario"}
              onChange={handleTipoChange}
              className="radioInput" />
            Usuário
          </label>
          <label className="radioLabelUsuario">
            <input
              type="radio"
              value="voluntario"
              checked={tipoCadastro === "voluntario"}
              onChange={handleTipoChange}
              className="radioInput" />
            Voluntário
          </label>
        </div>

        {tipoCadastro === "usuario" && (
          <div className="formContainerUsuario">
            <div>
              
              <div className="formGroup">
                <label className="label">Nome Completo</label>
                <input type="text" placeholder="Digite seu nome completo" className="input" />
              </div>
              
              <div className="formGroup">
                <label className="label">Telefone</label>
                <input type="text" placeholder="Digite seu número de WhatsApp" className="input" />
              </div>

              <div className="formGroup">
                <label className="label">Senha</label>
                <input type="text" placeholder="Digite sua nova senha" className="input" />
              </div>

              <button type="submit" className="button">
                Criar conta
              </button>
            </div>
          </div>
        )}

        {tipoCadastro === "voluntario" && (
          <div className="formContainer">
            <div>
              
              <div className="formGroup">
                <label className="label">Nome Completo</label>
                <input type="text" placeholder="Digite seu nome completo" className="input" />
              </div>
              
              <div className="formGroup">
                <label className="label">CPF</label>
                <input type="text" placeholder="Digite seu CPF" className="input" />
              </div>
              
              <div className="formGroup">
                <label className="label">Data de nascimento</label>
                <input type="date" className="input" />
              </div>
              
              <div className="formGroup">
                <label className="label">E-mail</label>
                <input type="email" placeholder="Digite seu e-mail" className="input" />
              </div>
              
              <div className="formGroup">
                <label className="label">Telefone</label>
                <input type="text" placeholder="Digite seu telefone" className="input" />
              </div>
              
              <div className="formGroup">
                <label className="label">Endereço</label>
                <input type="text" placeholder="Digite seu endereço" className="input" />
              </div>
              
              <div className="formGroup">
                <label className="label">Número</label>
                <input type="text" placeholder="Número" className="input" />
              </div>
              
              <div className="formGroup">
                <label className="label">Bairro</label>
                <input type="text" placeholder="Digite seu bairro" className="input" />
              </div>

              <div className="formGroup">
                <label className="label">Senha</label>
                <input type="text" placeholder="Digite sua nova senha" className="input" />
              </div>

              <button type="submit" className="button">
                Criar conta
              </button>
            </div>
          </div>
        )}

      </div> <br />
      <br />


    </body><Rodape /></>
    
    
  );
}
export default Cadastro;