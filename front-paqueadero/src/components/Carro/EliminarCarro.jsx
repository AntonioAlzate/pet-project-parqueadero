import React, { useRef, useState} from 'react'
import HOST_API from '../../util/connection'
import {Link} from "react-router-dom";

function EliminarCarro() {
    
    const [state, setState] = useState({})
    const formRef = useRef(null)
    
    function deleteCar(event){
        event.preventDefault()
        fetch(HOST_API+`/vehiculos/vehiculo/${state.id}`, {
            method: 'DELETE'
        })
        .then(formRef.current.reset())
    }
    return (
        <div>
            <h2>Ingrese el id del carro a eliminar</h2>
            <form ref={formRef}>
                <fieldset>
                <input type="text" onChange={(event) => {
                    setState({...state, id: event.target.value})
                }} />
                </fieldset>
            </form>
            <button onClick={deleteCar}>Eliminar carro</button>
            <Link to="/"><button>Volver</button></Link>
        </div>
    )
}

export default EliminarCarro
