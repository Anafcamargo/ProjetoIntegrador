import Cabecalho from "../componentes/cabecalho";
import Logo from "./LogoRobo.png";
import Rodape from "../componentes/rodape";
import { Link } from "react-router-dom";


function Home(){
    return(
        <div>
 
                <Cabecalho />
                {/*--------Tela inicial--------*/}
            <div className="container-inicio">
            
                <div className="texto-apresentacao"> 
                     <div className="quadrado-esquerdo">
                            <h1 className="Titulo-apresentacao">Tecnologia Simplificada para Todos</h1>
                            <p> Um clique para um mundo de possibilidades: idosos conectados, voluntários engajados.  </p>                
                            <br />
                             <button className="buttoncadastro">   <Link to='/Cadastro'>Cadastre-se</Link>  </button> 
                          
                        </div>

                        <div className="imagem-apresentacao">
                            <img src="https://img.freepik.com/free-photo/grand-parent-learning-use-digital-divice_23-2149214555.jpg?t=st=1720306984~exp=1720310584~hmac=bb90fcda9af546d28ea2bba2c630514b0ff57a0d78f2866029437943fcc75b6f&w=740" alt=""/> 
                         </div>
                        
                </div> 
                    
            </div>

           <br/>

                    {/*--------Tela Como Funciona--------*/}

            <section id="comofunciona">
                <div className="como_funciona1"> 
                   <h1 className="titulo_cf"> Como Funciona? </h1> 

                    <p className="paragrafo_cf"> Conectamos voluntários de todo o país com pessoas que precisam de assistência tecnológica, oferecendo um suporte <br/> ágil e eficaz. 
                    Nossa plataforma é desenhada para ser simples e intuitiva, garantindo uma ótima experiência para todos.</p>
                    


                    <div className="opcoes_cf1"> 
                    
                        <div className="opcao_1"> 1.<strong> Cadastro de Voluntários:</strong> Pessoas com conhecimentos em tecnologia se inscrevem em nossa plataforma,
                          prontas para compartilhar suas habilidades e fazer a diferença. </div>
                          <br/>
                        <div className="opcao_2"> 2.<strong> Solicitação de Assistência:</strong> Usuários que precisam de suporte tecnológico descrevem suas necessidades em nossa plataforma, seja para solucionar problemas,
                           ou configurar equipamentos.</div>
                           <br/>

                    </div>

                        <br />

                    <div className="opcoes_cf2">
                        <div className="opcao_3"> 3.<strong> Match Inteligente: </strong>Utilizamos um sistema de pareamento que conecta os usuários aos voluntários mais qualificados e disponíveis, 
                            garantindo um atendimento personalizado e eficaz.</div>      
                             <br/>

                        <div className="opcao_4"> 4.<strong> Acompanhamento e Feedback:</strong> Após o atendimento, os usuários têm a oportunidade de avaliar a experiência e deixar feedback, 
                            ajudando-nos a manter a alta qualidade do serviço e a reconhecer os esforços dos voluntários.</div> 
                            <br/>   
                           
                    </div>
                            <br />

                           <div className="botao2cad"> <button className="botao_cad2">   <Link to='/Cadastro'>Cadastre-se</Link>  </button> </div>
                           
                            
                            <br />
                 </div>  
            </section>

                         {/*--------Tela Ranking--------*/}

            <section id="ranking">
                    <br />
                <div className="ranking1">
                    <h1 className="titulo_rk"> Ranking de Voluntários </h1>
                </div>
                  
            </section>

                    {/*--------Tela Quem Somos--------*/}

                <section id="quemsomos">
                    <h1 className="titulo_qs"> Quem Somos </h1>
                    
                    <div className="quemsomos0">

                                            {/*--------Esquerda--------*/}
                        <div className="quemsomos1">

                            <div className="opcao1_qs">  
                                <img src="./avatarm.png" alt="tyy" width="30px" height="30px"/>

                                <div className="giovane">
                                    <h3> Giovane Paulino Cintra </h3>
                                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia molestiae placeat, 
                                        harum commodi maiores, deleniti laudantium possimus perspiciatis eos fugit earum esse 
                                        voluptas necessitatibus nam sapiente quo odit! Atque, rem. </p>
                                </div>
                            
                            </div>

                            <div className="opcao2_qs">  
                                <img src="./avatarm.png" alt="tyy" width="30px" height="30px"/>

                                <div className="dablouan">
                                    <h3>Dablouan Silvio Gonçalves</h3>
                                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia molestiae placeat, 
                                        harum commodi maiores, deleniti laudantium possimus perspiciatis eos fugit earum esse 
                                        voluptas necessitatibus nam sapiente quo odit! Atque, rem. </p>
                                </div>
                            
                            </div>

                            <div className="opcao3_qs">  
                                 <img src="./ana.png" alt="tyy" width="60px" height="60px" /> 

                                <div className="ana">
                                    <h3>Ana Flávia Camargo</h3> 
                                    <p> Aos 25 anos começou a estudar no Senac no curso de Desenvolvedor Full-Stack,
                                        iniciando enfim o caminho para aprender sobre TI, 
                                        que levou a criação e desenvolvimento desse projeto. </p>
                                </div>
                            
                            </div>
                           
                            <button className="botao_cad2">   <Link to='/Cadastro'>Cadastre-se</Link>  </button> 
                        </div>
                        

                                                     {/*--------Direita--------*/}
                        <div className="quemsomos2">
                            <div className="opcao4_qs">  
                                <img src="./avatarm.png" alt="tyy" width="30px" height="30px"/>

                                <div className="vinicius">
                                    <h3>Vinicius A S. Del Ciello</h3>
                                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia molestiae placeat, 
                                        harum commodi maiores, deleniti laudantium possimus perspiciatis eos fugit earum esse 
                                        voluptas necessitatibus nam sapiente quo odit! Atque, rem. </p>
                                </div>
                            
                            </div>

                            <div className="opcao5_qs">  
                                <img src="./avatarm.png" alt="tyy" width="30px" height="30px"/>

                                <div className="nicolas">
                                    <h3>Nickolas da Silva Maciel</h3>
                                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia molestiae placeat, 
                                        harum commodi maiores, deleniti laudantium possimus perspiciatis eos fugit earum esse 
                                        voluptas necessitatibus nam sapiente quo odit! Atque, rem. </p>
                                </div>
                            
                            </div>

                            <div className="opcao6_qs">  
                                <img src="./avatarm.png" alt="tyy" width="30px" height="30px"/>

                                <div className="gabriel">
                                    <h3>Gabriel dos Santos Silva</h3>
                                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia molestiae placeat, 
                                        harum commodi maiores, deleniti laudantium possimus perspiciatis eos fugit earum esse 
                                        voluptas necessitatibus nam sapiente quo odit! Atque, rem. </p>
                                </div>
                            
                            </div>

                        </div>

                    </div>
                            
                    
                </section>
                        <br />



                         {/*--------Tela Faça seu Cadastro--------*/}

                     <div>
                        <h1 className="titulo_cd">Faça seu Cadastro </h1>
                        






                    </div>

            <Rodape/>
        </div>
    )
}

export default Home; 

