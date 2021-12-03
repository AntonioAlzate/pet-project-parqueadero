import React, { useRef, useState, createContext } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import HOST_API from "./../../util/connection";
import Swal from "sweetalert2";

const initialState = {
  list: [],
};

const Store = createContext(initialState);

const CarForm = () => {
  const formRef = useRef(null);
  const [state, setState] = useState({});

  function addCar(event) {
    event.preventDefault();

    const request = {
      placa: state.placa,
      color: state.color,
      marca: state.marca,
    };
    fetch(HOST_API + "/vehiculos/vehiculo", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json())
    .then((vehiculo) => {
        setState({});

        if (vehiculo.excepcion !== undefined) {
            Swal.fire({
              icon: "error",
              title: "No es posible registrar el vehículo",
              text: `Motivo: ${vehiculo.mensaje}`,
            });
            return;
          }
  
          Swal.fire(
            "¡Vehículo registrado exitosamente!",
            `Vehículo con placa: ${vehiculo.placa}
              Marca: ${vehiculo.marca}
              Color: ${vehiculo.color}`,
            "success"
          );
    });
    formRef.current.reset();
  }

  return (
    <Fragment>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Agregar Nuevo Vehículo
              </h2>
              <form ref={formRef}>
                <div className="form-group">
                  <input
                    type="text"
                    name="placa"
                    placeholder="Placa Vehículo"
                    className="form-control"
                    onChange={(event) => {
                      setState({ ...state, placa: event.target.value });
                    }}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="color"
                    placeholder="Color Vehículo"
                    className="form-control"
                    onChange={(event) => {
                      setState({ ...state, color: event.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="marca"
                    placeholder="Marca Vehículo"
                    className="form-control"
                    onChange={(event) => {
                      setState({ ...state, marca: event.target.value });
                    }}
                  />
                </div>
                <button className="btn btn-primary font-weight-bold text-uppercase d-block w-100" onClick={addCar}>
                  Registrar
                </button>
                {/*<Link to="/">
                  <button>Volver</button>
                </Link>*/}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CarForm;
