import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import '../css/contenedores.css';
import '../css/cart.css';

const Cart = () => {
    const { cart, removeItem, clear, sumTotal, cartTotal } = useContext(CartContext)

    if (cartTotal() === 0) {
        return (
            <div id="aumentarContenedor">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">No se encontraron productos en el carrito</div>
                        <Link to={"/"} className="btn btn-outline-danger">Volver al menu</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <table className="table" id="principalCart">
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
                                <th colSpan={2} className="text-center"><Link onClick={clear} className="btn btn-outline-danger" title="Vaciar carrito">Vaciar carrito
                                </Link></th>
                                <th colSpan={3} className="text-center" ><Link to={"/checkout"} className="btn btn-outline-danger" title="Finalizar compra">Finalizar compra</Link></th>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table className="table" id="responsiveCart">
                        <thead>
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>

                                    <td className="align-middle">{item.nombre}</td>
                                    <td className=" align-middle">{item.quantity}</td>
                                    <td className=" align-middle">{item.quantity * item.precio}</td>
                                    <td className="align-middle"><Link onClick={() => { removeItem(item.id) }}><img src={"icons/trash3-fill.svg"} alt={"Eliminar Producto"} width={25} title="Eliminar el producto" /></Link></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={1}>&nbsp;</td>
                                <td>Total</td>
                                <td><b>${sumTotal()}</b></td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <th colSpan={1} className="align-middle text-center"><Link onClick={clear} className="btn btn-outline-danger" title="Vaciar carrito">Vaciar carrito
                                </Link></th>
                                <th colSpan={2} className="align-middle text-center"><Link to={"/checkout"} className="btn btn-outline-danger" title="Finalizar compra">Finalizar compra</Link></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    )
}

export default Cart