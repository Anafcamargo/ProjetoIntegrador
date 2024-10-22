/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./estilo/estilo.css";
import Home from "./paginas/home";
import { Routes, Route } from "react-router-dom";
import Login from "./paginas/Login";
import Notfound from "./paginas/notfound";
import Cadastro from "./paginas/cadastro";
import Tela_Usuario from "./paginas/chamado";
import Tela_Voluntario from "./paginas/tela_voluntario";
import { register } from "swiper/element/bundle";
import EsqueciSenha from "./paginas/esquecisenha";
import Chamado from "./paginas/chamado";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProtectedRoute from './componentes/ProtectedRoute';
import { HashRouter as Router } from "react-router-dom";
import Configuracao from "./paginas/configuracao";
import AlterarPerfilVoluntario from "./paginas/alterarPerfilVoluntario";

export function App2() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/Cadastro" element={<Cadastro />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/usuario" element={<Tela_Usuario />} />
        <Route path="/voluntario" element={<Tela_Voluntario />} />
        <Route path="/esqueciasenha" element={<EsqueciSenha />} />
        <Route path="/chamado" element={<Chamado />} />
        <Route path="/telavoluntario" element={<Tela_Voluntario />} />
    
      </Routes>
    </Router>
  );
}

register();

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/Cadastro" element={<Cadastro />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/usuario" element={<Tela_Usuario />} />
        <Route path="/voluntario" element={<Tela_Voluntario />} />
        <Route path="/esqueciasenha" element={<EsqueciSenha />} />
        <Route path="/chamado" element={<Chamado />} />
        <Route path="/telavoluntario" element={<Tela_Voluntario />} />
        <Route path="/configuracao" element={<Configuracao />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chamado" element={ <Chamado /> } />
        <Route path="/alterarPerfilV" element={<AlterarPerfilVoluntario />} />
      </Routes>
    </div>
  );
}

export default App;
