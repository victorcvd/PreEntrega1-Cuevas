import React from 'react';
import './CartWidget.css';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
  const { totalProductsAdded } = useCart()
  return (
    <div className="navbar-cart-widget">
        <a href="/" className="cart-widget"><i className="fa-solid fa-cart-shopping"></i>{ totalProductsAdded }</a>
    </div>

  );
};

export default CartWidget;