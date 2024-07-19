import React from 'react';
import './estilo/estilo.css'
import Home from './paginas/home';
import {Routes, Route} from 'react-router-dom';
import Login from './paginas/Login';
import Notfound from './paginas/notfound';
import Cadastro from './paginas/cadastro';


function App() {
 
  return(
    <div>
     
     
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='*' element={<Notfound/>} />
        <Route path='/cadastro' element={<Cadastro/>}/>
      </Routes>
 
     
      
     </div> 
   )
 
  
 

}

   

export default App;
