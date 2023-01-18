import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting = 'Bienvenidos a PLANTI'/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting = 'Bienvenidos'/>} />
          <Route path='/item/:productId' element={<ItemDetailContainer greeting = 'Bienvenidos'/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
