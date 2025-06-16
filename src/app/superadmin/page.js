"use client";
import React, { useEffect, useState } from "react";
import AdminSidebar from "./components/SuperAdminSideBar";
import AdminDashboard from "./components/SuperAdminDashboard";
import SuperAdminPage from "./components/SuperAdminPage";
import AnnouncementManager from "./components/SuperAdminAnnouncement";
import NewsManager from "./components/SuperAdminNews";
import GalleryAdmin from "./components/SuperAdminGallery";
import SuperAdminDepartmentPortal from "./components/SuperAdminDepartment";
import CourseManagement from "./components/SuperAdminCourseManagement";
import CurriculumManagement from "./components/SuperAdminCurriculum";
import StudentManagementPortal from "./components/StudentList";
import TeacherList from "./components/TeacherList";
import AlumniManagement from "./components/AlumniList";
import BannerManagement from "./components/SuperAdminBanner";
import FlashNewsManager from "./components/SuperAdminFlashNews";
import EventManager from "./components/SuperAdminEvents";

const superadmin = () => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [token, setToken] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const accessToken = params.get("access_token");
      setToken(accessToken || "");
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-[250px_1fr] min-h-screen">
        <AdminSidebar setActiveItem={setActiveItem} activeItem={activeItem} />
        {activeItem === "dashboard" && <AdminDashboard />}
        {activeItem === "pages" && <SuperAdminPage />}
        {activeItem === "announcements" && <AnnouncementManager />}
        {activeItem === "news" && <NewsManager />}
        {activeItem === "gallery" && <GalleryAdmin />}
        {activeItem === "departments" && <SuperAdminDepartmentPortal />}
        {activeItem === "courses" && <CourseManagement />}
        {activeItem === "curriculum" && <CurriculumManagement />}
        {activeItem === "students" && <StudentManagementPortal />}
        {activeItem === "faculty" && <TeacherList />}
        {activeItem === "staff" && <TeacherList />}
        {activeItem === "alumni" && <AlumniManagement />}
        {activeItem === "banner" && <BannerManagement />}
        {activeItem === "flashnews" && <FlashNewsManager />}
        {activeItem === "events" && <EventManager />}
      </div>
    </>
  );
};

export default superadmin;
