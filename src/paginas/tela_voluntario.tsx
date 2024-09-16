import React, { useState } from 'react';
import Cabecalho2 from '../componentes/cabecalho2';
import '../estilo/estilo.css';

// Interface do chamado
interface Ticket {
  id: number;
  title: string;
  description: string;
}

function TelaVoluntario() {
  // Chamados disponíveis e aceitos
  const [availableTickets, setAvailableTickets] = useState<Ticket[]>([
    { id: 1, title: 'Problema com conexão', description: 'Cliente não consegue se conectar à internet.' },
    { id: 2, title: 'Impressora não funciona', description: 'Cliente reporta problemas na impressão de documentos.' },
  ]);

  const [acceptedTickets, setAcceptedTickets] = useState<Ticket[]>([]);

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

  return (
    <><Cabecalho2 />
    
    <div className="suporte-container">
      {/* Perfil do usuário à esquerda */}
      <div className="profile-section">
        <h2>Perfil</h2>
        <div className="profile-details">
          <p>Nome: João da Silva</p>
          <p>Email: joao.silva@suporte.com</p>
        </div>
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
            </div>
          ))
        ) : (
          <p>Você ainda não aceitou nenhum chamado.</p>
        )}
      </div>
    </div></>
  );
}

export default TelaVoluntario;
