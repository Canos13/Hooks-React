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
                <Route index exact path='/' element={<HomeScreen /> } /> 
                <Route exact path='/about' element={<AboutScreen /> } />
                <Route exact path='/login' element={<LoginScreen /> } />
                {/* 
                    Si no hace match renderiza el componete <NotFound /> 
                    <Route path='*' element={<NotFound /> } /> 
                */}

                {/* Si no hace match se navega hacia "/" */}
                <Route path='*' element={<Navigate replace to="/" /> } />
            </Routes>
        </div>
    </Router>
  )
}
