import React, { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import HOST_API from "./../../util/connection";
import Swal from "sweetalert2";
import Store from './../../util/Store';


function FormTarifa() {
  const formRef = useRef(null);

  const {
    dispatch,
    state: { tarifa }
  } = useContext(Store);
  const item = tarifa.item;
  const [state, setState] = useState({});
  const navigate = useNavigate();

  const registrarTarifa = (event) => {
    event.preventDefault();

    const request = {
      nombre: state.nombre,
      valor: parseFloat(state.valor),
    };
    fetch(HOST_API + "/tarifas/tarifa", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((tarifa) => {
        dispatch({ type: "add-tarifa", item: tarifa });
        setState({nombre: "", valor: ""});

        if (tarifa.excepcion !== undefined) {
          Swal.fire({
            icon: "error",
            title: "No es posible registrar la Tarifa",
            text: `Motivo: ${tarifa.mensaje}`,
          });
          return;
        }

        Swal.fire(
          "¡Tarifa registrado exitosamente!",
          `Nombre: ${tarifa.nombre}
              Valor: ${tarifa.valor}`,
          "success"
        );

      });
      navigate("/listar-tarifas")
    formRef.current.reset();
  };

  return (
    <Fragment>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Agregar Nueva Tarifa
              </h2>
              <form ref={formRef}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    placeholder="Nombre Tarifa"
                    onChange={(event) => {
                      setState({ ...state, nombre: event.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="valor"
                    className="form-control"
                    placeholder="Valor Tarifa"
                    onChange={(event) => {
                      setState({ ...state, valor: event.target.value });
                    }}
                  />
                </div>
                <button
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                  onClick={registrarTarifa}
                >
                  Registrar tarifa
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
}

export default FormTarifa;
