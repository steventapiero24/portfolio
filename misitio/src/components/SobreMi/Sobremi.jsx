import React, { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import "../SobreMi/Sobremi.css";
import ImageComponent from "../ImageComponent";
import steven from "../../assets/steven.webp";
import deportes from "../../assets/deportes.png";
import diseñador from "../../assets/diseñador.png";
import aprendizajec from "../../assets/aprendizajec.png";
import trabajar from "../../assets/trabajar.png";

gsap.registerPlugin(ScrollTrigger);

const sobremi = [
  {
    id: 1,
    title: "Diseñador no diseñador",
    description: "Inicié como diseñador gráfico y ahora amo el desarrollo",
    imageUrl: diseñador,
  },
  {
    id: 2,
    title: "Deportes y aire libre",
    description: "Amante del fútbol, el gimnasio y estar al aire libre",
    imageUrl: deportes,
  },
  {
    id: 3,
    title: "Aprendizaje continuo",
    description: "Aprendo rápido, sin importar si es autoaprendizaje",
    imageUrl: aprendizajec,
  },
  {
    id: 4,
    title: "Trabajar en equipo",
    description: "Me encanta colaborar y aprender de otros",
    imageUrl: trabajar,
  },
];

const SobreMi = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    // Animación de rotación con GSAP (esto sigue igual)
    gsap.utils.toArray(".sobremi__container-info-icon-img").forEach((img, index) => {
      gsap.to(img, {
        rotate: 360, // Rota la imagen 360 grados
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 2, // Se mueve a medida que scrolleas
        },
        delay: index * 0.2, // Aplica un pequeño retraso por imagen
      });
    });
  
    // Sticky Section solo en escritorio
    if (window.innerWidth > 768) { // Solo en pantallas mayores a 768px
      const section = document.getElementById("sticky-section");
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsFixed(true);
              setTimeout(() => setIsFixed(false), 2000);
            }
          });
        },
        { threshold: 1 }
      );
  
      if (section) observer.observe(section);
  
      return () => {
        if (section) observer.unobserve(section);
      };
    }
  }, []);
  

  return (
    <div className="sobremi" id="sobremi">
      <div className="sobremi__container">
        <div className={`sobremi__container-title section ${isFixed ? "fixed" : ""}`}>
          <h2>
            CONOCE <span> UN <br /> POCO </span> <br />
            SOBRE MI
          </h2>
          <div className="sobremi__container-info-image">
            <ImageComponent src={steven} alt="Steven" />
          </div>
        </div>
        <div className="sobremi__container-items">
          {sobremi.map(({ id, title, description, imageUrl }, index) => (
            <div key={id} className="sobremi__container-info">
              <div className="sobremi__container-info-icon">
                <img className="sobremi__container-info-icon-img" src={imageUrl} alt={title} />
              </div>
              <div className="sobremi__container-info-description">
                <h5>{title}</h5>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
