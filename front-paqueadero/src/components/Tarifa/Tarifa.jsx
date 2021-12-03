import React from "react";
import { Link } from "react-router-dom";

const Tarifa = ({ tarifa }) => {
  return (
    <tr>
      <td>{tarifa.idTarifa}</td>
      <td>{tarifa.nombre}</td>
      <td>{tarifa.valor}</td>
      <td className="acciones">
        <Link to={`/editar-tarifa`} className="btn btn-primary mr-2">
          Editar
        </Link>
        <button type="button" className="btn btn-danger">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Tarifa;
