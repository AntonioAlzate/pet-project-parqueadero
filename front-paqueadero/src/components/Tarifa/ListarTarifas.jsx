import React, { Fragment, useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import HOST_API from "./../../util/connection";
import Tarifa from "./Tarifa";
import Store from './../../util/Store';


function ListarTarifas() {
  const [state, setState] = useState([]);
  const navigate = useNavigate();

  const {
    dispatch,
    state: { tarifa },
  } = useContext(Store);
  const currentList = tarifa.list;

  useEffect(() => {
    fetch(HOST_API + "/tarifas")
      .then((response) => response.json())
      .then((list) => {
        setState(list);
        dispatch({ type: "update-list-tarifa", list });
      });
  }, [dispatch]);

  const irRegistrarNuevaTarifa = () => {
    navigate("/registrar-tarifa");
  }
  
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
            {currentList.map((tarifa) => {
              return <Tarifa key="tarifa.idTarifa" tarifaProp={tarifa} />;
            })}
          </tbody>
        </table>
        <button
          onClick={() => irRegistrarNuevaTarifa()}
          className="btn btn-success font-weight-bold text-uppercase d-block w-100 mt-5"
        >
          Registrar Nueva Tarifa
        </button>
      </div>
    </Fragment>
  );
}

export default ListarTarifas;
