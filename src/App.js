import React from 'react';
import  './Components/Header/Header.css';
import NavBar from './Components/NavBar/NavBar';
import Cart from './Contaiers/CartView/Cart';
import ItemListContainer from './Contaiers/ItemListContainer/ItemListContainer'
import ItemCount from './Contaiers/ItemCount';
import ItemDetailContainer from './Contaiers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



const App = ()=>{
  const saludo ="Bienvenido al Bodegón Básico";
return(
  <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={saludo}/>} />
        <Route path='/categoria/:IdCategoria' element={<ItemListContainer greeting={saludo}/>}/>
        <Route path='/producto' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
      <ItemCount initial={1} stock = {22}/>
      
    </BrowserRouter>
  </>
)

}

export default App;
