

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cabecalho2 from '../componentes/cabecalho2';
import Rodape from '../componentes/rodape';
import '../estilo/estilo2.css';
import { useUser } from '../componentes/UserContext';

const Login: React.FC = () => {
  const [telefone, setTelefone] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isVoluntario, setIsVoluntario] = useState(false);
  const navigate = useNavigate();
  const { login } = useUser();

  const handleToggle = () => {
    setIsVoluntario(!isVoluntario);
    setError(''); // Clear any previous error messages when toggling
  };

  const handleLoginUsuario = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!telefone || !senha) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ TELEFONE: telefone, SENHA: senha }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Credenciais inválidas');
      }

      const data = await response.json();
      login(data.token, data.IDUSUARIO);
      navigate('/chamado');
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleLoginVoluntario = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !senha) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/voluntarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ EMAIL: email, SENHA: senha }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = response.status === 401 
          ? 'Credenciais inválidas' 
          : errorData.message || 'Erro inesperado';
        throw new Error(errorMessage);
      }
  
      const data = await response.json();
      // login(data.token, data.voluntario.ID);
      navigate('/telavoluntario');
    } catch (error: any) {
      setError(error.message);
    } 
      
  };

  return (
    <div>
      <Cabecalho2 />
      <div className='body2'>
        <div className={`containerlogin2 ${isVoluntario ? 'active' : ''}`} id="container">
          
          {/* Formulário de Login de Voluntário */}
          {isVoluntario ? (
            <div className="form-containerlogin2 sign-up">
              <form onSubmit={handleLoginVoluntario}>
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
                <p>Não tem uma conta? <Link to='/cadastro'>Cadastre-se</Link></p>
                <button type="submit">Entrar</button>
              </form>
            </div>
          ) : (
            /* Formulário de Login de Usuário */
            <div className="form-containerlogin2">
              <form onSubmit={handleLoginUsuario}>
                <h1>Login de Usuário</h1>
                {error && <p className="error">{error}</p>}
                <input
                  type="text"
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
                <p>Não tem uma conta? <Link to='/cadastro'>Cadastre-se</Link></p>
                <button type="submit">Entrar</button>
              </form>
            </div>
          )}

          {/* Container de Alternância */}
          <div className="toggle-containerlogin2">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1 className='textologin2'>Você é Usuário?</h1>
                <p className='textologin2'>Clique no botão abaixo para entrar</p>
                <button id="login" onClick={handleToggle}>Sou Usuário</button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1 className='textologin2'>Você é Voluntário?</h1>
                <p className='textologin2'>Clique no botão abaixo para entrar</p>
                <button id="register" className='buttonloginvoluntario' onClick={handleToggle}>Sou Voluntário</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
};

export default Login;
