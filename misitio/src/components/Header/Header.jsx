import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="container-header">
        <div className="header-titulo">
          <h3>¡Hola! Bienvenido a</h3>
          <div className="header-titulo__container">
            <p>
              Developer especializado en Ux/UI, creativo, apasionado y amante del
              buen diseño.
            </p>
            <h2>mi sitio web</h2>
          </div>
        </div>
      </div>
      <div className="header-parrafo">
        <p>
          “Lo funcional es mejor que lo bello, <br />
          porque lo que funciona bien <br />
          permanece en el tiempo”.
        </p>
      </div>
    </div>
  );
};

export default Header;
