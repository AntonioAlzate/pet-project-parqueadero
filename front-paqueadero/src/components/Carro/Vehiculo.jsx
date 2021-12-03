import React from 'react'
import { Link } from 'react-router-dom';

const Vehiculo = ({vehiculo}) => {
    return ( 
        <tr>
                <td>{vehiculo.idVehiculo}</td>
                <td>{vehiculo.placa}</td>
                <td>{vehiculo.color}</td>
                <td>{vehiculo.marca}</td>
                <td className="acciones">
                  <Link
                    to={`/editar-vehiculo`}
                    className="btn btn-primary mr-2"
                  >
                    Editar
                  </Link>
                  <button type="button" className="btn btn-danger">
                    Eliminar
                  </button>
                </td>
        </tr>
     );
}
 
export default Vehiculo;