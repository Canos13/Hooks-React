import React from 'react';
import { Loading } from './Loading';
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';
import '../02-useEffect/Form.css'

export const MultipleCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(1);
    if(state === 0){ reset(); }
    const url = `https://www.breakingbadapi.com/api/quotes/${state}`;
    const {loading, data} = useFetch(url);
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1 className='text-center'>BreakingBad Quotes</h1>
            <hr/>
            {
                loading 
                ? 
                    ( <Loading /> )
                :
                    (
                        <blockquote className='blockquote text-center p-3'>
                            <p className='mb-3'>{ author }</p>
                            <footer className='blockquote-footer'>{ quote }</footer>
                        </blockquote>
                    )
            }

            <div className='w-100 d-flex justify-content-between'>
                <button 
                    className='btn btn-success m-1'
                    onClick={decrement}
                >Anterior Quote
                </button>

                <button 
                    className='btn btn-success m-1'
                    onClick={increment}
                >Siguiente Quote
                </button>
            </div>
        </>
    )
}
