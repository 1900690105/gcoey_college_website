import React from "react";
import { FaClipboardCheck, FaRegFileAlt, FaUserTie } from "react-icons/fa";

const trainingProgramsData = [
  {
    title: "Workshop on Coding",
    description: "A comprehensive workshop on modern coding practices.",
    date: "March 20, 2024",
    icon: <FaClipboardCheck className="text-4xl text-blue-600" />,
  },
  {
    title: "Internship Opportunities",
    description: "Gain hands-on experience through various internships.",
    date: "April 15, 2024",
    icon: <FaRegFileAlt className="text-4xl text-green-600" />,
  },
  {
    title: "Resume Building",
    description: "Learn how to craft a professional resume.",
    date: "May 10, 2024",
    icon: <FaUserTie className="text-4xl text-orange-600" />,
  },
];

const TrainingPrograms = () => (
  <section className="py-12 bg-gray-100">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Training Programs
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainingProgramsData.map((program, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 group"
          >
            <div className="flex items-center mb-4">
              {program.icon}
              <h3 className="text-2xl font-semibold ml-4">{program.title}</h3>
            </div>
            <p className="text-gray-700 mb-4">{program.description}</p>
            <p className="text-gray-500 mb-4">Date: {program.date}</p>
            <a
              href="#"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrainingPrograms;
