import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
        <ul>
            <li> 
                <Link to="/" >Home</Link>
            </li> 
        </ul>
        <ul>
            <li> 
                <Link to="/about" >About</Link>
            </li> 
        </ul>
        <ul>
            <li> 
                <Link to="/login" >Login</Link>
            </li> 
        </ul>
    </nav>
  )
}
