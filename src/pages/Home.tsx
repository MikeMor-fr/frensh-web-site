import WelcomeSection from "../layouts/WelcomeSection/WelcomeSection";
import MenusSection from "../layouts/MenusSection/MenusSection";
import InfosSection from "../layouts/InfosSection/InfosSection";
import IntroSection from "../layouts/IntroSection/IntroSection";
import MentionsLegalesSection from "../layouts/MentionsLegalesSection/MentionsLegalesSection";
import ReviewSection from "../layouts/ReviewSection/ReviewSection";
import HoursSection from "../layouts/HoursSection/HoursSection";

const Home = () => {
  return (
    <div>
      <WelcomeSection />
      <MenusSection />
      <IntroSection />
      <InfosSection />
      <ReviewSection />
      <HoursSection />
      <MentionsLegalesSection />
    </div>
  );
};

export default Home;
