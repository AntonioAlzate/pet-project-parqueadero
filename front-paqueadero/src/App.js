import React from 'react';
import Home from './components/Home';
import CarForm from './components/CarForm';
import FormTarifa from './components/FormTarifa'
import FormIngreso from './components/FormIngreso'
import Salida from './components/Salida'
import Listado from './components/Listado'
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import background from "./img/park.jpg";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/new-car" element={<CarForm />} />
          <Route path="/registrar-tarifa" element={<FormTarifa />} />
          <Route path="/registrar-ingreso" element={<FormIngreso />} />
          <Route path="/registrar-salida" element={<Salida />} />
          <Route path="/listar-vehiculos" element={<Listado />} />
        </Routes>
    </Router>
  );
}

export default App;
