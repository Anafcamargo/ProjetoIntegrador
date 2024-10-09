import React, { useState } from 'react';
import Cabecalho2 from '../componentes/cabecalho2';
import Rodape from '../componentes/rodape';
import '../estilo/estilo.css';

// Interface do chamado
interface Ticket {
  id: number;
  title: string;
  description: string;
  requesterName: string; // Nome do solicitante
  requesterPhone: string; // Telefone do solicitante
}

function TelaVoluntario() {
  // Chamados disponíveis e aceitos
  const [availableTickets, setAvailableTickets] = useState<Ticket[]>([
    { id: 1, title: 'Problema com conexão', description: 'Cliente não consegue se conectar à internet.', requesterName: 'Maria', requesterPhone: '11 99999-0000' },
    { id: 2, title: 'Impressora não funciona', description: 'Cliente reporta problemas na impressão de documentos.', requesterName: 'João', requesterPhone: '11 98888-1111' },
  ]);

  const [acceptedTickets, setAcceptedTickets] = useState<Ticket[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConclusionModalOpen, setIsConclusionModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [conclusionText, setConclusionText] = useState('');

  // Função para aceitar um chamado
  const handleAcceptTicket = (ticket: Ticket) => {
    setAcceptedTickets((prevAcceptedTickets) => [...prevAcceptedTickets, ticket]);
    setAvailableTickets((prevAvailableTickets) =>
      prevAvailableTickets.filter((t) => t.id !== ticket.id)
    );
  };

  // Função para devolver/cancelar o aceite de um chamado
  const handleReturnTicket = (ticket: Ticket) => {
    setAvailableTickets((prevAvailableTickets) => [...prevAvailableTickets, ticket]);
    setAcceptedTickets((prevAcceptedTickets) =>
      prevAcceptedTickets.filter((t) => t.id !== ticket.id)
    );
  };

  const openModal = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTicket(null);
  };

  const openConclusionModal = () => {
    setIsConclusionModalOpen(true);
  };

  const closeConclusionModal = () => {
    setIsConclusionModalOpen(false);
    setConclusionText('');
  };

  const handleSubmitConclusion = () => {
    console.log('Conclusão do chamado:', conclusionText); // Aqui você pode fazer algo com a conclusão
    closeConclusionModal();
  };

  return (
    <>
      <Cabecalho2 />
      <div className="suporte-container">
        {/* Perfil do usuário à esquerda */}
        <div className="profile-section">
          <h2>Perfil</h2>
          <br />
          <img className='fotoperfil' src="OIP.png" alt="" width='70px' height='70px' />
          <br />
          <div className="profile-details">
            <p>Nome: João da Silva</p>
            <p>CPF: 123.456.789-01</p>
            <p>Data de nascimento: 01/12/2001</p>
            <p>Email: joao.silva@suporte.com</p>
            <p>Telefone: 14 98888-9999</p>
            <p>Endereço: R. vista</p>
            <p>Número: 54-86</p>
            <p>Bairro: Jardim Boa vista</p>
            <button>Configurações</button>
          </div>
          <br />
        </div>

        {/* Chamados disponíveis */}
        <div className="tickets-section">
          <h2>Chamados Disponíveis</h2>
          {availableTickets.length > 0 ? (
            availableTickets.map((ticket) => (
              <div key={ticket.id} className="ticket-card">
                <h3>{ticket.title}</h3>
                <p>{ticket.description}</p>
                <button className='botãovoluntario' onClick={() => handleAcceptTicket(ticket)}>Aceitar Chamado</button>
              </div>
            ))
          ) : (
            <p className="ptelausuario">Sem chamados disponíveis.</p>
          )}
        </div>

        {/* Chamados aceitos */}
        <div className="accepted-section">
          <h2 className="tesxtoinicalusuario">Chamados Aceitos</h2>
          {acceptedTickets.length > 0 ? (
            acceptedTickets.map((ticket) => (
              <div key={ticket.id} className="ticket-card">
                <h3>{ticket.title}</h3>
                <p className="ptelausuario">{ticket.description}</p>
                <button className='botãovoluntario' onClick={() => handleReturnTicket(ticket)}>Devolver Chamado</button>
                <button className='botãoverchamado' onClick={() => openModal(ticket)}>Abrir</button>
              </div>
            ))
          ) : (
            <p>Você ainda não aceitou nenhum chamado.</p>
          )}
        </div>

        {/* Modal para visualizar chamado */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content-view" onClick={(e) => e.stopPropagation()}>
              <h2>{selectedTicket?.title}</h2>
              <p>{selectedTicket?.description}</p>
              <p><strong>Nome do Solicitante:</strong> {selectedTicket?.requesterName}</p>
              <p><strong>Telefone (WhatsApp):</strong> {selectedTicket?.requesterPhone}</p>
              <button className='buttonbackmodal' onClick={closeModal}>Sair</button>
              <button className='concluirchamado' onClick={openConclusionModal}>Concluir Chamado</button>
            </div>
          </div>
        )}

        {/* Modal para concluir chamado */}
        {isConclusionModalOpen && (
          <div className="modal-overlay" onClick={closeConclusionModal}>
            <div className="modal-content-conclude" onClick={(e) => e.stopPropagation()}>
              <h2>Descrição da Conclusão</h2>
              <textarea
                value={conclusionText}
                onChange={(e) => setConclusionText(e.target.value)}
                rows={15}
                placeholder="Descreva a conclusão do chamado aqui..."
                style={{ width: '100%' }}
              />
              <button onClick={handleSubmitConclusion}>Enviar</button>
              <button onClick={closeConclusionModal}>Fechar</button>
            </div>
          </div>
        )}
      </div>
      <Rodape />
    </>
  );
}

export default TelaVoluntario;
