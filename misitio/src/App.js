import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SobreMi from "./components/SobreMi/Sobremi";
import Portafolio from "./components/Portafolio/Portafolio";
import Nav from "./components/Nav/Nav";
import Contacto from "./components/Contacto/Contacto";
import Skills from "./components/Skills/Skills";
import Customcursor from "./components/Cursor/Cursor";
import ScrollSlider from "./components/ScrollSlider/ScrollSlider";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import GrowingSphere from "./components/GrowingSphere/GrowingSphere";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    });

    const sections = [
      { trigger: "#blackColor", color: "#111111" },
      { trigger: "#amarilloColor", color: "#FFE5B6" },
    ];

    sections.forEach(({ trigger, color }) => {
      gsap.to("body", {
        backgroundColor: color,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    });

    return () => {
      smoother.kill(); // cleanup smoother on unmount
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="App">
        <Customcursor />
        <Nav />

        <div id="blackColor">
          <section>
            <Header />
          </section>
          <section>
            <Portafolio />
          </section>
        </div>
        <section>
          <GrowingSphere />
        </section>
        <div id="amarilloColor" className="amarillocolor">
        </div>
          <section>
            <ScrollSlider />
          </section>
          <section>
            <Skills />
          </section>
          <section>
            <SobreMi />
          </section>
          <section>
            <Contacto />
          </section>
      </div>
    </div>
  );
}

export default App;
