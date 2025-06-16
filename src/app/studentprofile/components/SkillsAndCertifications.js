import React from "react";

export default function SkillsAndCertifications() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-6">Skills and Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Skills</h3>
          <ul className="list-disc ml-4 space-y-2">
            <li className="text-gray-600">JavaScript, Python</li>
            <li className="text-gray-600">React.js, Next.js</li>
            <li className="text-gray-600">Machine Learning, Data Analysis</li>
            {/* Add more skills as needed */}
          </ul>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Certifications</h3>
          <ul className="list-disc ml-4 space-y-2">
            <li className="text-gray-600">Certified React Developer</li>
            <li className="text-gray-600">Machine Learning Specialization</li>
            {/* Add more certifications as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}
