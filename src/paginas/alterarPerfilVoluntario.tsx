
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
import { Link } from 'react-router-dom';

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
    cidade: "",
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
<div className='container-section2'>
    <div className="profile-section">
      <h2>Configurações de Perfil</h2>
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
            <div className='titulo-profile-section'>Nome</div>
            <input type="text" name="nome" value={perfil.nome} onChange={handleChange}className='input-personalizado' placeholder='Digite seu nome completo' />
          </p>
          <p>
            <div className='titulo-profile-section'>CPF</div>
            <input type="text" name="cpf" value={perfil.cpf} onChange={handleChange} className='input-personalizado' placeholder='Digite seu CPF' />
          </p>
          <p>
            <div className='titulo-profile-section'>Data de Nascimento</div>
            <input type="date" name="dataNascimento" value={perfil.dataNascimento} onChange={handleChange} className='input-personalizado' />
          </p>
          <p>
            <div className='titulo-profile-section'>Email</div>
            <input type="email" name="email" value={perfil.email} onChange={handleChange} className='input-personalizado' placeholder='Digite seu e-mail' />
          </p>
          <p>
            <div className='titulo-profile-section'>Telefone</div>
            <input type="text" name="telefone" value={perfil.telefone} onChange={handleChange} className='input-personalizado' placeholder='Digite seu telefone' />
          </p>
          <p>
            <div className='titulo-profile-section'>Endereço</div>
            <input type="text" name="endereco" value={perfil.endereco} onChange={handleChange} className='input-personalizado' placeholder='Digite seu endereço' />
          </p>
          <p>
            <div className='titulo-profile-section'>Número</div>
            <input type="text" name="numero" value={perfil.numero} onChange={handleChange} className='input-personalizado' placeholder='Digite o número da casa' />
          </p>
          <p>
            <div className='titulo-profile-section'>Bairro</div>
            <input type="text" name="bairro" value={perfil.bairro} onChange={handleChange} className='input-personalizado' placeholder='Digite o bairro' />
          </p>
          <p>
            <div className='titulo-profile-section'>Cidade</div>
            <input type="text" name="cidade" value={perfil.cidade} onChange={handleChange} className='input-personalizado' placeholder='Digite sua cidade' />
            

          </p>
        <div className='button-box'>
          <button className='salvarperfilvoluntario' type="submit">Salvar</button>
          <Link to='/telavoluntario'><button className='sairperfilvoluntario' type="submit">Sair</button></Link>
        </div>
        </form>
        
      ) : (
        <div className="profile-details">
          <p><div className='titulo-profile-section'>Nome</div> {perfil.nome}</p>
          <p><div className='titulo-profile-section'>CPF</div> {perfil.cpf}</p>
          <p><div className='titulo-profile-section'>Data de Nascimento</div> {perfil.dataNascimento}</p>
          <p><div className='titulo-profile-section'>Email</div> {perfil.email}</p>
          <p><div className='titulo-profile-section'>Telefone</div> {perfil.telefone}</p>
          <p><div className='titulo-profile-section'>Endereço</div> {perfil.endereco}</p>
          <p><div className='titulo-profile-section'>Número</div> {perfil.numero}</p>
          <p><div className='titulo-profile-section'>Bairro</div> {perfil.bairro}</p>
          <p><div className='titulo-profile-section'>Cidade</div> {perfil.cidade}</p>
          <button onClick={toggleEditing} className='button-cfg'>Editar</button>
        </div>
        
      )}
     
    </div>
</div>
  );
};

export default AlterarPerfilVoluntario;
