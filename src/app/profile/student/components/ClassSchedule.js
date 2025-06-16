import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Download,
  BookOpen,
  User,
  Bell,
  Grid,
  List,
} from "lucide-react";

// Sample timetable data
const Datatimetable = {
  Monday: [
    {
      time: "9:00 AM",
      subject: "Mathematics",
      teacher: "Dr. Smith",
      room: "Room 101",
    },
    {
      time: "10:15 AM",
      subject: "Physics",
      teacher: "Prof. Johnson",
      room: "Lab 201",
    },
    {
      time: "11:30 AM",
      subject: "Chemistry",
      teacher: "Dr. Wilson",
      room: "Lab 105",
    },
    {
      time: "2:00 PM",
      subject: "English",
      teacher: "Ms. Davis",
      room: "Room 203",
    },
  ],
  Tuesday: [
    {
      time: "9:00 AM",
      subject: "Biology",
      teacher: "Dr. Brown",
      room: "Lab 301",
    },
    {
      time: "10:15 AM",
      subject: "History",
      teacher: "Mr. Taylor",
      room: "Room 205",
    },
    {
      time: "11:30 AM",
      subject: "Geography",
      teacher: "Ms. Anderson",
      room: "Room 107",
    },
  ],
  Wednesday: [
    {
      time: "9:00 AM",
      subject: "Mathematics",
      teacher: "Dr. Smith",
      room: "Room 101",
    },
    {
      time: "10:15 AM",
      subject: "Computer Science",
      teacher: "Mr. Lee",
      room: "Lab 401",
    },
    {
      time: "2:00 PM",
      subject: "Art",
      teacher: "Ms. Garcia",
      room: "Studio A",
    },
  ],
  Thursday: [
    {
      time: "9:00 AM",
      subject: "Physics",
      teacher: "Prof. Johnson",
      room: "Lab 201",
    },
    {
      time: "10:15 AM",
      subject: "Chemistry",
      teacher: "Dr. Wilson",
      room: "Lab 105",
    },
    {
      time: "11:30 AM",
      subject: "Literature",
      teacher: "Ms. Davis",
      room: "Room 203",
    },
  ],
  Friday: [
    {
      time: "9:00 AM",
      subject: "Biology",
      teacher: "Dr. Brown",
      room: "Lab 301",
    },
    {
      time: "10:15 AM",
      subject: "Mathematics",
      teacher: "Dr. Smith",
      room: "Room 101",
    },
    {
      time: "2:00 PM",
      subject: "Physical Education",
      teacher: "Coach Miller",
      room: "Gymnasium",
    },
  ],
};

const subjectColors = {
  Mathematics: "bg-blue-100 text-blue-800 border-blue-200",
  Physics: "bg-purple-100 text-purple-800 border-purple-200",
  Chemistry: "bg-green-100 text-green-800 border-green-200",
  Biology: "bg-emerald-100 text-emerald-800 border-emerald-200",
  English: "bg-orange-100 text-orange-800 border-orange-200",
  Literature: "bg-orange-100 text-orange-800 border-orange-200",
  History: "bg-amber-100 text-amber-800 border-amber-200",
  Geography: "bg-teal-100 text-teal-800 border-teal-200",
  "Computer Science": "bg-indigo-100 text-indigo-800 border-indigo-200",
  Art: "bg-pink-100 text-pink-800 border-pink-200",
  "Physical Education": "bg-red-100 text-red-800 border-red-200",
};

