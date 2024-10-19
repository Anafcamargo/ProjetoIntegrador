import React, { FormEvent, useState } from 'react';
import Cabecalho2 from "../componentes/cabecalho2";
import Rodape from "../componentes/rodape";
import '../estilo/estilo.css';
import { Link, useNavigate } from 'react-router-dom';
import { Moduloapi } from '../types/api';
import { useUser } from '../componentes/UserContext'; // Importando o contexto

interface FormData {
  name: string;
  contact: string;
  issue: string;
  urgency: string;
  
}

interface ChamadoResponse {
  id: string; // ou o tipo apropriado
  message: string;
}

export function Chamado() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contact: '',
    issue: '',
    urgency: 'baixa',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Para redirecionar após o sucesso
  const { userId, setUserId } = useUser(); // Usando o contexto

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const verificarUsuario = async (usuarioId: string) => {
    const response = await fetch(`http://localhost:3000/usuario/${usuarioId}`);
    const usuario = await response.json();
    return usuario.id !== undefined; // Retorna true se o usuário existe
  };

  const HandleAddChamado = async () => {
    if (!userId) {
      alert('Usuário não está logado.');
      return;
    }

    const usuarioId = userId; // Usando o ID do usuário do contexto
    const voluntarioId = '67890'; // Exemplo, se aplicável

    const usuarioExiste = await verificarUsuario(usuarioId);

    if (!usuarioExiste) {
      alert('Usuário não encontrado. Não é possível cadastrar o chamado.');
      return;
    }

    try {
      const json = await Moduloapi.CadastrarChamado(
        formData.name,
        formData.contact,
        formData.issue,
        formData.urgency,
        usuarioId,
        
      );

      if (json.id) {
        alert('Chamado criado com sucesso: ' + json.id);
        setFormSubmitted(true); // Atualiza o estado para indicar que o formulário foi enviado
      } else {
        alert('Falha ao inserir chamado. ' + json.message);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  async function CadastrarChamado(
    nome: string,
    telefone: string,
    descricao: string,
    categoria: string,
    usuarioId: string
): Promise<{ id: string; message: string }> {
    try {
        const response = await fetch("http://localhost:3000/chamados/cadastro", {
            method: 'POST',
            body: JSON.stringify({
                NOME: nome,
                TELEFONE: telefone,
                DESCRICAO: descricao,
                CATEGORIA: categoria,
                IDUSUARIO: usuarioId,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao cadastrar chamado');
        }

        const jsonResponse = await response.json();
        return jsonResponse; // Espera que a resposta tenha { id, message }
    } catch (error) {
        throw new Error('Erro ao cadastrar chamado: ' + error);
    }
}



  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      <Cabecalho2 />
      <div className="BodyUsuario">
        <div className="containerTelaUsuario">
          {!formSubmitted ? (
            <>
              <h1 className="tesxtoinicalusuario">Bem-vindo ao Suporte Técnico</h1>
              <p className="ptelausuario">Preencha as informações abaixo para abrir um chamado:</p>
              {error && <p className="error">{error}</p>} {/* Mensagem de erro */}

              <form onSubmit={handleSubmit}>
                <h2 className="tesxtoinicalusuario">
                  <label htmlFor="name" className="labelUsuario">Nome:</label>
                </h2>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Nome Completo"
                  className="inputsUsuario"
                  value={formData.name}
                  onChange={handleChange}
                />

                <h2 className="tesxtoinicalusuario">
                  <label htmlFor="contact" className="labelUsuario">Telefone:</label>
                </h2>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  required
                  placeholder="( ) 99999-9999"
                  className="inputsUsuario"
                  value={formData.contact}
                  onChange={handleChange}
                />

                <h2 className="tesxtoinicalusuario">
                  <label htmlFor="issue" className="labelUsuario">Descreva o seu Problema:</label>
                </h2>
                <textarea
                  id="issue"
                  name="issue"
                  rows={5}
                  required
                  placeholder="Descreva o seu problema técnico de maneira simples e direta"
                  className="inputsUsuario"
                  onChange={handleChange}
                  value={formData.issue}
                />

                <h2 className="tesxtoinicalusuario">
                  <label htmlFor="urgency" className="labelUsuario">Categorias:</label>
                </h2>
                <select
                  id="urgency"
                  name="urgency"
                  className="inputsUsuario"
                  value={formData.urgency}
                  onChange={handleChange}
                >
                  <option value="alta">Problema com o celular</option>
                  <option value="media">Problema com o computador</option>
                  <option value="baixa">Problema com o tablet</option>
                  <option value="media">Problema com o notebook</option>
                  <option value="media">Outro problema</option>
                </select>
                <br />
                <button type="submit" className="botãoEnviarChamado">Registrar Chamado</button>
              </form>
            </>
          ) : (
            <div id="confirmationMessage">
              <h2>Obrigado!</h2>
              <p className="ptelausuario">Seu chamado foi registrado com sucesso. Em breve um de nossos voluntários entrará em contato com você.</p>
            </div>
          )}
        </div>
        <Link to="/*"> .</Link>
        <Rodape />
      </div>
    </>
  );
}

export default Chamado;


function CadastrarChamado(_dados: { NOME: string; TELEFONE: string; DESCRICAO: string; CATEGORIA: string;usuarioId:string; }) {
  throw new Error('Function not implemented.');
}

