import React, { useState } from "react";
import {
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  Bell,
  MessageCircle,
  TrendingUp,
  BookOpen,
  Award,
} from "lucide-react";

export default function ExamAssignment() {
  const [notifications, setNotifications] = useState({
    exams: false,
    assignments: false,
  });

  const toggleNotification = (type) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Academic Dashboard
                </h1>
                <p className="text-sm text-gray-600">
                  Track your progress and stay organized
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">
                  GPA: 3.8
                </span>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-2xl text-white transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Upcoming Exams</p>
                <p className="text-3xl font-bold">3</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-200" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 rounded-2xl text-white transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Pending Tasks</p>
                <p className="text-3xl font-bold">2</p>
              </div>
              <Clock className="w-8 h-8 text-orange-200" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 rounded-2xl text-white transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Completed</p>
                <p className="text-3xl font-bold">12</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-200" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 rounded-2xl text-white transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Average Grade</p>
                <p className="text-3xl font-bold">A-</p>
              </div>
              <Award className="w-8 h-8 text-purple-200" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Exams */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-xl">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Upcoming Exams
                </h2>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {[
                {
                  subject: "Mathematics",
                  type: "Final Exam",
                  date: "10th Dec 2024",
                  color: "blue",
                },
                {
                  subject: "Physics",
                  type: "Final Exam",
                  date: "12th Dec 2024",
                  color: "purple",
                },
                {
                  subject: "Chemistry",
                  type: "Final Exam",
                  date: "14th Dec 2024",
                  color: "green",
                },
              ].map((exam, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-3 h-3 rounded-full bg-${exam.color}-500`}
                    ></div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {exam.subject}
                      </h3>
                      <p className="text-sm text-gray-600">{exam.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-800">
                      {exam.date}
                    </p>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-100 text-red-700 mt-1">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      Urgent
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assignment Status */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-100 rounded-xl">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Assignment Status
                </h2>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {[
                {
                  title: "Assignment 1",
                  subject: "Mathematics",
                  dueDate: "5th Dec 2024",
                  status: "pending",
                  statusColor: "red",
                },
                {
                  title: "Assignment 2",
                  subject: "Physics",
                  dueDate: "7th Dec 2024",
                  status: "pending",
                  statusColor: "red",
                },
              ].map((assignment, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-3 h-3 rounded-full bg-${assignment.statusColor}-500`}
                    ></div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {assignment.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {assignment.subject}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-800">
                      Due: {assignment.dueDate}
                    </p>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-100 text-red-700 mt-1 capitalize">
                      {assignment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Performance */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Recent Performance
                </h2>
              </div>
              <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                View All
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Assessment
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Date
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Score
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Grade
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-800">
                          Mathematics - Midterm
                        </p>
                        <p className="text-sm text-gray-600">
                          Final Assessment
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600">15th Oct 2024</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-4/5 h-full bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">85/100</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700 font-medium">
                        A
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-700">Pass</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-800">
                          Physics - Midterm
                        </p>
                        <p className="text-sm text-gray-600">
                          Final Assessment
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600">17th Oct 2024</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-3/4 h-full bg-yellow-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">78/100</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700 font-medium">
                        B+
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-700">Pass</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-xl">
                  <Download className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Quick Actions
                </h2>
              </div>
            </div>
            <div className="p-6 space-y-3">
              {[
                {
                  name: "Mathematics Final Exam Paper",
                  icon: Download,
                  color: "blue",
                },
                {
                  name: "Physics Final Exam Paper",
                  icon: Download,
                  color: "purple",
                },
                {
                  name: "Assignment 1 - Mathematics",
                  icon: Download,
                  color: "green",
                },
                {
                  name: "Assignment 2 - Physics",
                  icon: Download,
                  color: "orange",
                },
              ].map((resource, index) => (
                <button
                  key={index}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 bg-${resource.color}-100 rounded-lg group-hover:bg-${resource.color}-200 transition-colors`}
                    >
                      <resource.icon
                        className={`w-4 h-4 text-${resource.color}-600`}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      {resource.name}
                    </span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download className="w-4 h-4 text-gray-500" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Settings & Support */}
          <div className="space-y-6">
            {/* Notifications */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-100 rounded-xl">
                    <Bell className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    Notifications
                  </h2>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-800">
                      Exam Reminders
                    </span>
                  </div>
                  <button
                    onClick={() => toggleNotification("exams")}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      notifications.exams ? "bg-indigo-600" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notifications.exams ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-800">
                      Assignment Alerts
                    </span>
                  </div>
                  <button
                    onClick={() => toggleNotification("assignments")}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      notifications.assignments
                        ? "bg-indigo-600"
                        : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notifications.assignments
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-emerald-100 rounded-xl">
                    <MessageCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    Need Help?
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Having trouble with your exams or assignments? Our support
                  team is here to help!
                </p>
                <button className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium py-3 px-4 rounded-xl transition-all transform hover:scale-105">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";

// export default function ExamAssignment() {
//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       {/* Upcoming Exams */}
//       <section className="mb-8 p-4 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4">Upcoming Exams</h2>
//         <ul className="list-disc list-inside">
//           <li>Mathematics - Final Exam on 10th Dec 2024</li>
//           <li>Physics - Final Exam on 12th Dec 2024</li>
//           <li>Chemistry - Final Exam on 14th Dec 2024</li>
//         </ul>
//       </section>

//       {/* Previous Exams */}
//       <section className="mb-8 p-4 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4">Previous Exams</h2>
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-4 py-2">Exam</th>
//               <th className="px-4 py-2">Date</th>
//               <th className="px-4 py-2">Score</th>
//               <th className="px-4 py-2">Grade</th>
//               <th className="px-4 py-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border px-4 py-2">Mathematics - Midterm</td>
//               <td className="border px-4 py-2">15th Oct 2024</td>
//               <td className="border px-4 py-2">85</td>
//               <td className="border px-4 py-2 text-green-600">A</td>
//               <td className="border px-4 py-2 text-green-600">Pass</td>
//             </tr>
//             <tr>
//               <td className="border px-4 py-2">Physics - Midterm</td>
//               <td className="border px-4 py-2">17th Oct 2024</td>
//               <td className="border px-4 py-2">78</td>
//               <td className="border px-4 py-2 text-yellow-600">B+</td>
//               <td className="border px-4 py-2 text-green-600">Pass</td>
//             </tr>
//           </tbody>
//         </table>
//       </section>

//       {/* Assignments Due */}
//       <section className="mb-8 p-4 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4">Assignments Due</h2>
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-4 py-2">Assignment</th>
//               <th className="px-4 py-2">Subject</th>
//               <th className="px-4 py-2">Due Date</th>
//               <th className="px-4 py-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border px-4 py-2">Assignment 1</td>
//               <td className="border px-4 py-2">Mathematics</td>
//               <td className="border px-4 py-2">5th Dec 2024</td>
//               <td className="border px-4 py-2 text-red-600">Pending</td>
//             </tr>
//             <tr>
//               <td className="border px-4 py-2">Assignment 2</td>
//               <td className="border px-4 py-2">Physics</td>
//               <td className="border px-4 py-2">7th Dec 2024</td>
//               <td className="border px-4 py-2 text-red-600">Pending</td>
//             </tr>
//           </tbody>
//         </table>
//       </section>

//       {/* Submitted Assignments */}
//       <section className="mb-8 p-4 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4">Submitted Assignments</h2>
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-4 py-2">Assignment</th>
//               <th className="px-4 py-2">Subject</th>
//               <th className="px-4 py-2">Submission Date</th>
//               <th className="px-4 py-2">Grade</th>
//               <th className="px-4 py-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border px-4 py-2">Assignment 1</td>
//               <td className="border px-4 py-2">Mathematics</td>
//               <td className="border px-4 py-2">2nd Nov 2024</td>
//               <td className="border px-4 py-2 text-green-600">A</td>
//               <td className="border px-4 py-2 text-green-600">Graded</td>
//             </tr>
//             <tr>
//               <td className="border px-4 py-2">Assignment 2</td>
//               <td className="border px-4 py-2">Physics</td>
//               <td className="border px-4 py-2">5th Nov 2024</td>
//               <td className="border px-4 py-2 text-yellow-600">B+</td>
//               <td className="border px-4 py-2 text-green-600">Graded</td>
//             </tr>
//           </tbody>
//         </table>
//       </section>

//       {/* Downloadable Resources */}
//       <section className="mb-8 p-4 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4">Downloadable Resources</h2>
//         <ul className="list-disc list-inside">
//           <li>
//             <a href="#" className="text-blue-500 hover:underline">
//               Mathematics Final Exam Paper
//             </a>
//           </li>
//           <li>
//             <a href="#" className="text-blue-500 hover:underline">
//               Physics Final Exam Paper
//             </a>
//           </li>
//           <li>
//             <a href="#" className="text-blue-500 hover:underline">
//               Assignment 1 - Mathematics
//             </a>
//           </li>
//           <li>
//             <a href="#" className="text-blue-500 hover:underline">
//               Assignment 2 - Physics
//             </a>
//           </li>
//         </ul>
//       </section>

//       {/* Exam/Assignment Notifications */}
//       <section className="mb-8 p-4 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4">
//           Exam/Assignment Notifications
//         </h2>
//         <div className="flex items-center">
//           <input id="exam-notifications" type="checkbox" className="mr-2" />
//           <label htmlFor="exam-notifications" className="text-gray-700">
//             Receive Exam Notifications
//           </label>
//         </div>
//         <div className="flex items-center mt-2">
//           <input
//             id="assignment-notifications"
//             type="checkbox"
//             className="mr-2"
//           />
//           <label htmlFor="assignment-notifications" className="text-gray-700">
//             Receive Assignment Notifications
//           </label>
//         </div>
//       </section>

//       {/* Contact Support */}
//       <section className="mb-8 p-4 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
//         <p className="text-gray-700">
//           If you have any issues regarding your exams or assignments, please{" "}
//           <a href="#" className="text-blue-500 hover:underline">
//             contact us
//           </a>
//           .
//         </p>
//       </section>
//     </div>
//   );
// }