export default function ClassSchedule() {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedDay, setSelectedDay] = useState("Monday");

  const timetable = Datatimetable;
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  // Get next upcoming class
  const getNextClass = () => {
    const currentTime = new Date();
    const currentDay = currentTime.toLocaleDateString("en-US", {
      weekday: "long",
    });

    if (timetable[currentDay]) {
      const todayClasses = timetable[currentDay];
      for (let classItem of todayClasses) {
        const classTime = new Date();
        const [time, period] = classItem.time.split(" ");
        const [hours, minutes] = time.split(":");
        classTime.setHours(
          period === "PM" && hours !== "12"
            ? parseInt(hours) + 12
            : parseInt(hours),
          parseInt(minutes)
        );

        if (classTime > currentTime) {
          return { ...classItem, day: currentDay };
        }
      }
    }
    return null;
  };

  const nextClass = getNextClass();

  return (
    <div className="w-3xl bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}

      <div className=" mx-auto px-6 py-8">
        {/* Quick Stats & Next Class */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Next Class Card */}
          {nextClass && (
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
              <div className="flex items-center space-x-2 mb-2">
                <Bell className="w-5 h-5" />
                <span className="text-sm font-medium opacity-90">
                  Next Class
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1">{nextClass.subject}</h3>
              <div className="flex items-center space-x-4 text-sm opacity-90">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{nextClass.time}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{nextClass.teacher}</span>
                </div>
              </div>
            </div>
          )}

          {/* Today's Classes */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-600">
                Today's Classes
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {timetable[today]?.length || 0}
            </h3>
            <p className="text-sm text-gray-600">{today}</p>
          </div>

          {/* This Week */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-2 mb-2">
              <BookOpen className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-600">
                This Week
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {Object.values(timetable).flat().length}
            </h3>
            <p className="text-sm text-gray-600">Total Classes</p>
          </div>
        </div>

        {/* Main Timetable */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Weekly Timetable
            </h2>
          </div>

          {viewMode === "grid" ? (
            // Grid View
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {Object.entries(timetable).map(([day, classes]) => (
                  <div
                    key={day}
                    className={`rounded-lg border-2 transition-all duration-200 ${
                      day === today
                        ? "border-blue-300 bg-blue-50 shadow-md"
                        : "border-gray-200 bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    <div
                      className={`p-4 border-b ${
                        day === today ? "border-blue-200" : "border-gray-200"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {day}
                        </h3>
                        {day === today && (
                          <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                            Today
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">
                        {classes.length} classes
                      </p>
                    </div>
                    <div className="p-4 space-y-3">
                      {classes.map((classItem, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-lg border ${
                            subjectColors[classItem.subject] ||
                            "bg-gray-100 text-gray-800 border-gray-200"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-sm">
                              {classItem.subject}
                            </span>
                            <span className="text-xs opacity-75">
                              {classItem.time}
                            </span>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center space-x-1 text-xs opacity-90">
                              <User className="w-3 h-3" />
                              <span>{classItem.teacher}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-xs opacity-90">
                              <BookOpen className="w-3 h-3" />
                              <span>{classItem.room}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // List View
            <div className="p-6">
              <div className="flex space-x-2 mb-6 overflow-x-auto">
                {Object.keys(timetable).map((day) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                      selectedDay === day
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {timetable[selectedDay].map((classItem, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 w-20">
                      <div className="text-sm font-semibold text-gray-900">
                        {classItem.time}
                      </div>
                    </div>
                    <div className="flex-1 ml-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            subjectColors[classItem.subject] ||
                            "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {classItem.subject}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{classItem.teacher}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{classItem.room}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Additional Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <Download className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium text-gray-900">Download PDF</div>
                  <div className="text-sm text-gray-600">
                    Get printable version
                  </div>
                </div>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <Calendar className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium text-gray-900">
                    Add to Calendar
                  </div>
                  <div className="text-sm text-gray-600">
                    Sync with your calendar app
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Upcoming This Week
            </h3>
            <div className="space-y-3">
              {Object.entries(timetable)
                .slice(0, 3)
                .map(([day, classes]) => (
                  <div
                    key={day}
                    className="flex items-center justify-between p-2"
                  >
                    <div>
                      <div className="font-medium text-gray-900">{day}</div>
                      <div className="text-sm text-gray-600">
                        {classes.length} classes
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {classes[0]?.time}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import { Datatimetable } from "./TimeTableData";

// export default function ClassSchedule() {
//   // Static timetable data
//   const timetable = Datatimetable;

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       {/* Weekly Timetable */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Weekly Timetable</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {Object.entries(timetable).map(([day, classes]) => (
//             <div key={day} className="p-4 bg-white shadow-md rounded-lg">
//               <h3 className="text-xl font-semibold mb-3">{day}</h3>
//               <ul>
//                 {classes.map((classItem, index) => (
//                   <li key={index} className="mb-3">
//                     <p className="font-medium">{classItem.time}</p>
//                     <p className="text-gray-700">Subject:{classItem.subject}</p>
//                     <p className="text-gray-500">Teacher:{classItem.teacher}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Timetable Image with Download Option */}
//       <section className="mb-8 p-4 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4">Timetable Image</h2>
//         <div className="flex justify-center">
//           <img
//             src="timetable.jpg" // Replace with your image path
//             alt="Class Timetable"
//             className="w-full max-w-xl rounded-lg shadow-md mb-4"
//           />
//         </div>
//         <div className="flex justify-center">
//           <a
//             href="timetable.jpg" // Replace with your image path
//             download="class_timetable.png" // Name of the downloaded file
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Download Timetable
//           </a>
//         </div>
//       </section>

//       {/* Upcoming Classes */}
//       <section className="mb-8 p-4 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4">Upcoming Classes</h2>
//         <ul className="list-disc list-inside">
//           <li>Mathematics - 9:00 AM, Monday</li>
//           <li>Physics - 10:15 AM, Monday</li>
//           <li>Chemistry - 11:30 AM, Monday</li>
//         </ul>
//       </section>

//       {/* Download Timetable as PDF */}
//       <section className="mb-8 p-4 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4">
//           Download Timetable as PDF
//         </h2>
//         <a
//           href="#" // Link to PDF download, if implemented
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Download as PDF
//         </a>
//       </section>
//     </div>
//   );
// }
