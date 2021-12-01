import React from 'react'
import {Link} from "react-router-dom";

const listaObjetos = [] //Solo es momentaneo

function Listado() {
    return (
        <div>
            {listaObjetos.map(() => {})}
            <Link to="/">
                <button>Volver</button>
            </Link>           
        </div>
    )
}

export default Listado
