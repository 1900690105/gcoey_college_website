import HeroSection from "./components/HeroSection";
import AdministrationSection from "./components/WelcomeSection";
import ImageGallery from "./components/Gallery";
import CompanyGrid from "./components/Company";
import FooterHome from "./components/Footer";
import FlashNews from "./components/FlashNews";
import LatestActivity from "@/app/components/LatestActivity";
import { Alumni } from "./components/Alumni";
import EventsAnnouncementsUI from "./components/EventsAnnouncementsUI";

export default function Home() {
  return (
    <>
      <FlashNews />
      <HeroSection />
      <AdministrationSection />
      <EventsAnnouncementsUI />
      <Alumni />
      <CompanyGrid />
      <div className="mt-5">
        <FooterHome />
      </div>
    </>
  );
}
