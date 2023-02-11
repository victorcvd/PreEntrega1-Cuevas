import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting = 'Bienvenidos a PLANTI'/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting = 'Bienvenidos'/>} />
          <Route path='/item/:productId' element={<ItemDetailContainer greeting = 'Bienvenidos'/>} />
        </Routes>
      </CartProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
