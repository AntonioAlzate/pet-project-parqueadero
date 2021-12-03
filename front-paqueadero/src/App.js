import React from 'react';
import Home from './components/Home';
import CarForm from './components/Carro/CarForm';
import FormTarifa from './components/Tarifa/FormTarifa'
import FormIngreso from './components/Movimientos/FormIngreso'
import FormSalida from './components/Movimientos/FormSalida'
import ListarCarros from './components/Carro/ListarCarros'
import './App.css'
import ListarTarifas from './components/Tarifa/ListarTarifas';
import EditarTarifa from './components/Tarifa/EditarTarifa'
import EliminarTarifa from './components/Tarifa/EliminarTarifa.jsx'

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
          <Route path="/listar-vehiculos" element={<ListarCarros />} />
          <Route path="/listar-tarifas" element={<ListarTarifas />} />
          <Route path="/editar-tarifa" element={<EditarTarifa />} />
          <Route path="/eliminar-tarifa" element={<EliminarTarifa />} />
        </Routes>
    </Router>
    </StoreProvider>
  );
}

export default App;
