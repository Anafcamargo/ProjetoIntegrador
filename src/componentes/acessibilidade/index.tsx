import React, { useState } from 'react';
import '../../estilo/estilo.css';

const Acessibilidade = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [fonteMaior, setFonteMaior] = useState(false);
    const [altoContraste, setAltoContraste] = useState(false);
    const [modoLeitura, setModoLeitura] = useState(false);

    // Funções de acessibilidade
    const toggleFonte = () => {
        setFonteMaior(!fonteMaior);
        document.body.style.fontSize = !fonteMaior ? '1.2em' : '1em';
    };

    const toggleContraste = () => {
        setAltoContraste(!altoContraste);
        if (!altoContraste) {
            document.body.classList.add('alto-contraste');
        } else {
            document.body.classList.remove('alto-contraste');
        }
    };

    const toggleModoLeitura = () => {
        setModoLeitura(!modoLeitura);
        if (!modoLeitura) {
            document.body.classList.add('modo-leitura');
        } else {
            document.body.classList.remove('modo-leitura');
        }
    };

    return (
        <div className="acessibilidade-container">
            <button
                className="acessibilidade-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Abrir opções de acessibilidade"
            >
                ♿
            </button>
            {isOpen && (
                <div className="acessibilidade-dropdown">
                    <button onClick={toggleFonte}>
                        {fonteMaior ? 'Reduzir Fonte' : 'Aumentar Fonte'}
                    </button>
                    <button onClick={toggleContraste}>
                        {altoContraste ? 'Desativar Contraste' : 'Ativar Contraste Alto'}
                    </button>
                    <button onClick={toggleModoLeitura}>
                        {modoLeitura ? 'Desativar Modo Leitura' : 'Ativar Modo Leitura'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Acessibilidade;
