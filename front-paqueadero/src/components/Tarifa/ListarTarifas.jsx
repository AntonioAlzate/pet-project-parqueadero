import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import HOST_API from './../../util/connection'

function ListarTarifas() {
    const [state, setState] = useState([])

    useEffect(() => {
        fetch(HOST_API+'/tarifas')
        .then((response) => response.json())
        .then((list) => {setState(list)})
    }, [])
    
    return (
      <div>
        <table className="carList">
        <thead>
          <tr className="headerCar">
          <td>Id</td>
          <td>Nombre</td>
          <td>Valor</td>
          </tr>
        </thead>
        {state.map((tarifa) => {
          return (
              <tbody>
                <tr>
                <td>{tarifa.idTarifa}</td>
                <td>{tarifa.nombre}</td>
                <td>{tarifa.valor}</td>
                </tr>
              </tbody>
          );
        })}
        </table>
        <Link to="/">
          <button style={{marginLeft: "5%"}}>Volver</button>
        </Link>
      </div>
    );
}

export default ListarTarifas