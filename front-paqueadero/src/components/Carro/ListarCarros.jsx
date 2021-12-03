import React, { Fragment, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import HOST_API from "./../../util/connection";
import Vehiculo from "./Vehiculo";
import Store from './../../util/Store';


function Listado() {
  const [state, setState] = useState([]);

  const {
    dispatch,
    state: { vehiculo },
  } = useContext(Store);
  const currentList = vehiculo.list;

  useEffect(() => {
    fetch(HOST_API + "/vehiculos")
      .then((response) => response.json())
      .then((list) => {
        setState(list);
        dispatch({ type: "update-list-car", list });
      });
  }, [dispatch]);

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
                vehiculoProp={car}
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
