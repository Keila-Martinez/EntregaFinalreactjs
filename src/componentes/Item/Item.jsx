import React from 'react'
import {Link} from "react-router-dom";

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='divProducto'>
        <img src={img} alt={nombre} className='fotoProducto' />
        <h3> {nombre} </h3>
        <p>Precio: $ {precio}</p>
        <Link to={`/item/${id}`} className='verDetallesButton'>Ver Detalles</Link>
    </div>
  )
}

export default Item