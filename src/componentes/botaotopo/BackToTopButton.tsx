import React from 'react';

// Função para rolar a página para o topo
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Adiciona um efeito suave ao rolar
  });
};

const BackToTopButton: React.FC = () => {
  return (
    
    <button 
      onClick={scrollToTop} className="botaotopo">
      <img className='seta-cima-img' src="./seta-cima.gif" alt="" width="30px"  />
    
    </button>
   
  );
};

export default BackToTopButton;
