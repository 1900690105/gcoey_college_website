// pages/sports.js
import HeroSection from "./components/HeroSection";
import UpcomingEvents from "./components/UpcomingEvents";
import Teams from "./components/Teams";
import Achievements from "./components/Achievements";
import PhotoGallery from "./components/PhotoGallery";
import CoachProfiles from "./components/CoachProfiles";
import Facilities from "./components/Facilities";
import AlumniSpotlights from "./components/AlumniSpotlights";
import JoinTeam from "./components/JoinTeam";

const SportsPage = () => {
  return (
    <div>
      <HeroSection />
      <UpcomingEvents />
      <Teams />
      <Achievements />
      <PhotoGallery />
      <CoachProfiles />
      <Facilities />
      <AlumniSpotlights />
      <JoinTeam />
    </div>
  );
};

export default SportsPage;
