import React from "react";

export default function TimelineActivityLog() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-6">Timeline/Activity Log</h2>
      <div className="space-y-4">
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="material-icons text-gray-600 mr-2">
              calendar_today
            </span>
            <p className="text-gray-600">2024-08-15</p>
          </div>
          <p className="text-gray-600">
            Submitted Assignment on Data Structures
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="material-icons text-gray-600 mr-2">
              calendar_today
            </span>
            <p className="text-gray-600">2024-07-30</p>
          </div>
          <p className="text-gray-600">Participated in Hackathon 2024</p>
        </div>
        {/* Add more timeline events as needed */}
      </div>
    </div>
  );
}
