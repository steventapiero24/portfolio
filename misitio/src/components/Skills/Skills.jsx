import React, { useState } from "react";
import "./skills.css";
import webdesign from "../../assets/webdesign.webp";
import diseño from "../../assets/diseño.webp";
import figma from "../../assets/figma.webp";
import git from "../../assets/git.webp";
import angular from "../../assets/idbangular.webp";
import tresd from "../../assets/3ddiseño.webp";
import scrum from "../../assets/reactcartera.webp";

const skills = [
  {
    id: 1,
    title: "uxui",
    habilidades: "UX / UI",
    imageUrl: figma,
  },
  {
    id: 2,
    title: "frontend",
    habilidades: "Html - CSS - Sass - JavaScript",
    imageUrl: webdesign,
  },
  {
    id: 3,
    title: "frameworks",
    habilidades: "Angular Js - React Js",
    imageUrl: angular,
  },
  {
    id: 4,
    title: "diseño",
    habilidades: "Figma - Pothoshop - Illustrator",
    imageUrl: diseño,
  },
  {
    id: 5,
    title: "control-version",
    habilidades: "Git - Github - Gitlab",
    imageUrl: git,
  },
  {
    id: 6,
    title: "metodologias",
    habilidades: "Scrum - kamban",
    imageUrl: scrum,
  },
  {
    id: 7,
    title: "3d",
    habilidades: "Cinema 4d - Blender",
    imageUrl: tresd,
  },
];

const SobreMi = () => {
  const [hoveredSkill, setHoveredSkill] = useState(1);

  return (
    <div className="skills" id="skills">
      <div className="containers__skills">
        <div className="container__skills-info">
          <div className="container__skills-info-video">
            {skills.map(({ id, title, imageUrl }) => (
              <div key={id} className="container__skills-info-video-item">
                <img
                  className={`container__skills-info-video-image ${hoveredSkill === id ? 'active' : ''}`}
                  src={imageUrl}
                  alt={title}
                />
              </div>
            ))}
          </div>
          
          <div className="container__skills-info-items">
            {skills.map(({ id, habilidades }) => (
              <div 
                key={id} 
                className="container__skills-info-item"
                onMouseEnter={() => setHoveredSkill(id)}
                // Eliminado onMouseLeave para mantener la última imagen
              >

                <span className="container__skills-info-item-span">{habilidades}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;