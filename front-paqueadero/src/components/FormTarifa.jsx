import React, { useState, useRef} from 'react'
import {Link} from "react-router-dom";
import HOST_API from '../util/connection';

function FormTarifa() {
    
    const [state, setState] = useState({})
    const formRef = useRef(null)

    const registrarTarifa = (event) => {
        event.preventDefault()
        
        const request = {
            nombre: state.nombre,
            valor: parseFloat(state.valor),
        }
        fetch(HOST_API+'/tarifas/tarifa', {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(response => console.log(response.json()))
        formRef.current.reset()
    }

    return (
        <div>
            <h2>Registrar tarifa</h2>
            <form ref={formRef}>
            <fieldset>
                <legend>Nombre</legend>
                <input type="text" name="nombre" onChange={(event) => {
                    setState({...state, nombre:event.target.value})
                }}/>
            </fieldset>
            <fieldset>
                <legend>Valor</legend>
                <input type="text" name="valor" onChange={(event) => {
                    setState({...state, valor:event.target.value})
                }} />
            </fieldset>
            <button onClick={registrarTarifa}>Registrar tarifa</button>
            <Link to="/">
                <button>Volver</button>
            </Link>
            </form>
        </div>
    )
}

export default FormTarifa
