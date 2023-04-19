import React from "react";
import { Link } from "react-router-dom"
import "../css/items.css"

const Item = ({ item }) => {

    return (
        <Link to={"/menu/" + item.categoria + "/" + item.nombre}>
            <div className="card">
                <img src={item.imagen} className="card-img-top" height={250} alt={item.nombre} />
                <div className="card-body">
                    <h4 className="card-text">{item.nombre}</h4>
                    <p> {item.descripcion}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item