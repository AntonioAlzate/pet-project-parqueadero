import React, { createContext } from 'react'
import {Link} from "react-router-dom";

const listaCarros = [{id: 1, placa:"fpe487", color:"blanco", marca:"Toyota"},
{id:2 ,placa:"agh879", color:"azul", marca:"Hyundai"}] //Solo es momentaneo

function Listado() {
    return (
        <div>
            {listaCarros.map((car) => {return(
                <table className="carList">
                    <tr>Id - {car.id}</tr>
                    <tr>Placa - {car.placa}</tr>
                    <tr>Color - {car.color}</tr>
                    <tr>Marca - {car.marca}</tr>
                </table>
            )})}
            <Link to="/">
                <button>Volver</button>
            </Link>           
        </div>
    )
}

export default Listado
