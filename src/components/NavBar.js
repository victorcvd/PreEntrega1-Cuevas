import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <a href="/" className="navbar-logo">PLANTI</a>
            <ul className="navbar-menu">
                <div className="navbar-item">
                    <a href="/" className="navbar-links">Interior</a>
                </div>
                <div className="navbar-item">
                    <a href="/" className="navbar-links">Exterior</a>
                </div>
                <div className="navbar-item">
                    <a href="/" className="navbar-links">Herramientas</a>
                </div>
                <CartWidget />
            </ul>
        </div>
    </div>
  );
};

export default NavBar;