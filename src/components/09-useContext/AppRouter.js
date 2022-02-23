import React from 'react';
import {HomeScreen} from './HomeScreen';
import {AboutScreen} from './AboutScreen';
import {LoginScreen} from './LoginScreen';
import {NotFound} from './NotFound';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { Navbar } from './Navbar';

export const AppRouter = () => {
  return (
    <Router>
        <div>
            <Navbar />

            <Routes>
                <Route exact="true" index path='/' element={<HomeScreen /> } /> 
                <Route exact="true" path='/about' element={<AboutScreen /> } />
                <Route exact="true" path='/login' element={<LoginScreen /> } />
                {/* Si no hace match renderiza el componete <NotFound />  */}
                <Route path='*' element={<NotFound /> } /> 
               
                {/* Si no hace match se navega hacia "/" */}
                {/* <Route path='*' element={<Navigate replace to="/" /> } /> */}
            </Routes>
            <hr />
        </div>
    </Router>
  )
}
