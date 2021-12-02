import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import HOST_API from './../util/connection'



function Listado() {
    const [state, setState] = useState([])

    useEffect(() => {
        fetch(HOST_API+'/vehiculos')
        .then((response) => response.json())
        .then((list) => {setState(list)})
    }, [])
    
    return (
      <div>
        <table className="carList">
        <thead>
          <tr className="headerCar">
          <td>Placa</td>
          <td>Color</td>
          <td>Marca</td>
          </tr>
        </thead>
        {state.map((car) => {
          return (
              <tbody>
                <tr>
                <td>{car.placa}</td>
                <td>{car.color}</td>
                <td>{car.marca}</td>
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

export default Listado
