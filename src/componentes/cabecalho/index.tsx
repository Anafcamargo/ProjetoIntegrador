import { Link } from "react-router-dom";
import '../../estilo/estilo.css'

function Cabecalho(){

 
    return(
    <div className="cabecalho">
            <img src="logo2.png" alt=""
            width= '60px' height='60px' /> 
                
         <div className="NomeEmpresa"> <Link to="/">CHAMAKI  Tecnology</Link> </div> 
            
          
         
        <div className="container"> 
         
           <div className="ComoFunciona"> <a href="#comofunciona">Como Funciona</a> </div> 
            <div className="QuemSomos"> <a href="#quemsomos">Quem Somos</a> </div>
            <div className="Cadastro"> <Link to='/cadastro'>Cadastre-se</Link> </div>
            
         </div>   
         <Link to='/login'><button className="Login"> Login </button></Link>
        
    
 

    </div>


)

}

export default Cabecalho;