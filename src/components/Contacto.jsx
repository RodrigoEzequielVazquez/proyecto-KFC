import React from "react";
import arrayLocales from "../components/json/arrayLocales.json"
import "../css/contacto.css"

const Contacto = () => {

    return (
        <div id="contenedorContacto">
            <form action="" id="formContacto">
                <div className="form-group">
                    <h1 className="form_title">Contacto</h1>
                </div>

                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Nombre y Apellido</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" required="" placeholder="Ingrese nombre y apellido"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Correo Electrónico</label>
                    <input type="email" className="form-control width_100" id="email" name="email" required="" aria-describedby="emailHelp" placeholder="Ingresar direccion de correo"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputTelefono">Telefono de contacto</label>
                    <input type="text" className="form-control width_100" id="telefono" name="telefono" required="" placeholder="Ingrese Telefono"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleSelectLocal">Local</label>
                    <select className="form-control width_100" id="local" name="local" required="">
                        {
                            arrayLocales.map(locales => (
                                <option key={locales.id} value={locales.localidad}>{locales.localidad}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleTextarea">Comentarios</label>
                    <textarea className="form-control width_100" id="comentario" name="comentario" required="" rows="5"></textarea>
                </div>

                <div className="form-group" id="verificacionRobot">
                    <input className="form-check-input ms-3" type="checkbox" value="" id="invalidCheck" required />
                    <label className="form-check-label" htmlFor="invalidCheck">
                        No soy un robot
                    </label>
                    <div className="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-danger">Enviar</button>
                </div>

            </form>

        </div>

    )
}

export default Contacto