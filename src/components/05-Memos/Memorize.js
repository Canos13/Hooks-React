import React, { useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import { Small } from './Small';
import '../02-useEffect/Form.css'

export const Memorize = () => {

    const {state, increment} = useCounter(1);
    /* declaramos el customHook useCounter donde solo 
    haremos uso del state y de la f increment */
    const [show, setShow] = useState(true);
    /* este hook solo usaremos para cambiar 
    el estado de show de true a false*/

    const handleShow = ()=>{
        setShow(!show);
    }

    return (
        <>
            <h1>Memorize</h1>
            <h2>Counter: <Small value={state} /> </h2>
            <hr />

            <button
                className='btn btn-success m-1'
                onClick={increment}
            >+1</button>

            <button
                className='btn btn-outline-success m-1'
                onClick={handleShow}
            >
                show/hide {JSON.stringify(show)}
            </button>
        </>
    )
}
