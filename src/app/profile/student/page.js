"use client";
import React, { useState } from "react";
import StudentDashboard from "./components/Dashboard";
import Users from "./components/Users";
import FeesPayments from "./components/Payment";
import MarksResult from "./components/Marks";
import ExamAssignment from "./components/Assignment";
import ClassSchedule from "./components/ClassSchedule";
import Jobs from "./components/Jobs";
import Course from "./components/Course";
import { Settings } from "lucide-react";
import StudentAttendence from "./components/Attendence";
import StudentProfile from "./components/Profile";
import Sidebar from "./components/Sidebar";

function App() {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case "dashboard":
        return <StudentDashboard />;
      case "users":
        return <Users />;
      case "feesPayments":
        return <FeesPayments />;
      case "marksResult":
        return <MarksResult />;
      case "examAssignment":
        return <ExamAssignment />;
      case "classSchedule":
        return <ClassSchedule />;
      case "jobs":
        return <Jobs />;
      case "course":
        return <Course />;
      case "settings":
        return <Settings />;
      case "attendance":
        return <StudentAttendence />;
      case "profile":
        return <StudentProfile />;
      default:
        return <StudentDashboard />;
    }
  };

  return (
    <div className="flex  bg-gray-100">
      <Sidebar
        setActiveComponent={setActiveComponent}
        activeComponent={activeComponent}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {activeComponent === "dashboard" && <StudentDashboard />}
      {activeComponent === "users" && <Users />}
      {activeComponent === "feesPayments" && <FeesPayments />}
      {activeComponent === "marksResult" && <MarksResult />}
      {activeComponent === "examAssignment" && <ExamAssignment />}
      {activeComponent === "classSchedule" && <ClassSchedule />}
      {activeComponent === "jobs" && <Jobs />}
      {activeComponent === "course" && <Course />}
      {activeComponent === "settings" && <Settings />}
      {activeComponent === "attendance" && <StudentAttendence />}
      {activeComponent === "profile" && <StudentProfile />}
    </div>
  );
}

export default App;
