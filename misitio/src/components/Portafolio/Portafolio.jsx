import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import CustomModal from "../CunstomModal"; // Importa el modal reutilizable
import clickerbait from "../../assets/clickerbait.jpg";
// import seguros from "../../assets/seguros.png";
import Phonegest from "../../assets/mockup-phonegest.png";
import hangarleia from "../../assets/hangarleia.png";
// import energia from "../../assets/energia.png";
import idbangular from "../../assets/idbangular.png";
import idsob from "../../assets/idsob.png";
import reactcartera from "../../assets/reactcartera.png";
// import login from "../../assets/login.png";
import "../Portafolio/Portafolio.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const projects = [
  {
    id: 1,
    image: idbangular,
    title: "Banco interamericano de desarrollo",
    technologies: "Figma - Angular - Sass - Git - Gitlab - AngularUI - Prime Ng - Typescript",
    team: "EEUU, Argentina, España",
    habilidades: "Figma, UxUi, UIkit, Metodologias agiles, Angular, Angular UI, Prime NG, bitbucket, canvan, Sass, Git, Gitub",
    description:
      "Participé en el desarrollo de un sistema bancario basado en un panel de control integral, diseñado para administradores de préstamos. Este panel incluía tablas dinámicas, indicadores clave, informes automatizados, cálculo de cifras financieras y múltiples estados en cada componente, permitiendo la gestión eficiente de créditos y la generación de informes anuales sobre el portafolio crediticio. Mi rol se centró en el prototipado y la definición del Design System, aplicando la metodología Atomic Design para estructurar pantallas, componentes y microcomponentes de manera modular y escalable. Posteriormente, llevé estos diseños a la maquetación en Angular, creando los componentes iniciales del proyecto para que el equipo de desarrollo frontend integrara la lógica necesaria. Para garantizar escalabilidad y mantenimiento eficiente, se emplearon bibliotecas especializadas de Angular Material y otras herramientas del ecosistema. Esta metodología permitió optimizar el desarrollo, asegurando una interfaz consistente y una experiencia de usuario fluida y para todo el tema de estilos utilice Sass, implementando variables, ng class, estilos aisaldos y generales dependiendo el componente a trabajar.",
  },
  {
    id: 2,
    image: reactcartera,
    title: "Cartera inteligente Banco Interamericano",
    technologies: "Figma - React - Sass - ReactUI - Css",
    team: "EEUU, España",
    habilidades: " Figma, UIkit, Metodologias agiles, React, React UI, bitbucket, Sass, Git, Gitub",
    description: "Participé en el desarrollo de un portal de cartera bancaria, un proyecto clave en mi primer contacto con React y la biblioteca Material UI. El objetivo principal era crear una interfaz altamente visual, intuitiva y fácil de entender, priorizando la claridad en la presentación de datos a través de gráficos, indicadores y una experiencia de usuario limpia y amigable. Mi rol se enfocó en la maquetación de componentes en React, utilizando Material UI para garantizar un diseño cohesivo y escalable. Diseñé y estructuré diversos elementos como gráficos interactivos, indicadores clave, tablas dinámicas y submenús, asegurando una experiencia consistente y eficiente. En total, se desarrollaron más de 25 indicadores, cada uno con su propio conjunto de componentes optimizados para la visualización de datos financieros. Este enfoque modular permitió construir una interfaz flexible y de fácil mantenimiento, mejorando la accesibilidad y usabilidad del portal. Para todo el tema de estilos utilice Sass, esto me permitio tener todo super organizado y facil de mantener",
  },
  {
    id: 3,
    image: idsob,
    title: "Instituto de ciberseguridad de España",
    technologies: "Figma, UIkit, Angular - Sass - Git - Gitlab - PrimeNg - Figma",
    team: "España",
    habilidades: "Angular, Prime NG, Sass, Git, Gitlab",
    description: "Participé en el desarrollo de un sistema de autenticación basado en credenciales QR, diseñado para mejorar la seguridad y facilitar el acceso de los usuarios. La solución permitía gestionar credenciales mediante tokens únicos, garantizando que cada cliente tuviera un acceso exclusivo y seguro. Para ello, se desarrollaron dos interfaces: un panel de control para el cliente y un panel de usuario, adaptados a sus respectivas necesidades.Este proyecto, con una duración de cuatro meses, involucró una profunda fase de investigación, diseño UX/UI y múltiples iteraciones, debido a su naturaleza experimental. Se mantuvo una comunicación constante con el cliente final, lo que llevó a múltiples ajustes y mejoras a lo largo del desarrollo. Mi rol se centró en la creación del prototipo y el Design System, transformando los requerimientos y conversaciones con el cliente en una interfaz gráfica intuitiva, accesible y visualmente elegante. Posteriormente, llevé estos diseños a la maquetación en Angular, utilizando PrimeNG para los componentes y Sass para la personalización y optimización de estilos.",
  },
  {
    id: 4,
    image: clickerbait,
    title: "Clickerbait",
    technologies: "Wordpress - Gsap - JS - Css",
    team: "España",
    habilidades: "Wordpress, css, Gsap",
    description: "Esta web se realizo para una agencia de marketing implementando gsap, en wordpress y Elementor",
  },
  {
    id: 5,
    image: Phonegest,
    title: "Phonegest",
    technologies: "Wordpress - Gsap - Js - Css",
    team: "EEUU, Argentina, España",
    habilidades: " Wordpress, Css, Javascript, Elementor, Figma",
    description: "Phonegest es una empresa de venta de productos de telecomunicaciones, tv y telefonia mobil, se rediseñaron todos los sitios web y las landing page(mas de 5) de mejoro en un 2000% el Seo y posicionamiento en buscadores, blog, mantenimiento, diseño y prototipado",
  },
  {
    id: 6,
    image: hangarleia,
    title: "El angar de Leia",
    technologies: "Wordpress - css - Woocommerce",
    team: "España",
    habilidades: " Wordpress - css - Woocommerce, Css, Figma",
    description: "E-commerce de figuras de acción y coleccionables, se rediseño por completo, se implemento el manejo de investarios, facturacion, email utomatizados etc.",
  },
  // {
  //   id: 7,
  //   image: energia,
  //   title: "Comparador energía",
  //   technologies: "Wordpress - Api - css - Js",
  //   team: "EEUU, Argentina, España",
  //   habilidades: " Metodologias agiles, Angular, Angular UI, Prime NG, bitbucket, canvas, Sass",
  //   description: "Contenido del Modal 7",
  // },
  // {
  //   id: 9,
  //   image: seguros,
  //   title: "Comparador energía",
  //   technologies: "Wordpress - Api - css - Js",
  //   team: "EEUU, Argentina, España",
  //   habilidades: " Metodologias agiles, Angular, Angular UI, Prime NG, bitbucket, canvas, Sass",
  //   description: "Contenido del Modal 7",
  // },
  // {
  //   id: 7,
  //   image: login,
  //   title: "Comparador energía",
  //   technologies: "Wordpress - Api - css - Js",
  //   team: "EEUU, Argentina, España",
  //   habilidades: " Metodologias agiles, Angular, Angular UI, Prime NG, bitbucket, canvas, Sass",
  //   description: "Contenido del Modal 7",
  // },
];

const Portafolio = () => {

  const [openModal, setOpenModal] = useState(null);
  const handleOpen = (modalId) => setOpenModal(modalId);
  const handleClose = () => setOpenModal(null);

  return (
    <div className="portafolio" id="projectos">
      <section className="section section-one">
      </section>
      <section className="section">
        {projects.map(({ id, image, title, technologies, description, team, habilidades, }) => (
          <div key={id} className="img" style={{ backgroundImage: `url(${image})` }}>
            <div className="img__info">
              <div className="img__info-tecnologias">
                <div className="img__info-tecnologias-info">
                  <div className="img__info-tecnologias-header">{title}</div>
                  <span>{technologies}</span>
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
                </div>
                <div className="customModal__container">
                  <h3 className="customModal__label">Habilidades</h3>
                  <p className="customModal__description">{habilidades}</p>
                </div>
              </CustomModal>
            </div>
          </div>
        ))}
      </section>
      <section className="section__buton">
        <a href="#vermas">Ver más proyectos
          <ArrowForwardIcon size="medium" />
        </a>
      </section>
    </div>
  );
};

export default Portafolio;