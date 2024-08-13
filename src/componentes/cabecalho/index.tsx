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
            <div className="Ranking"> <a href="#ranking">Ranking</a> </div>
            <div className="QuemSomos"> <a href="#quemsomos">Quem Somos</a> </div>
            <div className="Cadastro"> <Link to='/Cadastro'>Cadastre-se</Link> </div>
            
         </div>   
         <button className="Login"> <Link to='/Login'>Login</Link> </button>
        
    
 

    </div>


)

}

export default Cabecalho;