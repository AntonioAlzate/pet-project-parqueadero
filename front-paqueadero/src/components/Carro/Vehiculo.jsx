import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Store from './../../util/Store';

const Vehiculo = ({vehiculoProp}) => {
    const navigate = useNavigate();

    const redireccionarEdicion = vehiculo => {
      dispatch({ type: "car-selected", item: vehiculo });
      navigate(`/editar-vehiculo`);
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
                  <button type="button" className="btn btn-danger">
                    Eliminar
                  </button>
                </td>
        </tr>
     );
}
 
export default Vehiculo;