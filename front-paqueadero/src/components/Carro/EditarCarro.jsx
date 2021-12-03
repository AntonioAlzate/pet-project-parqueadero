import React, { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import HOST_API from "../../util/connection";
import Swal from "sweetalert2";
import Store from "./../../util/Store";

function EditarCarro() {
  const navigate = useNavigate();

  const {
    dispatch,
    state: { vehiculoEditar },
  } = useContext(Store);
  const item = vehiculoEditar.item;

  const formRef = useRef();
  const [state, setState] = useState(item);

  function editCar(event) {
    event.preventDefault();

    console.log(JSON.stringify(state));
    fetch(HOST_API + `/vehiculos/vehiculo/${state.idVehiculo}`, {
      method: "PUT",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((vehiculo) => {
        setState({});

        if (vehiculo.excepcion !== undefined) {
          Swal.fire({
            icon: "error",
            title: "No es posible completar la actualización del vehículo",
            text: `Motivo: ${vehiculo.mensaje}`,
          });
          return;
        }

        Swal.fire(
          "¡Vehículo Actualizado Exitosamente!",
          `Vehículo con placa: ${vehiculo.placa}
          Marca: ${vehiculo.marca}
          Color: ${vehiculo.color}`,
          "success"
        );

        if (vehiculo.excepcion === undefined) navigate("/listar-vehiculos");
      });
  }

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Vehículo
            </h2>
            <form ref={formRef}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Placa Vehículo"
                  className="form-control"
                  value={state.placa}
                  onChange={(event) => {
                    setState({ ...state, placa: event.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Marca Vehículo"
                  value={state.marca}
                  className="form-control"
                  onChange={(event) => {
                    setState({ ...state, marca: event.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Color Vehículo"
                  value={state.color}
                  className="form-control"
                  onChange={(event) => {
                    setState({ ...state, color: event.target.value });
                  }}
                />
              </div>
              <button
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                onClick={editCar}
              >
                Guardar Cambios
              </button>
            </form>
            {/*<Link to="/">
              <button>Volver</button>
                </Link>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditarCarro;
