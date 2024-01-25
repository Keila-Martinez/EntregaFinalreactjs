import React from 'react'

const ItemDetail = ({id, nombre, precio, descripcion, img}) => {
  return (
    <div className='detalleCentrado2'>
    <div className='detalleProducto'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <p>ID: {id}</p>
        <p>Descripcion: {descripcion}</p>
        <img className='fotoProductoDetalle' src={img} alt={nombre}></img>

    </div>
    </div>
  )
}

export default ItemDetail