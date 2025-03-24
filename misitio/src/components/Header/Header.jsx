import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="container-header">
        <div className="header-titulo">
          <p>“Lo funcional es mejor que lo bello,  porque lo que funciona bien permanece en el tiempo”.</p>
          <span>Bienvenido al sitio web de</span>
          <h3>Steven Tapiero</h3>
        </div>
      </div>
      <div className="header-titulo__container">
        <p>
          Developer especializado en Ux/UI, creativo, apasionado y amante del
          buen diseño.
        </p>
      </div>
    </div>
  );
};

export default Header;
