"use client";

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
  FaClipboardList,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaCreditCard,
  FaCalendarAlt,
  FaBookOpen,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdCoPresent, MdAnnouncement, MdSchool } from "react-icons/md";

const navItems = [
  {
    name: "Dashboard",
    key: "dashboard",
    icon: <FaTachometerAlt />,
    category: "main",
  },
  {
    name: "Academic",
    key: "academic",
    icon: <FaBookOpen />,
    category: "main",
    submenu: [
      { name: "Courses", key: "course", icon: <MdSchool /> },
      { name: "Assignments", key: "examAssignment", icon: <FaClipboardList /> },
      { name: "Exams", key: "exams", icon: <FaGraduationCap /> },
      { name: "Grades", key: "marksResult", icon: <FaChartBar /> },
    ],
  },
  {
    name: "Attendance",
    key: "attendance",
    icon: <MdCoPresent />,
    category: "main",
  },
  {
    name: "Schedule",
    key: "classSchedule",
    icon: <FaCalendarAlt />,
    category: "main",
  },
  {
    name: "Fees & Payments",
    key: "feesPayments",
    icon: <FaCreditCard />,
    category: "main",
  },
  {
    name: "Career Prep",
    key: "jobs",
    icon: <FaChalkboardTeacher />,
    category: "main",
  },
  {
    name: "Notifications",
    key: "notifications",
    icon: <FaBell />,
    category: "secondary",
  },
  {
    name: "Profile",
    key: "profile",
    icon: <FaUser />,
    category: "secondary",
  },
];

