import React, { useState } from "react";
import "../css/promociones.css"
import arrayLocales from "./json/arrayLocales.json"
import promos from "./json/promo.json"
import { Link } from "react-router-dom";

const Promociones = () => {

    const expresiones = {
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }

    const [nombrePromo, setNombrePromo] = useState("")
    const [descuento, setDescuento] = useState("")
    const [email, setEmail] = useState(false)
    const [modalBody, setModalBody] = useState("Ha ocurrido un error solicitando el voucher.Intentalo mas tarde. Recuerda que si ya solicitaste un cupon antes no podras solicitar otro")

    const promoInfo = (nombre, descuento) => {
        setDescuento(descuento)
        setNombrePromo(nombre)
    }

    const validarMail = (e) => {
        setEmail(true)
        if (expresiones.correo.test(e.target.value)) {
            setModalBody("La solicitud de la promocion fue exitosa. Pronto recibiras el codigo en " + e)
        }

    }

    return (

        <div id="containerPromociones">

            <div id="bannerPromociones" >
                <img src="https://kfc.com.ar/images/pages/1543617919portada-web.jpg" alt="Promociones" />
            </div>

            <div id="containerCupones">
                {
                    promos.map((promo) =>
                        <div className="boxCupon" key={promo.nombre}>
                            <Link href="" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => promoInfo(promo.nombre, promo.descuento)}>
                                <img src={promo.img} alt={promo.nombre} />
                            </Link>
                        </div>
                    )
                }

            </div >

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="modalTitle" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalTitle">Solicitud de promo: {nombrePromo}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h3>{descuento}{nombrePromo}</h3>
                            <h3>Detalles de la promocion</h3>
                            <h3>Promocion vigente a partir del 28-09-2021.Vence el 31-12-2024</h3>
                            <h3>Domingos-Lunes-Martes-Miercoles-Jueves-Viernes-Sabados.</h3>
                            <ul>
                                {arrayLocales.map(locales => <li key={locales.id}>{locales.localidad}</li>)}
                            </ul>
                            <div id="inputPromo">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="Ingrese su email" onInput={(e) => { validarMail(e) }} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            {
                                email ? <button className="btn btn-danger" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" >Solicitar</button> : <button className="btn btn-danger">Solicitar</button>
                            }
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-top">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Solicitud de promo:</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {modalBody}
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promociones
