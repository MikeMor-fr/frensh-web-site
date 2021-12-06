import "./WelcomeSection.scss";
// Animation
import { motion } from "framer-motion";

// translation
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
          <motion.div
            initial={{ y: "20vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2, bounce: 0.3 }}
          >
            <h1>{t("welcome_section.title")}</h1>
            <h2>{t("welcome_section.subtitle")}</h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
