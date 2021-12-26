import {useState} from 'react';

export const useCounter = (initialState = 0) => {
    /* definimos el useCounter y en los parametros
    definimos el valor de 0, por si no se manda ningun valor */

    const [state, setState] = useState(initialState);
    /* creamos un hook de useState */

    const increment = () => setState(state+1);
    
    const decrement = () => setState(state-1);
    
    const reset = () => setState(initialState);

    return {
        state,
        decrement,
        increment,
        reset
    };
    
}
