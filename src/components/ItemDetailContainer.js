import React from 'react';
import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import { getProductById } from '../asyncMock';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const {productId} = useParams()

  useEffect(() => {
    
    setLoading(true)

    getProductById(productId).then(products => {
      setProduct(products[0])
      console.log(products[0])
    }).finally(() => {
      setLoading(false)
    })
  }, [productId]);

  if (loading) {
    return <h1>Cargando...</h1>
  }
  return (
    <div className="item-list-container">
        <ItemDetail {...product} />
    </div>
  );
};

export default ItemListContainer;