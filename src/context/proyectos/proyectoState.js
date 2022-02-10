import React, { useReducer } from 'react';

import ProyectoContext from './proyectoContext';
import ProyectoReducer from './proyectoReducer';

const ProyectoState = props => {
    const inicialState = {
        formulario : false
    };

    //Dispatch para ejecutar las acciones
    const [ state, dispatch] = useReducer(ProyectoReducer, inicialState);

    //Serie de funciones para el CRUD

    return(
        <ProyectoContext.Provider
            value={{
                formulario: state.formulario
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    );
}

export default ProyectoState;
