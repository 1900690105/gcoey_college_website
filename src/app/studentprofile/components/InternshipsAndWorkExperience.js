import React from "react";

export default function InternshipsAndWorkExperience() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-6">
        Internships and Work Experience
      </h2>
      <div className="space-y-4">
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="material-icons text-gray-600 mr-2">business</span>
            <h3 className="text-lg font-semibold">XYZ Technologies</h3>
          </div>
          <p className="text-gray-600 mb-2">
            Role: Software Development Intern
          </p>
          <p className="text-gray-600 mb-2">
            Duration: June 2023 - August 2023
          </p>
          <p className="text-gray-600">
            Description: Worked on developing features for a web application
            using React.js.
          </p>
        </div>
        {/* Add more internships/work experiences as needed */}
      </div>
    </div>
  );
}
