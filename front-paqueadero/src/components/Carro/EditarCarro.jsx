import React, { useState, useRef } from 'react'
import {Link} from "react-router-dom";
import HOST_API from '../../util/connection';

function EditarCarro() {
    const formRef = useRef()    
    const [state, setState] = useState({})
    
    function editCar(event){
        event.preventDefault()

        console.log(JSON.stringify(state))
        fetch(HOST_API+`/vehiculos/vehiculo/${state.idVehiculo}`, {
            method: 'PUT',
            body: JSON.stringify(state),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {console.log(response)})
    }

    return (
        <div>
            <h2>Editar Carro</h2>
            <form ref={formRef}>
                <fieldset>
                <legend>Id</legend>
                <input type="text" onChange={(event) => {
                    setState({...state, idVehiculo: event.target.value})
                }} />
                </fieldset>
                <fieldset>
                <legend>Color</legend>
                <input type="text" onChange={(event) => {
                    setState({...state, color: event.target.value})
                }} />
                </fieldset>
                <fieldset>
                <legend>Marca</legend>
                <input type="text" onChange={(event) => {
                    setState({...state, marca: event.target.value})
                }} />
                </fieldset>
                <fieldset>
                    <legend>Placa</legend>
                <input type="text" onChange={(event) => {
                    setState({...state, placa: event.target.value})
                }} />
                </fieldset>
            </form>
            <button onClick={editCar}>Editar carro</button>
            <Link to="/"><button>Volver</button></Link>
        </div>
    )
}

export default EditarCarro
