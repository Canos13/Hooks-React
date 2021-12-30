import React, { useEffect, useReducer } from 'react';
import { tareasReducer } from './tareasReducer';
import { useForm } from '../../Hooks/useForm';
import './style.css';

/* const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprende React',
    done:false
}]; */

const init = ()=>{
    return JSON.parse(localStorage.getItem('tareas')) || [];
}

export const TareasApp = () => {

    const [tareas, dispatch ] = useReducer(tareasReducer,[], init);
    
    const [{descripcion}, handleInputChange, reset] = useForm({
        descripcion: ''
    });

    useEffect(()=>{
        localStorage.setItem('tareas', JSON.stringify(tareas));
    },[tareas])

    const handleDelete = (TareaId) =>{
        
        const action = {
            type: 'delete',
            payload: TareaId
        }

        dispatch(action);
    }

    const handleToggle = (TareaId)=>{
        dispatch({
            type: 'toogle',
            payload: TareaId
        });
    };

    const addTaks = (e)=>{
        e.preventDefault();

        if( descripcion.trim().length <= 1 ){
            return;
        }

        const newTask = {
            id: new Date().getTime(),
            desc: descripcion,
            done:false
        };

        const action = {
            type: 'add',
            payload: newTask
        }

        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1 className='text-center' >Lista de Tareas ( {tareas.length} ) </h1>
            <hr />

            <div className='row'>

                <div className='col-7'>

                    <ol className='list-group list-group-flush' >
                        {
                            tareas.map(({desc, id, done},i) => {
                                return <li
                                            key={id}
                                            className='list-group-item d-flex flex-wrap align-items-center justify-content-between'
                                        >
                                            <p 
                                                className={`col-6 hand flex-wrap m-0 ${done && 'complete'}`} 
                                                onClick={()=> handleToggle(id)}
                                            >
                                                    {i+1}. {desc}
                                            </p>
                                            <button
                                                className={`btn btn-${done?'secondary':'primary'}`}
                                                onClick={ ()=> handleToggle(id)}
                                            ><i className={`${done?'fas fa-window-close':'far fa-check-square'}`}></i> {`${done?'Incompleto':'Hecho'}`}</button>
                                            
                                            <button
                                                className='btn btn-danger'
                                                onClick={ () => handleDelete(id) }
                                            ><i className="far fa-trash-alt"></i> Borrar</button> 
                                        </li>
                            })
                        }
                    </ol>
                    
                </div>

                <div  className='col-5'>
                    <h4 className='text-center' >Agregar Tarea</h4>
                    <hr />

                    <form onSubmit={addTaks} >

                        <input 
                            type='text'
                            placeholder='Nueva tarea'
                            autoComplete='off'
                            autoFocus
                            className='form-control'
                            name='descripcion'
                            value={descripcion}
                            onChange={handleInputChange}
                        />

                        <button 
                            type='submit'
                            className='btn btn-outline-primary mt-3 w-100'
                        >
                            <i className="fas fa-plus-square"></i>  Agregar
                        </button>

                    </form>

                </div>

            </div>

        </div>
    )
}
