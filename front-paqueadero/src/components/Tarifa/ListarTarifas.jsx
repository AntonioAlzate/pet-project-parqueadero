import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HOST_API from "./../../util/connection";

function ListarTarifas() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(HOST_API + "/tarifas")
      .then((response) => response.json())
      .then((list) => {
        setState(list);
      });
  }, []);

  return (
    <Fragment>
      <h2 className="text-center my-5">Listado Tarifas</h2>
      <div className="container">
        <table className="table table-striped">
          <thead className="bg-primary table-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Valor</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          {state.map((tarifa) => {
            return (
              <tbody>
                <tr>
                  <td>{tarifa.idTarifa}</td>
                  <td>{tarifa.nombre}</td>
                  <td>{tarifa.valor}</td>
                  <td className="acciones">
                    <Link to={`/editar-tarifa`} className="btn btn-primary mr-2">Editar</Link>
                    <button type="button" className="btn btn-danger">Eliminar</button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        {/*<Link to="/">
          <button style={{ marginLeft: "5%" }}>Volver</button>
        </Link>*/}
      </div>
    </Fragment>
  );
}

export default ListarTarifas;
