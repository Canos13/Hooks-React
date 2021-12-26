import React, { useState } from 'react';
import './Counter.css';

/* NOTA: lo que queremos lograr con el codigo siguiente
es hacer incrementar el counter1 y que el counter2 siga 
teniendo su mismo valor*/
export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20
        /* creamos el hook useState y el counter tendrá
        un objeto con los sig. valores {counter1: 10, counter2: 20}, 
        tambien se puede definir de la siguinte manera
        ... const [{counter1, counter2}, setCounter]...*/
    })

    const {counter1, counter2} = counter;
    /* desestructuramos el counter del hook,
    para despues ocupar el valor de counter1 y counter2 directamente*/

    const handleC1Add = () =>{
        setCounter({
            ...counter,
            counter1: counter1 +1
        });
        /* al ejecutarse esta funcion de handleC1Add se ejecutará
        la funcion setCounter del hook useState, poniendo el nuevo valor
        de, primero se usa el operador spread con el counter (...counter)
        de esta forma se estableceria los valores anteriores como nuevo valor del
        objeto counter, y despues se modifica el del valor que se quiere cambiar
        en este caso del counter1, y así el counter1 cambia y el counter2 no */
    }

    return (
        <>
            <h1>Counter1 {counter1} </h1> 
            <h1>Counter2 {counter2} </h1>
            {/* imprimimos en pantalla los valores de counter1 y counter2 */}
            <hr></hr>

            <button 
                className='btn btn-primary'
                onClick={ handleC1Add }
                /* al hacer click en el  boton se
                 ejecutará la funcion handleC1Add*/ 
            >+1</button>
        </>
    )
}
