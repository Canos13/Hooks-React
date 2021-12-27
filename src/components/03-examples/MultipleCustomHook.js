import React from 'react';
import { useFetch } from '../../Hooks/useFetch';
import '../02-useEffect/Form.css'

export const MultipleCustomHook = () => {

    const url = 'https://www.breakingbadapi.com/api/quotes/1';

    const state = useFetch(url);
    console.log(state);
    return (
        <>
            <h1>MultipleCustomHook</h1>
        </>
    )
}
