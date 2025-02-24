import React from "react";
import { Element } from "react-scroll";
import "./App.css";
import Header from "./components/Header/Header";
import SobreMi from "./components/SobreMi/Sobremi";
import Portafolio from "./components/Portafolio/Portafolio";
import Nav from "./components/Nav/Nav";
import Contacto from "./components/Contacto/Contacto";
import Skills from "./components/Skills/Skills";
import Customcursor from "./components/Cursor/Cursor"

function App() {
  return  (
    <div className="App">
      <Customcursor />
      <Nav />
      <Element name="header">
        <Header />
      </Element>

      <Element name="portafolio">
        <Portafolio />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="sobremi">
        <SobreMi />
      </Element>

      <Element name="contacto">
        <Contacto />
      </Element>
    </div>
  );
}

export default App;
