import { Link } from "react-router-dom";
import '../../estilo/estilo.css'

function Cabecalho2(){

 
    return(
    <div className="cabecalho">
            <img src="logo2.png" alt=""
            width= '60px' height='60px' /> 
                
         <div className="NomeEmpresa"> <Link to="/">CHAMAKI  Tecnology</Link> </div>  
    
     </div>


)

}

export default Cabecalho2;