import React from 'react';
import Home from './components/Home';
import CarForm from './components/CarForm';
import FormTarifa from './components/FormTarifa'
import FormIngreso from './components/FormIngreso'
import FormSalida from './components/FormSalida'
import Listado from './components/Listado'
import './App.css'
import { StoreProvider } from './util/Store';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <StoreProvider>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/new-car" element={<CarForm />} />
          <Route path="/registrar-tarifa" element={<FormTarifa />} />
          <Route path="/registrar-ingreso" element={<FormIngreso />} />
          <Route path="/registrar-salida" element={<FormSalida />} />
          <Route path="/listar-vehiculos" element={<Listado />} />
        </Routes>
    </Router>
    </StoreProvider>
  );
}

export default App;
