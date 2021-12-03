import React, {useContext} from "react";
import { Link, useNavigate} from "react-router-dom";
import Store from './../../util/Store';

const Tarifa = ({ tarifaProp }) => {
  const navigate = useNavigate();

    const redireccionarEdicion = tarifa => {
      dispatch({ type: "tarifa-selected", item: tarifa });
      navigate(`/editar-tarifa`);
    }

  const { dispatch, state: { tarifa } } = useContext(Store);

  return (
    <tr>
      <td>{tarifaProp.idTarifa}</td>
      <td>{tarifaProp.nombre}</td>
      <td>{tarifaProp.valor}</td>
      <td className="acciones">
      <button
                    type="button"
                    onClick={() => redireccionarEdicion(tarifaProp)}
                    className="btn btn-primary mr-2"
                  >
                    Editar
                  </button>
        <button type="button" className="btn btn-danger">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Tarifa;
