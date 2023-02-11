import React from 'react';
import {Link} from 'react-router-dom';
import './Product.css'

const Product = ({id, img, name, price, category}) => {
  function numberWithPoints(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return (
    <div className='product'>
      <div className='product-top'>
        <img src={img} alt="" />
      </div>
      <div className='product-bottom'>
        <p className='product-text-category'>{category}</p>
        <p className='product-text-name'>{name}</p>
        <p className='product-text-price'>${numberWithPoints(price)}</p>
        <Link to={`/item/${id}`} className='product-button'>Más detalles</Link>
      </div>
    </div>
  );
}

export default Product