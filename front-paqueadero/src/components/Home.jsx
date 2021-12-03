import React from "react";
import {Link} from "react-router-dom";

function Home() {

  return (
    <div className="container h-100 d-flex justify-content-center">
      <div>
      <Link to="/new-car">
        <button>Agregar Vehículo</button>
      </Link>
      <br></br>
      <Link to="/registrar-tarifa">
        <button>Registrar Tarifa</button>
      </Link>
      <br></br>
      <Link to="/registrar-ingreso">
        <button>Registar Ingreso</button>
      </Link>
      <br></br>
      <Link to="/registrar-salida">
        <button>Registrar Salida</button>
      </Link>
      <br></br>
      <Link to="/listar-vehiculos">
        <button>Listar vehiculos</button>
      </Link>
      <br></br>
      <Link to="/listar-tarifas">
        <button>Listar tarifas</button>
      </Link>
      <br></br>
      <Link to="/editar-tarifa">
        <button>Editar tarifa</button>
      </Link>
      <br></br>
      <Link to="/eliminar-tarifa">
        <button>Eliminar tarifa</button>
      </Link>
      <br></br>
      <Link to="/eliminar-vehiculo">
        <button>Eliminar Vehiculo</button>
      </Link>
      <br></br>
      <Link to="/editar-vehiculo">
        <button>Editar Vehiculo</button>
      </Link>
      </div>
    </div>
  );
}

export default Home;
