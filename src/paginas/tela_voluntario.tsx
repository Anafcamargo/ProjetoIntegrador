import React, { useEffect, useState } from 'react';
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
  conclusionDescription?: string; // Novo campo para descrição da conclusão
}

interface Voluntario {
  ID: string;
  NOME: string;
}

function TelaVoluntario() {
  const [availableTickets, setAvailableTickets] = useState<Ticket[]>([
    { id: 1, title: 'Problema com conexão', description: 'Não consigo conectar meu notebook à internet.', requesterName: 'Maria', requesterPhone: '11 99999-0000' },
    { id: 2, title: 'Impressora não funciona', description: 'Estou com problemas na impressora, não consigo imprimir meus documentos.', requesterName: 'João', requesterPhone: '11 98888-1111' },
  ]);

  const [acceptedTickets, setAcceptedTickets] = useState<Ticket[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConclusionModalOpen, setIsConclusionModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [conclusionText, setConclusionText] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [voluntario, setVoluntario] = useState<Voluntario | null>(null); // Adicionando estado para o voluntário
  const [completedTickets, setCompletedTickets] = useState<Ticket[]>([]); // Novo estado para os chamados concluídos
  const [isCompletedModalOpen, setIsCompletedModalOpen] = useState(false); // Modal para visualizar chamados concluídos


//   const CarregarVoluntarioLogado = async () => {
//     try {
//         const userId = localStorage.getItem('userId');
//         if (!userId) {
//             throw new Error('Usuário não está logado.');
//         }

//         const response = await fetch(`http://localhost:3000/voluntarios/${userId}`);
//         if (!response.ok) {
//             throw new Error(`Erro ao carregar voluntário: ${response.statusText}`);
//         }

//         return await response.json();
//     } catch (error) {
//         console.error('Erro:', error);
//         throw error;
//     }
// };


    

    // useEffect(() => {
    //     const buscarVoluntario = async () => {
    //         try {
    //             const voluntarioData = await CarregarVoluntarioLogado();
    //             setVoluntario(voluntarioData); // Atualiza o estado com os dados do voluntário
    //         } catch (error) {
    //             console.error('Erro ao carregar voluntário logado:', error);
    //         }
    //     };

    //     buscarVoluntario();
    // }, []);


  const handleAcceptTicket = (ticket: Ticket) => {
    setAcceptedTickets(prev => [...prev, ticket]);
    setAvailableTickets(prev => prev.filter(t => t.id !== ticket.id));
    setSuccessMessage(`Chamado "${ticket.title}" aceito com sucesso!`);

    // Mostrar a mensagem e removê-la após 3 segundos
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const handleReturnTicket = (ticket: Ticket) => {
    setAvailableTickets(prev => [...prev, ticket]);
    setAcceptedTickets(prev => prev.filter(t => t.id !== ticket.id));
    setSuccessMessage(`Chamado "${ticket.title}" devolvido com sucesso!`);
    
    // Mostrar a mensagem e removê-la após 3 segundos
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const openModal = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTicket(null);
  };

  // const openConclusionModal = () => {
  //   setIsConclusionModalOpen(true);
  // };

  // const closeConclusionModal = () => {
  //   setIsConclusionModalOpen(false);
  //   setConclusionText('');
  // };

  
//   const handleSubmitConclusion = () => {
//     if (selectedTicket) {
//         // Adiciona o chamado de volta para a lista de chamados disponíveis
//         setAvailableTickets(prev => [...prev, selectedTicket]);
        
//         // Remove o chamado da lista de chamados aceitos
//         setAcceptedTickets(prev => prev.filter(ticket => ticket.id !== selectedTicket.id));
        
//         // Limpa o texto da conclusão, fecha os modais e limpa o ticket selecionado
//         setConclusionText('');
//         setSelectedTicket(null);
//         setIsModalOpen(false);
//         closeConclusionModal();

//         // Exibe uma mensagem de sucesso
//         setSuccessMessage(`Chamado "${selectedTicket.title}" concluído com sucesso!`);

//         // Remove a mensagem de sucesso após 3 segundos
//         setTimeout(() => {
//             setSuccessMessage('');
//         }, 3000);
//     }
// console.log('Conclusão do chamado:', conclusionText);
    // closeConclusionModal();
// };

  
    

          // const handleSubmitConclusion = () => {
          //   if (selectedTicket) {
          //     // Adiciona o chamado aos chamados concluídos
          //     setCompletedTickets(prev => [...prev, selectedTicket]);
              
          //     // Remove o chamado da lista de chamados aceitos
          //     setAcceptedTickets(prev => prev.filter(ticket => ticket.id !== selectedTicket.id));
              
          //     // Limpa o texto da conclusão e fecha os modais
          //     setConclusionText('');
          //     setSelectedTicket(null);
          //     setIsModalOpen(false);
          //     closeConclusionModal();
        
          //     setSuccessMessage(`Chamado "${selectedTicket.title}" concluído com sucesso!`);
        
          //     setTimeout(() => setSuccessMessage(''), 3000);
          //   }
          // };

          const handleSubmitConclusion = () => {
            if (selectedTicket) {
              const ticketWithConclusion = {
                ...selectedTicket,
                conclusionDescription: conclusionText, // Adiciona a descrição da conclusão
              };
          
              setCompletedTickets(prev => [...prev, ticketWithConclusion]);
              setAcceptedTickets(prev => prev.filter(ticket => ticket.id !== selectedTicket.id));
              setConclusionText('');
              setSelectedTicket(null);
              setIsModalOpen(false);
              closeConclusionModal();
              setSuccessMessage(`Chamado "${selectedTicket.title}" concluído com sucesso!`);
              setTimeout(() => setSuccessMessage(''), 3000);
            }
          };
        
          const openConclusionModal = () => {
            setIsConclusionModalOpen(true);
          };
        
          const closeConclusionModal = () => {
            setIsConclusionModalOpen(false);
            setConclusionText('');
          };
        
          // // Abre o modal para visualizar chamados concluídos
          // const openCompletedModal = (ticket: Ticket) => {
          //   setSelectedTicket(ticket);
          //   setIsCompletedModalOpen(true);
          // };

          const openCompletedModal = () => {
            setIsCompletedModalOpen(true);
          };
        
          const closeCompletedModal = () => {
            setIsCompletedModalOpen(false);
            setSelectedTicket(null);
          };

  return (
    <>
      <div className="suporte-container">
        <div className="profile-section">
          <br />
          <div>Oi, {voluntario ? voluntario.NOME : 'Voluntário '}! Estamos felizes em tê-lo aqui!</div>
          <br />
          <div className="profile-details">
            <Link to='/alterarPerfilV'><button className='button-cfg'>Configurações</button></Link>
            <button className="button-chamadoconcluido" onClick={() => openCompletedModal()}>Chamados Concluídos</button>
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

        {/* Mensagem de sucesso */}
        {successMessage && (
          <p className={`success-message ${successMessage ? 'show' : ''}`}>
            {successMessage}
          </p>
        )}

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

              {isCompletedModalOpen && (
                <div className="modal-overlay" onClick={closeCompletedModal}>
                  <div className="modal-content-view" onClick={(e) => e.stopPropagation()}>
                    <h2>Chamados Concluídos</h2>
                    {completedTickets.length > 0 ? (
                      completedTickets.map(ticket => (
                        <div key={ticket.id} className="ticket-card">
                          <h3>{ticket.title}</h3>
                          <p>{ticket.description}</p>
                          <p><strong>Nome do Solicitante:</strong> {ticket.requesterName}</p>
                          <p><strong>Telefone (WhatsApp):</strong> {ticket.requesterPhone}</p>
                          <p><strong>Descrição da Conclusão:</strong> {ticket.conclusionDescription}</p> {/* Exibe a descrição da conclusão */}
                        </div>
                      ))
                    ) : (
                      <p>Nenhum chamado concluído.</p>
                    )}
                    <button onClick={closeCompletedModal}>Fechar</button>
                  </div>
                </div>
              )}

              {isConclusionModalOpen && (
                <div className="modal-overlay" onClick={closeConclusionModal}>
                  <div className="modal-content-conclude" onClick={(e) => e.stopPropagation()}>
                    <h2>Descrição da Conclusão</h2>
                    <textarea
                      value={conclusionText}
                      onChange={(e) => setConclusionText(e.target.value)}
                      rows={5}
                      placeholder="Descreva a conclusão do chamado..."
                    />
                    <button onClick={handleSubmitConclusion}>Enviar</button>
                    <button onClick={closeConclusionModal}>Fechar</button>
                  </div>
                </div>
              )}

              {successMessage && <p className="success-message">{successMessage}</p>}
          
            
  
      </div>
      <Link to="/*"> .</Link>
      <Rodape />
    </>
  );
}

export default TelaVoluntario;
