import { Link } from "react-router-dom";

function Rodape(){
    return(
        <footer >
        <div className="Rodape">
    
            
            

        
        <p className="rodapeT">© 2024 Chamaki | Todos os direitos reservados</p> 
       
        <div className="icone-ig"> <a href="https://www.instagram.com/" target={"_blank"}><img className="img-ig" src="Instagram.png" height={25}></img></a></div>
        <div className="icone-wpp"> <a href="https://www.whatsapp.com/" target={"_blank"}><img className="img-wpp" src="img-wpp.png" height={25}></img></a></div>
    

        </div>
        </footer>   
)
}

export default Rodape;