import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="navbar-cart-widget">
        <a href="/" className="cart-widget"><i className="fa-solid fa-cart-shopping"></i>0</a>
    </div>

  );
};

export default CartWidget;