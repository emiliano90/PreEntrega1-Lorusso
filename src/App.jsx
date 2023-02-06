import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './components/CartContainer/CartContainer';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Hola!"} />} />
        <Route path='/category/:idCategoria' element={<ItemListContainer greeting={"ItemListContainer -> Categoria!"} />} />
        <Route path='/item/:idProducto' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<CartContainer/>} />
        
        <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
