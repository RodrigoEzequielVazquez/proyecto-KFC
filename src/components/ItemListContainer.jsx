import React, { useEffect, useState } from "react";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore";
import Loading from "./Loading";
import arrayBanners from "./json/banners.json"

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { menuId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "productos")
        const q = menuId ? query(itemsCollection, where("categoria", "==", menuId)) : itemsCollection
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map(prod =>
                ({ id: prod.id, ...prod.data() })))
            setLoading(false)
        })

    }, [menuId])

    const bannerCategory = arrayBanners.find(el => el.nombre === menuId)
    console.log(bannerCategory.img);

    return (
        <div id="containerProductos">
            <div><img src={bannerCategory.img} alt={bannerCategory.nombre} className=" w-100"/>
            </div>
            <div className="container py-5">
                <div className="row">
                    {loading ? <Loading /> : <ItemList items={items} />}
                </div>
            </div>
        </div>

    )
}

export default ItemListContainer