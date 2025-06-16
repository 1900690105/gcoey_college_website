// pages/training-and-placement.js

import Introduction from "./components/Introduction";
import TrainingPrograms from "./components/TrainingPrograms";
import PlacementServices from "./components/PlacementServices";
import PlacementStatistics from "./components/PlacementStatistics";
import RecruitmentProcess from "./components/RecruitmentProcess";
import CareerGuidance from "./components/CareerGuidance";
import FAQs from "./components/FAQs";
import EventsAndWorkshops from "./components/EventsAndWorkshops";
import ContactInformation from "./components/ContactInformation";
import AlumniNetwork from "./components/AlumniNetwork";

const TrainingAndPlacementPage = () => (
  <div>
    <Introduction />
    <TrainingPrograms />
    <PlacementServices />
    <PlacementStatistics />
    <RecruitmentProcess />
    <CareerGuidance />
    <FAQs />
    <EventsAndWorkshops />
    <ContactInformation />
    <AlumniNetwork />
  </div>
);

export default TrainingAndPlacementPage;
