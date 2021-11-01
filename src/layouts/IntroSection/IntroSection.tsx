import "./IntroSection.scss";

const IntroSection = () => {
  return (
    <div className='intro-background'>
      <div className='intro-section'>
        <h2>Restauration rapide spécialisée dans les hamburgers maisons.</h2>
        <hr className='horizontal-line' />
        <p className='text-intro-section'>
          Si vous souhaitez passer une bonne soirée avec vos proches autour de
          plats français, notre restaurant est l’endroit idéal !
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
