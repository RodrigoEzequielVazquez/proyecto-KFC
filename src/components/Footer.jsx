import React from "react";
import '../css/footer.css';

const Footer = () => {
    return (
        <div className="contenedorFooter">
            <div className="iconoFooter">
                <img src="icons/logo.png" alt="" />
            </div>

            <div className="infoFooter">
                <div>
                    <p>Locales</p>
                    <a href="">Buscar KFC</a>
                </div>
                <div>
                    <p>Comunicacion</p>
                    <a href="">Contacto</a>
                </div>
                <div>
                    <p>RRHH</p>
                    <a href="">Trabaja con nosotros</a>
                </div>
            </div>
            <div className="containerRedesTerminos">
                <div className="redesFooter">
                    <a href="https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2FKFCArgentina%2Fapp%2F137541772984354%2F" target={"_blank"} rel="noreferrer"><img className="facebook" src="icons/facebook.png" alt="" /></a>

                    <a href="https://twitter.com/KFC_Argentina" target={"_blank"} rel="noreferrer"><img src="icons/twitter.svg" alt="" /></a>

                    <a href="https://www.instagram.com/kfc_argentina/" target={"_blank"} rel="noreferrer"><img src="icons/instagram.svg" alt="" /></a>

                    <a href="https://www.youtube.com/channel/UCFVMW8vKJP_DQd2F0ZIBIfQ" target={"_blank"} rel="noreferrer"><img src="icons/youTube.svg" alt="" /></a>


                </div>

                <div className="terminosFooter">
                    <a href="">Terminos</a>
                    <a href="">Privacidad</a>
                    <p>KFC Argentina - 2018</p>
                </div>
            </div>

            <div className="tirasRojas">
                <img src="images/red_stripes.png" alt="" />
            </div>
        </div>
    )
}

export default Footer