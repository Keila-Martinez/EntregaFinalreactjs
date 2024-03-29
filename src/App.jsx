import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'

import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <CarritoProvider>
      <NavBar/>
    <Routes>
      <Route path='/'element={<ItemListContainer/>}/>
      <Route path='/categoria/:idCategoria'element={<ItemListContainer/>}/>
      <Route path='/item/:idItem' element={<div className='detalleCentrado2'>{<ItemDetailContainer/>}</div>}/>
      <Route path='/cart' element = {<Cart/>} />
      <Route path='/checkout' element = {<Checkout/>} />
    </Routes>
    </CarritoProvider> 
    </BrowserRouter>
    </>
  )
}

export default App