import React, { memo } from 'react'

export const Small = memo(({value}) => {

    console.log('Se volvió a llamar el Small');

    return (
        <small>
            {value}
        </small>
    )
})

/*  memo(...) se ejecutará la funcion de memo que evalua
si el props que se recibe cambia, si cambia se dispara el componente,
si no cambia, no se llama el componente.

En algunos caso se puede encontrar sin importar pero como 
... = React.memo(...)
*/