import React, {useContext} from "react";
import { Link, useNavigate} from "react-router-dom";
import Store from './../../util/Store';
import Swal from 'sweetalert2';
import HOST_API from './../../util/connection';

const Tarifa = ({ tarifaProp }) => {
  const navigate = useNavigate();
  const { dispatch, state: { tarifa } } = useContext(Store);

    const redireccionarEdicion = tarifa => {
      navigate(`/editar-tarifa`);
    }

    const eliminarTarifa = id => {
      Swal.fire({
        title: '¿Estas seguro de eliminar la tarifa?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `NO`,
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(HOST_API + "/tarifas/tarifa/" + id, {
            method: "DELETE",
          })
          .then((reponse) => {
            dispatch({ type: "delete-tarifa", id });

            if (reponse.excepcion !== undefined) {
              Swal.fire({
                icon: "error",
                title: "No es posible eliminar la tarifa",
                text: `Motivo: ${reponse.mensaje}`,
              });
              return;
            }
  
            Swal.fire('¡Eliminado!', '', 'success')

          });
        }
      })
    }

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
        <button onClick={() => eliminarTarifa(tarifaProp.idTarifa)} type="button" className="btn btn-danger">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Tarifa;
