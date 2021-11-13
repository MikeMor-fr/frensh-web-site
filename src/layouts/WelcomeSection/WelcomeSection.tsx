import "./WelcomeSection.scss";

// tr anslation
import { useTranslation } from "react-i18next";
import "../../i18n";

const WelcomeSection = () => {
  const { t } = useTranslation();

  return (
    <div
      className='section-one'
      style={{
        backgroundImage: `url(https://i.pinimg.com/originals/d8/8a/ca/d88acacdd20c6e4af73520058cb85aca.jpg)`,
      }}
    >
      <div className='section-one-content'>
        <div className='welcome-title'>
          <h1>{t("welcome_section.title")}</h1>
          <h2>{t("welcome_section.subtitle")}</h2>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
