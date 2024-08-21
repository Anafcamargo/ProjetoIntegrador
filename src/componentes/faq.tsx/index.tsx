import React, { useState } from "react";
import { Link } from "react-router-dom";

// FAQ como componente separado
interface FAQItemProps {
  question: string;
  answer: string;
  isActive: boolean;
  toggleAccordion: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isActive, toggleAccordion }) => {
  return (
    <div className="card">
      <div className={`card-header ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
        <button
          aria-expanded={isActive}
          className="btn btn-link"
        >
          <div className="question-faq">{question}</div>
          <span>{isActive ? '−' : '+'}</span>
        </button>
      </div>
      {isActive && (
        <div className="collapse show">
          <div className="card-body">{answer}</div>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveId(prevIndex => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "Qual a qualificação dos voluntários que prestam assistência na plataforma?",
      answer: "Os voluntários podem registrar suas qualificações em seus perfis dentro da nossa plataforma. Assim, os usuários podem visualizá-las antes de aceitar a ajuda de um voluntário. Isso garante que você escolha o melhor suporte técnico para suas necessidades.",
    },
    {
      question: "Como posso reportar um problema técnico após receber assistência?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      question: "Quanto tempo leva para um voluntário responder à minha solicitação?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
  ];

  return (
    <div className="container faq-container">
      <div className="titlex center">
        <div className="titulo-faq">Perguntas Frequentes</div>
        <p>A resposta para suas dúvidas pode estar aqui!</p>
      </div>
      
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isActive={activeId === index}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;