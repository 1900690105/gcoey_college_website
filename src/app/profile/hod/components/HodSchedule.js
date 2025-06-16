import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  User,
  Plus,
  Edit3,
  Trash2,
  Filter,
  Search,
  Download,
  Bell,
} from "lucide-react";

const HODSchedulePortal = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedWeek, setSelectedWeek] = useState("current");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Sample data
  const studentSchedules = [
    {
      id: 1,
      name: "Computer Science - Semester 6",
      students: 45,
      subjects: [
        "Data Structures",
        "AI",
        "Database Systems",
        "Web Development",
      ],
      timeSlots: [
        {
          day: "Monday",
          time: "9:00-10:30",
          subject: "Data Structures",
          teacher: "Dr. Smith",
          room: "CS-101",
        },
        {
          day: "Monday",
          time: "11:00-12:30",
          subject: "AI",
          teacher: "Prof. Johnson",
          room: "CS-102",
        },
        {
          day: "Tuesday",
          time: "9:00-10:30",
          subject: "Database Systems",
          teacher: "Dr. Brown",
          room: "CS-103",
        },
      ],
    },
    {
      id: 2,
      name: "Information Technology - Semester 4",
      students: 52,
      subjects: ["Networks", "Software Engineering", "OS", "Java Programming"],
      timeSlots: [
        {
          day: "Monday",
          time: "14:00-15:30",
          subject: "Networks",
          teacher: "Dr. Wilson",
          room: "IT-201",
        },
        {
          day: "Tuesday",
          time: "9:00-10:30",
          subject: "Software Engineering",
          teacher: "Prof. Davis",
          room: "IT-202",
        },
      ],
    },
  ];

  const teacherSchedules = [
    {
      id: 1,
      name: "Dr. Smith",
      department: "Computer Science",
      subjects: ["Data Structures", "Algorithms"],
      totalHours: 18,
      schedule: [
        {
          day: "Monday",
          time: "9:00-10:30",
          class: "CS Sem-6",
          subject: "Data Structures",
          room: "CS-101",
        },
        {
          day: "Wednesday",
          time: "11:00-12:30",
          class: "CS Sem-4",
          subject: "Algorithms",
          room: "CS-104",
        },
      ],
    },
    {
      id: 2,
      name: "Prof. Johnson",
      department: "Computer Science",
      subjects: ["AI", "Machine Learning"],
      totalHours: 16,
      schedule: [
        {
          day: "Monday",
          time: "11:00-12:30",
          class: "CS Sem-6",
          subject: "AI",
          room: "CS-102",
        },
        {
          day: "Thursday",
          time: "14:00-15:30",
          class: "CS Sem-8",
          subject: "Machine Learning",
          room: "CS-105",
        },
      ],
    },
  ];

  const upcomingEvents = [
    {
      type: "exam",
      title: "Mid-term Exams",
      date: "2025-06-15",
      classes: ["CS Sem-6", "IT Sem-4"],
    },
    {
      type: "holiday",
      title: "Summer Break",
      date: "2025-06-20",
      classes: ["All"],
    },
    {
      type: "meeting",
      title: "Faculty Meeting",
      date: "2025-06-10",
      classes: ["Faculty"],
    },
  ];

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const ScheduleOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Total Classes</p>
              <p className="text-3xl font-bold">24</p>
            </div>
            <Users className="h-8 w-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Active Teachers</p>
              <p className="text-3xl font-bold">18</p>
            </div>
            <User className="h-8 w-8 text-green-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Total Students</p>
              <p className="text-3xl font-bold">485</p>
            </div>
            <Users className="h-8 w-8 text-purple-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100">Weekly Hours</p>
              <p className="text-3xl font-bold">156</p>
            </div>
            <Clock className="h-8 w-8 text-orange-200" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => openModal("student")}
            className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
          >
            <Plus className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-medium">
              Create Student Schedule
            </span>
          </button>
          <button
            onClick={() => openModal("teacher")}
            className="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
          >
            <Plus className="h-5 w-5 text-green-600" />
            <span className="text-green-700 font-medium">
              Assign Teacher Schedule
            </span>
          </button>
          <button className="flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
            <Download className="h-5 w-5 text-purple-600" />
            <span className="text-purple-700 font-medium">
              Export Schedules
            </span>
          </button>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Upcoming Events
        </h3>
        <div className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"
            >
              <div
                className={`w-3 h-3 rounded-full ${
                  event.type === "exam"
                    ? "bg-red-500"
                    : event.type === "holiday"
                    ? "bg-green-500"
                    : "bg-blue-500"
                }`}
              ></div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{event.title}</p>
                <p className="text-sm text-gray-600">
                  {event.date} • {event.classes.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const StudentSchedules = () => (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search student schedules..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Semesters</option>
          <option value="current">Current Semester</option>
          <option value="next">Next Semester</option>
        </select>
        <button
          onClick={() => openModal("student")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add Schedule
        </button>
      </div>

      {/* Student Schedule Cards */}
      <div className="grid grid-cols-1 gap-6">
        {studentSchedules.map((schedule) => (
          <div
            key={schedule.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {schedule.name}
                  </h3>
                  <p className="text-gray-600">
                    {schedule.students} students • {schedule.subjects.length}{" "}
                    subjects
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit3 className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-medium text-gray-800 mb-3">
                This Week's Schedule
              </h4>
              <div className="space-y-2">
                {schedule.timeSlots.map((slot, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-20 text-sm font-medium text-gray-600">
                      {slot.day}
                    </div>
                    <div className="w-24 text-sm text-gray-600">
                      {slot.time}
                    </div>
                    <div className="flex-1 font-medium text-gray-800">
                      {slot.subject}
                    </div>
                    <div className="text-sm text-gray-600">{slot.teacher}</div>
                    <div className="text-sm text-blue-600 font-medium">
                      {slot.room}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const TeacherSchedules = () => (
    <div className="space-y-6">
      {/* Search and Actions */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search teachers..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={() => openModal("teacher")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Assign Schedule
        </button>
      </div>

      {/* Teacher Schedule Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {teacherSchedules.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {teacher.name}
                  </h3>
                  <p className="text-gray-600">{teacher.department}</p>
                  <p className="text-sm text-gray-500">
                    {teacher.totalHours} hours/week
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit3 className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-medium text-gray-800 mb-3">
                Current Schedule
              </h4>
              <div className="space-y-2">
                {teacher.schedule.map((slot, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-800">
                        {slot.subject}
                      </span>
                      <span className="text-sm text-blue-600 font-medium">
                        {slot.room}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {slot.day} • {slot.time} • {slot.class}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <h5 className="text-sm font-medium text-gray-700 mb-2">
                  Subjects Teaching
                </h5>
                <div className="flex flex-wrap gap-2">
                  {teacher.subjects.map((subject, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Modal = () => {
    if (!showModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">
                {modalType === "student"
                  ? "Create Student Schedule"
                  : modalType === "teacher"
                  ? "Assign Teacher Schedule"
                  : "Schedule Details"}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
          </div>
          <div className="p-6">
            {modalType === "student" ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Class/Semester
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Computer Science - Semester 6</option>
                    <option>Information Technology - Semester 4</option>
                    <option>Electronics - Semester 2</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Data Structures</option>
                    <option>Artificial Intelligence</option>
                    <option>Database Systems</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Day
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Monday</option>
                      <option>Tuesday</option>
                      <option>Wednesday</option>
                      <option>Thursday</option>
                      <option>Friday</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>9:00-10:30</option>
                      <option>11:00-12:30</option>
                      <option>14:00-15:30</option>
                      <option>16:00-17:30</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teacher
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Dr. Smith</option>
                      <option>Prof. Johnson</option>
                      <option>Dr. Brown</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Room
                    </label>
                    <input
                      type="text"
                      placeholder="CS-101"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teacher
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Dr. Smith</option>
                    <option>Prof. Johnson</option>
                    <option>Dr. Brown</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Data Structures</option>
                    <option>Artificial Intelligence</option>
                    <option>Database Systems</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Class
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Computer Science - Semester 6</option>
                    <option>Information Technology - Semester 4</option>
                  </select>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Day
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Monday</option>
                      <option>Tuesday</option>
                      <option>Wednesday</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>9:00-10:30</option>
                      <option>11:00-12:30</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Room
                    </label>
                    <input
                      type="text"
                      placeholder="CS-101"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="flex gap-4 pt-6">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                {modalType === "student"
                  ? "Create Schedule"
                  : "Assign Schedule"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Calendar className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                Schedule Management
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={selectedWeek}
                onChange={(e) => setSelectedWeek(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="current">Current Week</option>
                <option value="next">Next Week</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === "overview"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("students")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === "students"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Student Schedules
          </button>
          <button
            onClick={() => setActiveTab("teachers")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === "teachers"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Teacher Schedules
          </button>
        </div>

        {/* Content */}
        {activeTab === "overview" && <ScheduleOverview />}
        {activeTab === "students" && <StudentSchedules />}
        {activeTab === "teachers" && <TeacherSchedules />}
      </div>

      <Modal />
    </div>
  );
};

export default HODSchedulePortal;
