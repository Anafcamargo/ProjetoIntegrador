import Cabecalho from "../componentes/cabecalho";
import Logo from "./LogoRobo.png";
import Rodape from "../componentes/rodape";
import { Link } from "react-router-dom";
import FAQ from "../componentes/faq.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import BackToTopButton from '../componentes/botaotopo/BackToTopButton';

function Home() {
  const data = [
    {
      id: "1",
      image: "ava1.png",
    },
    { id: "2", image: "ava2.png" },
    {
      id: "3",
      image: "ava3.png",
    },
    {
      id: "4",
      image: "ava4.png",
    },
  ];


  const ranking = [
    {
      id: "1R",
      image: "ranking1.png",
    },
    { id: "2R", image: "ranking2.png" },
    {
      id: "3R",
      image: "ranking3.png",
    },
    {
      id: "4R",
      image: "ranking1.png",
    },
  ];

  return (
    <div>
       <BackToTopButton />
      <Cabecalho />
      {/*--------Tela inicial--------*/}
      <div className="container-inicio">
        <div className="texto-apresentacao">
          <div className="quadrado-esquerdo">
            <h1 className="Titulo-apresentacao">
              Tecnologia Simplificada para Todos
            </h1>
            <p>
              {" "}
              Um clique para um mundo de possibilidades: idosos conectados,
              voluntários engajados.{" "}
            </p>
            <br />
            <Link to="/Cadastro">
              {" "}
              <button className="buttoncadastro"> Cadastre-se </button>{" "}
            </Link>
          </div>

          <div className="imagem-apresentacao">
            <img
              src="https://img.freepik.com/free-photo/grand-parent-learning-use-digital-divice_23-2149214555.jpg?t=st=1720306984~exp=1720310584~hmac=bb90fcda9af546d28ea2bba2c630514b0ff57a0d78f2866029437943fcc75b6f&w=740"
              alt=""
            />
          </div>
        </div>
      </div>

      <br />

      {/*--------Tela Como Funciona--------*/}

      <section id="comofunciona">
        <div className="como_funciona1">
          <h1 className="titulo_cf"> Como Funciona? </h1> <br />
          {/* Adicionando o Painel de Vídeo */}
          <div className="video-panel">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ygLM6jZ4pFY?si=_bG41fjANQOnBIzo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/*--------Tela Ranking--------*/}
    <div className="container-ranking">
      
      
      <Swiper
  slidesPerView={2}
  pagination={{ clickable: true }}
  navigation
  autoplay={{ delay: 4000, disableOnInteraction: false }} // Autoplay a cada 3 segundos
>
  {ranking.map((item) => (
    <SwiperSlide key={item.id}>
      <div className="slide-ranking">
        <img src={item.image} alt="slide-ranking" className="slide-ranking-item" />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

         
      </div>
 

      {/*--------Tela Quem Somos--------*/}

      <section id="quemsomos">
        <h1 className="titulo_qs"> Quem Somos </h1>

        <div className="quemsomos0">
          {/*--------Esquerda--------*/}
          <div className="quemsomos1">
            <div className="opcao1_qs">
              <img src="./Giovane.png" alt="tyy" width="60px" height="60px" />

              <div className="giovane">
                <h3> Giovane Paulino Cintra </h3>

                <p>
                  {" "}
                  Gosta de explorar novas experiências no mundo dos games. A
                  música é outra de suas grandes paixões, sempre em busca de
                  novas descobertas e sonoridades. No campo da tecnologia, se
                  mantém atualizado e engajado com as inovações mais recentes.
                  Essa combinação de interesses molda sua vida, refletindo sua
                  busca constante por aprendizado e evolução.{" "}
                </p>
              </div>
            </div>

            <div className="opcao2_qs">
              <img src="./Dablouan.png" alt="tyy" width="60px" height="60px" />

              <div className="dablouan">
                <h3>Dablouan Silvio Gonçalves</h3>
                <p>
                  {" "}
                  Aos 23 anos, iniciou no curso de Desenvolver Full-Stack no
                  Senac na cidade de Bauru, com o intuito de entrar na carreira
                  de T.I, onde participou na criação dese projeto para auxiliar
                  pobremas na área de TI para idosos e outros.
                </p>
              </div>
            </div>

            <div className="opcao3_qs">
              <img src="./ana.png" alt="tyy" width="60px" height="60px" />

              <div className="ana">
                <h3>Ana Flávia Camargo</h3>
                <p>
                  {" "}
                  Com uma paixão por livros, musica e tecnologia, aos 25 anos
                  iniciou o curso no Senac, seguindo finalmente o caminho para
                  aprender sobre T.I, que levou a criação e desenvolvimento
                  desse projeto.{" "}
                </p>
              </div>
            </div>
            {/* <Link to='/Cadastro'> <button className="botao_cad2">   Cadastre-se </button> </Link>
             */}
          </div>

          {/*--------Direita--------*/}
          <div className="quemsomos2">
            <div className="opcao4_qs">
              <img src="./Vini.png" alt="tyy" width="60px" height="60px" />

              <div className="vinicius">
                <h3>Vinicius A S. Del Ciello</h3>
                <p>
                  {" "}
                  Aos 28 anos, tem uma paixão por viagens e dedica parte do seu
                  tempo como voluntário em projetos de proteção animal.{" "}
                </p>
              </div>
            </div>

            <div className="opcao5_qs">
              <img src="./Nicolas.png" alt="tyy" width="60px" height="60px" />

              <div className="nicolas">
                <h3>Nickolas da Silva Maciel</h3>
                <p>
                  {" "}
                  Desde pequeno sempre se identificou com a área de T.I, mais
                  tarde se interessou por programação, então aos 19 anos iniciou
                  no curso do Senac em Bauru, com o intuito de desenvolver suas
                  habilidades de programação e ingressar nessa carreira de
                  programador. Durante o curso, participou de projetos e
                  atividades em grupo que agregaram ao seu conhecimento.{" "}
                </p>
              </div>
            </div>

            <div className="opcao6_qs">
              <img src="./Gabriel.png" alt="tyy" width="60px" height="60px" />

              <div className="gabriel">
                <h3>Gabriel dos Santos Silva</h3>
                <p>
                  {" "}
                  Aos 19 anos decidiu seguir carreira na área de Tecnologia da
                  Informação e se matriculou no curso oferecido pelo Senac em
                  Bauru. Durante o curso, se envolveu em um projeto que tinha
                  como foco auxiliar idosos e outras pessoas a solucionarem
                  problemas relacionados à tecnologia.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />

    <div className="form">
    <h2 className="titulo_cd">Faça seu Cadastro</h2>
    <div className="Facaseucadastro">   
            <div className="Qrservoluntario">
                <h2>Quero ser Voluntário</h2>
                <img src="volunter.png"/>
                <p className="paragrafo_cd">Compartilhe seu conhecimento tecnologico <br />
                    para fazer a diferença na comunidade.</p>
                    <Link to='/Cadastro'><button className="button-cad">Clique aqui</button></Link>
        </div>
        <div className="Obtajuda">
            <h2>Solicitar ajuda</h2>
            <img src="old.png" />
            <p className="paragrafo_cd">Obtenha suporte tecnológico personalizado <br />
                e gratuito para suas necessidades.</p>


            <Link to='/Cadastro'><button className="button-cad">Clique aqui</button></Link>
        </div>
    </div> 
</div>    
      <div className="Feedback">
        <br></br>
        <br></br>
        <br></br>
        <h1 className="titulo_fd"> Feedbacks dos serviços prestados </h1>
        <br />
        <br />

        <Swiper
  slidesPerView={2}
  pagination={{ clickable: true }}
  navigation
  autoplay={{ delay: 4000, disableOnInteraction: false }} // Autoplay a cada 3 segundos
>
  {data.map((item) => (
    <SwiperSlide key={item.id}>
      <div className="div-slide">
        <img src={item.image} alt="slider" className="slide-item" />
      </div>
    </SwiperSlide>
  ))}
</Swiper>
        <br/><br/><br/>
      </div>
      <br />
      <br />
      {/*--------FAQ--------*/}

      <div className="container-faq">
        <div className="girlquestion">
          <img src="girlquestion.png" className="img-girlquestion"></img>
        </div>

        <FAQ />
      </div>
      <br />
      <Rodape/>
    </div>

    
  );
}

export default Home;
