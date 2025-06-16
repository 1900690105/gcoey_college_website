// components/CoachProfiles.js
import React from "react";
import { FaUserTie } from "react-icons/fa";

const coaches = [
  {
    name: "John Doe",
    role: "Football Coach",
    image: "/assets/hero/hero (2).png",
  },
  {
    name: "Jane Smith",
    role: "Basketball Coach",
    image: "/assets/hero/hero (5).png",
  },
  // Add more coaches here
];

const CoachProfiles = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center flex items-center justify-center">
          <FaUserTie className="mr-2" />
          Coach and Staff Profiles
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <div key={index} className="text-center">
              <img
                src={coach.image}
                alt={coach.name}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <h3 className="mt-4 text-xl font-semibold">{coach.name}</h3>
              <p className="text-gray-500">{coach.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachProfiles;
