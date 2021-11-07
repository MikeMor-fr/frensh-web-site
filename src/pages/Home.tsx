import WelcomeSection from "../layouts/WelcomeSection/WelcomeSection";
import MenusSection from "../layouts/MenusSection/MenusSection";
import InfosSection from "../layouts/InfosSection/InfosSection";
import IntroSection from "../layouts/IntroSection/IntroSection";
import MentionsLegalesSection from "../layouts/MentionsLegalesSection/MentionsLegalesSection";
import ReviewSection from "../layouts/ReviewSection/ReviewSection";

const Home = () => {
  return (
    <div>
      <WelcomeSection />
      <MenusSection />
      <IntroSection />
      <InfosSection />
      <ReviewSection />
      <MentionsLegalesSection />
    </div>
  );
};

export default Home;
