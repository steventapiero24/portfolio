import React from "react";
import "./skills.css";
import esferas from "../../../src/assets/esferas.svg";
import ImageComponent from "../ImageComponent";
import programacion from "../../assets/programacion.jpg";
import webdesign from "../../assets/webdesign.png";
import diseño from "../../assets/diseño.png";
import figma from "../../assets/figma.png";
import git from "../../assets/git.jpg";

const SobreMi = () => {
  return (
    <div className="skills" id="skills">
      <div className="containers__skills">
        <div className="containers__skills-title">
          <h2>Skills</h2>
        </div>
        <div className="container__skills-info">
          <div className="container__skills-info-image">
            <ImageComponent src={esferas} alt="Esferas" />
          </div>
          <div className="container__skills-info-items">
            <div className="container__skills-info-item">
              <span>Html - CSS - Sass - javaScript</span>
              <ImageComponent
                className="container__skills-info-item-image"
                src={programacion}
                alt="Esferas"
              />
            </div>
            <div className="container__skills-info-item">
              <span>UX/UI - Figma</span>
              <ImageComponent
                className="container__skills-info-item-image"
                src={figma}
                alt="Esferas"
              />
            </div>
            <div className="container__skills-info-item">
              <span>React Js and Angular</span>
              <ImageComponent
                className="container__skills-info-item-image"
                src={webdesign}
                alt="Esferas"
              />
            </div>
            <div className="container__skills-info-item">
              <span>Git - Github - Gitlab - Bitbucket</span>
              <ImageComponent
                className="container__skills-info-item-image"
                src={git}
                alt="Esferas"
              />
            </div>
            <div className="container__skills-info-item">
              <span>Photoshop/ Illustrator/After effects</span>
              <ImageComponent
                className="container__skills-info-item-image"
                src={diseño}
                alt="Esferas"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
