import React from "react";

export default function AcademicDetails() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-6">Academic Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="font-medium text-gray-700 mb-2">Course</p>
          <p className="text-gray-500">B.Tech Computer Science</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="font-medium text-gray-700 mb-2">Year/Semester</p>
          <p className="text-gray-500">3rd Year, 5th Semester</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="font-medium text-gray-700 mb-2">Department</p>
          <p className="text-gray-500">Computer Science</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="font-medium text-gray-700 mb-2">Past Education</p>
          <p className="text-gray-500">Deploma</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="font-medium text-gray-700 mb-2">GPA</p>
          <p className="text-gray-500">3.8</p>
        </div>
      </div>
    </div>
  );
}
