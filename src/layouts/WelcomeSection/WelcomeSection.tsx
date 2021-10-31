import React, { useState, useEffect } from "react";
import "./WelcomeSection.scss";
import desktopImage from "./welcome.jpg";
import mobileImage from "./pineapple-mobile.jpg";

const WelcomeSection = () => {
  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

  return (
    <div
      className='section-one'
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className='section-one-content'>
        <h1>FREN'SH</h1>
        <p>Toute l'équipe vous souhaite la bienvenue</p>
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

export default WelcomeSection;
