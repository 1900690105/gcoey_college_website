"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import AcademicCalendar from "./components/AcademicCalendar";
import AdmissionPage from "./components/Admission";
import ExamTimetablePage from "./components/ExamTimeTable";
import SyllabusPage from "./components/Syallbus";
import PrincipalDesk from "./components/Principle";
import OrganizationChart from "./components/OrganizingChart";
import OfficeAdministrationPage from "./components/OfficeAdministration";
import ImportantGRsPage from "./components/GRs";
import PortfolioDistribution from "./components/Portfolio";
import AlumniPage from "./components/AlumniPage";
import FacultyDirectory from "./components/Faculty";
import CollegeEventsSection from "../components/Events";
import PhotosPage from "./components/Photospage";

const page = () => {
  const params = useSearchParams();
  const component = params.get("page");
  return (
    <>
      <div>
        {component === "AcedemicCalender" && <AcademicCalendar />}
        {component === "Adminssion" && <AdmissionPage />}
        {component === "ExamTimetable" && <ExamTimetablePage />}
        {component === "Syllabus" && <SyllabusPage />}
        {component === "Principal" && <PrincipalDesk />}
        {component === "Organization" && <OrganizationChart />}
        {component === "Administration" && <OfficeAdministrationPage />}
        {component === "GRs" && <ImportantGRsPage />}
        {component === "Portfolio" && <PortfolioDistribution />}
        {component === "Alumni" && <AlumniPage />}
        {component === "Faculty" && <FacultyDirectory />}
        {component === "Event" && <CollegeEventsSection />}
        {component === "Photo" && <PhotosPage />}
      </div>
    </>
  );
};

export default page;
