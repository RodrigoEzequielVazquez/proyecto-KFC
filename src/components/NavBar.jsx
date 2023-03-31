import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {

    return (
        <div className="principalContainer">
            <header><a className="iconoPrincipal" href="/"><img src={"icons/logo.png"} alt="" /></a></header>
            <div className="containerMenu">
                <nav className="expandMenu navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand iconoLetras" href="/" width={180}><img src={"icons/KFC-logo.png"} alt={"KFC Logo en letras"} width={300} /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/menu">MENU</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/promociones">PROMOCIONES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/locales">LOCALES</a>
                                </li>
                                <form action={"/menu"}>
                                    <button className="btn btn-danger">PEDI EL MEJOR POLLO ONLINE</button>
                                </form>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="cartSection">
                    <CartWidget />
                </div>
            </div>
        </div>

    )
}

export default NavBar