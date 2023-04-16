import React from "react";
import '../css/localesList.css';

const LocalesList = ({ locales }) => {
    return (
        <div id="contenedorLocales">
            {
                locales.map(local =>
                    <div key={local.id} id="localesCard">
                        <div id="localesLocalidad">
                            <img src="https://kfc.com.ar/images/marker_chico.png" alt="KFC loco en letras" />
                            <h2>{local.localidad.toUpperCase()}</h2>
                        </div>
                        <div id="infoLocales">
                            <p>{local.localidad}</p>
                            <p>{local.ubicacion}</p>
                            <p>{local.ciudad}</p>
                        </div>
                        <div id="telefonoLocales">
                            <p>{local.telefono}</p>
                        </div>
                    </div>

                )
            }

        </div>
    )
}

export default LocalesList