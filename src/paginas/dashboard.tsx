import Cabecalho from "../componentes/cabecalho";

function Dashboard(){
    return(

        
<div className="painel-container">
      <div className="painel-header">
        
  </div>

      <div className="cartoes">
        {/* Cartão Total de Chamados */}
        <div className="cartao">
          <div className="cabecalho-cartao">
            <h2>Total de Chamados</h2>
            <span className="total">108</span>
          </div>
          <ul className="lista-chamados">
            <li>
              <span>Computador travando</span>
              <span>Claudio Godoy</span>
              <span>17/05/2024</span>
              <button className="status">Abrir</button>
            </li>
            <li>
              <span>Impressora não imprime</span>
              <span>Olimpio Santos</span>
              <span>14/05/2024</span>
              <button className="status">Abrir</button>
            </li>
            <li>
              <span>Acessar meu INSS</span>
              <span>Maria Augusta</span>
              <span>11/05/2024</span>
              <button className="status">Abrir</button>
            </li>
            <li>
              <span>Quero boleto CPFL</span>
              <span>Irene Barbosa</span>
              <span>08/05/2024</span>
              <button className="status">Abrir</button>
            </li>
            <li>
              <span>Trocar foto whatsapp</span>
              <span>Mocair Teixeira</span>
              <span>08/05/2024</span>
              <button className="status">Abrir</button>
            </li>
          </ul>
          <div className="ver-mais">
            <a href="#">Ver mais</a>
          </div>
        </div>

        {/* Cartão Total Atribuído a Você */}
        <div className="cartao">
          <div className="cabecalho-cartao">
            <h2>Total Atribuído a você</h2>
            <span className="total">5</span>
          </div>
          <ul className="lista-chamados">
            <li>
              <span>Elizabeth Jarussi</span>
              <span>14 99601-1674 (WhatsApp)</span>
              <button className="contato">Abrir</button>
            </li>
            <li>
              <span>Eduardo Cunha</span>
              <span>14 99879-1020 (WhatsApp)</span>
              <button className="contato">Abrir</button>
            </li>
            <li>
              <span>Angelica Aparecida</span>
              <span>14 98714-1445 (WhatsApp)</span>
              <button className="contato">Abrir</button>
            </li>
            <li>
              <span>Aparecida de Jesus</span>
              <span>14 94154-4110 (WhatsApp)</span>
              <button className="contato">Abrir</button>
            </li>
            <li>
              <span>Maria de Lurdes</span>
              <span>14 95414-1210 (WhatsApp)</span>
              <button className="contato">Abrir</button>
            </li>
          </ul>
          <div className="ver-mais">
            <a href="#">Ver mais</a>
          </div>
        </div>
      </div>
    </div>

        
    )
}

export default Dashboard; 