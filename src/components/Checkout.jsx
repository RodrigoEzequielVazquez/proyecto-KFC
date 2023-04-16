import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";


const Checkout = () => {

    const expresiones = {
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        telefono: /^\d{8,10}$/
    }

    const { cart, sumTotal } = useContext(CartContext)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [btnState, setBtnState] = useState("disabled")

    useEffect(() => {
        if (expresiones.correo.test(email) == true && expresiones.nombre.test(nombre) == true && expresiones.telefono.test(telefono) == true && cart.length > 0) {
            setBtnState("")
        }
    })

    return (

        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre *</label>
                            <input type="text" className="form-control" placeholder="Ingrese su nombre" onInput={(e) => { setNombre(e.target.value)}} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email *</label>
                            <input type="email" className="form-control" placeholder="Ingrese su email" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Telefono *</label>
                            <input type="text" className="form-control" placeholder="Ingrese su numero de celular" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>

                        <div>
                            <button type="button" className={`btn btn-danger ${btnState}`}><Link to={"/forma-de-pago"}>Seleccionar forma de pago</Link></button>
                        </div>

                    </form>

                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={60} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">{item.quantity * item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="text-end">Total a pagar</td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Checkout