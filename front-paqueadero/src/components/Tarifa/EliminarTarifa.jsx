import {useRef, useState, useEffect} from "react";
import HOST_API from "../../util/connection";
import {Link} from "react-router-dom";

const EditarTarifa = () => {
    const formRef = useRef(null)
    const [currentTarifa, setCurrentTarifa] = useState({})     

    const [tarifas, setTarifas] = useState([])

    useEffect(() => {
        fetch(HOST_API+"/tarifas")
        .then((response) => response.json())
        .then((list) => {setTarifas(list)})    
    }, [eliminar])

    function eliminar(event){
        event.preventDefault()
        if(currentTarifa.idTarifa == ""){
            formRef.current.reset()
            return
        }
        fetch(HOST_API+`/tarifas/tarifa/${currentTarifa.idTarifa}`, {
            method: 'DELETE'
        })
        .then((response) => console.log(response.json()))

        formRef.current.reset()
    }

    return(
        <div>
        <h2>Seleccione la tarifa a actualizar</h2>
        <form ref={formRef}>
        <fieldset>
            <select name="tarifas" id="tarifas" onChange={(event) => {
                setCurrentTarifa({ ...currentTarifa, idTarifa: event.target.value });
            }}
            >
                <option value="">Select</option>
                {tarifas.map((tarifa) => {
                    return <option value={tarifa.idTarifa}>{tarifa.nombre}</option>;
            })}
            </select>
        </fieldset>
        <button onClick={eliminar}>Eliminar tarifa</button>
        <Link to="/">
            <button>Volver</button>
        </Link>
        </form>
        </div>    
    )
}

export default EditarTarifa