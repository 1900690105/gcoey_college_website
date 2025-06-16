import AchievementsRecognition from "./components/AchievementsRecognition";
import CommunityEngagement from "./components/CommunityEngagement";
import Facilities from "./components/Facilities";
import HeroSection from "./components/HeroSectionAbout";
import History from "./components/History";
import OurStory from "./components/OurStory";
import VisionMissionSection from "./components/VisionMissionSection";

const aboutus = () => {
  return (
    <>
      <div>
        <HeroSection />
        <OurStory />
        <VisionMissionSection />
        <History />
        <Facilities />
        <AchievementsRecognition />
        <CommunityEngagement />
      </div>
    </>
  );
};

export default aboutus;
