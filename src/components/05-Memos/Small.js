import React, { memo } from 'react'

export const Small = memo(({value}) => {

    console.log('Se volvió a llamar el Small');

    return (
        <small>
            {value}
        </small>
    )
})
