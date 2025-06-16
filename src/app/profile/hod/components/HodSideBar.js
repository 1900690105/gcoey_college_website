import React, { useState } from "react";
import {
  Users,
  BookOpen,
  Calendar,
  FileText,
  BarChart3,
  Settings,
  Bell,
  LogOut,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  ClipboardList,
  UserCheck,
  TrendingUp,
  Home,
} from "lucide-react";
import { FaProjectDiagram } from "react-icons/fa";

const HODSidebar = ({ activeItem, setActiveItem }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, href: "/dashboard" },
    {
      id: "students",
      label: "Students",
      icon: GraduationCap,
      href: "/students",
    },
    { id: "faculty", label: "Faculty", icon: Users, href: "/faculty" },
    { id: "courses", label: "Courses", icon: BookOpen, href: "/courses" },
    {
      id: "attendance",
      label: "Attendance",
      icon: UserCheck,
      href: "/attendance",
    },
    { id: "schedule", label: "Schedule", icon: Calendar, href: "/schedule" },
    {
      id: "assignments",
      label: "Assignments",
      icon: ClipboardList,
      href: "/assignments",
    },
    { id: "reports", label: "Reports", icon: FileText, href: "/reports" },
    {
      id: "analytics",
      label: "Analytics",
      icon: BarChart3,
      href: "/analytics",
    },
    {
      id: "performance",
      label: "Performance",
      icon: TrendingUp,
      href: "/performance",
    },
    {
      id: "projects",
      label: "Projects",
      icon: FaProjectDiagram,
      href: "/projects",
    },
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-slate-900 text-white transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-20" : "w-64"
      } min-h-screen  shadow-2xl`}
    >
      {/* Header */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold">HOD Portal</h2>
                <p className="text-xs text-slate-400">Department Management</p>
              </div>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* User Profile */}
      {!isCollapsed && (
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-lg">DR</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm">Prof. Chetan Andhare</h3>
              <p className="text-xs text-slate-400">Head of Department</p>
              <p className="text-xs text-slate-400">Computer Engineering</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                    activeItem === item.id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="font-medium text-sm">{item.label}</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-slate-700">
        <div className="space-y-2">
          <button
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-200 ${
              isCollapsed ? "justify-center" : ""
            }`}
            title={isCollapsed ? "Notifications" : undefined}
          >
            <Bell className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && (
              <span className="font-medium text-sm">Notifications</span>
            )}
            {!isCollapsed && (
              <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                3
              </span>
            )}
          </button>

          <button
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-200 ${
              isCollapsed ? "justify-center" : ""
            }`}
            title={isCollapsed ? "Settings" : undefined}
          >
            <Settings className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && (
              <span className="font-medium text-sm">Settings</span>
            )}
          </button>

          <button
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-all duration-200 ${
              isCollapsed ? "justify-center" : ""
            }`}
            title={isCollapsed ? "Logout" : undefined}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && (
              <span className="font-medium text-sm">Logout</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HODSidebar;
