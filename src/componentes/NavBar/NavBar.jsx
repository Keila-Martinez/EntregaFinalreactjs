import React from 'react'
import CardWidget from '../CardWidget.jsx/CardWidget'
import './NavBar.css'


const NavBar = () => {
  return (
    <header>
        <h1 id="titulo">PET SHOP "RINITA"</h1>
        <nav>
            <ul>
                <li>Alimentos</li>
                <li>Juguetes</li>
                <li>Ropa</li>
                <li>Accesorios</li>
            </ul>

        </nav>

        <CardWidget/>

    </header>
  )
}

export default NavBar