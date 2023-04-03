import React, { useEffect, useState } from "react";

import arrayProductos from "./json/arrayProductos.json"
import ItemList from "./itemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const {menuId} = useParams()

    useEffect(() => {
        console.log(menuId);
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(menuId ? arrayProductos.filter(prod => prod.categoria === menuId) : console.log("error"))
            } ,1000);
        })

        promesa.then((data) => {
            console.log(data);
            setItems(data)
        })

    }, [menuId])

    return (
        <div className="container py-5">
            <div className="row">
              <ItemList items={items} />
            </div>
        </div>

    )
}

export default ItemListContainer