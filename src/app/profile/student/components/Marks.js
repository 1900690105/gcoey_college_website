import React, { useState } from "react";

export default function MarksResult() {
  const [activeTab, setActiveTab] = useState("summary");

  const TabButton = ({ id, label }) => (
    <button
      className={`px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base font-semibold rounded-t-lg ${
        activeTab === id
          ? "bg-white text-blue-600 border-t border-x border-gray-200"
          : "bg-gray-100 text-gray-600"
      }`}
      onClick={() => setActiveTab(id)}
    >
      {label}
    </button>
  );

  return (
    <div className="max-w-full sm:max-w-7xl mx-auto p-2 sm:p-4 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
        Academic Performance
      </h1>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-wrap border-b border-gray-200">
          <TabButton id="summary" label="Summary" />
          <TabButton id="subject-marks" label="Subject Marks" />
          <TabButton id="term-results" label="Term Results" />
          <TabButton id="attendance" label="Attendance" />
        </div>

        <div className="p-4 sm:p-6">
          {activeTab === "summary" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-green-800">
                  Cumulative GPA
                </h2>
                <p className="text-2xl sm:text-3xl font-bold text-green-600">
                  3.8
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-blue-800">
                  Overall Percentage
                </h2>
                <p className="text-2xl sm:text-3xl font-bold text-blue-600">
                  85%
                </p>
              </div>
            </div>
          )}

          {activeTab === "subject-marks" && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {[
                      "Subject",
                      "Marks Obtained",
                      "Total Marks",
                      "Grade",
                      "Status",
                    ].map((header) => (
                      <th
                        key={header}
                        className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    {
                      subject: "Mathematics",
                      obtained: 85,
                      total: 100,
                      grade: "A",
                      status: "Pass",
                    },
                    {
                      subject: "Physics",
                      obtained: 78,
                      total: 100,
                      grade: "B+",
                      status: "Pass",
                    },
                    {
                      subject: "Chemistry",
                      obtained: 65,
                      total: 100,
                      grade: "C",
                      status: "Pass",
                    },
                  ].map((subject, index) => (
                    <tr key={index}>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm">
                        {subject.subject}
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm">
                        {subject.obtained}
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm">
                        {subject.total}
                      </td>
                      <td
                        className={`px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-semibold ${
                          subject.grade === "A"
                            ? "text-green-600"
                            : subject.grade === "B+"
                            ? "text-yellow-600"
                            : "text-red-600"
                        }`}
                      >
                        {subject.grade}
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-green-600">
                        {subject.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "term-results" && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {[
                      "Term/Exam",
                      "Marks Obtained",
                      "Total Marks",
                      "Percentage",
                      "Grade",
                    ].map((header) => (
                      <th
                        key={header}
                        className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    {
                      term: "Midterm Exam",
                      obtained: 320,
                      total: 400,
                      percentage: "80%",
                      grade: "A",
                    },
                    {
                      term: "Final Exam",
                      obtained: 350,
                      total: 500,
                      percentage: "70%",
                      grade: "B+",
                    },
                  ].map((exam, index) => (
                    <tr key={index}>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm">
                        {exam.term}
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm">
                        {exam.obtained}
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm">
                        {exam.total}
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-blue-600">
                        {exam.percentage}
                      </td>
                      <td
                        className={`px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-semibold ${
                          exam.grade === "A"
                            ? "text-green-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {exam.grade}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "attendance" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-800">
                  Total Classes
                </h3>
                <p className="text-xl sm:text-2xl font-bold">100</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-green-800">
                  Classes Attended
                </h3>
                <p className="text-xl sm:text-2xl font-bold text-green-600">
                  90
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-blue-800">
                  Attendance Percentage
                </h3>
                <p className="text-xl sm:text-2xl font-bold text-blue-600">
                  90%
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
            Downloadable Report Cards
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-blue-600 hover:underline text-sm sm:text-base"
              >
                Midterm Exam Report Card
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-600 hover:underline text-sm sm:text-base"
              >
                Final Exam Report Card
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
            Upcoming Exams
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base">
            <li>Semester 1 Exam - Starts on 10th Dec 2024</li>
            <li>Semester 2 Exam - Starts on 15th May 2025</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
          Notifications
        </h2>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              id="exam-notifications"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="exam-notifications"
              className="ml-2 block text-sm text-gray-700"
            >
              Receive Exam Notifications
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="result-notifications"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="result-notifications"
              className="ml-2 block text-sm text-gray-700"
            >
              Receive Result Notifications
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
          Contact Support
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          If you have any issues regarding your results, please{" "}
          <a href="#" className="text-blue-600 hover:underline">
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
}
