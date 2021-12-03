import React, { useState, useRef, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Store from "../../util/Store";
import Swal from "sweetalert2";
import { Fragment } from "react/cjs/react.production.min";
import "bootstrap/dist/css/bootstrap.min.css";
import HOST_API from "./../../util/connection";
import { withRouter } from "react-router-dom";
import { FacturaSalida } from "./FacturaSalida";

function FormSalida() {
  const formRef = useRef(null);
  const {
    dispatch,
    state: { vehiculo },
  } = useContext(Store);

  const vehiculo1 = vehiculo.item;
  const [stateVehiculo, setstateVehiculo] = useState(vehiculo1);

  const [generarFactura, setgenerarFactura] = useState(false);
  const [factura, setfactura] = useState({})

  const registrarSalida = (event) => {
    event.preventDefault();

    let placa = stateVehiculo.placa;
    console.log(placa)

    fetch(HOST_API + "/movimientos/salida/vehiculo/" + placa)
      .then((response) => response.json())
      .then((factura) => {
        if (factura.excepcion !== undefined) {
          Swal.fire({
            icon: "error",
            title: "No es posible registrar la salida",
            text: `Motivo: ${factura.mensaje}`,
          });
          setgenerarFactura(false);
          return;
        }

        Swal.fire(
          "¡Salida Registrada Exitosamente!",
          ` A continuación se generará tu factura.`,
          "success"
        );
        setfactura(factura)
        setgenerarFactura(true);
      });

    if (generarFactura === true) {
      window.location.href = "/";
    }

    formRef.current.reset();
  };

  return (
    <Fragment>
      <div className="container mt-5">
        <h1 className="text-center">Registro Salida Vehículo</h1>

        {!generarFactura ? 
        ( <form ref={formRef}>
          <div className="input-group mt-5">
            <input
              type="text"
              name="placa"
              className="form-control"
              placeholder="Ingresa Placa"
              onChange={(event) => {
                setstateVehiculo({
                  ...stateVehiculo,
                  placa: event.target.value,
                });
              }}
            />
            <img
              height="40"
              width="50"
              src="data:image/png;base64,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"
              alt="placa"
            />
          </div>
          <div className="text-center">
            <button
              className="btn btn-success mt-2 text-center btn-lg"
              onClick={registrarSalida}
            >
              Registrar Salida
            </button>
          </div>
        </form>
        ) : (
      <div>
          <FacturaSalida factura={factura} />
      </div> )}
      </div>
    </Fragment>
  );
}

export default FormSalida;
