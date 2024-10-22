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

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Cabecalho from '../componentes/cabecalho';
// import Rodape from '../componentes/rodape';
// import '../estilo/estilo2.css';
// import Cabecalho2 from '../componentes/cabecalho2';

// const Login = () => {
//   const [isActive, setIsActive] = useState(false);
//   const [TELEFONE, setTELEFONE] = useState('');
//   const [EMAIL, setEmail] = useState('');
//   const [SENHA, setSenha] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSignUp = () => {
//     setIsActive(true);
//   };

//   const handleSignIn = () => {
//     setIsActive(false);
//   };

//   const handleLogin = async (event: { preventDefault: () => void; }) => {
//     event.preventDefault();

//     if (!TELEFONE || !SENHA || !EMAIL) {
//         setError('Por favor, preencha todos os campos.');
//         return;
//     }

//     try {
//         const response = await fetch('http://localhost:3000/login', { // Ajuste o endpoint
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ TELEFONE, SENHA, EMAIL }),
//         });

//         if (!response.ok) {
//             throw new Error('Credenciais inválidas');
//         }

//         const data = await response.json();
//         localStorage.setItem('token', data.token); // Armazena o token
//         navigate('/chamado'); // Redireciona após login
//     } catch (Error) {
//         setError(error); // Define a mensagem de erro
//     }
// };


//   return (
//     <div>
//       < Cabecalho2 />
//       <div className='body2'>
//         <div className={`containerlogin2 ${isActive ? 'active' : ''}`} id="container">
//           {/* Formulário de Login de Voluntário */}
//           <div className="form-containerlogin2 sign-up">
//             <form onSubmit={handleLogin}>
//               <h1>Login de Voluntário</h1>
//               {error && <p className="error">{error}</p>}
//               <input
//                 type="email"
//                 placeholder="Digite seu e-mail"
//                 value={EMAIL}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Digite sua senha"
//                 value={SENHA}
//                 onChange={(e) => setSenha(e.target.value)}
//               />
//               <Link to='/Esqueciasenha'>Esqueci minha senha</Link>
//               <p>Não tem uma conta? <Link to='/cadastro'>Cadastre-se</Link></p>
//               <Link to='/telavoluntario'> <button type="submit">Entrar</button> </Link>
//             </form>
//           </div>

//           {/* Formulário de Login de Usuário */}
//           <div className="form-containerlogin2">
//             <form onSubmit={handleLogin}>
//               <h1>Login de Usuário</h1>
//               {error && <p className="error">{error}</p>}
//               <input
//                 type="TELEFONE"
//                 placeholder="Digite seu telefone"
//                 value={TELEFONE}
//                 onChange={(e) => setTELEFONE(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Digite sua senha"
//                 value={SENHA}
//                 onChange={(e) => setSenha(e.target.value)}
//               />
//               <Link to='/Esqueciasenha'>Esqueci minha senha</Link>
//               <p>Não tem uma conta? <Link to='/cadastro'>Cadastre-se</Link></p>
//               <Link to='/chamado'> <button type="submit">Entrar</button> </Link>
//             </form>
//           </div>

//           {/* Container de Alternância */}
//           <div className="toggle-containerlogin2">
//             <div className="toggle">
//               <div className="toggle-panel toggle-left">
//                 <h1 className='textologin2'>Você é Usuário?</h1>
//                 <p className='textologin2'>Clique no botão abaixo para entrar</p>
//                 <button id="login" onClick={handleSignIn}>Sou Usuário</button>
//               </div>
//               <div className="toggle-panel toggle-right">
//                 <h1 className='textologin2'>Você é Voluntário?</h1>
//                 <p className='textologin2'>Clique no botão abaixo para entrar</p>
//                 <button id="register" className='buttonloginvoluntario' onClick={handleSignUp}>Sou Voluntário</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Link to="/*"> .</Link>
//       <Rodape />
      
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cabecalho2 from '../componentes/cabecalho2';
import Rodape from '../componentes/rodape';
import '../estilo/estilo2.css';
import { useUser } from '../componentes/UserContext';

const Login: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [TELEFONE, setTELEFONE] = useState<string>('');
  const [SENHA, setSenha] = useState<string>('');
  const [EMAIL, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const { login } = useUser();

  const handleSignUp = () => {
    setIsActive(true);
  };

  const handleSignIn = () => {
    setIsActive(false);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!TELEFONE || !SENHA) {
          setError('Por favor, preencha todos os campos.');
          return;
      }
      
      try {
          const response = await fetch('http://localhost:3000/usuarios/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ TELEFONE, SENHA }),
          });

          if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.message || 'Credenciais inválidas');
          }

          const data = await response.json();
          login(data.token, data.IDUSUARIO); // Chamando a função de login do contexto
          navigate('/chamado'); // Redireciona após login
      } catch (error: any) {
          setError(error.message);
      }
  };

  const handleVoluntarioLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!EMAIL || !SENHA) {
        setError('Por favor, preencha todos os campos.');
        return;
    }

    console.log('EMAIL:', EMAIL);
    console.log('SENHA:', SENHA);

    try {
        const response = await fetch('http://localhost:3000/voluntarios/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ EMAIL, SENHA }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Credenciais inválidas');
        }

        const data = await response.json();
        console.log('Dados do login:', data); // Adicione isto para ver a resposta
        login(data.token, data.voluntario.ID); // Use o ID do voluntário
        navigate('/telavoluntario');
    } catch (error: any) {
        console.error('Erro no login:', error);
        setError(error.message);
    }
};



  return (
    <div>
      <Cabecalho2 />
      <div className='body2'>
        <div className={`containerlogin2 ${isActive ? 'active' : ''}`} id="container">
          {/* Formulário de Login de Voluntário */}
          <div className="form-containerlogin2 sign-up">
            <form onSubmit={handleVoluntarioLogin}>
              <h1>Login de Voluntário</h1>
              {error && <p className="error">{error}</p>}
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={EMAIL}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Digite sua senha"
                value={SENHA}
                onChange={(e) => setSenha(e.target.value)}
              />
              <Link to='/Esqueciasenha'>Esqueci minha senha</Link>
              <p>Não tem uma conta? <Link to='/cadastro'>Cadastre-se</Link></p>
              <button type="submit">Entrar</button>
            </form>
          </div>

          {/* Formulário de Login de Usuário */}
          <div className="form-containerlogin2">
            <form onSubmit={handleLogin}>
              <h1>Login de Usuário</h1>
              {error && <p className="error">{error}</p>}
              <input
                type="text"
                placeholder="Digite seu telefone"
                value={TELEFONE}
                onChange={(e) => setTELEFONE(e.target.value)}
              />
              <input
                type="password"
                placeholder="Digite sua senha"
                value={SENHA}
                onChange={(e) => setSenha(e.target.value)}
              />
              <Link to='/Esqueciasenha'>Esqueci minha senha</Link>
              <p>Não tem uma conta? <Link to='/cadastro'>Cadastre-se</Link></p>
              <button type="submit">Entrar</button>
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


function setIsActive(arg0: boolean) {
  throw new Error('Function not implemented.');
}

