import React from "react";

const ItemListContainer = ({greeting}) =>{
    return(
        <div>
            <div className="alert alert-danger text-center" role="alert"><p>{greeting}</p></div>
            
        </div>
    )
}

export default ItemListContainer