import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import Swal from 'sweetalert2'
import '../css/contenedores.css';

const FinCompra = () => {

    const { cart, sumTotal } = useContext(CartContext)
    const [orderId, setOrderId] = useState("")
    const [btnState, setBtnState] = useState("disabled")


    useEffect(() => {
        if (cart.length > 0)
            setBtnState("")
    })

    const generarOrden = () => {

        Swal.fire({
            title: "Esta por generar una nueva orden",
            text: "Recuerde que debe abonar previamente de forma online o en el local de retiro",
            showCancelButton: true,
            confirmButtonColor: '#008000',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            cancelButtonText: "Cancelar",

        })
            .then((result) => {
                if (result.isConfirmed) {
                    const fecha = new Date()
                    const orden = {
                        fecha: fecha.toLocaleString(),
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
                        const orderDoc = doc(db, "ordenes", snapShot.id)
                        updateDoc(orderDoc, { total: orden.total * 0.9, descuento: orden.total * 0.1 })
                    })

                } else
                    Swal.fire("Cancelaste la orden")
            })
    }

    return (
        <div id="aumentarContenedor">
            <div>
                <div className="text-center">
                    <button type="button" className={`btn btn-danger ${btnState}`} onClick={generarOrden} >Generar Orden</button>
                </div>
                {orderId ? <div className="alert alert-success text-center mt-3" role="alert">
                    <h1>Se genero tu orden</h1>
                    <p>Tu codigo de orden es: {orderId}</p>
                </div> : ""}
            </div>
        </div>
    )
}

export default FinCompra