import TitleSection from "../../components/TitleSection/TitleSection";
import "./IntroSection.scss";

// Translate
import "../../i18n";
import { useTranslation } from "react-i18next";

const IntroSection = () => {
  const { t } = useTranslation();

  return (
    <div className='intro-section'>
      <TitleSection title={t("intro_section.title")} />
      <p className='text-intro-section'>{t("intro_section.subtitle")}</p>
    </div>
  );
};

export default IntroSection;
