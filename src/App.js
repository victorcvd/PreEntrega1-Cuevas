import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <ItemListContainer greeting = 'Bienvenidos a PLANTI'/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
