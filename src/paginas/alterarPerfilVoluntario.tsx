
// function alterarPerfilVoluntario (){
//     return(
//         <div className="profile-section">
//         <h2>Perfil</h2>
//         <br />
//         <img className='fotoperfil' src="OIP.png" alt=""
//             width= '70px' height='70px' />
//             <br />

//         <div className="profile-details">
//           <p>Nome: João da Silva</p>
//           <p>CPF: 123.456.789-01</p>
//           <p>Data de nascimento: 01/12/2001</p>
//           <p>Email: joao.silva@suporte.com</p>
//           <p>Telefone: 14 98888-9999</p>
//           <p>Endereço: R. vista</p>
//           <p>Número: 54-86</p>
//           <p>Bairro: Jardim Boa vista</p>
//         </div>
//       </div>
//     )
// }

import React, { useState, useEffect } from 'react';

const AlterarPerfilVoluntario: React.FC = () => {
  const [perfil, setPerfil] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    email: "",
    telefone: "",
    endereco: "",
    numero: "",
    bairro: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Função para buscar os dados do perfil ao montar o componente
    const fetchPerfil = async () => {
      try {
        const response = await fetch('http://localhost:3000/voluntarios/id'); // URL da API para obter os dados do perfil
        if (!response.ok) throw new Error('Erro ao buscar perfil');
        const data = await response.json();
        setPerfil(data);
      } catch (Error) {
        setError(error);
      }
    };

    fetchPerfil();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPerfil({ ...perfil, [name]: value });
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/perfil', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(perfil), // Enviando os dados atualizados
      });

      if (!response.ok) throw new Error('Erro ao atualizar perfil');

      const data = await response.json();
      setPerfil(data); // Atualiza o perfil com os dados retornados da API
      toggleEditing(); // Retorna ao modo de visualização
    } catch (Error) {
      setError(error);
    }
  };

  return (
    <div className="profile-section">
      <h2>Perfil Voluntário</h2>
      {error && <p className="error">{error}</p>}
      <img 
        className="fotoperfil" 
        src="OIP.png" 
        alt="Foto de perfil" 
        width="70" 
        height="70" 
      />
      
      {isEditing ? (
        <form onSubmit={handleSubmit} className="profile-details">
          <p>
            <strong>Nome:</strong>
            <input type="text" name="nome" value={perfil.nome} onChange={handleChange} />
          </p>
          <p>
            <strong>CPF:</strong>
            <input type="text" name="cpf" value={perfil.cpf} onChange={handleChange} />
          </p>
          <p>
            <strong>Data de Nascimento:</strong>
            <input type="date" name="dataNascimento" value={perfil.dataNascimento} onChange={handleChange} />
          </p>
          <p>
            <strong>Email:</strong>
            <input type="email" name="email" value={perfil.email} onChange={handleChange} />
          </p>
          <p>
            <strong>Telefone:</strong>
            <input type="text" name="telefone" value={perfil.telefone} onChange={handleChange} />
          </p>
          <p>
            <strong>Endereço:</strong>
            <input type="text" name="endereco" value={perfil.endereco} onChange={handleChange} />
          </p>
          <p>
            <strong>Número:</strong>
            <input type="text" name="numero" value={perfil.numero} onChange={handleChange} />
          </p>
          <p>
            <strong>Bairro:</strong>
            <input type="text" name="bairro" value={perfil.bairro} onChange={handleChange} />
          </p>
          <button type="submit">Salvar</button>
        </form>
      ) : (
        <div className="profile-details">
          <p><strong>Nome:</strong> {perfil.nome}</p>
          <p><strong>CPF:</strong> {perfil.cpf}</p>
          <p><strong>Data de Nascimento:</strong> {perfil.dataNascimento}</p>
          <p><strong>Email:</strong> {perfil.email}</p>
          <p><strong>Telefone:</strong> {perfil.telefone}</p>
          <p><strong>Endereço:</strong> {perfil.endereco}</p>
          <p><strong>Número:</strong> {perfil.numero}</p>
          <p><strong>Bairro:</strong> {perfil.bairro}</p>
          <button onClick={toggleEditing}>Editar</button>
        </div>
      )}
    </div>
  );
};

export default AlterarPerfilVoluntario;
