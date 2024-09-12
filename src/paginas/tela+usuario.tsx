import Cabecalho from "../componentes/cabecalho";

import React, { useState } from 'react';
import '../estilo/estilo.css'
import Cabecalho2 from "../componentes/cabecalho2";

function Teladeusuario() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <body className="BodyUsuario">
        <Cabecalho2/>
    <div className="containerTelaUsuario">
        
      {!formSubmitted ? (
        <>
          <h1 className="tesxtoinicalusuario">Bem-vindo ao Suporte Técnico</h1>
          <p>Preencha as informações abaixo para abrir um chamado:</p>
          
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required placeholder="Nome Completo" className="inputsUsuario" />

            <label htmlFor="contact" className="labelUsuario">Telefone:</label>
            <input type="text" id="contact" name="contact" required placeholder="( ) 99999-9999" className="inputsUsuario"/>

            <label htmlFor="issue" className="labelUsuario">Descreva o seu Problema:</label>
            <textarea id="issue" name="issue" rows= {5} required placeholder="Descreva o seu problema técnico de maneira simples e direta"></textarea>

            <label htmlFor="urgency" className="labelUsuario">Categorias:</label>
            <select id="urgency" name="urgency">
              <option value="baixa">Celular</option>
              <option value="media">Computador</option>
              <option value="alta">Tablet</option>
              <option value="baixa">Notebook/Laptop</option>
            </select>
            <br />
            <button type="submit" className="botãoEnviarChamado">Enviar Chamado</button>
          </form>
        </>
      ) : (
        <div id="confirmationMessage">
          <h2>Obrigado!</h2>
          <p>Seu chamado foi registrado com sucesso. Em breve um de nossos voluntarios entrará em contato com você.</p>
        </div>
      )}
    </div>
    </body>
  );
}

export default Teladeusuario;
