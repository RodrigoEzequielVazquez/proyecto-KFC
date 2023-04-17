import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import '../css/contenedores.css';

const FormaPago = () => {

    const { cart } = useContext(CartContext)

    if (cart.length === 0) {
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
        <div id="aumentarContenedor">  
            <div className="text-center">
                <Link to={"/fin-de-compra"}><button className="btn btn-danger m-1">Pago en el local</button></Link>
                <Link to={"/pago-tarjeta"}><button className="btn btn-danger m-1">Tarjeta de débito/credito</button></Link>
            </div>
        </div>
    )
}

export default FormaPago