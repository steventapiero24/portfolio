import "./Header.css";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";


const Header = () => {
  const tituloRef = useRef(null);
  const spanRef = useRef(null);
  const parrafoRef = useRef(null);
  const parrafotwoRef = useRef(null);


  useEffect ( () => {
    
    gsap.fromTo (
      parrafoRef.current, 
      {opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" }
    )
    gsap.fromTo (
      spanRef.current, 
      {opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power1.in", delay: 0.2 }
    )
    gsap.fromTo (
      tituloRef.current, 
      {opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power1.in", delay: 0.8 }
    )
    gsap.fromTo (
      parrafotwoRef.current, 
      {opacity: 0, x: 80 },
      { opacity: 1, x: 0, duration: 1, ease: "power1.inOut", delay: 1.5 }
    )

  }, 
  []);

  return (
    <div className="header" id="header">
      <div className="container-header">
        <div className="header-titulo">
          <p ref={parrafoRef}>Diseñador UI Frontend | UX | maquetación en Angular & React | UI Kits</p>
          <span ref={spanRef}>Bienvenido al sitio web de</span>
          <h3 ref={tituloRef} >Steven Tapiero</h3>
        </div>
      </div>
      <div className="header-titulo__container">
        <p ref={parrafotwoRef}>
          “Lo funcional es mejor que lo bello,  porque lo que funciona bien permanece en el tiempo”.
        </p>
      </div>
    </div>
  );
};

export default Header;
