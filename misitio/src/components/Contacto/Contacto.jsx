import React from "react";
import Css from "../Contacto/Contacto.css";
import EsferasComponent from "../ImageComponent";
import Thankyou from "../../assets/thankyou.png";

const Contacto = () => {
  return (
    <div className="contact" id="contacto">
      <div className="contact__container-mobil">
        <div class="horizontal-scrolling-items">
            contacto
        </div>
      </div>
      <div className="contact__container">
        <div className="contact__container-slider">
            <span>Contacto</span>
        </div>
        <div className="contact__container-info">
          <div className="contact__container-info-form">
            <form action="">
              <input type="text" placeholder="Nombre y apellido"></input>
              <input type="text" placeholder="Tel"></input>
              <textarea type="text" placeholder="Mensaje"></textarea>
              <button type="send">Enviar</button>
            </form>
          </div>
          <div className="contact__container-info-image">
            <EsferasComponent src={Thankyou} alt="Thanyou" />
          </div>
        </div>
        <div className="contact__container-social">
          <div className="contact__container-social-links">
            <a
              href="https://www.linkedin.com/in/brandon-steven-tapiero-yela-6556182aa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.linkedin.com/in/brandon-steven-tapiero-yela-6556182aa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@_steventapiero_"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tik tok
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
