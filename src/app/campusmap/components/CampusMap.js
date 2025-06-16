// components/CampusMap.js
import { useState } from "react";

const mapStyles = {
  default: "w-full h-96 rounded-lg shadow-lg transition-all duration-300",
  expanded: "fixed inset-0 w-full h-full z-50",
};

export default function CampusMap() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Campus Map</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our campus virtually or download a detailed map for offline
            navigation.
          </p>
        </div>

        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.423623426494!2d144.96317511588008!3d-37.81632697975143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b1d7b6ab8f%3A0x5045675218ce6e0!2sCollege%20Campus!5e0!3m2!1sen!2sus!4v1638220110132!5m2!1sen!2sus"
            className={mapStyles[isExpanded ? "expanded" : "default"]}
            allowFullScreen=""
            loading="lazy"
            title="Campus Map"
          ></iframe>

          {isExpanded && (
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close expanded map"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}

          {!isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              Expand Map
            </button>
          )}
        </div>

        <div className="mt-8 flex justify-center items-center space-x-4">
          <a
            href="/path-to-map.pdf"
            className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200"
            download
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Download PDF Map
          </a>
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200"
            onClick={() => {
              /* Implement directions functionality */
            }}
          >
            Get Directions
          </button>
        </div>
      </div>
    </section>
  );
}
