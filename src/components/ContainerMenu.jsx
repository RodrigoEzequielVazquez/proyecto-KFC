import React from "react";
import '../css/containerMenu.css';
import { Link } from "react-router-dom";

const ContainerMenu = () => {
    return (

        <div id="containerMenu">
            <div id="bannerMenu">
                <img src="https://kfc.com.ar/images/pages/1620751490KFC%20WEB%20-%20Portada%20Buckets%20B.jpg" alt="El mejor pollo del mundo" />

            </div>
            <div id="containerProductos">

                <div id="containerProductos1">

                    <Link to={"/menu/buckets"}>
                        <div className="boxProduct">
                            <img src="https://kfc.com.ar/images/menues/1620751655KFC%20-%20Categor%C3%ADa%20Buckets.jpg" alt="" />
                            <div className="productsName">
                                <b>BUCKETS</b>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/menu/piezas-snacks"}>
                        <div className="boxProduct">
                            <img src="https://kfc.com.ar/images/menues/1545340084cuadrados-portadas-piezas.jpg" alt="" />
                            <div className="productsName" >
                                <b>PIEZAS Y SNACKS</b>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/menu/acompañamientos"}>
                        <div className="boxProduct">
                            <img src="https://kfc.com.ar/images/menues/1636560553Menu%20Acompa%C3%B1amientos.jpg" alt="" />
                            <div className="productsName">
                                <b>ACOMPAÑAMIENTOS</b>
                            </div>
                        </div>
                    </Link>

                </div >

                <div id="containerProductos2">

                    <Link to={"/menu/boxes"}>
                        <div className="boxProduct">
                            <img src="https://kfc.com.ar/images/menues/1636548493DuoBox%20Recargado.jpg" alt="" />
                            <div className="productsName">
                                <b>BOXES</b>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/menu/sandwiches"}>
                        <div className="boxProduct">
                            <img src="https://kfc.com.ar/images/menues/1636560271Menu%20Sandwiches%20.jpg" alt="" />
                            <div className="productsName">
                                <b>SANDWICHES</b>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/menu/postres"}>
                        <div className="boxProduct">
                            <img src="https://kfc.com.ar/images/menues/1679508810KFC%20-%20Categor%C3%ADa%20Postres%20V2%20-%20TEMP.jpg" alt="" />
                            <div className="productsName">
                                <b>POSTRES</b>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default ContainerMenu