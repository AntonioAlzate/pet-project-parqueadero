import React, { useState } from 'react'
import {Link} from "react-router-dom";

function FormTarifa() {
    
    const [tarifas, setTarifas] = useState({})
    
    const registrarTarifa = (event) => {
        event.preventDefault()
        //code
        let info = {name : event.target.name, valor: event.target.name}
        setTarifas(...tarifas, info) //No funciona, posible uso de useEffect
        console.log(tarifas)
        console.log(event.target.name)
        console.log(event.target.value)
    }

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
            <button onClick={registrarTarifa}>Registrar tarifa</button>
            <Link to="/">
                <button>Volver</button>
            </Link>
            </form>
        </div>
    )
}

export default FormTarifa
