import { useState } from "react";

function Configuracao() {
  const [nome, setNome] = useState("João da Silva");
  const [cpf, setCpf] = useState("123.456.789-01");
  const [dataNascimento, setDataNascimento] = useState("2001-12-01");
  const [email, setEmail] = useState("joao.silva@suporte.com");
  const [telefone, setTelefone] = useState("14 98888-9999");
  const [endereco, setEndereco] = useState("R. vista");
  const [numero, setNumero] = useState("54-86");
  const [bairro, setBairro] = useState("Jardim Boa Vista");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para salvar as alterações
    console.log({
      nome,
      cpf,
      dataNascimento,
      email,
      telefone,
      endereco,
      numero,
      bairro,
      senha,
    });
  };

  return (
    <div className="container-config">
      <div className="box-config">
        <form onSubmit={handleSubmit}>
          <div className="input-group-config">
            <label className="label-config" htmlFor="nome-config">Nome:</label>
            <input
              className="input-config"
              type="text"
              id="nome-config"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="input-group-config">
            <label className="label-config" htmlFor="cpf-config">CPF:</label>
            <input
              className="input-config"
              type="text"
              id="cpf-config"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
          <div className="input-group-config">
            <label className="label-config" htmlFor="dataNascimento-config">Data de Nascimento:</label>
            <input
              className="input-config"
              type="date"
              id="dataNascimento-config"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
            />
          </div>
          <div className="input-group-config">
            <label className="label-config" htmlFor="email-config">Email:</label>
            <input
              className="input-config"
              type="email"
              id="email-config"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group-config">
            <label className="label-config" htmlFor="telefone-config">Telefone:</label>
            <input
              className="input-config"
              type="text"
              id="telefone-config"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>
          <div className="input-group-config">
            <label className="label-config" htmlFor="endereco-config">Endereço:</label>
            <input
              className="input-config"
              type="text"
              id="endereco-config"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>
          <div className="input-group-config">
            <label className="label-config" htmlFor="numero-config">Número:</label>
            <input
              className="input-config"
              type="text"
              id="numero-config"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>
          <div className="input-group-config">
            <label className="label-config" htmlFor="bairro-config">Bairro:</label>
            <input
              className="input-config"
              type="text"
              id="bairro-config"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
          </div>
          <div className="input-group-config">
            <label className="label-config" htmlFor="senha-config">Alterar Senha:</label>
            <input
              className="input-config"
              type="password"
              id="senha-config"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <button type="submit" className="button-save-config">Salvar Alterações</button>
          
        </form>
      </div>
    </div>
  );
}

export default Configuracao;
