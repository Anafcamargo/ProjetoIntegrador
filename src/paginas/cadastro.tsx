import '../estilo/estilo.css'
import '../componentes/cabecalho'
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';

function Cadastro() {
  return (
    <div className='vocadastro'>
      <Cabecalho/>
      <div className='paicaixa'>
        <div className='caixadeselecao'> CADASTRO DE USÚARIO <input type="radio" name="usuario/voluntario" /></div>
        <div className='caixadeselecao2'> CADASTRO DE VOLUNTÁRIO <input type="radio" name="usuario/voluntario" /></div>
      </div>
      <div className='paicadastro'>

        <div><img src="https://cdn-icons-png.flaticon.com/512/675/675523.png" alt="" className='logocadastro' /></div>
        
        <div className='CadUsuario'>
          CADASTRO DE USUÁRIO <br />
          Nome Completo: <input type="text" placeholder="Insira seu nome" /> <br />
          CPF: <input type="number" placeholder="Insira seu CPF" /> <br />
          DATA DE NASCIMENTO: <input type="date" name="data" /> <br />
          EMAIL: <input type="email" placeholder="usuario@email.com" /> <br />
          TELEFONE: <input type="tel" id='telefone' placeholder="(xx) xxxxx-xxxx" /> <br />
          ENDEREÇO:  <input type="text" placeholder="Insira seu endereço" /> <br />
          <input type="submit" ></input>
        </div>

        <div className='CadVoluntario'>
          CADASTRO DE VOLUNTÁRIO <br />
          Nome Completo: <input type="text" placeholder="Insira seu nome" /> <br />
          CPF: <input type="number" placeholder="Insira seu CPF" /> <br />
          DATA DE NASCIMENTO: <input type="date" name="data" /> <br />
          EMAIL: <input type="email" placeholder="usuario@email.com" /> <br />
          TELEFONE: <input type="tel" id='telefone' placeholder="(xx) xxxxx-xxxx" /> <br />
          ENDEREÇO:  <input type="text" placeholder="Insira seu endereço" /> <br />
          BIOGRAFIA: <input type="text" placeholder="Escreva um ouco sobre você" className='CadBio'/>
          <input type="submit" ></input>
        </div>
        <Rodape/>
      </div>
    </div>
  )
}

export default Cadastro;

