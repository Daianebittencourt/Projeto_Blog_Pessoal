import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Footer from "./components/estaticos/footer/Footer";
import Navbar from "./components/estaticos/navbar/Navbar";
import Home from "./pagina/home/Home";
import "./App.css";             
import Login from "./pagina/login/Login";
import CadastroUsuario from "./pagina/cadastroUsuario/CadastroUsuario";

  

function App() {
  return(
    <BrowserRouter>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/cadastrousuario" element={<CadastroUsuario />} />
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
    
  );
}

export default App;
