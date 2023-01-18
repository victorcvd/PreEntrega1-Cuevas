import React from 'react';
import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../asyncMock';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const {categoryId} = useParams()

  useEffect(() => {
    
    setLoading(true)
    
    const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId).then(products => {
      setProducts(products)
    }).finally(() => {
      setLoading(false)
    })
  }, [categoryId]);

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