import React from 'react';
import { useForm } from '../../Hooks/useForm';
import './Form.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        nombre: '',
        correo: '',
        password: ''
    });

    const {nombre, correo, password} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }

    return (
        <form onSubmit={handleSubmit} >
           <h1>FormWithCustomHook</h1>
           <div className='form-group mb-3' >
               <input 
                    className='form-control'
                    type='text'
                    name='nombre'
                    placeholder='Nombre'
                    autoFocus
                    autoComplete='off'
                    value={ nombre }
                    onChange={handleInputChange}
                />
            </div>

            <div className='form-group mb-3' >
                <input 
                    className='form-control'
                    type='text'
                    name='correo'
                    placeholder='Correo'
                    autoComplete='off'
                    value={ correo }
                    onChange={handleInputChange}
                />
            </div>

            <div className='form-group mb-3' >
                <input 
                    className='form-control'
                    type='password'
                    name='password'
                    placeholder='password'
                    autoComplete='off'
                    value={ password }
                    onChange={handleInputChange}
                />
            </div>
            <button type='submit' className='btn btn-success' >Enviar</button>
        </form>
    )   
}
