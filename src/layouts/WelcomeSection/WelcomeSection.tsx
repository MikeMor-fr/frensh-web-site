import React, { useState, useEffect } from "react";
import "./WelcomeSection.scss";
import desktopImage from "./welcome.jpg";
import mobileImage from "./pineapple-mobile.jpg";

// tr anslation
import { useTranslation } from "react-i18next";
import "../../i18n";

const WelcomeSection = () => {
  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;
  const { t } = useTranslation();

  return (
    <div
      className='section-one'
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className='section-one-content'>
        <h1>{t("welcome_message")}</h1>
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
