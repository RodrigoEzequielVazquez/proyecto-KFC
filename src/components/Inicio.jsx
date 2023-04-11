import React from "react";
import '../css/inicio.css';
import { Link } from "react-router-dom";

const Inicio = () => {
    return (
        <div className="contenedorImagenesInicio">

            <div className="imagenInicioPortada">
                <Link to={"/menu"}>
                    <img src="images/Portada-Web-PEDIR-AHORA.png" alt="" />
                </Link>
            </div>

            <div className="imagenesInicio">
                <div>
                    <img src="images/KFC_PICKUP_BANNER_WEB.jpg" alt="" />
                    <Link to={"/menu"}>
                        <img src="images/Ver-el-Menú-Pág-Principal.jpg" alt="" />
                    </Link>
                </div>
                <div>
                    <Link to={"/locales"}>
                        <img src="images/buscar-KFC.jpg" alt="" />
                    </Link>
                    <img src="images/Ensalada-Americana.jpg" alt="" />
                </div>
            </div>
        </div>

    )

}


export default Inicio