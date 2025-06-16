"use client";
import HeroSection from "./components/HeroSection";
import EventOverview from "./components/EventOverview";
import EventAgenda from "./components/EventAgenda";
import Highlights from "./components/Highlights";
import RegistrationForm from "./components/RegistrationForm";
import VenueDetails from "./components/VenueDetails";
import Gallery from "./components/Gallery";
import Sponsors from "./components/Sponsors";
import FAQs from "./components/FAQs";
import ContactInfo from "./components/ContactInfo";

const AnnualGathering = () => {
  return (
    <div>
      <HeroSection />
      <EventOverview />
      <EventAgenda />
      <Highlights />
      <RegistrationForm />
      <VenueDetails />
      <Gallery />
      <Sponsors />
      <FAQs />
      <ContactInfo />
    </div>
  );
};

export default AnnualGathering;
