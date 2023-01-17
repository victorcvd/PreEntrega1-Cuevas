import React from 'react';
import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import { getProducts } from '../asyncMock';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getProducts().then(products => {
      setProducts(products)
    }).finally(() => {
      setLoading(false)
    })
  }, []);

  if (loading) {
    return <h1>Cargando...</h1>
  }

  return (
    <div className="item-list-container">
        <h1>{greeting}</h1>
        <ItemList products = {products}></ItemList>
    </div>
  );
};

export default ItemListContainer;