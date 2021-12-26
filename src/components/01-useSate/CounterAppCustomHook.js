import React from 'react';
import { useCounter } from '../../Hooks/useCounter';
/* se importa el custom Hook useCounter */
import './Counter.css';

/* Nota: en el siguiente codigo se hace un counter pero
con un custom Hook */

export const CounterAppCustomHook = () => {

    const {state, increment, decrement,reset} = useCounter();
    /* hacemos uso del custom Hook (que no es mas que nada una funcion) 
    a lo que obtendremos un objeto, y haremos la desestructurizacion de ese objeto
    , se puede mandar un valor en useCounter(34) y si se manda ese seria el valorinicial,
    pero no es obligatorio debido a que si no se manda, en el hook, ya tiene un valorinicial  */

    return (
        <>
            <h1>CounterApp with custom Hook: {state} </h1>
            {/* imprimiremos en pantalla el valor del state */}
            <hr></hr>

            <button onClick={increment} className='btn btn-success' >+1</button>
            {/* al hacer click en el boton se llamará la funcion de increment */}
            <button onClick={reset} className='btn btn-success' >Reset</button>
            {/* al hacer click en el boton se llamará la funcion de reset */}
            <button onClick={decrement} className='btn btn-success' >-1</button>
            {/* al hacer click en el boton se llamará la funcion de decrement */}
        </>
    )
}
