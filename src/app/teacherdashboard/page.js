"use client";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import CourseManagement from "./components/CourseManagement";
import StudentProgress from "./components/StudentProgress";
import Communication from "./components/Communication";
import Resources from "./components/Resources";
import Settings from "./components/Settings";
import Calendar from "./components/Calendar";
import GradesAssessments from "./components/GradesAssessments";
import Attendence from "./components/Attendence";
import AddQuestionPaper from "./components/McqExam";
import StudentMarksList from "./components/Result";
import FeedbackPage from "./components/Feedback";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const MainContent = ({ selectedItem }) => {
    switch (selectedItem) {
      case "Dashboard":
        return <Dashboard />;
      case "Attendence":
        return <Attendence />;
      case "Subject Management":
        return <CourseManagement />;
      case "AddQuestionPaper":
        return <AddQuestionPaper />;
      case "FeedbackPage":
        return <FeedbackPage />;
      case "StudentMarksList":
        return <StudentMarksList />;
      case "Student Progress":
        return <StudentProgress />;
      case "Assessments":
        return <GradesAssessments />;
      case "Communication":
        return <Communication />;
      case "Resources":
        return <Resources />;
      case "Calendar":
        return <Calendar />;
      case "Settings":
        return <Settings />;
      default:
        return <div>Select a menu item</div>;
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        onSelect={setSelectedItem}
      />
      <div className="flex-grow p-6">
        <button className="md:hidden mb-4" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        <h1 className=" font-semibold">
          <MainContent selectedItem={selectedItem} />
        </h1>
        {/* Additional content goes here */}
      </div>
    </div>
  );
}
