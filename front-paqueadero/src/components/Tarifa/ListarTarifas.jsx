import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HOST_API from "./../../util/connection";
import Tarifa from "./Tarifa";

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

          <tbody>
            {state.map((tarifa) => {
              return <Tarifa 
                key="tarifa.idTarifa"
                tarifa={tarifa}
              />
            })}
          </tbody>
        </table>
        {/*<Link to="/">
          <button style={{ marginLeft: "5%" }}>Volver</button>
        </Link>*/}
      </div>
    </Fragment>
  );
}

export default ListarTarifas;
