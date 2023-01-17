import React from 'react';

const Product = ({img, name, price}) => {
  return (
    <article className='product'>
      <img src={img} alt="" />
      <h1>{name}</h1>
      <h4>{price}</h4>
    </article>
  );
}

export default Product