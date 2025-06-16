import React from "react";

export default function SocialLinks() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-6">Social Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a
          href="https://linkedin.com/in/johndoe"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg p-4 flex items-center hover:bg-gray-200 transition-colors duration-300"
        >
          <span className="material-icons text-blue-600 mr-2">linkedin</span>
          <span className="text-blue-600 font-medium">LinkedIn</span>
        </a>
        <a
          href="https://github.com/johndoe"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg p-4 flex items-center hover:bg-gray-200 transition-colors duration-300"
        >
          <span className="material-icons text-gray-800 mr-2">github</span>
          <span className="text-gray-800 font-medium">GitHub</span>
        </a>
        <a
          href="https://portfolio.johndoe.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg p-4 flex items-center hover:bg-gray-200 transition-colors duration-300"
        >
          <span className="material-icons text-green-600 mr-2">web</span>
          <span className="text-green-600 font-medium">Portfolio</span>
        </a>
      </div>
    </div>
  );
}
