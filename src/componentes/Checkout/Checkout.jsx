import React from 'react';
import { useState, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { db } from "../../services/config";
import { collection, addDoc } from 'firebase/firestore';
import swal from "sweetalert2"
import './Checkout.css';

const Checkout = () => {
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [error, setError] = useState("");

    const manejadorSubmit = (event) => {
        event.preventDefault();
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("¡Por favor completa todos los campos!");
            return;
        }
        if (email !== emailConfirmacion) {
            setError("Los emails no coinciden.");
            return;
        }
        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
            

        }
        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
                Swal.fire({
                                        title: "¡Orden generada exitosamente!",
                                        text: `Tu número de orden es: ${docRef.id}`,
                                        icon: "success",
                                        
                                    });
            })
            .catch(error => {
                setError("No se pudo crear la orden.");
            })
    }

    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Checkout - Finalizar Compra</h2>
            <form className="checkout-form" onSubmit={manejadorSubmit}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p>{producto.item.nombre} x {producto.cantidad}</p>
                            <p>{producto.item.precio}</p>
                            <hr />
                        </div>
                    ))
                }
                <div className="form-group">
                    <label htmlFor="nombre">Nombre: </label>
                    <input type="text" id="nombre" className="form-control" onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="apellido">Apellido: </label>
                    <input type="text" id="apellido" className="form-control" onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono: </label>
                    <input type="text" id="telefono" className="form-control" onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail: </label>
                    <input type="email" id="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="emailcon">Confirmar E-mail: </label>
                    <input type="email" id="emailcon" className="form-control" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>
                {error && <p className="checkout-error">{error}</p>}
                <button className="btn-finalizar">Finalizar Orden</button>
             {/*   {ordenId && <p className="checkout-success">¡Gracias por su compra! Tu número de orden es: {ordenId}</p>}*/}
            </form>
        </div>
    )
}

export default Checkout;