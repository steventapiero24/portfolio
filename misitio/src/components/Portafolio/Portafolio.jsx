import { Button } from "@mui/material";
import CustomModal from "../CunstomModal";
import loginAngular from "../../assets/loginangular.webp";
import idbangular from "../../assets/idbangular.webp";
import idsob from "../../assets/idsob.webp";
import reactcartera from "../../assets/reactcartera.webp";
import "../Portafolio/Portafolio.css";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    image: idbangular,
    title: "Banco interamericano de desarrollo",
    technologies:
      "Figma - Angular - Sass - Git - Gitlab - AngularUI - Prime Ng - Typescript",
    team: "EEUU, Argentina, España",
    habilidades:
      "Figma, UxUi, UIkit, Metodologias agiles, Angular, Angular UI, Prime NG, bitbucket, canvan, Sass, Git, Gitub",
    description: "Participé en el desarrollo de un sistema bancario basado en un panel de control integral, diseñado para administradores de préstamos. Este panel incluía tablas dinámicas, indicadores clave, informes automatizados, cálculo de cifras financieras y múltiples estados en cada componente, permitiendo la gestión eficiente de créditos y la generación de informes anuales sobre el portafolio crediticio. Mi rol se centró en el prototipado y la definición del Design System, aplicando la metodología Atomic Design para estructurar pantallas, componentes y microcomponentes de manera modular y escalable. Posteriormente, llevé estos diseños a la maquetación en Angular, creando los componentes iniciales del proyecto para que el equipo de desarrollo frontend integrara la lógica necesaria. Para garantizar escalabilidad y mantenimiento eficiente, se emplearon bibliotecas especializadas de Angular Material y otras herramientas del ecosistema. Esta metodología permitió optimizar el desarrollo, asegurando una interfaz consistente y una experiencia de usuario fluida y para todo el tema de estilos utilice Sass, implementando variables, ng class, estilos aisaldos y generales dependiendo el componente a trabajar",
  },
  {
    id: 2,
    image: reactcartera,
    title: "Cartera inteligente Banco Interamericano",
    technologies: "Figma - React - Sass - ReactUI - Css",
    team: "EEUU, España",
    habilidades:
      "Figma, UIkit, Metodologias agiles, React, React UI, bitbucket, Sass, Git, Gitub",
    description: "Participé en el desarrollo de un portal de cartera bancaria, un proyecto clave en mi primer contacto con React y la biblioteca Material UI. El objetivo principal era crear una interfaz altamente visual, intuitiva y fácil de entender, priorizando la claridad en la presentación de datos a través de gráficos, indicadores y una experiencia de usuario limpia y amigable. Mi rol se enfocó en la maquetación de componentes en React, utilizando Material UI para garantizar un diseño cohesivo y escalable. Diseñé y estructuré diversos elementos como gráficos interactivos, indicadores clave, tablas dinámicas y submenús, asegurando una experiencia consistente y eficiente. En total, se desarrollaron más de 25 indicadores, cada uno con su propio conjunto de componentes optimizados para la visualización de datos financieros. Este enfoque modular permitió construir una interfaz flexible y de fácil mantenimiento, mejorando la accesibilidad y usabilidad del portal. Para todo el tema de estilos utilice Sass, esto me permitio tener todo super organizado y facil de mantener",
  },
  {
    id: 3,
    image: idsob,
    title: "Instituto de ciberseguridad de España",
    technologies:
      "Figma, UIkit, Angular - Sass - Git - Gitlab - PrimeNg - Figma",
    team: "España",
    habilidades: "Angular, Prime NG, Sass, Git, Gitlab",
    description: "Participé en el desarrollo de un sistema de autenticación basado en credenciales QR, diseñado para mejorar la seguridad y facilitar el acceso de los usuarios. La solución permitía gestionar credenciales mediante tokens únicos, garantizando que cada cliente tuviera un acceso exclusivo y seguro. Para ello, se desarrollaron dos interfaces: un panel de control para el cliente y un panel de usuario, adaptados a sus respectivas necesidades.Este proyecto, con una duración de cuatro meses, involucró una profunda fase de investigación, diseño UX/UI y múltiples iteraciones, debido a su naturaleza experimental. Se mantuvo una comunicación constante con el cliente final, lo que llevó a múltiples ajustes y mejoras a lo largo del desarrollo. Mi rol se centró en la creación del prototipo y el Design System, transformando los requerimientos y conversaciones con el cliente en una interfaz gráfica intuitiva, accesible y visualmente elegante. Posteriormente, llevé estos diseños a la maquetación en Angular, utilizando PrimeNG para los componentes y Sass para la personalización y optimización de estilos.",
  },
  {
    id: 4,
    image: loginAngular,
    title: "Angular test",
    technologies: "Angular16 - Angular Material - Ts - Css - Figma",
    team: "Colombia",
    habilidades: "Angular, AngularUi, css, Gsap",
    description: "Esta web se realizo para mostar un poco de como preparo un proyecto, el codigo que utilizo, la performance, como manejo el tema de ramas, git, git hub, tambien como modifico librerias de Angular para poder utilziar componentes y reutilizarlos, todo lo realice ya que en mis anteriores proyectos no puedo mostrar codigo por temas de proteccion y privacidad",
  },
];

const Portafolio = () => {
  const [openModal, setOpenModal] = useState(null);
  const handleOpen = (modalId) => setOpenModal(modalId);
  const handleClose = () => setOpenModal(null);

  // Crear un array de referencias para las imágenes
  const imgRefs = useRef([]);

  useEffect(() => {
    if (window.innerWidth > 768) { // Solo en escritorio
      imgRefs.current.forEach((img, index) => {
        gsap.fromTo(
          img,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: index % 2 === 0 ? 50 : 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: img,
              start: "top 80%",
              markers: false,
            },
          }
        );
      });
    }
  }, []);
  

  return (
    <div className="portafolio" id="projectos">
      <section className="section">
        {projects.map(
          (
            { id, image, title, technologies, description, team, habilidades },
            index
          ) => (
            <div
              key={id}
              className={`img img--${index + 1}`}
              style={{ backgroundImage: `url(${image})` }}
              ref={(el) => (imgRefs.current[index] = el)} // Asignar la referencia a cada imagen
            >
              <div className="img__info">
                <div className="img__info-tecnologias">
                  <div className="img__info-tecnologias-info">
                    <div className="img__info-tecnologias-header">{title}</div>
                    <span>{technologies}</span>
                  </div>
                </div>
                <div className="img__info-tecnologias-button">
                  <Button
                    variant="contained"
                    onClick={() => handleOpen(id)}
                    sx={{ m: 1 }}
                  >
                    Ver Proyecto
                  </Button>
                </div>
                <CustomModal
                  open={openModal === id}
                  handleClose={handleClose}
                  title={title}
                >
                  <div className="customModal__container">
                    <h3 className="customModal__label">Team</h3>
                    <p className="customModal__description">{team}</p>
                  </div>
                  <div className="customModal__container">
                    <h3 className="customModal__label">Descripcion</h3>
                    <p className="customModal__description">{description}</p>
                    {id === 4 && (
                      <div className="customModal__container-button">
                        <a href="https://github.com/steventapiero24/Angular16-test"> Ir al repositorio </a>
                        <a href="https://angular16-test.netlify.app/"> Ver en vivo </a>
                      </div>  
                    )}
                  </div>
                  <div className="customModal__container">
                    <h3 className="customModal__label">Habilidades</h3>
                    <p className="customModal__description">{habilidades}</p>
                  </div>
                </CustomModal>
              </div>
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default Portafolio;
