import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import SobreNosotros from "./Pages/SobreNosotros";
import Tareas from "./Pages/Tareas";

function App() {
  return (
    <div >
      <Router>
      <nav>
        <Link to="/"> Home </Link> /
        <Link to="/SobreNosotros"> Sobre Nosotros </Link> /
        <Link to="/Tareas"> lista de tareas </Link> /
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/Tareas" element={<Tareas />} />

      </Routes>
      <div> Foooter </div>
    </Router>
    </div>
  );
}

export default App;
