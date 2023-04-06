import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    return (
        <div className="row">
            <div className="col-md-4 offset-md-4 text-center">
                <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <p>${item.precio}</p>
                <ItemCount stockItems={item.stock} />
            </div>
        </div>
    )
}

export default ItemDetail