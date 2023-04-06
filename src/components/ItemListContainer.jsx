import React, { useEffect, useState } from "react";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore";

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const { menuId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "productos")
        const q = menuId ? query(itemsCollection, where("categoria", "==", menuId)) : itemsCollection
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map(prod =>
                ({ id: prod.id, ...prod.data() })
            ))
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