import React from "react";
import { Link } from "react-router-dom"

const Item = ({ item }) => {

    return (
        <Link to={"/menu/" + item.categoria + "/" + item.nombre}>
            <div className="card">
                <img src={item.imagen} className="card-img-top" height={250} alt={item.nombre} />
                <div className="card-body">
                    <p className="card-text">{item.nombre}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item