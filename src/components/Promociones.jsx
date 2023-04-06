import React from "react";
import "../css/promociones.css"
import { Link } from "react-router-dom"


const Promociones = () => {

    function promoDetails() {
        console.log("click");

    }

    return (

        <div id="containerPromociones">

            <div id="bannerPromociones" >
                <img src="https://kfc.com.ar/images/pages/1543617919portada-web.jpg" alt="Promociones" />
            </div>

            <div id="containerCupones">

                <div className="boxCupon ">
                    <Link to="" onClick={promoDetails}>
                        <img src="https://kfc.com.ar/images/promociones/1632931492KFC.jpg" alt="" />
                    </Link>
                </div>

                <div className="boxCupon">
                    <Link to="" onClick={promoDetails}>
                        <img src="https://kfc.com.ar/images/promociones/1675965545Cup%C3%B3n%20Web%20-%20Kreamball%201.jpg" alt="" />
                    </Link>
                </div>

                <div className="boxCupon">
                    <Link to="" onClick={promoDetails}>
                        <img src="https://kfc.com.ar/images/promociones/1675965561Cup%C3%B3n%20Web%20-%20Tostado.jpg" alt="" />
                    </Link>
                </div>

            </div >

        </div>

    )
}

export default Promociones