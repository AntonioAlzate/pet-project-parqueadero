import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HOST_API from "./../../util/connection";

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
          {state.map((car) => {
            return (
              <tbody>
                <tr>
                  <td>{car.idVehiculo}</td>
                  <td>{car.placa}</td>
                  <td>{car.color}</td>
                  <td>{car.marca}</td>
                  <td className="acciones">
                    <Link
                      to={`/editar-vehiculo`}
                      className="btn btn-primary mr-2"
                    >
                      Editar
                    </Link>
                    <button type="button" className="btn btn-danger">
                      Eliminar
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <Link to="/">
        <button style={{ marginLeft: "5%" }}>Volver</button>
      </Link>
    </Fragment>
  );
}

export default Listado;
