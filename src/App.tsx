import React from 'react';
import './estilo/estilo.css'
import Home from './paginas/home';
import {Routes, Route} from 'react-router-dom';
import Login from './paginas/Login';
import Notfound from './paginas/notfound';
import Cadastro from './paginas/cadastro';
import Tela_Usuario from './paginas/tela+usuario';
import Tela_Voluntario from './paginas/tela_voluntario';
import Esqueci_a_Senha from './paginas/esquecisenha';

function App() {
 
  return(
    <div>
       
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Login/Cadastro' element={<Cadastro/>}/>
        <Route path='*' element={<Notfound/>} />
        <Route path='/Cadastro' element={<Cadastro/>}/>
        <Route path='/Usuario' element={<Tela_Usuario/>}/>
        <Route path='/Voluntario' element={<Tela_Voluntario/>}/>
        <Route path='/EsqueciaSenha' element={<Esqueci_a_Senha/>}/>
      </Routes>
  
    </div> 
   )
 
  
 

}

   

export default App;
