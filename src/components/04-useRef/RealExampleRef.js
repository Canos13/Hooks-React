import React, { useState } from 'react';
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook';
import '../02-useEffect/Form.css'

export const RealExampleRef = () => {
    
    const [show, setShow] = useState(false)
    
    const handleShow = () =>{
        setShow(!show);
    }

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            { show && <MultipleCustomHook /> }

            <button
                className='btn btn-success m-1'
                onClick={handleShow}
            >SHow/Hide
            </button>
        </div>
    )
}
