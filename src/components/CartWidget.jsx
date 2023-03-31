import React from "react";

const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn">
                <img src={"icons/bucket.svg"} alt={"Carrito"} width={25}/>
                <span className="translate-middle badge rounded-pill bg-danger">1
                </span>
            </button>
        </div>
    )
}


export default CartWidget