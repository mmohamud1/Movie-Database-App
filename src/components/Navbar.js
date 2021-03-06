import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar bg-primary">
            <img className="navbar-img" src={Logo} alt="logo"/> 
            <h1 className="navbar-title">
            Movie Database
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>    
        </nav>
    );
};

export default Navbar;
