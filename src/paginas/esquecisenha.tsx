// import React from 'react';
// import { Link } from 'react-router-dom';
// import Cabecalho2 from '../componentes/cabecalho2';
// import Rodape from '../componentes/rodape';
// import '../estilo/estilo.css'
// /*import './EsqueciSenha.css';*/

// const EsqueciSenha: React.FC = () => {
//     return (
//         <div>
//             <Cabecalho2/>
//      <div className='paies'>
        
//         <div className="esqueciasenha">
//           <h1>Esqueci a Senha</h1>
//             <p>Para recuperar sua senha, insira seu e-mail abaixo e clique em "Enviar".</p>
//             <form action="/reset-password" method="post">
//                 <label htmlFor="email">E-mail:</label>
//                 <input type="email" id="email" name="email" required /> <br /> <br />
//                <Link to="/login"> <input type="submit" value="Enviar" /> </Link>
//             </form>

            
//             <Link to='/login'><button className='button-back-password'>Voltar</button></Link>
            
//         </div>
        
//     </div>
//     <Link to="/*"> .</Link>
//     <Rodape/>
    
//     </div>
    
//     );
// }

// export default EsqueciSenha;


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cabecalho2 from '../componentes/cabecalho2';
import Rodape from '../componentes/rodape';
import '../estilo/estilo.css';

const EsqueciSenha: React.FC = () => {
    const navigate = useNavigate();

    const handleAlertAndRedirect = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const emailInput = document.getElementById("email") as HTMLInputElement;
        const email = emailInput.value; // Obtém o e-mail do formulário

        // Exibir alerta antes de redirecionar
        alert(`Um e-mail foi enviado para ${email}.`);
        
        // Redireciona para a página de login
        navigate('/login');
    };

    return (
        <div>
            <Cabecalho2 />
            <div className='paies'>
                <div className="esqueciasenha">
                    <h1>Esqueci a Senha</h1>
                    <p>Para recuperar sua senha, insira seu e-mail abaixo e clique em "Enviar".</p>
                    <form>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email" required /> <br /> <br />
                        <button 
                            type="button" 
                            onClick={handleAlertAndRedirect} 
                            className="button-enviar"
                        >
                            Enviar
                        </button>
                    </form>
                    
                    <Link to='/login'>
                        <button className='button-back-password'>Voltar</button>
                    </Link>
                </div>
            </div>
            <Rodape />
        </div>
    );
}

export default EsqueciSenha;
