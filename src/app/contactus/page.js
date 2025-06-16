// pages/contact.js
import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";
import DepartmentContacts from "./components/DepartmentContacts";
import SocialMediaLinks from "./components/SocialMediaLinks";
import OperatingHours from "./components/OperatingHours";
import CampusVisit from "./components/CampusVisit";
import ContactFormWith from "./components/ContactFormWith";
// import Footer from "./components/Footer";

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactFormWith />
      <ContactInfo />
      {/* <Map /> */}
      <DepartmentContacts />
      <SocialMediaLinks />
      <OperatingHours />
      <CampusVisit />
    </>
  );
};

export default ContactPage;
