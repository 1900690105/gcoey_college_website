"use client";
import React, { useState } from "react";
import HODSidebar from "./components/HodSideBar";
import HODDashboard from "./components/HodDashboard";
import HODStudentDashboard from "./components/HodStudentInfo";
import TeacherManagement from "./components/HodFaculty";
import HODCoursesPortal from "./components/HodCourses";
import HODPortal from "./components/HodAttendence";
import HODSchedulePortal from "./components/HodSchedule";

const page = () => {
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <div className="grid grid-cols-[250px_1fr] min-h-screen">
      <HODSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div>
        {activeItem === "dashboard" && <HODDashboard />}
        {activeItem === "students" && <HODStudentDashboard />}
        {activeItem === "faculty" && <TeacherManagement />}
        {activeItem === "courses" && <HODCoursesPortal />}
        {activeItem === "attendance" && <HODPortal />}
        {activeItem === "schedule" && <HODSchedulePortal />}
      </div>
    </div>
  );
};

export default page;
