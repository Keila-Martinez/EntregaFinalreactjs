import React from 'react'
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";

const CartItem = ({item, cantidad}) => {
  const {eliminarProducto} = useContext(CarritoContext)
  return (
    <div key={item.id}>
        <h3> {item.nombre} </h3>
        <p> Cantidad: {cantidad}</p>
        <p> Precio: {item.precio}</p>
        <button className="botones" onClick={()=>eliminarProducto(item.id)}>Eliminar Producto</button>
        
    </div>
  )
}

export default CartItem