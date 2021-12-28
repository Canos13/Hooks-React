import React, { useCallback, useState } from 'react';
import { Buttom } from './Buttom';
import '../02-useEffect/Form.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(1);
    /* hacemos uso del hook useState, para
    crear un contador */

    /* const increment = ()=>{
        setCounter(counter+1);
    } 
    de esta manera lo podemos hacer pero al
    cargar el componente la funcion que se crea
    apunta a otro espacio en memoria, por ende no
    serviria el React.memo 
    */

    const increment = useCallback((num)=>{
        setCounter(c => c + num);
        
    }, [setCounter]);
    /* Para crear un funcion memoriazada hacemos uso
    del hook useCallback que servirá para mandar como
    argumento en donde lo necesiemos */

    return (
        <div>
            <h1>useCallBack Hook: {counter} </h1>
            <hr /> 

            <Buttom  increment={increment}/>
            {/* vamos a mandar una funcion
            como props */}
        </div>
    )
}
