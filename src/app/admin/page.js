"use client";
import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Users from "./components/User";
import Settings from "./components/Settings";
import Sidebar from "./components/SideNav";
import StudentListDashboard from "./components/ListStudent";
import AdminComplaintSection from "./components/AdminComplaintSection";
import StudentAdmissionAdmin from "./components/AdmissionList";
import TeacherList from "./components/TeacherList";

function App() {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case "dashboard":
        return <Dashboard />;
      case "users":
        return <Users />;
      case "settings":
        return <Settings />;
      case "student-list":
        return <StudentListDashboard />;
      case "complain":
        return <AdminComplaintSection />;
      case "adminlist":
        return <StudentAdmissionAdmin />;
      case "teacherlist":
        return <TeacherList />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className=" bg-gray-100 grid grid-cols-[250px_1fr] min-h-screen">
      <Sidebar
        setActiveComponent={setActiveComponent}
        activeComponent={activeComponent}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex-grow">
        <header className="bg-white shadow-sm lg:hidden">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-500 focus:outline-none focus:text-gray-700"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>
            <div className="text-xl font-bold">Admin Dashboard</div>
          </div>
        </header>
        <main className="p-6">{renderComponent()}</main>
      </div>
    </div>
  );
}

export default App;