function SidebarUI({
  setActiveComponent,
  activeComponent,
  sidebarOpen,
  setSidebarOpen,
}) {
  const [openSubmenus, setOpenSubmenus] = useState({});

  const handleNavItemClick = (itemKey) => {
    if (itemKey === "logout") {
      // Handle logout logic here
      console.log("Logout clicked");
    } else {
      setActiveComponent(itemKey);
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      }
    }
  };

  const toggleSubmenu = (itemKey) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  const mainNavItems = navItems.filter((item) => item.category === "main");
  const secondaryNavItems = navItems.filter(
    (item) => item.category === "secondary"
  );

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <nav
        className={`bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white w-72 min-h-screen fixed lg:static z-50 transition-transform duration-300 ease-in-out transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } shadow-2xl`}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <MdSchool className="text-xl text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  StudentHub
                </h1>
                <p className="text-xs text-slate-400">College Portal</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>
        </div>

        <div className="flex flex-col h-full">
          {/* Main Navigation */}
          <div className="flex-1 p-4">
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3">
                Main Menu
              </h3>
              <ul className="space-y-1">
                {mainNavItems.map((item) => (
                  <li key={item.key}>
                    <div>
                      <button
                        className={`w-full flex items-center justify-between text-left py-3 px-4 rounded-xl transition-all duration-200 group ${
                          activeComponent === item.key
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25"
                            : "hover:bg-slate-700/50 hover:translate-x-1"
                        }`}
                        onClick={() => {
                          if (item.submenu) {
                            toggleSubmenu(item.key);
                          } else {
                            handleNavItemClick(item.key);
                          }
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <span
                            className={`text-lg transition-colors ${
                              activeComponent === item.key
                                ? "text-white"
                                : "text-slate-400 group-hover:text-white"
                            }`}
                          >
                            {item.icon}
                          </span>
                          <span
                            className={`font-medium ${
                              activeComponent === item.key
                                ? "text-white"
                                : "text-slate-200 group-hover:text-white"
                            }`}
                          >
                            {item.name}
                          </span>
                        </div>
                        {item.submenu && (
                          <span
                            className={`transition-transform duration-200 ${
                              openSubmenus[item.key] ? "rotate-180" : ""
                            }`}
                          >
                            <FaChevronDown className="text-sm" />
                          </span>
                        )}
                      </button>
                      {item.submenu && (
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            openSubmenus[item.key]
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <ul className="mt-2 ml-4 space-y-1">
                            {item.submenu.map((submenuItem) => (
                              <li key={submenuItem.key}>
                                <button
                                  className={`w-full flex items-center text-left py-2.5 px-4 rounded-lg transition-all duration-200 group ${
                                    activeComponent === submenuItem.key
                                      ? "bg-blue-500/20 text-blue-300 border-l-2 border-blue-400"
                                      : "text-slate-400 hover:text-white hover:bg-slate-700/30"
                                  }`}
                                  onClick={() =>
                                    handleNavItemClick(submenuItem.key)
                                  }
                                >
                                  <span className="mr-3 text-sm">
                                    {submenuItem.icon}
                                  </span>
                                  <span className="text-sm font-medium">
                                    {submenuItem.name}
                                  </span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Secondary Navigation */}
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3">
                Personal
              </h3>
              <ul className="space-y-1">
                {secondaryNavItems.map((item) => (
                  <li key={item.key}>
                    <button
                      className={`w-full flex items-center text-left py-3 px-4 rounded-xl transition-all duration-200 group ${
                        activeComponent === item.key
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25"
                          : "hover:bg-slate-700/50 hover:translate-x-1"
                      }`}
                      onClick={() => handleNavItemClick(item.key)}
                    >
                      <span
                        className={`mr-3 text-lg transition-colors ${
                          activeComponent === item.key
                            ? "text-white"
                            : "text-slate-400 group-hover:text-white"
                        }`}
                      >
                        {item.icon}
                      </span>
                      <span
                        className={`font-medium ${
                          activeComponent === item.key
                            ? "text-white"
                            : "text-slate-200 group-hover:text-white"
                        }`}
                      >
                        {item.name}
                      </span>
                      {item.key === "notifications" && (
                        <span className="ml-auto">
                          <span className="inline-flex items-center justify-center w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="p-4 border-t border-slate-700">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-4 mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">JS</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">John Smith</p>
                  <p className="text-xs text-slate-400">Computer Science</p>
                </div>
              </div>
            </div>

            <button
              className="w-full flex items-center justify-center py-3 px-4 rounded-xl bg-red-600/20 text-red-400 hover:bg-red-600/30 hover:text-red-300 transition-all duration-200 group"
              onClick={() => handleNavItemClick("logout")}
            >
              <FaSignOutAlt className="mr-3 group-hover:translate-x-1 transition-transform" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

// Demo component to show the sidebar in action
function Sidebar({
  setActiveComponent,
  activeComponent,
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SidebarUI
        setActiveComponent={setActiveComponent}
        activeComponent={activeComponent}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </div>
  );
}

export default Sidebar;

// "use client";

// import React, { useState } from "react";
// import {
//   FaTachometerAlt,
//   FaUsers,
//   FaCogs,
//   FaUser,
//   FaBell,
//   FaChartBar,
//   FaSignOutAlt,
//   FaChevronDown,
//   FaChevronUp,
//   FaClipboardList,
//   FaChalkboardTeacher,
// } from "react-icons/fa";
// import { MdCoPresent, MdAnnouncement } from "react-icons/md";

// const navItems = [
//   { name: "Dashboard", key: "dashboard", icon: <FaTachometerAlt /> },
//   { name: "Users", key: "users", icon: <FaUsers /> },
//   { name: "Attendance", key: "attendance", icon: <MdCoPresent /> },
//   { name: "Fees & Payments", key: "feesPayments", icon: <MdAnnouncement /> },
//   { name: "Grades/Marks", key: "marksResult", icon: <FaCogs /> },
//   { name: "Jobs Praparation", key: "jobs", icon: <FaChalkboardTeacher /> },
//   { name: "Course", key: "course", icon: <FaCogs /> },
//   {
//     name: "Assignments & Exams",
//     key: "examAssignment",
//     icon: <FaClipboardList />,
//   },
//   {
//     name: "Notifications",
//     key: "Notifications",
//     icon: <FaBell />,
//   },
//   {
//     name: "Class Schedule/Timetable",
//     key: "classSchedule",
//     icon: <FaChartBar />,
//   },
//   { name: "Profile", key: "profile", icon: <FaUser /> },
//   { name: "Logout", key: "logout", icon: <FaSignOutAlt /> },
// ];

// function Sidebar({
//   setActiveComponent,
//   activeComponent,
//   sidebarOpen,
//   setSidebarOpen,
// }) {
//   const [openSubmenus, setOpenSubmenus] = useState({});

//   const handleNavItemClick = (itemKey) => {
//     if (itemKey === "logout") {
//       // Handle logout logic here
//     } else {
//       setActiveComponent(itemKey);
//       setSidebarOpen(false);
//     }
//   };

//   const toggleSubmenu = (itemKey) => {
//     setOpenSubmenus((prev) => ({
//       ...prev,
//       [itemKey]: !prev[itemKey],
//     }));
//   };

//   return (
//     <nav
//       className={`bg-gray-800 text-white w-64 min-h-screen p-4 fixed lg:static lg:translate-x-0 transition-transform duration-300 ease-in-out ${
//         sidebarOpen ? "translate-x-0" : "-translate-x-full"
//       }`}
//     >
//       <div className="flex justify-between items-center mb-6 lg:hidden">
//         <div className="text-2xl font-bold">Student Dashboard</div>
//         <button
//           onClick={() => setSidebarOpen(false)}
//           className="text-white focus:outline-none"
//         >
//           <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
//             <path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
//           </svg>
//         </button>
//       </div>
//       <p className="text-2xl mb-6 invisible lg:visible">Student Dashboard</p>
//       <ul className="-mt-10 lg:mt-10">
//         {navItems.map((item) => (
//           <li key={item.key} className="mb-2">
//             <div>
//               <button
//                 className={`w-full flex items-center justify-between text-left py-2 px-4 rounded transition-colors duration-200 ${
//                   activeComponent === item.key
//                     ? "bg-blue-600 hover:bg-blue-700"
//                     : "hover:bg-gray-700"
//                 }`}
//                 onClick={() => {
//                   if (item.submenu) {
//                     toggleSubmenu(item.key);
//                   } else {
//                     handleNavItemClick(item.key);
//                   }
//                 }}
//               >
//                 <div className="flex items-center">
//                   <span className="mr-3">{item.icon}</span>
//                   {item.name}
//                 </div>
//                 {item.submenu && (
//                   <span>
//                     {openSubmenus[item.key] ? (
//                       <FaChevronUp />
//                     ) : (
//                       <FaChevronDown />
//                     )}
//                   </span>
//                 )}
//               </button>
//               {item.submenu && openSubmenus[item.key] && (
//                 <ul className="pl-8 mt-2">
//                   {item.submenu.map((submenuItem) => (
//                     <li key={submenuItem.key} className="mb-2">
//                       <button
//                         className={`w-full flex items-center text-left py-2 px-4 rounded transition-colors duration-200 ${
//                           activeComponent === submenuItem.key
//                             ? "bg-blue-600 hover:bg-blue-700"
//                             : "hover:bg-gray-700"
//                         }`}
//                         onClick={() => handleNavItemClick(submenuItem.key)}
//                       >
//                         <span className="mr-3">{submenuItem.icon}</span>
//                         {submenuItem.name}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default Sidebar;
