import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./cursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const posX = useRef(0);
  const posY = useRef(0);

  // Estado para manejar hover y posición del texto "Ir ahora"
  const [hoveringLink, setHoveringLink] = useState(false);
  const [linkPosition, setLinkPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
  const updateMousePos = (e) => {
    mouseX.current = e.clientX;
    mouseY.current = e.clientY;
    setLinkPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnterLink = () => setHoveringLink(true);
  const handleMouseLeaveLink = () => setHoveringLink(false);

  // Detectar si el cursor entra en la sección contacto
  const handleMouseEnterContact = () => {
    if (cursorRef.current) cursorRef.current.classList.add("contact-cursor");
  };
  const handleMouseLeaveContact = () => {
    if (cursorRef.current) cursorRef.current.classList.remove("contact-cursor");
  };

  document.addEventListener("mousemove", updateMousePos);

  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("mouseenter", handleMouseEnterLink);
    link.addEventListener("mouseleave", handleMouseLeaveLink);
  });

  // Agregar eventos a la sección contacto
  const contactSection = document.querySelector(".contact");
  if (contactSection) {
    contactSection.addEventListener("mouseenter", handleMouseEnterContact);
    contactSection.addEventListener("mouseleave", handleMouseLeaveContact);
  }

  gsap.ticker.add(() => {
    posX.current += (mouseX.current - posX.current) * 0.1;
    posY.current += (mouseY.current - posY.current) * 0.1;

    gsap.to(followerRef.current, {
      x: posX.current,
      y: posY.current,
      ease: "power2.out",
      duration: 0.5,
    });

    gsap.to(cursorRef.current, {
      x: mouseX.current,
      y: mouseY.current,
      ease: "power3.out",
      duration: 0.3,
    });
  });

  return () => {
    document.removeEventListener("mousemove", updateMousePos);
    links.forEach((link) => {
      link.removeEventListener("mouseenter", handleMouseEnterLink);
      link.removeEventListener("mouseleave", handleMouseLeaveLink);
    });
    if (contactSection) {
      contactSection.removeEventListener("mouseenter", handleMouseEnterContact);
      contactSection.removeEventListener("mouseleave", handleMouseLeaveContact);
    }
    gsap.ticker.remove(() => {});
  };
}, []);

  return (
    <>
      <div className={`cursor ${hoveringLink ? "hidden" : ""}`} ref={cursorRef}></div>
      <div className={`cursor-follower ${hoveringLink ? "hidden" : ""}`} ref={followerRef}></div>
      <span
        className={`custom-hover-text ${hoveringLink ? "show" : ""}`}
        style={{ left: `${linkPosition.x}px`, top: `${linkPosition.y}px` }}
      >
        Ir ahora
      </span>
    </>
  );
};

export default CustomCursor;
