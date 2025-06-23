import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import "../SobreMi/Sobremi.css";
import ImageComponent from "../ImageComponent";
import steven from "../../assets/steven.webp";
import deportes from "../../assets/deportes.png";
import diseñador from "../../assets/diseñador.png";
import aprendizajec from "../../assets/aprendizajec.png";
import trabajar from "../../assets/trabajar.png";

// Registra los plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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
 useEffect(() => {
  const checkSmoother = setInterval(() => {
    const smoother = gsap.core.globals().ScrollSmoother?.get();
    if (!smoother) return;

    ScrollTrigger.create({
      trigger: ".sobremi__container-title",
      start: "top top",
      end: "+=700",
      pin: true,
      scrub: true,
      pinSpacing: true,
      anticipatePin: 1,
    });

    gsap.utils.toArray(".sobremi__container-info-icon-img").forEach((img, index) => {
      gsap.to(img, {
        rotate: 360,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
        delay: index * 0.2,
      });
    });

    clearInterval(checkSmoother);
  }, 100);

  return () => {
    clearInterval(checkSmoother);
    // Limpiamos SOLO los scrolltrigger de esta sección
    ScrollTrigger.getAll()
      .filter(t => t.trigger && t.trigger.closest('.sobremi'))
      .forEach(t => t.kill());
  };
}, []);


  return (
    <div className="sobremi" id="sobremi">
      <div className="sobremi__container">
        <div className="sobremi__container-title section">
          <h2>
            CONOCE <span> UN <br /> POCO </span> <br />
            SOBRE MI
          </h2>
          <div className="sobremi__container-info-image">
            <ImageComponent src={steven} alt="Steven" />
          </div>
        </div>
        <div className="sobremi__container-items">
          {sobremi.map(({ id, title, description, imageUrl }) => (
            <div key={id} className="sobremi__container-info">
              <div className="sobremi__container-info-icon">
                <img
                  className="sobremi__container-info-icon-img"
                  src={imageUrl}
                  alt={title}
                />
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
