import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Store from './../../util/Store';
import Swal from 'sweetalert2';
import HOST_API from './../../util/connection';

const Vehiculo = ({vehiculoProp}) => {
    const navigate = useNavigate();

    const redireccionarEdicion = vehiculo => {
      dispatch({ type: "car-selected", item: vehiculo });
      navigate(`/editar-vehiculo`);
    }

    const eliminarVehiculo = id => {
      Swal.fire({
        title: '¿Estas seguro de eliminar el vehiculo?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `NO`,
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(HOST_API + "/vehiculos/vehiculo/" + id, {
            method: "DELETE",
          })
          .then((reponse) => {
            dispatch({ type: "delete-car", id });

            if (reponse.excepcion !== undefined) {
              Swal.fire({
                icon: "error",
                title: "No es posible eliminar el vehículo",
                text: `Motivo: ${reponse.mensaje}`,
              });
              return;
            }
  
            Swal.fire('¡Eliminado!', '', 'success')

          });
        }
      })
    }

    const { dispatch, state: { vehiculo } } = useContext(Store);

    return ( 
        <tr>
                <td>{vehiculoProp.idVehiculo}</td>
                <td>{vehiculoProp.placa}</td>
                <td>{vehiculoProp.color}</td>
                <td>{vehiculoProp.marca}</td>
                <td className="acciones">
                  <button
                    type="button"
                    onClick={() => redireccionarEdicion(vehiculoProp)}
                    className="btn btn-primary mr-2"
                  >
                    Editar
                  </button>
                  <button onClick={() => eliminarVehiculo(vehiculoProp.idVehiculo)} type="button" className="btn btn-danger">
                    Eliminar
                  </button>
                </td>
        </tr>
     );
}
 
export default Vehiculo;