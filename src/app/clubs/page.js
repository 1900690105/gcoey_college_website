// pages/clubs.js
import ClubsHero from "./components/ClubsHero";
import ClubsIntro from "./components/ClubsIntro";
import FeaturedClubs from "./components/FeaturedClubs";
import ClubsDirectory from "./components/ClubsDirectory";
import UpcomingEvents from "./components/UpcomingEvents";
import SuccessStories from "./components/SuccessStories";
import PhotoGallery from "./components/PhotoGallery";
import FAQ from "./components/FAQ";
import ContactInfo from "./components/ContactInfo";

export default function ClubsPage() {
  return (
    <div>
      <ClubsHero />
      <ClubsIntro />
      <FeaturedClubs />
      <ClubsDirectory />
      <UpcomingEvents />
      <SuccessStories />
      <PhotoGallery />
      <FAQ />
      <ContactInfo />
    </div>
  );
}
