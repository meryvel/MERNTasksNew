import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

const proyectoState = props => {

    const inicialState = {
        formulario : false
    }

    //Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(proyectoReducer, inicialState)

    //Serie de funciones para el CRUD

    return(
        <proyectoContext.Provider
            value={{
                formulario: state.formulario
            }}
        >
            {props.childen}
        </proyectoContext.Provider>
    )
}
