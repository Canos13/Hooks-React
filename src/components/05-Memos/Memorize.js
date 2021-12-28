import React, { useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import '../02-useEffect/Form.css'
import { Small } from './Small';

export const Memorize = () => {

    const {state, increment} = useCounter(1);
    const [show, setShow] = useState(true);

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
