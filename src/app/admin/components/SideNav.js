import { Computer } from "lucide-react";
import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaCogs,
  FaUser,
  FaBell,
  FaChartBar,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronUp,
  FaList,
  FaUserPlus,
  FaExclamationCircle,
  FaChalkboardTeacher, // Add this import
} from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import { VscCircuitBoard } from "react-icons/vsc";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { FaTools } from "react-icons/fa";
import { MdCoPresent } from "react-icons/md";

function Sidebar({
  setActiveComponent,
  activeComponent,
  sidebarOpen,
  setSidebarOpen,
}) {
  const [isStudentSubmenuOpen, setStudentSubmenuOpen] = useState(false);
  const [isTeacherSubmenuOpen, setTeacherSubmenuOpen] = useState(false); // Add state for teacher submenu
  const [isDepartmentSubmenuOpen, setDepartmentSubmenuOpen] = useState(false); // Add state for department submenu

  const navItems = [
    { name: "Dashboard", key: "dashboard", icon: <FaTachometerAlt /> },
    { name: "Users", key: "users", icon: <FaUsers /> },
    {
      name: "Student",
      key: "student",
      icon: <FaUser />,
      submenu: [
        { name: "List", key: "student-list", icon: <FaList /> },
        { name: "Admission", key: "adminlist", icon: <FaUserPlus /> },
        {
          name: "Complain",
          key: "complain",
          icon: <FaExclamationCircle />,
        },
      ],
    },
    {
      name: "Teacher", // Add Teacher menu
      key: "teacher",
      icon: <FaChalkboardTeacher />,
      submenu: [
        { name: "List", key: "teacherlist", icon: <FaList /> },
        {
          name: "Complain",
          key: "complain",
          icon: <FaExclamationCircle />,
        },
      ],
    },
    {
      name: "Department", // Add Department menu
      key: "department",
      icon: <FaCogs />,
      submenu: [
        { name: "CO", key: "department-co", icon: <Computer /> },
        { name: "EE", key: "department-ee", icon: <MdElectricBolt /> },
        { name: "EXTC", key: "department-extc", icon: <VscCircuitBoard /> },
        { name: "CE", key: "department-ceme", icon: <HiMiniBuildingOffice2 /> },
        { name: "ME", key: "department-ceme", icon: <FaTools /> },
      ],
    },
    { name: "Attendance", key: "attendence", icon: <MdCoPresent /> },
    { name: "Notice Board", key: "notice" },
    { name: "Settings", key: "settings", icon: <FaCogs /> },
    { name: "Notifications", key: "notifications", icon: <FaBell /> },
    { name: "Reports", key: "reports", icon: <FaChartBar /> },
    { name: "Profile", key: "profile", icon: <FaUser /> },
    { name: "Logout", key: "logout", icon: <FaSignOutAlt /> },
  ];

  const handleNavItemClick = (itemKey) => {
    if (itemKey === "logout") {
      // Handle logout logic here
    } else {
      setActiveComponent(itemKey);
    }
    setSidebarOpen(false);
  };

  return (
    <nav
      className={`bg-gray-800 text-white w-64 min-h-screen p-4 fixed lg:static lg:translate-x-0 transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center mb-6 lg:hidden">
        <div className="text-2xl font-bold">Admin Dashboard</div>
        <button
          onClick={() => setSidebarOpen(false)}
          className="text-white focus:outline-none"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
          </svg>
        </button>
      </div>
      <div>
        <p className="text-2xl mb-6 invisible lg:visible">Admin Dashboard</p>
      </div>
      <ul className="-mt-10 lg:mt-10">
        {navItems.map((item) => (
          <li key={item.key} className="mb-2">
            <div>
              <button
                className={`w-full flex items-center justify-between text-left py-2 px-4 rounded transition-colors duration-200 ${
                  activeComponent === item.key
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => {
                  if (item.submenu) {
                    if (item.key === "student") {
                      setStudentSubmenuOpen(!isStudentSubmenuOpen);
                    } else if (item.key === "teacher") {
                      setTeacherSubmenuOpen(!isTeacherSubmenuOpen);
                    } else if (item.key === "department") {
                      setDepartmentSubmenuOpen(!isDepartmentSubmenuOpen);
                    }
                  } else {
                    handleNavItemClick(item.key);
                  }
                }}
              >
                <div className="flex items-center">
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </div>
                {item.submenu && (
                  <span>
                    {item.key === "student" && isStudentSubmenuOpen ? (
                      <FaChevronUp />
                    ) : item.key === "teacher" && isTeacherSubmenuOpen ? (
                      <FaChevronUp />
                    ) : item.key === "department" && isDepartmentSubmenuOpen ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                )}
              </button>
              {item.submenu &&
                item.key === "student" &&
                isStudentSubmenuOpen && (
                  <ul className="pl-8 mt-2">
                    {item.submenu.map((submenuItem) => (
                      <li key={submenuItem.key} className="mb-2">
                        <button
                          className={`w-full flex items-center text-left py-2 px-4 rounded transition-colors duration-200 ${
                            activeComponent === submenuItem.key
                              ? "bg-blue-600 hover:bg-blue-700"
                              : "hover:bg-gray-700"
                          }`}
                          onClick={() => handleNavItemClick(submenuItem.key)}
                        >
                          <span className="mr-3">{submenuItem.icon}</span>
                          {submenuItem.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              {item.submenu &&
                item.key === "teacher" &&
                isTeacherSubmenuOpen && (
                  <ul className="pl-8 mt-2">
                    {item.submenu.map((submenuItem) => (
                      <li key={submenuItem.key} className="mb-2">
                        <button
                          className={`w-full flex items-center text-left py-2 px-4 rounded transition-colors duration-200 ${
                            activeComponent === submenuItem.key
                              ? "bg-blue-600 hover:bg-blue-700"
                              : "hover:bg-gray-700"
                          }`}
                          onClick={() => handleNavItemClick(submenuItem.key)}
                        >
                          <span className="mr-3">{submenuItem.icon}</span>
                          {submenuItem.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              {item.submenu &&
                item.key === "department" &&
                isDepartmentSubmenuOpen && (
                  <ul className="pl-8 mt-2">
                    {item.submenu.map((submenuItem) => (
                      <li key={submenuItem.key} className="mb-2">
                        <button
                          className={`w-full flex items-center text-left py-2 px-4 rounded transition-colors duration-200 ${
                            activeComponent === submenuItem.key
                              ? "bg-blue-600 hover:bg-blue-700"
                              : "hover:bg-gray-700"
                          }`}
                          onClick={() => handleNavItemClick(submenuItem.key)}
                        >
                          <span className="mr-3">{submenuItem.icon}</span>
                          {submenuItem.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
