import React from 'react'
import {Link} from "react-router-dom";

const registrarTarifa = (event) => {
    event.preventDefault()
    //code
}

function FormTarifa() {
    return (
        <div>
            <form >
            <fieldset>
                <legend>Nombre</legend>
                <input type="text" name="tipo" />
            </fieldset>
            <fieldset>
                <legend>Valor</legend>
                <input type="text" name="valor" />
            </fieldset>
            <button onClick="registrarTarifa">Registrar tarifa</button>
            <Link to="/">
                <button>Volver</button>
            </Link>
            </form>
        </div>
    )
}

export default FormTarifa
