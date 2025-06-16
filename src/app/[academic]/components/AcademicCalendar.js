"use client";
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Filter,
  Search,
  Download,
  Plus,
  Bell,
} from "lucide-react";

const AcademicCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState("month"); // month, week, list
  const [selectedFilters, setSelectedFilters] = useState(["all"]);
  const [searchTerm, setSearchTerm] = useState("");

  const eventTypes = [
    { id: "all", name: "All Events", color: "bg-gray-500", count: 45 },
    { id: "exam", name: "Examinations", color: "bg-red-500", count: 12 },
    { id: "holiday", name: "Holidays", color: "bg-green-500", count: 8 },
    {
      id: "registration",
      name: "Registration",
      color: "bg-blue-500",
      count: 6,
    },
    { id: "event", name: "Events", color: "bg-purple-500", count: 10 },
    { id: "deadline", name: "Deadlines", color: "bg-orange-500", count: 9 },
  ];

  const events = [
    {
      id: 1,
      title: "Spring Semester Begins",
      date: "2025-01-15",
      type: "registration",
      description: "First day of spring semester classes",
    },
    {
      id: 2,
      title: "MLK Day - No Classes",
      date: "2025-01-20",
      type: "holiday",
      description: "Martin Luther King Jr. Day observed",
    },
    {
      id: 3,
      title: "Add/Drop Deadline",
      date: "2025-01-25",
      type: "deadline",
      description: "Last day to add or drop courses",
    },
    {
      id: 4,
      title: "Midterm Exams",
      date: "2025-03-10",
      type: "exam",
      description: "Spring semester midterm examinations begin",
    },
    {
      id: 5,
      title: "Spring Break",
      date: "2025-03-15",
      type: "holiday",
      description: "Spring break week - no classes",
    },
    {
      id: 6,
      title: "Career Fair",
      date: "2025-03-20",
      type: "event",
      description: "Annual career fair in the main auditorium",
    },
    {
      id: 7,
      title: "Final Exams",
      date: "2025-05-05",
      type: "exam",
      description: "Spring semester final examinations",
    },
    {
      id: 8,
      title: "Commencement",
      date: "2025-05-15",
      type: "event",
      description: "Graduation ceremony",
    },
    {
      id: 9,
      title: "Summer Registration",
      date: "2025-04-01",
      type: "registration",
      description: "Summer course registration opens",
    },
    {
      id: 10,
      title: "Memorial Day",
      date: "2025-05-26",
      type: "holiday",
      description: "Memorial Day - college closed",
    },
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const getEventsForDate = (date) => {
    const dateStr = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${String(date).padStart(2, "0")}`;
    return events.filter((event) => event.date === dateStr);
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const filteredEvents = events.filter((event) => {
    const matchesFilter =
      selectedFilters.includes("all") || selectedFilters.includes(event.type);
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const toggleFilter = (filterId) => {
    if (filterId === "all") {
      setSelectedFilters(["all"]);
    } else {
      const newFilters = selectedFilters.includes(filterId)
        ? selectedFilters.filter((f) => f !== filterId)
        : [...selectedFilters.filter((f) => f !== "all"), filterId];

      setSelectedFilters(newFilters.length === 0 ? ["all"] : newFilters);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border border-gray-100">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Academic Calendar
              </h1>
              <p className="text-gray-600">
                Stay updated with important dates and events
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus size={18} />
                Add Event
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                <Download size={18} />
                Export
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                <Bell size={18} />
                Notifications
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Filter size={20} className="text-gray-600" />
                <h3 className="font-semibold text-gray-900">Event Types</h3>
              </div>
              <div className="space-y-3">
                {eventTypes.map((type) => (
                  <label
                    key={type.id}
                    className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedFilters.includes(type.id)}
                      onChange={() => toggleFilter(type.id)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <div className={`w-3 h-3 rounded-full ${type.color}`}></div>
                    <span className="text-gray-700 flex-1">{type.name}</span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {type.count}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* View Options */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">View Mode</h3>
              <div className="space-y-2">
                {["month", "week", "list"].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      viewMode === mode
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {mode.charAt(0).toUpperCase() + mode.slice(1)} View
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Calendar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Calendar Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => navigateMonth(-1)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold">
                      {months[currentDate.getMonth()]}{" "}
                      {currentDate.getFullYear()}
                    </h2>
                    <p className="text-blue-100">Academic Year 2024-2025</p>
                  </div>
                  <button
                    onClick={() => navigateMonth(1)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>

              {viewMode === "month" && (
                <div className="p-6">
                  {/* Days of week header */}
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {daysOfWeek.map((day) => (
                      <div
                        key={day}
                        className="text-center font-semibold text-gray-600 py-2"
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {getDaysInMonth(currentDate).map((day, index) => (
                      <div
                        key={index}
                        className={`min-h-[100px] p-2 border border-gray-100 rounded-lg ${
                          day
                            ? isToday(day)
                              ? "bg-blue-50 border-blue-200"
                              : "hover:bg-gray-50"
                            : "bg-gray-25"
                        }`}
                      >
                        {day && (
                          <>
                            <div
                              className={`text-sm font-medium mb-1 ${
                                isToday(day) ? "text-blue-600" : "text-gray-700"
                              }`}
                            >
                              {day}
                            </div>
                            {getEventsForDate(
                              new Date(
                                currentDate.getFullYear(),
                                currentDate.getMonth(),
                                day
                              )
                            ).map((event) => {
                              const eventType = eventTypes.find(
                                (t) => t.id === event.type
                              );
                              return (
                                <div
                                  key={event.id}
                                  className={`text-xs p-1 rounded mb-1 text-white ${
                                    eventType?.color || "bg-gray-500"
                                  }`}
                                  title={event.description}
                                >
                                  {event.title}
                                </div>
                              );
                            })}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {viewMode === "list" && (
                <div className="p-6">
                  <div className="space-y-4">
                    {filteredEvents.map((event) => {
                      const eventType = eventTypes.find(
                        (t) => t.id === event.type
                      );
                      return (
                        <div
                          key={event.id}
                          className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div
                            className={`w-4 h-4 rounded-full ${
                              eventType?.color || "bg-gray-500"
                            } mt-1 flex-shrink-0`}
                          ></div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">
                              {event.title}
                            </h4>
                            <p className="text-gray-600 text-sm mt-1">
                              {event.description}
                            </p>
                            <p className="text-gray-500 text-xs mt-2">
                              {new Date(event.date).toLocaleDateString(
                                "en-US",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </p>
                          </div>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                              eventType?.color || "bg-gray-500"
                            }`}
                          >
                            {eventType?.name || "Event"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Academic Calendar Documents */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 mt-6">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Academic Calendar Documents
            </h2>
            <p className="text-gray-600">
              Download official academic calendar documents for different
              semesters and years
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Sr. No.
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Title
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Download
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Size
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900">1</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Academic Calendar Odd-Sem. - 2023-24 B.Tech. Direct Second
                    Year Admitted
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                      Download
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    103 KB
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900">2</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Academic Calendar Odd Semester 2023-24 Final(III/V/VI Sem
                    B.Tech))
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                      Download
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    1674 KB
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900">3</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Revised acad Cal B.Tech II Sem
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                      Download
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    1200 KB
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900">4</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Academic Calendar II Sem B.Tech (2022-23)
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                      Download
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    547 KB
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900">5</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Academic calendar IV Sem (2022-23)
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                      Download
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    680 KB
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900">6</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Academic Calendar Sem-VI & VIII (2022-23)
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                      Download
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    754 KB
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900">7</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Academic Calendar Sem-IV (2022-23)
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                      Download
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    779 KB
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900">8</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Academic Calendar Sem-II (2022-23)
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                      Download
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    1420 KB
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900">9</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Academic Calendar Direct II Year(2022-23)
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                      Download
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    458 KB
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-sm">This Month</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Calendar className="text-red-600" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Upcoming Exams</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Holidays</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Bell className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Deadlines</p>
                <p className="text-2xl font-bold text-gray-900">5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
