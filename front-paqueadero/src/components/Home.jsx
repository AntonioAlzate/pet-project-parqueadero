import React, {useState} from "react";
import {Link} from "react-router-dom";

function Home() {

  const [state, setState] = useState({})

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
      </div>
    </div>
  );
}

export default Home;
