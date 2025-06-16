import React from "react";
import PersonalInfo from "./components/PersonalInfo";
import AcademicDetails from "./components/AcademicDetails";
import AttendanceRecord from "./components/AttendanceRecord";
import GradesAndResults from "./components/GradesAndResults";
import AssignmentsAndProjects from "./components/AssignmentsAndProjects";
import ExtraCurricularActivities from "./components/ExtraCurricularActivities";
import InternshipsAndWorkExperience from "./components/InternshipsAndWorkExperience";
import SkillsAndCertifications from "./components/SkillsAndCertifications";
import TimelineActivityLog from "./components/TimelineActivityLog";
import SocialLinks from "./components/SocialLinks";
import FeedbackTestimonials from "./components/FeedbackTestimonials";
import SettingsPreferences from "./components/SettingsPreferences";
import PersonalDetails from "./components/PersonalDetails";

export default function StudentProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl bg-white shadow-lg rounded-lg p-4">
        <PersonalInfo />
        <PersonalDetails />
        <AcademicDetails />
        <AttendanceRecord />
        <GradesAndResults />
        <AssignmentsAndProjects />
        <ExtraCurricularActivities />
        <InternshipsAndWorkExperience />
        <SkillsAndCertifications />
        <TimelineActivityLog />
        <SocialLinks />
        <FeedbackTestimonials />
        <SettingsPreferences />
      </div>
    </div>
  );
}
