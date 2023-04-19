import React from "react";
import '../css/footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="contenedorFooter">
            <div className="iconoFooter">
                <img src="https://kfc.com.ar/images/m_logo_footer.png" alt="Logo KFC" />
            </div>
    
            <div className="infoFooter">
                <div>
                    <p>Locales </p>
                    <Link to="/locales">Buscar KFC</Link>
                </div>
                <hr />
                <div>
                    <p>Comunicacion</p>
                    <Link to="/contacto">Contacto</Link>
                </div>
                <div>
                    <p>RRHH</p>
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeYhkmz5ve7AmDhAWN93G1UXN2vz4LZYkWtj-MqrDJ3NjhdXA/viewform" target={"_blank"} rel="noreferrer">Trabaja con nosotros</Link>
                </div>
                <hr />
            </div>
            <div className="containerRedesTerminos">
                <div className="redesFooter">
                    <Link to="https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2FKFCArgentina%2Fapp%2F137541772984354%2F" target={"_blank"} rel="noreferrer"><img className="facebook" src="icons/facebook.png" alt="Icono Facebook" /></Link>

                    <Link to="https://twitter.com/KFC_Argentina" target={"_blank"} rel="noreferrer"><img src="icons/twitter.svg" alt="Icono Twitter" /></Link>

                    <Link to="https://www.instagram.com/kfc_argentina/" target={"_blank"} rel="noreferrer"><img src="icons/instagram.svg" alt="Icono Instagram" /></Link>

                    <Link to="https://www.youtube.com/channel/UCFVMW8vKJP_DQd2F0ZIBIfQ" target={"_blank"} rel="noreferrer"><img src="icons/youtube.svg" alt="Icono YouTube" /></Link>
                </div>

                <div className="terminosFooter">
                    <div>
                    <Link to="/terminos">Terminos</Link>
                    <Link to="/privacidad">Privacidad</Link>
                    </div>
                    <p>KFC Argentina - 2018</p>
                </div>
            </div>

            <div className="tirasRojas">
                <img src="images/red_stripes.png" alt="Tiras rojas" />
            </div>
        </div>
    )
}

export default Footer