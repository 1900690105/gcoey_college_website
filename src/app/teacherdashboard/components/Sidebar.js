import Notifications from "./Notifications";

const Sidebar = ({ isOpen, toggleSidebar, onSelect }) => {
  const menuItems = [
    { name: "Dashboard", icon: "M3 3h18v18H3V3z" },
    { name: "Attendence", icon: "M4 4h16v2H4V4z" },
    { name: "AddQuestionPaper", icon: "M4 6h16M4 10h16M4 14h16M4 18h16" },
    { name: "StudentMarksList", icon: "M9 5l7 7-7 7" },
    { name: "Subject Management", icon: "M4 6h16M4 12h16m-7 6h7" },
    { name: "Student Progress", icon: "M9 5l7 7-7 7" },
    { name: "Assessments", icon: "M5 12h14m-7-7v14" },
    { name: "FeedbackPage", icon: "M4 4h16v2H4V4z" },
    { name: "Communication", icon: "M8 10h8M8 14h8m-8 4h8" },
    { name: "Resources", icon: "M4 6h16M4 10h16m-4 8H4v-4h12" },
    { name: "Calendar", icon: "M4 4h16v2H4V4z" },
    {
      name: "Settings",
      icon: "M10 2a1 1 0 00-1 1v2.06a8.001 8.001 0 00-3.24 1.06l-1.42-1.42a1 1 0 00-1.42 1.42l1.42 1.42A8.001 8.001 0 004 11.06V13H2a1 1 0 000 2h2v2H2a1 1 0 000 2h2v2a1 1 0 002 0v-2h2v2a1 1 0 002 0v-2h2v2a1 1 0 002 0v-2h2a1 1 0 000-2h-2v-2h2a1 1 0 000-2h-2v-1.94a8.001 8.001 0 002.24-2.18l1.42 1.42a1 1 0 001.42-1.42l-1.42-1.42A8.001 8.001 0 0021.94 13H22a1 1 0 000-2h-1.94A8.001 8.001 0 0017.06 8.76l1.42-1.42a1 1 0 10-1.42-1.42l-1.42 1.42A8.001 8.001 0 0013 5.06V3a1 1 0 00-1-1h-2z",
    },
    { name: "Logout", icon: "M15 12H3m7-7l5 5-5 5" },
  ];

  const handleItemClick = (name) => {
    onSelect(name);
  };

  const renderMenuItem = (item) => (
    <li key={item.name} className="mb-4">
      <span
        className="flex items-center p-3 rounded hover:bg-gray-700 cursor-pointer transition-colors"
        onClick={() => handleItemClick(item.name)}
      >
        <svg
          className="w-5 h-5 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={item.icon}
          />
        </svg>
        {item.name}
      </span>
    </li>
  );

  return (
    <div
      className={`fixed inset-y-0 left-0 bg-gray-800 text-white w-64 p-6 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:static md:flex md:flex-col`}
    >
      <div className="flex items-center justify-between mb-6 md:justify-center">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <button className="md:hidden" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
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
      </div>
      <nav className="flex-grow">
        <ul>{menuItems.map(renderMenuItem)}</ul>
      </nav>
      <div className="mt-6">
        <Notifications />
      </div>
    </div>
  );
};

export default Sidebar;
