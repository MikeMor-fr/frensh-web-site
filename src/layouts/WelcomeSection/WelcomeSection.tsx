import "./WelcomeSection.scss";

// tr anslation
import { useTranslation } from "react-i18next";
import "../../i18n";
import { VideoBackground } from "../../components/VideoBackground/VideoBackground";

const WelcomeSection = () => {
  const { t } = useTranslation();

  return (
    <div className='section-one'>
      <VideoBackground />
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
