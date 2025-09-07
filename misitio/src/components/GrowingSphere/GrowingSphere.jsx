// src/components/GrowingSphere/GrowingSphere.jsx
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./GrowingSphere.css";

gsap.registerPlugin(ScrollTrigger);

const GrowingSphere = () => {
  const sphereRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sphereRef.current,
      { scale: 0.5 },
      {
        scale: 70,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sphereRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="contenedor__esfera">
      <div className="growing-sphere" ref={sphereRef}></div>
    </div>
  );
};

export default GrowingSphere;