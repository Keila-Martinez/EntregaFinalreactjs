import React from 'react'
import CardWidget from '../CardWidget.jsx/CardWidget'
import './NavBar.css'
import {Link, NavLink} from "react-router-dom";


const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1 id="titulo">PET SHOP "RINITA"</h1>
      </Link>
        <nav>
            <ul>
                <li>
                  <NavLink to="/categoria/1">Alimentos</NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/2">Juguetes</NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/3">Ropa</NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/4">Accesorios</NavLink>
                </li>
            </ul>

        </nav>

        <CardWidget/>

    </header>
  )
}

export default NavBar