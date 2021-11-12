import WelcomeSection from "../layouts/WelcomeSection/WelcomeSection";
import MenusSection from "../layouts/MenusSection/MenusSection";
import InfosSection from "../layouts/InfosSection/InfosSection";
import IntroSection from "../layouts/IntroSection/IntroSection";
import ContactSection from "../layouts/ContactSection/ContactSection";
import ReviewSection from "../layouts/ReviewSection/ReviewSection";
import HoursSection from "../layouts/HoursSection/HoursSection";
import EndSection from "../layouts/EndSection/EndSection";

const Home = () => {
  return (
    <div>
      <WelcomeSection />
      <MenusSection />
      <IntroSection />
      <InfosSection />
      <ReviewSection />
      <HoursSection />
      {/* <ContactSection /> */}
      {/* <div style={{ marginTop: "50px" }}>
        <EndSection />
      </div> */}
    </div>
  );
};

export default Home;
