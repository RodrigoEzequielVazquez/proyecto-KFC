import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cartTotal } = useContext(CartContext)

    return cartTotal() ? <Link to={"/cart"} className="btn btn-danger" title="Ir al carrito">
        <img src={"/icons/bucket.svg"} alt={"Carrito"} width={30} />
        {cartTotal()}
    </Link> : ""

}

export default CartWidget