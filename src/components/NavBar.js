import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
    <div className='navbar'>
        <div className='navbar-container'>
            <Link to={`/`} className='navbar-logo'>PLANTI</Link>
            <ul className="navbar-menu">
                <div className="navbar-item">
                    <Link to={`/category/interior`} className='navbar-links'>Interior</Link>
                </div>
                <div className="navbar-item">
                    <Link to={`/category/flores`} className='navbar-links'>Flores</Link>
                </div>
                <div className="navbar-item">
                    <Link to={`/category/herramientas`} className='navbar-links'>Herramientas</Link>
                </div>
                <CartWidget />
            </ul>
        </div>
    </div>
  );
};

export default NavBar;