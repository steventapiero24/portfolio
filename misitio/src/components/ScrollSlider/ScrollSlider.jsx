import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import LensIcon from '@mui/icons-material/Lens';
import "./scrollSlider.css";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSlider = () => {
  const textWrapperReftwo = useRef(null);

  useEffect(() => {
    if (!textWrapperReftwo.current) return;

    gsap.fromTo(
      textWrapperReftwo.current,
      { x: "10%" }, 
      {
        x: "-50%", 
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: textWrapperReftwo.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          markers: true,
        },
      }
    );
  }, []);

  return (
    <section className="container-text">
      <div className="wrappertwo texttwo" ref={textWrapperReftwo}>
        CONOCE  MIS  SKILLS 
        <LensIcon sx={{ fontSize: 30 }}/>
      </div>
    </section>
  );
};

export default ScrollSlider;
