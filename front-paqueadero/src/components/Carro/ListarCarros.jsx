import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HOST_API from "./../../util/connection";
import Vehiculo from "./Vehiculo";

function Listado() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(HOST_API + "/vehiculos")
      .then((response) => response.json())
      .then((list) => {
        setState(list);
      });
  }, []);

  return (
    <Fragment>
      <h2 className="text-center my-5">Listado Vehículos</h2>
      <div className="container">
        <table className="table table-striped">
          <thead className="bg-primary table-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Placa</th>
              <th scope="col">Color</th>
              <th scope="col">Marca</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {state.map((car) => {
              return <Vehiculo 
                key = {car.idVehiculo}
                vehiculo={car}
              />
            })}
          </tbody>

        </table>
      </div>
      <Link to="/">
        <button style={{ marginLeft: "5%" }}>Volver</button>
      </Link>
    </Fragment>
  );
}

export default Listado;
