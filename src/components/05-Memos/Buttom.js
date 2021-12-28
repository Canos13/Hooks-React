import React from 'react';

export const Buttom = React.memo(({increment}) => {

    console.log('Me volví a disparar :(');

    return (
        <button
            className='btn btn-primary'
            /* onClick={increment} 
            de esta manera lo ponemos si 
            esque no mandamos ningun argmento
            */
            onClick={ ()=>{
                increment(3);
                /*  Para mandar args */
            }}
        >
            Incrementar
        </button>
    )
})

/* debemos de usar la funcion React.memo
porque queremos memorizar este componente
en caso de que no cambie, de que no se vuelva 
a renderizar */
