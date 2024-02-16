import { useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./ItemDetail.css";
import "../ItemCount/ItemCount.css"

const ItemDetail = ({ id, nombre, precio, stock, descripcion, img }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  };

  return (
    <div className="detalleCentrado2">
      <div className="detalleProducto">
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: ${precio}</h3>
        <p>ID: {id}</p>
        <p>Stock: {stock} unidades</p>
        <p>Descripcion: {descripcion}</p>
        <img className="fotoProductoDetalle" src={img} alt={nombre}></img>

        {agregarCantidad > 0 ? (
          <Link className="botones" to="/cart"> Terminar compra</Link>
        ) : (
          <ItemCount
            inicial={1}
            stock={stock}
            funcionAgregar={manejadorCantidad}
          />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
