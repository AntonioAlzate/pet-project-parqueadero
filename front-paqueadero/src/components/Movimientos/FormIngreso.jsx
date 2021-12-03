import React, { useState, useRef, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Store from "../../util/Store";
import Swal from "sweetalert2";
import { Fragment } from "react/cjs/react.production.min";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import HOST_API from "./../../util/connection";

function FormIngreso() {
  const [state, setState] = useState({});
  const formRef = useRef(null);

  const [dropdown, setdropdown] = useState(false);
  const [idTarifaSelect, setidTarifaSelect] = useState(0);
  const [tarifaSelect, setTarifaSelect] = useState("TARIFAS");

  const {
    dispatch,
    state: { tarifa, vehiculo },
  } = useContext(Store);
  const currentList = tarifa.list;

  const vehiculo1 = vehiculo.item;
  const [stateVehiculo, setstateVehiculo] = useState(vehiculo1);

  useEffect(() => {
    fetch(HOST_API + "/tarifas")
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "update-list-tarifa", list });
      });
  }, [dispatch]);

  const registrarIngreso = (event) => {
    event.preventDefault();
    //Codigo registro

    const request = {
      idTarifa: idTarifaSelect,
      placa: stateVehiculo.placa,
    };

    fetch(HOST_API + "/movimientos/ingreso/vehiculo", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((ingreso) => {
        setstateVehiculo({ placa: "" });

        if (ingreso.excepcion !== undefined) {
          Swal.fire({
            icon: "error",
            title: "No es posible registrar el ingreso",
            text: `Motivo: ${ingreso.mensaje}`,
          });
          return;
        }

        Swal.fire(
          "¡Ingreso registrado exitosamente!",
          `Vehículo con placa: ${ingreso.placa}
            Tarifa: ${ingreso.tarifaDTO.nombre}
            Valor Hora: ${ingreso.tarifaDTO.valor}$
            Fecha ingreso: ${ingreso.fechaIngreso
              .slice(0, 19)
              .replace(/T/g, " ")}`,
          "success"
        );
      })
      .catch((error) => console.log(error.message));

    formRef.current.reset();
  };

  const abrirCerrarDropdown = () => {
    setdropdown(!dropdown);
  };

  const seleccionTarifa = (nombre, idTarifa) => {
    setidTarifaSelect(idTarifa);
    setTarifaSelect(nombre);
  };

  return (
    <Fragment>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Registro Ingreso Vehículo
              </h2>
              <Dropdown
                className="mt-5"
                isOpen={dropdown}
                toggle={abrirCerrarDropdown}
              >
                <DropdownToggle caret color="secondary" className="mb-2">
                  {tarifaSelect}
                </DropdownToggle>
                <DropdownMenu>
                  {currentList.map((tarifa) => {
                    return (
                      <DropdownItem
                        key={tarifa.idTarifa}
                        onClick={() =>
                          seleccionTarifa(tarifa.nombre, tarifa.idTarifa)
                        }
                      >
                        {tarifa.nombre}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>

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
                    onClick={registrarIngreso}
                  >
                    Registrar ingreso
                  </button>
              </form>
              {/*<Link to="/">
                <button className="btn btn-primary mt-5">Volver</button>
                  </Link>*/}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FormIngreso;
