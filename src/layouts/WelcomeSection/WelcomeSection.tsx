import React, { useState, useEffect } from "react";
import "./WelcomeSection.scss";
import desktopImage from "../../assets/welcome.jpg";
import mobileImage from "../../assets/welcome.jpg";

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
        <h1>{t("welcome_section.title")}</h1>
        <p>{t("welcome_section.subtitle")}</p>
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
