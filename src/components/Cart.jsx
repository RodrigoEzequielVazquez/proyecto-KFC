import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clear, sumTotal, cartTotal } = useContext(CartContext)

    if (cartTotal() === 0) {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">No se encontraron productos en el carrito</div>
                        <Link to={"/"} className="btn btn-outline-danger">Volver al menu</Link>
                    </div>
                </div>
            </div>
        )
    }

    return(
    <div className="container py-5">
        <div className="row">
            <div className="col-md-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">&nbsp;</th>
                            <th scope="col">Producto</th>
                            <th scope="col" className="text-center">Cantidad</th>
                            <th scope="col" className="text-center">Precio</th>
                            <th scope="col">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => (
                            <tr key={item.id}>
                                <td><img src={item.imagen} alt={item.nombre} width={60} /></td>
                                <td className="align-middle">{item.nombre}</td>
                                <td className="text-center align-middle">{item.quantity}</td>
                                <td className="text-center align-middle">{item.quantity * item.precio}</td>
                                <td className="text-end align-middle"><Link onClick={() => { removeItem(item.id) }}><img src={"icons/trash3-fill.svg"} alt={"Eliminar Producto"} width={25} title="Eliminar el producto" /></Link></td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={2}>&nbsp;</td>
                            <td className="text-center">Total</td>
                            <td className="text-center"><b>${sumTotal()}</b></td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <th scope="col" colSpan={3} className="text-center"><Link onClick={clear} className="btn btn-outline-danger" title="Vaciar carrito">Vaciar carrito
                            </Link></th>
                            <th><Link to={"/checkout"} className="btn btn-outline-danger" title="Finalizar compra">Finalizar compra</Link></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default Cart