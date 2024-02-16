import { useState } from "react";
import "./ItemCount.css"


const ItemCount = ({inicial, stock, funcionAgregar }) => {

    const [contador, setContador] = useState(1);


    const incrementar = () => {
      if(contador < stock) {
        setContador(contador + 1);
      }
    }

    const decrementar = () => {
      if(contador > inicial) {
        setContador(contador - 1);
      }
    }

  return (
    <>
    <div>
      <br/>
        <button className="botones" onClick={incrementar}> + </button>
        <p> {contador} </p>
        <button className="botones" onClick={decrementar}> - </button>
    </div>
      <button className="botones" onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
    </>
  )
}

export default ItemCount