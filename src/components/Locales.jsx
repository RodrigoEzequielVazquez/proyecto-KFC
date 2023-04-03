import React, { useState, useEffect } from "react";
import arrayLocales from "./json/arrayLocales.json"
import LocalesList from "./LocalesList";



const Locales = () =>{

    const [locales,setLocales] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayLocales)
            } );

        })

        promesa.then((data) => {
            setLocales(data)
        })

    }, [])

    return(
        <div>
            <div>
                <LocalesList locales={locales}/>
            </div>
        </div>
    )
}

export default Locales