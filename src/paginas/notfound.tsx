import { Link } from "react-router-dom";


function Notfound(){
    return(
        <div>

      <div className="notfound-container">
<img className="imgnotfound" src="not_found.png" />
</div>
    <div className="divbutton">
    <Link to='/'><button className="button_notfound">Voltar ao Início</button></Link>
    </div>

        </div>
    )
}

export default Notfound; 