import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

const App = () => {
  return (
   /* <div>App</div>*/

    <>
    <NavBar/>
    <ItemListContainer greeting="web en construcción"/>
    </>
  )
}

export default App