import TitleSection from "../../components/TitleSection/TitleSection";
import "./IntroSection.scss";

const IntroSection = () => {
  return (
    <div className='intro-section'>
      <TitleSection
        title={"Restauration rapide spécialisée dans les hamburgers maisons."}
      />
      <p className='text-intro-section'>
        Si vous souhaitez passer une bonne soirée avec vos proches autour de
        plats français, notre restaurant est l’endroit idéal !
      </p>
    </div>
  );
};

export default IntroSection;
