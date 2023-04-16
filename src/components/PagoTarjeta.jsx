import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";


const PagoTarjeta = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [tarjeta, setTarjeta] = useState("")
    const [codigo, setCodigo] = useState("")
    const [btnState, setBtnState] = useState("disabled")

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{8,10}$/, // 10 a 14 numeros.
        tarjeta: /^\d{13,18}$/, // 13 a 18 numeros.
        codigo:  /^\d{3}$/ // 3 numeros.
    }

    useEffect(() => {
        if (expresiones.nombre.test(nombre) == true && expresiones.apellido.test(apellido) == true && expresiones.correo.test(email) == true && expresiones.telefono.test(telefono) == true && expresiones.tarjeta.test(tarjeta) == true && expresiones.codigo.test(codigo) == true &&cart.length > 0) {
            setBtnState("")
        }
    })

    const { cart } = useContext(CartContext)

    if (cart.length === 0) {
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

    return (
        <div>
            <form action="container">

                <div className="row my-5">
                    <div className="col">
                        <div >
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" placeholder="Ingrese su nombre" onInput={(e) => { setNombre(e.target.value)}} />
                        </div>

                        <div >
                            <label htmlFor="apellido" className="form-label">Apellido</label>
                            <input type="text" className="form-control" placeholder="Ingrese su apellido" onInput={(e) => { setApellido(e.target.value)}} />
                        </div>

                        <div >
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Ingrese su email" onInput={(e) => { setEmail(e.target.value)}} />
                        </div>

                    </div>

                    <div className="col">

                        <div >
                            <label htmlFor="telefono" className="form-label">Telefono</label>
                            <input type="text" className="form-control" placeholder="Ingrese su numero de celular" onInput={(e) => { setTelefono(e.target.value)}} />
                        </div>

                        <div >
                            <label htmlFor="tarjeta" className="form-label">Num.Tarjeta</label>
                            <input type="text" className="form-control" placeholder="Ingrese el numero de la tarjeta" onInput={(e) => { setTarjeta(e.target.value)}} />
                        </div>

                        <div >
                            <label htmlFor="codigo" className="form-label">Cod. seguridad</label>
                            <input type="text" className="form-control" placeholder="Ingrese el codgio de 3 digitos" onInput={(e) => { setCodigo(e.target.value)}} />
                        </div>

                    </div>

                </div>

                <div className="text-center">
                    <button type="button" className={`btn btn-danger ${btnState}`}><Link to={"/fin-de-compra"}>Finalizar compra</Link></button>
                </div>

            </form>
        </div>
    )
}

export default PagoTarjeta