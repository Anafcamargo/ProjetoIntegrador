// import React, { useState } from 'react';
// import '../estilo/estilo2.css';
// import { Link } from 'react-router-dom';
// import Cabecalho from '../componentes/cabecalho';
// import Rodape from '../componentes/rodape';

// const Login = () => {
//   const [isActive, setIsActive] = useState(false);

//   const handleSignUp = () => {
//     setIsActive(true);
//   };

//   const handleSignIn = () => {
//     setIsActive(false);
//   };

//   return (

//     <div>

      
//     <div className='body2'>
    
//     <div className={`containerlogin2 ${isActive ? 'active' : ''}`} id="container">
//       {/* Formulário de Login deVoluntário */}
//       <div className="form-containerlogin2 sign-up">
//         <form>
//           <h1>Login de Voluntário</h1>
                
          
//           <input type="email" placeholder="Digite seu e-mail" />
//           <input type="password" placeholder="Digite sua senha" />
//           <Link to='/Esqueciasenha'>Esqueci minha senha</Link>
//           <button type="button">Entrar</button>
//         </form>
//       </div>
//       {/* Formulário de Login de Usuário */}
//       <div className="form-containerlogin2">
//         <form>
//           <h1>Login de Usuário</h1>
              
//           <input type="email" placeholder="Digite seu e-mail" />
//           <input type="password" placeholder="Digite sua senha" />
//           <Link to='/Esqueciasenha'>Esqueci minha senha</Link>
//           <button type="button">Entrar</button>
//         </form>
//       </div>

//       {/* Container de Alternância */}
//       <div className="toggle-containerlogin2">
//         <div className="toggle">
//           <div className="toggle-panel toggle-left">
//             <h1 className='textologin2'>Você é Usuário?</h1>
//             <p className='textologin2'>Clique no botão abaixo para entrar</p>
//             <button id="login" onClick={handleSignIn}>Sou Usuário</button>
//           </div>
//           <div className="toggle-panel toggle-right">
//             <h1 className='textologin2'>Você é Voluntário?</h1>
//             <p className='textologin2'>Clique no botão abaixo para entrar</p>
//             <button id="register" className='buttonloginvoluntario' onClick={handleSignUp}>Sou Voluntário</button> {/* Removida a classe hidden */}
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>

//     < Rodape />
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';
import '../estilo/estilo2.css';

const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    setIsActive(true);
  };

  const handleSignIn = () => {
    setIsActive(false);
  };

  const handleLogin = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (!telefone || !senha || !email) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ telefone, senha, email }),
      });

      if (!response.ok) {
        throw new Error('Credenciais inválidas');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token); 
      navigate('/chamado'); 
    } catch (Error) {
      setError(error); // Define a mensagem de erro
    }
  };

  return (
    <div>
      <Cabecalho />
      <div className='body2'>
        <div className={`containerlogin2 ${isActive ? 'active' : ''}`} id="container">
          {/* Formulário de Login de Voluntário */}
          <div className="form-containerlogin2 sign-up">
            <form onSubmit={handleLogin}>
              <h1>Login de Voluntário</h1>
              {error && <p className="error">{error}</p>}
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <Link to='/Esqueciasenha'>Esqueci minha senha</Link>
              <Link to='/telavoluntario'> <button type="submit">Entrar</button> </Link>
            </form>
          </div>

          {/* Formulário de Login de Usuário */}
          <div className="form-containerlogin2">
            <form onSubmit={handleLogin}>
              <h1>Login de Usuário</h1>
              {error && <p className="error">{error}</p>}
              <input
                type="Telefone"
                placeholder="Digite seu telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
              <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <Link to='/Esqueciasenha'>Esqueci minha senha</Link>
              <Link to='/chamado'> <button type="submit">Entrar</button> </Link>
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
                <button id="register" className='buttonloginvoluntario' onClick={handleSignUp}>Sou Voluntário</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/*"> .</Link>
      <Rodape />
      
    </div>
  );
};

export default Login;

