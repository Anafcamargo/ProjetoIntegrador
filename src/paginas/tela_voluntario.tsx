import React, { useState } from 'react';
import Cabecalho2 from '../componentes/cabecalho2';
import Rodape from '../componentes/rodape';
import '../estilo/estilo.css';
import { Link } from 'react-router-dom';

interface Ticket {
  id: number;
  title: string;
  description: string;
  requesterName: string;
  requesterPhone: string;
}

function TelaVoluntario() {
  const [availableTickets, setAvailableTickets] = useState<Ticket[]>([
    { id: 1, title: 'Problema com conexão', description: 'Cliente não consegue se conectar à internet.', requesterName: 'Maria', requesterPhone: '11 99999-0000' },
    { id: 2, title: 'Impressora não funciona', description: 'Cliente reporta problemas na impressão de documentos.', requesterName: 'João', requesterPhone: '11 98888-1111' },
  ]);

  const [acceptedTickets, setAcceptedTickets] = useState<Ticket[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConclusionModalOpen, setIsConclusionModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [conclusionText, setConclusionText] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleAcceptTicket = (ticket: Ticket) => {
    setAcceptedTickets(prev => [...prev, ticket]);
    setAvailableTickets(prev => prev.filter(t => t.id !== ticket.id));
    setSuccessMessage(`Chamado "${ticket.title}" aceito com sucesso!`);
  };

  const handleReturnTicket = (ticket: Ticket) => {
    setAvailableTickets(prev => [...prev, ticket]);
    setAcceptedTickets(prev => prev.filter(t => t.id !== ticket.id));
    setSuccessMessage(`Chamado "${ticket.title}" aceito com sucesso!`);
    setTimeout(() => {
        setSuccessMessage('');
  }, 
    1000); // 3000 ms = 3 seconds
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
    console.log('Conclusão do chamado:', conclusionText);
    closeConclusionModal();
  };

  return (
    <>
      
      <div className="suporte-container">
        <div className="profile-section">
          
          <br />
          <div>Oi, João! Estamos felizes em tê-lo aqui! </div>
          <br />
          <div className="profile-details">

            
 
            <Link to='/alterarPerfilV'><button className='button-cfg'>Configurações</button></Link>
            <button className='button-chamadoconcluido'>Chamados Concluídos</button>
            <Link to='/Login'><button className='sairvoluntario'>Sair</button></Link>
          </div>
          <br />
        </div>

        <div className="tickets-section">
          <h2>Chamados Disponíveis</h2>
          {availableTickets.length > 0 ? (
            availableTickets.map(ticket => (
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

        <div className="accepted-section">
          <h2 className="tesxtoinicalusuario">Chamados Aceitos</h2>
          {acceptedTickets.length > 0 ? (
            acceptedTickets.map(ticket => (
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

        {successMessage && <p className="success-message">{successMessage}</p>}

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
          <div className="modal-overlay2" onClick={closeConclusionModal}>
            <div className="modal-content-conclude" onClick={(e) => e.stopPropagation()}>
              <h2>Descrição da Conclusão</h2>
              <textarea
                value={conclusionText}
                onChange={(e) => setConclusionText(e.target.value)}
                rows={15}
                placeholder="Descreva a conclusão do chamado aqui..."
                style={{ width: '95%' }}
              />
              <button onClick={handleSubmitConclusion}>Enviar</button>
              <button onClick={closeConclusionModal}>Fechar</button>
            </div>
          </div>
        )}
      </div>
      <Link to="/*"> .</Link>
      <Rodape />
      
    </>
  );
}

export default TelaVoluntario;
