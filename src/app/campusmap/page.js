"use client";
import HeroSection from "./components/HeroSection";
import CampusOverview from "./components/CampusOverview";
import CampusMaps from "./components/CampusMap";
import BuildingsAndFacilities from "./components/BuildingsAndFacilities";
import TransportationAndAccessibility from "./components/TransportationAndAccessibility";
import SafetyAndSecurity from "./components/SafetyAndSecurity";
import SustainabilityInitiatives from "./components/SustainabilityInitiatives";
import NavigationTips from "./components/NavigationTips";
import ContactInformation from "./components/ContactInformation";

const CampusMap = () => {
  return (
    <>
      <div>
        <HeroSection />
        <CampusOverview />
        <CampusMaps />
        <BuildingsAndFacilities />
        <TransportationAndAccessibility />
        <SafetyAndSecurity />
        <SustainabilityInitiatives />
        <NavigationTips />
        <ContactInformation />
      </div>
    </>
  );
};

export default CampusMap;
