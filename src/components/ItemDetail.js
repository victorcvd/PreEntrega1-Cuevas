import React from 'react';
import Counter from './Counter';
import './ItemDetail.css'

const ItemDetail = ({id, name, price, img, category, description}) => {

    return (
                <div className='detail'>
                    <div className='detail-top'>
                        <img src={img} alt="" />
                    </div>
                <div className='detail-bottom'>
                    <p className='product-text-category'>{category}</p>
                    <p className='product-text-name'>{name}</p>
                    <p className='product-text-description'>{description}</p>
                    <p className='product-text-price'>${price}</p>
                    <Counter id={id} name={name} price={price}></Counter>
                </div>
                </div>
                )
}

export default ItemDetail