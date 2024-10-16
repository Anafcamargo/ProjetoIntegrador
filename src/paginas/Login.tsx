import React, { useState } from 'react';
import '../estilo/estilo2.css';
import { Link } from 'react-router-dom';
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleSignUp = () => {
    setIsActive(true);
  };

  const handleSignIn = () => {
    setIsActive(false);
  };

  return (

    <div>

      
    <div className='body2'>
    
    <div className={`containerlogin2 ${isActive ? 'active' : ''}`} id="container">
      {/* Formulário de Login deVoluntário */}
      <div className="form-containerlogin2 sign-up">
        <form>
          <h1>Login de Voluntário</h1>
                
          
          <input type="email" placeholder="Digite seu e-mail" />
          <input type="password" placeholder="Digite sua senha" />
          <Link to='/Esqueciasenha'>Esqueci minha senha</Link>
          <button type="button">Entrar</button>
        </form>
      </div>
      {/* Formulário de Login de Usuário */}
      <div className="form-containerlogin2">
        <form>
          <h1>Login de Usuário</h1>
              
          <input type="email" placeholder="Digite seu e-mail" />
          <input type="password" placeholder="Digite sua senha" />
          <Link to='/Esqueciasenha'>Esqueci minha senha</Link>
          <button type="button">Entrar</button>
        </form>
      </div>

      {/* Container de Alternância */}
      <div className="toggle-containerlogin2">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1 className='textologin2'>Você é Usuário?</h1>
            <p className='textologin2'>Clique no botão abaixo para entrar</p>
            <button id="login" onClick={handleSignIn}>Sou Usuário</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1 className='textologin2'>Você é Voluntário?</h1>
            <p className='textologin2'>Clique no botão abaixo para entrar</p>
            <button id="register" className='buttonloginvoluntario' onClick={handleSignUp}>Sou Voluntário</button> {/* Removida a classe hidden */}
          </div>
        </div>
      </div>
    </div>
    </div>

    < Rodape />
    </div>
  );
};

export default Login;
