import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import LensIcon from '@mui/icons-material/Lens';
import "./scrollSlider.css";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSlider = () => {
  const textWrapperReftwo = useRef(null);
  const textWrapperReftwoThree = useRef(null);

  useEffect(() => {
    if (!textWrapperReftwo.current) return;

    gsap.fromTo(
      textWrapperReftwo.current,
      { x: "20%" }, 
      {
        x: "-20%", 
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: textWrapperReftwo.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
          markers: false,
        },
      }
    );
    if (!textWrapperReftwoThree.current) return;

    gsap.fromTo(
      textWrapperReftwoThree.current,
      { x: "-20%" }, 
      {
        x: "20%", 
        ease: "none",
        duration: 0.5,
        scrollTrigger: {
          trigger: textWrapperReftwoThree.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          markers: false,
        },
      }
    );

  }, []);
 

  return (
    <>
      <section  className="container-text margin">
        <div className="wrappertwo texttwo" ref={textWrapperReftwo}>
          CONOCE    MIS    HABILIDADES 
          <LensIcon sx={{ fontSize: 30 }}/>
          CONOCE    MIS    HABILIDADES 
          <LensIcon sx={{ fontSize: 30 }}/>
          CONOCE    MIS    HABILIDADES 
          <LensIcon sx={{ fontSize: 30 }}/>
        </div>
      </section>
      <section  className="container-text">
        <div className="wrappertwo texttwo" ref={textWrapperReftwoThree}>
          CONOCE    MIS    HABILIDADES 
          <LensIcon sx={{ fontSize: 30 }}/>
          CONOCE    MIS    HABILIDADES 
          <LensIcon sx={{ fontSize: 30 }}/>
          CONOCE    MIS    HABILIDADES 
          <LensIcon sx={{ fontSize: 30 }}/>
        </div>
      </section>
    </>
  );
};

export default ScrollSlider;
