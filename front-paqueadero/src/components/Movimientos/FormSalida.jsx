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
  const [factura, setfactura] = useState({});

  const registrarSalida = (event) => {
    event.preventDefault();

    let placa = stateVehiculo.placa;
    console.log(placa);

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
        setfactura(factura);
        setgenerarFactura(true);
      });

    if (generarFactura === true) {
      window.location.href = "/";
    }

    formRef.current.reset();
  };

  return (
    <Fragment>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Registrar Salida Vehículo
              </h2>
              {!generarFactura ? (
                <form ref={formRef}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="placa"
                      className="form-control"
                      placeholder="Placa Vehículo"
                      onChange={(event) => {
                        setstateVehiculo({
                          ...stateVehiculo,
                          placa: event.target.value,
                        });
                      }}
                    />
                  </div>
                    <button
                      className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                      onClick={registrarSalida}
                    >
                      Registrar Salida
                    </button>
                </form>
              ) : (
                <div>
                  <FacturaSalida factura={factura} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FormSalida;
