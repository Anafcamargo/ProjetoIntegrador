function Rodape() {
    return (
        <footer className="rodape">
            <div className="rodape-container">
                <div className="rodape-logo">
                    <img src="logo2.png" alt="Logo" />
                </div>
                <div className="rodape-info">
                    <h1>Sobre Nós</h1>
                    <p>Somos uma empresa comprometida com a excelência e inovação.</p>
                </div>
                <div className="rodape-links">
                    <h2>Links Úteis (PRECISA ALTERAR AS INFOS ABAIXO)</h2>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>
                <div className="rodape-contato">
                    <h2>Contato</h2>
                    <p>Email: contato@exemplo.com</p>
                    <p>Telefone: (11) 1234-5678</p>
                </div>
            </div>
            <div className="rodape-bottom">
                <p>© 2024 Sua Empresa. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Rodape;