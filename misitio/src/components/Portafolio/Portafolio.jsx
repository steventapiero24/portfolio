import { Button } from "@mui/material";
import CustomModal from "../CunstomModal.jsx";
import futuroValor from "../../assets/futuro-valor.webp";
import idbangular from "../../assets/idbangular.webp";
import idsob from "../../assets/idsob.webp";
import branding from "../../assets/branding.webp";
import motion from "../../assets/motion.webp";
import reactcartera from "../../assets/reactcartera.webp";
import GrowingSphere from "../../components/GrowingSphere/GrowingSphere";
import "../Portafolio/Portafolio.css";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, image: idbangular, title: "Banco interamericano de desarrollo", technologies: "Figma - Angular - Sass - Git - Gitlab - AngularUI - Prime Ng - Typescript", team: "EEUU, Argentina, España", habilidades: "Figma, UxUi, UIkit, Metodologias agiles, Angular, Angular UI, Prime NG, bitbucket, canvan, Sass, Git, Gitub", description: "Participé en el desarrollo de un sistema bancario..." },
  { id: 2, image: reactcartera, title: "Cartera inteligente Banco Interamericano", technologies: "Figma - React - Sass - ReactUI - Css", team: "EEUU, España", habilidades: "Figma, UIkit, Metodologias agiles, React, React UI, bitbucket, Sass, Git, Gitub", description: "Participé en el desarrollo de un portal de cartera bancaria..." },
  { id: 3, image: idsob, title: "España Instituto de ciberseguridad", technologies: "Figma, UIkit, Angular - Sass - Git - Gitlab - PrimeNg - Figma", team: "España", habilidades: "Angular, Prime NG, Sass, Git, Gitlab", description: "Participé en el desarrollo de un sistema de autenticación basado en credenciales QR..." },
  { id: 4, image: futuroValor, title: "Futuro valor", technologies: "Wordpress - Elementor pro - Js - Css - Figma", team: "Colombia", habilidades: "Wordpress, Elementor, css, Gsap", description: "Sitio web desarrollado para Futuro Valor..." },
  { id: 5, image: branding, title: "Branding", technologies: "Illustrator - Photopshop - Figma", team: "Colombia", habilidades: "Illustrator - Photopshop - Figma", description: "  Revisa todos mis trabajo en Behance" },
  { id: 6, image: motion, title: "Motion design", technologies: "After effects - Photoshop - Illustrator - Cinema 4D - Adobe Premier", team: "Colombia", habilidades: "After effects - Photoshop - Illustrator - Cinema 4D - Adobe Premier", description: "Revisa todos mis trabajo en Behance" },
];

const Portafolio = () => {
  const [openModal, setOpenModal] = useState(null);
  const handleOpen = (modalId) => setOpenModal(modalId);
  const handleClose = () => setOpenModal(null);

  const imgRefs = useRef([]);

  // Preload de imágenes
  const preloadImages = (images) =>
    Promise.all(
      images.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
          })
      )
    );

  useEffect(() => {
    preloadImages(projects.map(p => p.image)).then(() => {
      // Animaciones GSAP una vez cargadas las imágenes
      imgRefs.current.forEach((img) => {
        gsap.fromTo(
          img,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              end: "bottom 20%",
              scrub: true,
            },
          }
        );
      });
    });
  }, []);

  return (
    <div className="portafolio" id="projectos">
      <div className="portafolio__titulo">
        <h2>Algunos de</h2>
        <h2> mis proyectos</h2>
      </div>
      <div className="portafolio__descipcion">
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</span>
      </div>
      <section className="section">
        {projects.map(({ id, image, title, technologies, description, team, habilidades }, index) => (
          <div key={id} className="container__portfolio">
            <div
              className={`portfolio__info portafolio__img img--${index + 1}`}
              ref={(el) => (imgRefs.current[index] = el)}
              style={{
                minHeight: "300px", // evita tirones iniciales
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                willChange: "transform, opacity",
              }}
            ></div>

            <div className="img__info-tecnologias">
              <div className="img__info-tecnologias-info">
                <div className="portfolio__info-tecnologias-header">{title}</div>
                <span className="portfolio__info-tecnologias-description">{technologies}</span>
              </div>
            </div>
            <div className="img__info-tecnologias-button">
              <Button variant="contained" onClick={() => handleOpen(id)} sx={{ m: 1 }}>
                Ver Proyecto
              </Button>
            </div>
            <CustomModal open={openModal === id} handleClose={handleClose} title={title}>
              <div className="customModal__container">
                <h3 className="customModal__label">Team</h3>
                <p className="customModal__description">{team}</p>
              </div>
              <div className="customModal__container">
                <h3 className="customModal__label">Descripcion</h3>
                <p className="customModal__description">{description}</p>
                {id === 4 && (
                  <div className="customModal__container-button">
                    <a href="https://futurovalor.com/"> Ir al repositorio </a>
                    <a target="_blank" rel="noreferrer" href="https://futurovalor.com/">
                      Ver en vivo
                    </a>
                  </div>
                )}
              </div>
              <div className="customModal__container">
                <h3 className="customModal__label">Habilidades</h3>
                <p className="customModal__description">{habilidades}</p>
              </div>
            </CustomModal>
          </div>
        ))}
      </section>
      <div className="section-button">
        <button className="button btn_outline btn__portafolio">
          <span>Ver mas proyectos</span>
          <GrowingSphere />
        </button>
      </div>
    </div>
  );
};

export default Portafolio;
