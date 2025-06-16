import React from "react";

export default function ExtraCurricularActivities() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-6">Extra-Curricular Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="material-icons text-gray-600 mr-2">group</span>
            <h3 className="text-lg font-semibold">Member of Coding Club</h3>
          </div>
          <p className="text-gray-600">
            Actively participated in coding workshops and hackathons.
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="material-icons text-gray-600 mr-2">
              sports_basketball
            </span>
            <h3 className="text-lg font-semibold">
              Captain of College Basketball Team
            </h3>
          </div>
          <p className="text-gray-600">
            Led the team to several regional and national tournaments.
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="material-icons text-gray-600 mr-2">
              volunteer_activism
            </span>
            <h3 className="text-lg font-semibold">
              Volunteered at TechFest 2023
            </h3>
          </div>
          <p className="text-gray-600">
            Assisted in the organization and execution of the annual tech
            festival.
          </p>
        </div>
        {/* Add more activities as needed */}
      </div>
    </div>
  );
}
