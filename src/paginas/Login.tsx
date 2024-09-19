import { Link } from "react-router-dom";
import Cabecalho from "../componentes/cabecalho";
import Cabecalho2 from "../componentes/cabecalho2";
import Rodape from "../componentes/rodape";

function Login(){
    return(
<div>

<Cabecalho2/>
    
  <div className="container-login">

  


     <div className="container-login-box">
     

      <h2>Login</h2>
      <form>
           <div className="input-group">
           <label htmlFor="email">E-mail</label>
          <input className="imputsLogin" type="email" id="email" placeholder="Digite seu e-mail aqui" /> 
          </div>
           
           <div className="input-group">
           <label htmlFor="password">Senha</label>
          <input className="imputloginsenha" type="password" id="password" placeholder="Digite sua senha aqui" /> 
           </div>

           

      <button type="submit" className="login-button">Login</button>

      </form>

          <div className="login-footer">
          <a href = " Esqueciasenha " className = "forgot-password" > Esqueci minha senha </ a>
          <p>Não tem uma conta? <Link to='/Cadastro' className="register-link">Cadastre-se</Link></p>
          </div>     
         
         

        <div>
           
        <Link to='/'><button className="back-button">Voltar</button></Link>
        </div>
          
     </div>
      
      
  

  
  </div>
 <Rodape/>
</div>
    )
}

export default Login; 
