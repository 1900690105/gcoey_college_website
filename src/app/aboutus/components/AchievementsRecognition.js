"use client";
import Image from "next/image";
import { useState } from "react";
import { FaTrophy, FaAward, FaCertificate } from "react-icons/fa"; // Example icons

export default function AchievementsRecognition() {
  const alumni = [
    {
      name: "John Doe",
      achievement: "CEO at XYZ Corp.",
      image: "/assets/hero/hero (1).png",
    },
    {
      name: "Jane Smith",
      achievement: "Founder of ABC Tech",
      image: "/assets/hero/hero (1).png",
    },
    {
      name: "Jane Smith",
      achievement: "Founder of ABC Tech",
      image: "/assets/hero/hero (1).png",
    },
    {
      name: "Jane Smith",
      achievement: "Founder of ABC Tech",
      image: "/assets/hero/hero (1).png",
    },
    {
      name: "Jane Smith",
      achievement: "Founder of ABC Tech",
      image: "/assets/hero/hero (1).png",
    },
    // Add more alumni as needed
  ];

  const milestones = [
    {
      icon: <FaTrophy className="text-4xl text-blue-600" />,
      title: "Top Ranked in State",
      description:
        "Ranked #1 in the state for Engineering in 2024 by XYZ Magazine.",
    },
    {
      icon: <FaAward className="text-4xl text-yellow-500" />,
      title: "National Research Award",
      description: "Awarded the National Research Excellence Award in 2023.",
    },
    {
      icon: <FaCertificate className="text-4xl text-green-600" />,
      title: "International Accreditation",
      description: "Received International Accreditation for our MBA program.",
    },
    // Add more milestones as needed
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-blue-800">
          Achievements & Recognition
        </h2>
        <p className="text-xl text-center text-gray-600 mt-4 italic">
          Celebrating Excellence Across Academics, Research, and Community
          Engagement
        </p>

        {/* Milestone Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center transform hover:scale-105 transition-transform"
            >
              <div className="mb-4">{milestone.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {milestone.title}
              </h3>
              <p className="text-gray-600 mt-2">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
