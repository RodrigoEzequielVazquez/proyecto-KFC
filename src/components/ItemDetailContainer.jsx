import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore"


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "productos")
        const q = id ? query(itemsCollection, where("nombre", "==", id)) : itemsCollection
        getDocs(q).then((snapShot) => {
            (snapShot.docs.map(prod =>
                setItem({ id: prod.id, ...prod.data() })
            ))
        })

    }, [id])

    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer