import React from "react";
import Home from "./components/Home";
import CarForm from "./components/Carro/CarForm";
import FormTarifa from "./components/Tarifa/FormTarifa";
import FormIngreso from "./components/Movimientos/FormIngreso";
import FormSalida from "./components/Movimientos/FormSalida";
import ListarCarros from "./components/Carro/ListarCarros";
import "./App.css";
import ListarTarifas from "./components/Tarifa/ListarTarifas";
import EditarTarifa from "./components/Tarifa/EditarTarifa";
import EliminarTarifa from "./components/Tarifa/EliminarTarifa.jsx";
import { StoreProvider } from "./util/Store";
import EliminarCarro from "./components/Carro/EliminarCarro";
import EditarCarro from "./components/Carro/EditarCarro";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/registrar-vehiculo" element={<CarForm />} />
          <Route path="/registrar-tarifa" element={<FormTarifa />} />
          <Route path="/registrar-ingreso" element={<FormIngreso />} />
          <Route path="/registrar-salida" element={<FormSalida />} />
          <Route path="/listar-vehiculos" element={<ListarCarros />} />
          <Route path="/listar-tarifas" element={<ListarTarifas />} />
          <Route path="/editar-tarifa" element={<EditarTarifa />} />
          <Route path="/eliminar-tarifa" element={<EliminarTarifa />} />
          <Route path="/eliminar-vehiculo" element={<EliminarCarro />} />
          <Route path="/editar-vehiculo" element={<EditarCarro />} />
        </Routes>
      </Router>
      <Footer />
    </StoreProvider>
  );
}

export default App;
