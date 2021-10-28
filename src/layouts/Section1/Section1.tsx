import React, { useState, useEffect } from "react";
import "./Section1.css";
import desktopImage from "./pineapple-desktop.jpg";
import mobileImage from "./pineapple-mobile.jpg";

const Section1 = () => {
  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

  return (
    <div
      className='section-one'
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className='section-one-content'>
        <h1>Bienvenur au Fren'sh</h1>
        <p>HAMBURGER MAISON LES PIEDS DANS L'EAU</p>
      </div>
    </div>
  );
};

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return windowWidth;
};

export default Section1;
