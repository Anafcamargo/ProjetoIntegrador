import { useState } from "react";
import { Link } from "react-router-dom";

interface AlteraVoluntarioDTO {
  nome?: string;
  cpf?: string;
  dataNascimento?: string;
  email?: string;
  telefone?: string;
  endereco?: string;
  numero?: string;
  bairro?: string;
  senha?: string;
}

function Configuracao() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Criando o objeto de dados do voluntário
    const voluntarioData: AlteraVoluntarioDTO = {};

    if (nome) voluntarioData.nome = nome;
    if (cpf) voluntarioData.cpf = cpf;
    if (dataNascimento) voluntarioData.dataNascimento = dataNascimento;
    if (email) voluntarioData.email = email;
    if (telefone) voluntarioData.telefone = telefone;
    if (endereco) voluntarioData.endereco = endereco;
    if (numero) voluntarioData.numero = numero;
    if (bairro) voluntarioData.bairro = bairro;
    if (senha) voluntarioData.senha = senha;

    try {
      const userId = localStorage.getItem('userId'); // Recupera o ID do voluntário logado
      const response = await fetch(`http://localhost:3000/voluntarios/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(voluntarioData),
      });

      if (!response.ok) {
        throw new Error(`Erro ao atualizar dados: ${response.statusText}`);
      }

      console.log('Dados atualizados com sucesso!');
    } catch (error) {
      console.error('Erro:', error);
    }
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
          
        </form>
        <Link to="/telavoluntario"> <button  className="button-save-config">Salvar</button></Link>
      </div>
      
    </div>
    
  );
}

export default Configuracao;
