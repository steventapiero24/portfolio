import React from "react";
import "./skills.css";
import webdesign from "../../assets/webdesign.webp";
import diseño from "../../assets/diseño.webp";
import figma from "../../assets/figma.webp";
import git from "../../assets/git.webp";
import angular from "../../assets/idbangular.webp"
import tresd from "../../assets/3ddiseño.webp"
import scrum from "../../assets/reactcartera.webp"

const skills = [
  {
    id: 1,
    title: "uxui",
    habilidades: "UX / UI",
    imageUrl: figma,
  },
  {
    id: 2,
    habilidades: "Html - CSS - Sass - JavaScript",
    imageUrl: webdesign,
  },
  {
    id: 3,
    habilidades: "Angular Js - React Js",
    imageUrl: angular,
  },
  {
    id: 4,
    habilidades: "Figma - Pothoshop - Illustrator",
    imageUrl: diseño,
  },
  {
    id: 5,
    habilidades: "Git - Github - Gitlab",
    imageUrl: git,
  },
  {
    id: 5,
    habilidades: "Scrum - kamban",
    imageUrl: scrum,
  },
  {
    id: 5,
    habilidades: "Cinema 4d - Blender",
    imageUrl: tresd,
  },
];

const SobreMi = () => {
  return (
    <div className="skills" id="skills">
      <div className="containers__skills">
        <div className="container__skills-info">
          <div className="container__skills-info-items">
            {skills.map(({ id, habilidades, title, imageUrl }) => (
              <div key={id} className="container__skills-info-item">
                <img
                  className="container__skills-info-item-image"
                  src={imageUrl}
                  alt={title}
                />
                <span className="container__skills-info-item-span">{habilidades}</span>
                <img
                  className="container__skills-info-item-image two"
                  src={imageUrl}
                  alt={title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
