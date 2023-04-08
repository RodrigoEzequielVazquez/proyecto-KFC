import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stockItems, onAdd}) => {

    const [counter, setCounter] = useState(1)
    const [actualStock, setActualStock] = useState(stockItems)
    const [vendido, setVendido] = useState(false)

    const incrementarStock = () => {
        if (counter < actualStock) {
            setCounter(counter + 1)
            setVendido(false)
        }
    }

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1)
            setVendido(false)
        }
    }

    const addToCart = (quantity) => {
       setVendido(true)
       setActualStock(actualStock - counter)
       setCounter(1)
       onAdd(quantity)
    }

   useEffect(() =>{
    setActualStock(stockItems)
   },[stockItems])

    return (
        <div className="container text-center">
            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-danger" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-outline-danger">{counter}</button>
                        <button type="button" className="btn btn-outline-danger" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {vendido ? <Link to={"/cart" }className="btn btn-outline-danger" > Finalizar compra </Link> : <button type="button" className="btn btn-outline-danger" onClick={() =>addToCart(counter)}>Agregar al carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount