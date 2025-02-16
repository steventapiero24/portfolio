import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import CustomModal from "../CunstomModal"; // Importa el modal reutilizable
import clickerbait from "../../assets/clickerbait.jpg";
import seguros from "../../assets/seguros.png";
import Phonegest from "../../assets/mockup-phonegest.png";
import hangarleia from "../../assets/hangarleia.png";
import energia from "../../assets/energia.png";
import idbangular from "../../assets/idbangular.png";
import idsob from "../../assets/idsob.png";
import reactcartera from "../../assets/reactcartera.png";
import login from "../../assets/login.png";
import "../Portafolio/Portafolio.css";

const projects = [
  {
    id: 1,
    image: idbangular,
    title: "Banco interamericano de desarrollo",
    technologies: "Figma - Angular - Sass - Git - Gitlab - AngularUI",
    team: "EEUU, Argentina, España",
    habilidades: "Figma, UIkit, Metodologias agiles, Angular, Angular UI, Prime NG, bitbucket, canvan, Sass, Git, Gitub",
    description:
      "Este proyecto se basaba en un panel de control para los administradores de prestamos, un portal del cliente donde podian ver, administrar sus creditos, generar informes, visualizar estados, etc.",
  },
  {
    id: 2,
    image: reactcartera,
    title: "Cartera inteligente IDB",
    technologies: "Figma - React - Sass - ReactUI - Css",
    team: "EEUU, España",
    habilidades: " Figma, UIkit, Metodologias agiles, React, React UI, bitbucket, Sass, Git, Gitub",
    description: "Este proyecto fue muy interesante, fue mi primer contacto con librerias de react, este proyecto es el portal del cliente de todo tipo de carteras con el banco, graficas, indicadores, tablas, se crearon muchos componentes para cada indicador y asi mostrar la información lo mas claro posibble y de forma amigable para el usuario",
  },
  {
    id: 3,
    image: idsob,
    title: "Instituto de ciberseguridad de España",
    technologies: "Figma, UIkit, Angular - Sass - Git - Gitlab - PrimeNg - Figma",
    team: "España",
    habilidades: "Angular, Prime NG, Sass, Git, Gitlab",
    description: "Este proyecto se creo para falicitar el ingreso de los usuarios mejorando la seguridad para el cliente, la idea es manejar credenciales en forma de Qr y asi tener control de tokens unicos donde el cliente garantizaria el ingreso a un unico usuario, se creo el panel de control para el cliente y un panel para el usuario, fue un proyecto de 4 mesese y de mucha investigacion, UXUI, conversaciones con cliente final y muchos cambios sobre el camino por lo experimental del proyecto",
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
  {
    id: 7,
    image: energia,
    title: "Comparador energía",
    technologies: "Wordpress - Api - css - Js",
    team: "EEUU, Argentina, España",
    habilidades: " Metodologias agiles, Angular, Angular UI, Prime NG, bitbucket, canvas, Sass",
    description: "Contenido del Modal 7",
  },
  {
    id: 9,
    image: seguros,
    title: "Comparador energía",
    technologies: "Wordpress - Api - css - Js",
    team: "EEUU, Argentina, España",
    habilidades: " Metodologias agiles, Angular, Angular UI, Prime NG, bitbucket, canvas, Sass",
    description: "Contenido del Modal 7",
  },
  {
    id: 7,
    image: login,
    title: "Comparador energía",
    technologies: "Wordpress - Api - css - Js",
    team: "EEUU, Argentina, España",
    habilidades: " Metodologias agiles, Angular, Angular UI, Prime NG, bitbucket, canvas, Sass",
    description: "Contenido del Modal 7",
  },
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
    </div>
  );
};

export default Portafolio;