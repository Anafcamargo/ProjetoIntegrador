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
      onClick={scrollToTop} className="botaotopo"
      // style={{
      //   position: 'fixed',
      //   bottom: '20px',
      //   right: '10px',
      //   padding: '10px 20px',
      //   border: 'none',
      //   // borderRadius: '5px',
      //   // backgroundColor: '#007bff',
      //   // color: '#fff',
      //   cursor: 'pointer',
      //   fontSize: '16px',
      // }}
    >
      <img className='seta-cima-img' src="./seta-cima.gif" alt="" width="30px"  />
    
    </button>
   
  );
};

export default BackToTopButton;
