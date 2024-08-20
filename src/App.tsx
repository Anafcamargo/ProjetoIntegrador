import React from "react";
import "./estilo/estilo.css";
import Home from "./paginas/home";
import { Routes, Route } from "react-router-dom";
import Login from "./paginas/Login";
import Notfound from "./paginas/notfound";
import Cadastro from "./paginas/cadastro";
import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Login/Cadastro" element={<Cadastro />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </div>
  );
}

export default App;
