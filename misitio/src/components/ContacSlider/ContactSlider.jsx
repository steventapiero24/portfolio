import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LensIcon from '@mui/icons-material/Lens';
import "./contacSlider.css";

gsap.registerPlugin(ScrollTrigger); // 💡 ¡Registra el plugin!

const ContactSlider = () => {
  const textWrapperRef = useRef(null);

  useEffect(() => {
    if (!textWrapperRef.current) return;

    gsap.fromTo(
      textWrapperRef.current,
      { x: "1%" }, 
      {
        x: "-10%", 
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: textWrapperRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          markers: true,
        },
      }
    );
  }, []);

  return (
    <section className="demo-text">
      <div className="wrapper text" ref={textWrapperRef}>
        Contacto 
        <LensIcon sx={{ fontSize: 30 }}/>
        Contacto 
        <LensIcon sx={{ fontSize: 30 }}/>
        Contacto 
        <LensIcon sx={{ fontSize: 30 }}/>
        Contacto 
        <LensIcon sx={{ fontSize: 30 }}/>
        Contacto 
        <LensIcon sx={{ fontSize: 30 }}/>
        Contacto
        <LensIcon sx={{ fontSize: 30 }}/>
        Contacto 
        <LensIcon sx={{ fontSize: 30 }}/>
        Contacto
      </div>
    </section>
  );
};

export default ContactSlider;
