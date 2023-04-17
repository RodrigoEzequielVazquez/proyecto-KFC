import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore"
import Loading from "./Loading";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading,setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "productos")
        const q = id ? query(itemsCollection, where("nombre", "==", id)) : itemsCollection
        getDocs(q).then((snapShot) => {
            (snapShot.docs.map(prod =>
                setItem({ id: prod.id, ...prod.data() })))
                setLoading(false)
        })
    }, [id])

    return (
        <div className="container">
           {loading ? <Loading/> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer