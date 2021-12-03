import { useRef, useState, useEffect } from "react";
import HOST_API from "../../util/connection";
import { Link } from "react-router-dom";

const EditarTarifa = () => {
  const formRef = useRef(null);
  const [state, setState] = useState({});
  const [currentTarifa, setCurrentTarifa] = useState({});

  const [tarifas, setTarifas] = useState([]);

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

    const request = {
      nombre: "",
      valor: 0,
      idTarifa: 0,
    };

    fetch(HOST_API + `/tarifas/tarifa/${currentTarifa.idTarifa}`, {
      method: "GET",
    })
    .then((response) => response.json())
    .then((eTarifa) => {
        request.nombre = eTarifa.nombre;
        request.idTarifa = eTarifa.idTarifa;
        request.valor = eTarifa.valor;
    });

    fetch(HOST_API + `/tarifas/tarifa/${currentTarifa.idTarifa}`, {
      method: "PUT",
      body: { request },
    });
    formRef.current.reset();
  };

  return (
    <div>
      <h2>Seleccione la tarifa a actualizar</h2>
      <form ref={formRef}>
        <fieldset>
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
              return <option value={tarifa.idTarifa}>{tarifa.nombre}</option>;
            })}
          </select>
        </fieldset>
        <fieldset>
          <legend>Valor</legend>
          <input
            type="text"
            name="valor"
            onChange={(event) => {
              setState({ ...state, valor: event.target.value });
            }}
          />
        </fieldset>
        <button onClick={RegistrarEdit}>Actualizar tarifa</button>
        <Link to="/">
          <button>Volver</button>
        </Link>
      </form>
    </div>
  );
};

export default EditarTarifa;
