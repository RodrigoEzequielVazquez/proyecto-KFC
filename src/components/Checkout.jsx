import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection,doc, getFirestore, updateDoc } from "firebase/firestore"

const Checkout = () => {

    const { cart, sumTotal, clear } = useContext(CartContext)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [orderId, setOrderId] = useState("")

    const generarOrden = () => {
        const fecha = new Date()
        
        const orden = {
            fecha: fecha.toLocaleString(),
            cliente: { nombre: nombre, email: email, telefono: telefono },
            pedido: cart.map(item => ({
                precio_por_unidad: item.precio,
                cantidad: item.quantity,
                producto: item.nombre,
                
                
            })),
            sub_total: sumTotal(),
            descuento: 0,
            total: sumTotal()
            
        }
       

        const db = getFirestore()
        const ordersCollection = collection(db, "ordenes")
        addDoc(ordersCollection, orden).then((snapShot) => {
            setOrderId(snapShot.id)
            const orderDoc = doc (db,"ordenes", snapShot.id)
            updateDoc(orderDoc,{total: orden.total * 0.9,descuento: orden.total * 0.1})
            clear()
        })
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" placeholder="Ingrese su nombre" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Ingrese su emai" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Telefono</label>
                            <input type="number" className="form-control" placeholder="Ingrese su telefono" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>

                        <button type="button" className="btn btn-danger" onClick={generarOrden}>Generar Orden</button>
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
            <div className="row-my-5">
                <div className="col">
                    {orderId ? <div className="alert alert-success text-center" role="alert">
                        <h1>Se genero tu orden</h1>
                        <p>Tu codigo de orden es: {orderId}</p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout