import React from "react";

export default function AssignmentsAndProjects() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-6">Assignments and Projects</h2>
      <div className="space-y-4">
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">
            Project Title: AI Chatbot
          </h3>
          <p className="text-gray-600 mb-2">
            Description: Developing a chatbot using natural language processing.
          </p>
          <p className="text-gray-600">Status: Ongoing</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">
            Assignment: Data Structures
          </h3>
          <p className="text-gray-600 mb-2">Submitted on: 2024-08-15</p>
          <p className="text-gray-600">Grade: A</p>
        </div>
        {/* Add more assignments/projects as needed */}
      </div>
    </div>
  );
}
