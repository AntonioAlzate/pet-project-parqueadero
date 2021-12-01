import React from 'react'

const initialState = {
    list: []    
}

function reducer(state , action){
    switch (action.type) {
        case 'new-car':
            return 
        case 'registrar-tarifa':
            return
        case 'registrar-ingreso':
            return
        case 'registrar-salida':
            return
        case 'listar-vehiculos':
            return
        default:
            return state
    }
}

function StoreProvider({children}) {
    
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <StoreProvider value={{state, dispatch}}>
            {children}
        </StoreProvider>
    )
}

export default StoreProvider