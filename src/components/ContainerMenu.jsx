import React from "react";
import '../css/containerMenu.css';
import { Link } from "react-router-dom";

const ContainerMenu = () => {
    return (

        <div id="containerMenu">
            <div id="bannerMenu">
                <img src="https://kfc.com.ar/images/pages/1620751490KFC%20WEB%20-%20Portada%20Buckets%20B.jpg" alt="El mejor pollo del mundo" />
            </div>

            <div id="containerCategoria">
                <div className="boxProduct">
                    <Link to={"/menu/buckets"}>
                        <img src="https://kfc.com.ar/images/menues/1620751655KFC%20-%20Categor%C3%ADa%20Buckets.jpg" alt="BUCKETS" />
                        <div className="productsName">
                            <b>BUCKETS</b>
                        </div>
                    </Link>
                </div>

                <div className="boxProduct">
                    <Link to={"/menu/piezas-snacks"}>
                        <img src="https://kfc.com.ar/images/menues/1545340084cuadrados-portadas-piezas.jpg" alt="PIEZAS Y SNACKS" />
                        <div className="productsName" >
                            <b>PIEZAS Y SNACKS</b>
                        </div>
                    </Link>
                </div>

                <div className="boxProduct">
                    <Link to={"/menu/acompañamientos"}>
                        <img src="https://kfc.com.ar/images/menues/1636560553Menu%20Acompa%C3%B1amientos.jpg" alt="ACOMPAÑAMIENTOS" />
                        <div className="productsName">
                            <b>ACOMPAÑAMIENTOS</b>
                        </div>
                    </Link>
                </div>

                <div className="boxProduct">
                    <Link to={"/menu/boxes"}>
                        <img src="https://kfc.com.ar/images/menues/1636548493DuoBox%20Recargado.jpg" alt="BOXES" />
                        <div className="productsName">
                            <b>BOXES</b>
                        </div>
                    </Link>
                </div>

                <div className="boxProduct">
                    <Link to={"/menu/sandwiches"}>
                        <img src="https://kfc.com.ar/images/menues/1636560271Menu%20Sandwiches%20.jpg" alt="SANDWICHES" />
                        <div className="productsName">
                            <b>SANDWICHES</b>
                        </div>
                    </Link>
                </div>

                <div className="boxProduct">
                    <Link to={"/menu/postres"}>
                        <img src="https://kfc.com.ar/images/menues/1679508810KFC%20-%20Categor%C3%ADa%20Postres%20V2%20-%20TEMP.jpg" alt="POSTRES" />
                        <div className="productsName">
                            <b>POSTRES</b>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default ContainerMenu