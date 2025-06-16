// components/CampusOverview.js
"use client";
import { useState } from "react";

const overviewItems = [
  {
    title: "50+ Buildings",
    description:
      "Modern academic and residential buildings equipped with cutting-edge technology.",
    icon: "🏛️",
  },
  {
    title: "100 Acres",
    description:
      "Spacious campus with lush green spaces, perfect for study and relaxation.",
    icon: "🌳",
  },
  {
    title: "20+ Recreational Areas",
    description:
      "State-of-the-art sports facilities, parks, and social spaces for a balanced student life.",
    icon: "🏋️‍♀️",
  },
];

function OverviewCard({ title, description, icon, isActive, onClick }) {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
        isActive ? "ring-2 ring-blue-500" : ""
      }`}
      onClick={onClick}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function CampusOverview() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Campus Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our vibrant campus, where cutting-edge facilities meet
            natural beauty to create an inspiring learning environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {overviewItems.map((item, index) => (
            <OverviewCard
              key={index}
              {...item}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            {overviewItems[activeIndex].description}
          </p>
        </div>
      </div>
    </section>
  );
}
