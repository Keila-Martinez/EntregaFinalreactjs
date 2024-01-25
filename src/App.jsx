import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
    <Routes>
      <Route path='/'element={<ItemListContainer/>}/>
      <Route path='/categoria/:idCategoria'element={<ItemListContainer/>}/>
      <Route path='/item/:idItem' element={<div className='detalleCentrado2'>{<ItemDetailContainer/>}</div>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App