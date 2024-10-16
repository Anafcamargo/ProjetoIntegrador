import React from 'react';
import { Link } from 'react-router-dom';
import Cabecalho2 from '../componentes/cabecalho2';
import Rodape from '../componentes/rodape';
import '../estilo/estilo.css'
/*import './EsqueciSenha.css';*/

const EsqueciSenha: React.FC = () => {
    return (
        <div>
            <Cabecalho2/>
     <div className='paies'>
        
        <div className="esqueciasenha">
          <h1>Esqueci a Senha</h1>
            <p>Para recuperar sua senha, insira seu e-mail abaixo e clique em "Enviar".</p>
            <form action="/reset-password" method="post">
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" required /> <br /> <br />
                <input type="submit" value="Enviar" />
            </form>

            
            <Link to='/login'><button className='button-back-password'>Voltar</button></Link>
            
        </div>
        
    </div>
    <Link to="/*"> .</Link>
    <Rodape/>
    
    </div>
    
    );
}

export default EsqueciSenha;