import React, { useState } from 'react'
import {Link} from "react-router-dom";

function FormTarifa() {
    
    const [state, setState] = useState({})
    
    const registrarTarifa = (event) => {
        event.preventDefault()
        //code
    }

    return (
        <div>
            <h2>Registrar tarifa</h2>
            <form >
            <fieldset>
                <legend>Nombre</legend>
                <input type="text" name="tipo" />
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
