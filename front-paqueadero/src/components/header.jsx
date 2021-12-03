import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  
  const navigate = useNavigate();

  const irAHome = () => {
    navigate("/");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1 style={{ cursor: "pointer" }} onClick={() => irAHome()}> HOME PAGE</h1>
      </div>

      <a
        href="/listar-vehiculos"
        className="btn btn-danger nuevo-post d-block d-md-inline-block mr-2"
      >
        Vehículos
      </a>

      <a
        href="/listar-tarifas"
        className="btn btn-danger nuevo-post d-block d-md-inline-block mr-2"
      >
        Tarifas
      </a>

      <a
        href="/registrar-ingreso"
        className="btn btn-danger nuevo-post d-block d-md-inline-block mr-2"
      >
        Ingreso Vehículos
      </a>

      <a
        href="/registrar-salida"
        className="btn btn-danger nuevo-post d-block d-md-inline-block mr-2"
      >
        Salida de un Vehículo
      </a>
    </nav>
  );
};

export default Header;
