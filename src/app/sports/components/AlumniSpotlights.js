// components/AlumniSpotlights.js
import React from "react";
import { FaStar } from "react-icons/fa";

const alumni = [
  {
    name: "Alice Johnson",
    achievement: "Professional Football Player",
    image: "/assets/hero/hero (3).png",
  },
  {
    name: "Michael Brown",
    achievement: "Olympic Medalist",
    image: "/assets/hero/hero (7).png",
  },
  // Add more alumni here
];

const AlumniSpotlights = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center flex items-center justify-center">
          <FaStar className="mr-2" />
          Alumni Spotlights
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((alumnus, index) => (
            <div key={index} className="text-center">
              <img
                src={alumnus.image}
                alt={alumnus.name}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <h3 className="mt-4 text-xl font-semibold">{alumnus.name}</h3>
              <p className="text-gray-500">{alumnus.achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniSpotlights;
