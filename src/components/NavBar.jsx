import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {

    return (
        <div className="principalContainer">
            <header><Link className="iconoPrincipal" to="/"><img src={"icons/logo.png"} alt="" /></Link></header>
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
                                    <NavLink className="nav-link active" aria-current="page" to={"/menu"}>MENU</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to={"/promociones"}>PROMOCIONES</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to={"/locales"}>LOCALES</NavLink>
                                </li>
                                <Link to={"/menu"}>
                                    <button className="btn btn-danger">PEDI ONLINE</button>
                                </Link>
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