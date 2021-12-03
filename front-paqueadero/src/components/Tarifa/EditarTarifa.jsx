import { useRef, useState, useEffect, useContext } from "react";
import HOST_API from "../../util/connection";
import { Link, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import Store from './../../util/Store';


const EditarTarifa = () => {
  const formRef = useRef(null);
  const [state, setState] = useState({});
  const [currentTarifa, setCurrentTarifa] = useState({});

  const [tarifas, setTarifas] = useState([]);

  const navigate = useNavigate();

  const {
    dispatch,
    state: { tarifa },
  } = useContext(Store);
  const item = tarifa.item;

  useEffect(() => {
    fetch(HOST_API + "/tarifas")
      .then((response) => response.json())
      .then((list) => {
        setTarifas(list);
      });
  }, []);

  const RegistrarEdit = (event) => {
    event.preventDefault();
    if (currentTarifa.idTarifa == "") {
      formRef.current.reset();
      return;
    }

    fetch(HOST_API + `/tarifas/tarifa/${currentTarifa.idTarifa}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((eTarifa) => {
        const request = {
          nombre: eTarifa.nombre,
          valor: parseInt(state.valor),
          idTarifa: parseInt(eTarifa.idTarifa),
        };
        return request;
      })
      .then((request) => {
        fetch(HOST_API + `/tarifas/tarifa/${currentTarifa.idTarifa}`, {
          method: "PUT",
          body: JSON.stringify(request),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((tarifa) => {
            setState({});
            setCurrentTarifa({});

            if (tarifa.excepcion !== undefined) {
              Swal.fire({
                icon: "error",
                title: "No es posible completar la actualización de la tarifa",
                text: `Motivo: ${tarifa.mensaje}`,
              });
              return;
            }

            Swal.fire(
              "¡Tarifa Actualizada Exitosamente!",
              `Nombre: ${tarifa.nombre}
            Valor: ${tarifa.valor}`,
              "success"
            );

            navigate("/listar-tarifas");
          });
      });

    formRef.current.reset();
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Editar Tarifa</h2>
            <form ref={formRef}>
              <select
                name="tarifas"
                id="tarifas"
                onChange={(event) => {
                  setCurrentTarifa({
                    ...currentTarifa,
                    idTarifa: event.target.value,
                  });
                }}
              >
                <option value="">Select</option>
                {tarifas.map((tarifa) => {
                  return (
                    <option value={tarifa.idTarifa}>{tarifa.nombre}</option>
                  );
                })}
              </select>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Valor Tarifa"
                  className="form-control"
                  name="valor"
                  onChange={(event) => {
                    setState({ ...state, valor: event.target.value });
                  }}
                />
              </div>
              <button
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                onClick={RegistrarEdit}
              >
                Guardar Cambios
              </button>
              {/*<Link to="/">
                <button>Volver</button>
                </Link>*/}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarTarifa;
