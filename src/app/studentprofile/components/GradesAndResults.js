import React from "react";

export default function GradesAndResults() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-6">Grades and Results</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="px-4 py-3 font-medium rounded-tl-lg">Semester</th>
              <th className="px-4 py-3 font-medium">GPA</th>
              <th className="px-4 py-3 font-medium rounded-tr-lg">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 text-center">
              <td className="px-4 py-3 text-gray-600">1st Semester</td>
              <td className="px-4 py-3 text-gray-600">3.8</td>
              <td className="px-4 py-3 text-gray-600">A</td>
            </tr>
            <tr className="bg-gray-100 border-b border-gray-200 text-center">
              <td className="px-4 py-3 text-gray-600">2nd Semester</td>
              <td className="px-4 py-3 text-gray-600">3.7</td>
              <td className="px-4 py-3 text-gray-600">A-</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
