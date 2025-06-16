// components/Achievements.js
import React from "react";
import { FaTrophy } from "react-icons/fa";

const achievements = [
  {
    title: "National Football Champions 2023",
    description: "Our football team won the national championship.",
  },
  {
    title: "Basketball Tournament Winners 2024",
    description: "Our basketball team dominated the tournament.",
  },
  // Add more achievements here
];

const Achievements = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">
          Achievements and Awards
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
              <div className="flex items-center justify-center mb-4">
                <FaTrophy className="text-yellow-500 text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold">{achievement.title}</h3>
              <p className="mt-2 text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
