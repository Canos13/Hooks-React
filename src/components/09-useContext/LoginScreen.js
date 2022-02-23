import React,{useContext} from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  const { setUser } = useContext( UserContext );
  
  return (
    <>
        <h1 className='text-center mt-3'>LoginScreen</h1>

        <button
          className='btn btn-danger mx-auto d-block'
          onClick={ ()=>setUser({
              id: 13,
              name: 'Sergio',
              lastName: 'Cano'
          }) }
        >login</button>
    </>
  )
}
