import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SobreMi from "./components/SobreMi/Sobremi";
import Portafolio from "./components/Portafolio/Portafolio";
import Nav from "./components/Nav/Nav";
import Contacto from "./components/Contacto/Contacto";
import Skills from "./components/Skills/Skills";
import Customcursor from "./components/Cursor/Cursor";
import ScrollSlider from "./components/ScrollSlider/ScrollSlider";

function App() {
  return  (
    <div  className="App">
      <Customcursor />
      <Nav />
      <div name="header">
        <Header />
      </div>

      <div name="portafolio">
        <Portafolio />
      </div>

      <div name="skills">
        <ScrollSlider />
      </div>

      <div name="skills">
        <Skills />
      </div>

      <div name="sobremi">
        <SobreMi />
      </div>

      <div name="contacto">
        <Contacto />
      </div>
    </div>
  );
}

export default App;

