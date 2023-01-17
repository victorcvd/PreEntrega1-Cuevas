import Product from './Product';

const ItemList = ({products}) => {
  return (
    <section className='productlist'>
            {products.map((product) => <Product key={product.id} {...product} />)}
    </section>
  );
}

export default ItemList