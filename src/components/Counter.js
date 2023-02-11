import {useState} from 'react'
import './Counter.css'
import { useCart } from '../context/CartContext';

function Counter({id, name, price}) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const counterIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  const counterDecrement = () => {
    setQuantity(prevQuantity => {
      if (prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  }

  const addProductToCart = (quantity) => {
    addItem({id:id, name: name, price:price, quantity:quantity})
    alert('Se agregaron '+quantity+' artículos al carro')
  }

  return (
    <>
    <div className='counter-section'>
      <button onClick={counterDecrement}>-</button>
      <input type="text" value={quantity} readOnly />
      <button onClick={counterIncrement}>+</button>
    </div>
    <div>
      <button className='counter-button' onClick={() => addProductToCart(quantity)}>
        Agregar al carrito
      </button>
    </div>
    </>
  );
}

export default Counter;
