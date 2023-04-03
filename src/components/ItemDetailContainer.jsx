import React, { useEffect, useState } from "react";
import arrayProductos from "./json/arrayProductos.json"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const {id} = useParams()


    useEffect(() => {
        const promesa = new Promise((resolve) => {
            console.log(id);
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.nombre == id))
            }, 2000);
        })

        promesa.then((data) => {
            setItem(data)
        })
    }, [id])

    return (
        <div className="container">
            <ItemDetail item={item} /> 
        </div>
    )
}

export default ItemDetailContainer