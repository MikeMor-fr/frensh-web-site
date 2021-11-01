import WelcomeSection from "../layouts/WelcomeSection/WelcomeSection";
import MenusSection from "../layouts/MenusSection/MenusSection";
import InfosSection from "../layouts/InfosSection/InfosSection";
import IntroSection from "../layouts/IntroSection/IntroSection";
import MentionsLegalesSection from "../layouts/MentionsLegalesSection/MentionsLegalesSection";

const Home = () => {
  return (
    <div>
      <WelcomeSection />
      <MenusSection />
      <IntroSection />
      <InfosSection />
      <MentionsLegalesSection />
    </div>
  );
};

export default Home;
