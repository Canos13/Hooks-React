import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {
  const { user } = useContext( UserContext );

  console.log(user);

  return (
    <>
        <h1 className='text-center mt-3'>HomeScreen</h1>

        <pre className='d-inline-block mx-auto ' >
            { JSON.stringify(user, null, 3) }
        </pre>
    </>
  )
}
