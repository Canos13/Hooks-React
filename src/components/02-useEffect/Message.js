import React, { useEffect, useState } from 'react';

export const Message = ({nombre}) => {

    const [Coords, setCoords] = useState({
        x:0,
        y:0
    })
    const {x,y} = Coords;

    useEffect(() => {

        const mouseMove = (e) => {
            const coords = {
                x: e.x, 
                y: e.y
            }
            setCoords(coords);
            console.log('Componente montado');
        }

        window.addEventListener('mousemove', mouseMove);
        
        return () => {
            window.removeEventListener('mousemove', mouseMove);
            console.log('Componente desmontado');
        }
    }, [])

    return (
        <>
            <h1> {nombre} eres genial</h1> 
            <h2> Cordenada x:{x} </h2>
            <h2> Cordenada y:{y} </h2>
        </>
    )
}
