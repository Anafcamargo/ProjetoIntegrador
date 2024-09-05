/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./estilo/estilo.css";
import Home from "./paginas/home";
import { Routes, Route } from "react-router-dom";
import Login from "./paginas/Login";
import Notfound from "./paginas/notfound";
import Cadastro from "./paginas/cadastro";
import Tela_Usuario from "./paginas/tela+usuario";
import Tela_Voluntario from "./paginas/tela_voluntario";
import { register } from "swiper/element/bundle";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import EsqueciSenha from "./paginas/esquecisenha";


register();

function App() {
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Login/Cadastro" element={<Cadastro />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Usuario" element={<Tela_Usuario />} />
        <Route path="/Voluntario" element={<Tela_Voluntario />} />
        <Route path = '/EsqueciaSenha' element={ < EsqueciSenha /> } />
        <Route path = '/TelaUsuario' element={ <Tela_Usuario/> } />
        <Route path = '/TelaVoluntario' element={ <Tela_Voluntario/> } />  
      </Routes>
   
    </div>
  );
}

export default App;
