import { useContext } from 'react';
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from 'react-router-dom';

const CardWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);
    return (
        <div>
            <Link to="/cart">
                <img style={{width: "3em", height: "auto"}} className='imgCarrito' src="../imagen/carrito.png" alt="Carrito" />
                {
                    cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
                }        
            </Link>
        </div>
    )
}

export default CardWidget
