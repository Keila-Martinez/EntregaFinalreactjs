import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import "../ItemCount/ItemCount.css";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  if (cantidadTotal == 0) {
    return (
      <div className="centrado1">
        <h2>No hay productos en el carrito</h2>
        <Link className="botones" to="/">
          {" "}
          Ver Productos{" "}
        </Link>
      </div>
    );
  }
  return (
    <div className="contenedor">
      <div className="productos">
        {carrito.map((prod) => (
          <CartItem key={prod.id} {...prod} />
        ))}
      </div>
      <div className="acciones">
        <h3> Total: $ {total}</h3>
        <button className="botones" onClick={vaciarCarrito}>
          {" "}
          Vaciar Carrito{" "}
        </button>
        <Link className="botones" to="/checkout">
          Finalizar Compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
