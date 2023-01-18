import Product from './Product';
import './ItemList.css'

const ItemList = ({products}) => {
  return (
    <div className='productlist'>
            {products.map((product) => <Product key={product.id} {...product} />)}
    </div>
  );
}

export default ItemList