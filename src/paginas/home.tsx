import { Swiper, SwiperSlide } from "swiper/react";
import Cabecalho from "../componentes/cabecalho";

function Home() {
  const data = [
    {
      id: "1",
      image: "ava1.png",
    },
    { id: "2", image: "ava2.png" },
    {
      id: "3",
      image: "ava1.png",
    },
    {
      id: "4",
      image: "ava2.png",
    },
  ];

  return (
    <div>
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
            <button className="buttoncadastro">Cadastre-se</button>
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
      <div className="como_funciona1">
        <h1 className="titulo_cf"> Como Funciona? </h1>
        <p className="paragrafo_cf">
          {" "}
          Conectamos voluntários de todo o país com pessoas que precisam de
          assistência tecnológica, oferecendo um suporte <br /> ágil e eficaz.
          Nossa plataforma é desenhada para ser simples e intuitiva, garantindo
          uma ótima experiência para todos.
        </p>
        <div className="opcoes_cf1">
          <div className="opcao_1">
            {" "}
            1.<strong> Cadastro de Voluntários:</strong> Pessoas com
            conhecimentos em tecnologia se inscrevem em nossa plataforma,
            prontas para compartilhar suas habilidades e fazer a diferença.{" "}
          </div>
          <br />
          <div className="opcao_2">
            {" "}
            2.<strong> Solicitação de Assistência:</strong> Usuários que
            precisam de suporte tecnológico descrevem suas necessidades em nossa
            plataforma, seja para solucionar problemas, ou configurar
            equipamentos.
          </div>
          <br />
        </div>
        <br />
        <br />{" "}
        <div className="opcoes_cf2">
          <div className="opcao_3">
            {" "}
            3.<strong> Match Inteligente: </strong>Utilizamos um sistema de
            pareamento que conecta os usuários aos voluntários mais qualificados
            e disponíveis, garantindo um atendimento personalizado e eficaz.
          </div>
          <br />
          <div className="opcao_4">
            {" "}
            4.<strong> Acompanhamento e Feedback:</strong> Após o atendimento,
            os usuários têm a oportunidade de avaliar a experiência e deixar
            feedback, ajudando-nos a manter a alta qualidade do serviço e a
            reconhecer os esforços dos voluntários.
          </div>
          <br />
        </div>
        <br />
        <br />
        <br />
        <div className="botao_cad2">
          {" "}
          <button className="buttoncadastro"> Cadastre-se </button>{" "}
        </div>
        <br />
      </div>
      {/*--------Tela Ranking--------*/}
      <br />
      <div className="ranking1">
        <h1 className="titulo_rk"> Ranking de Voluntários </h1>
        <br />
        Melhores avaliados <br />
        <br />
        <div> Voluntario 1 </div>
        <div> Voluntario 2</div>
        <div> Voluntario 3 </div>
        <div> Voluntario 4 </div>
        <div> Voluntario 5 </div>
        <br />
        <br />
        <div className="feedback1">
          <h1 className="titulo_fd"> Feedbacks dos serviços prestados </h1>
          <br />
        </div>
        <div className="Feedback">
          <br></br>
          <br></br>
          <br></br>
          <h1 className="titulo_fd"> Feedbacks </h1>
          <br />
          Feedbacks de usuarios
          <br />
          <div>teste 1</div>
          <br />
          <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.image} alt="slider" className="slide-item" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <br />
        {/*--------Tela Quem Somos--------*/}
        <div className="quemsomos1">
          <h1 className="titulo_qs"> Quem Somos </h1>
          <p className="texto_qs">
            Somos um grupo de estudantes de desenvolvimento de software do
            Senac, unidos pela paixão por tecnologia e pelo desejo de fazer a
            diferença na comunidade.
            <br />
            Durante nossas aulas, tivemos a ideia de criar um projeto que
            pudesse ir além da sala de aula e trazer benefícios reais para as
            pessoas.
            <br /> A cada passo do nosso projeto, buscamos aprender, crescer e
            contribuir positivamente para a sociedade. Com o apoio de nossos
            professores e colegas, desenvolvemos esta plataforma para promover a
            inclusão digital e facilitar a vida de quem precisa de suporte
            tecnológico.
            <br /> Estamos comprometidos em continuar aprimorando nossa
            iniciativa, sempre atentos às necessidades dos nossos usuários e
            voluntários. Acreditamos que, juntos, podemos construir um mundo
            mais conectado e inclusivo, onde a tecnologia é uma aliada para
            todos.
          </p>
          <br />
        </div>
        <br />
        {/*--------Tela Faça seu Cadastro--------*/}
        <div>
          <h1 className="titulo_cd">Faça seu Cadastro </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
