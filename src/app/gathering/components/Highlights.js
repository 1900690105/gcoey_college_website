// components/Highlights.js
import React from "react";

const Highlights = () => {
  const highlights = [
    {
      title: "Cultural Performances",
      description: "Enjoy various performances showcasing talent and culture.",
      image: "/assets/hero/hero.jpg",
      icon: "🎭",
    },
    {
      title: "Competitions",
      description:
        "Participate in exciting competitions and win amazing prizes.",
      image: "/assets/hero/hero (1).png",
      icon: "🏆",
    },
    {
      title: "Guest Speakers",
      description: "Get inspired by speeches from industry leaders and alumni.",
      image: "/assets/hero/hero (2).png",
      icon: "🎤",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          Event Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <HighlightCard key={index} {...highlight} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HighlightCard = ({ title, description, image, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
          <span className="text-5xl">{icon}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="px-6 py-4 bg-gray-50">
        <a
          href="#"
          className="text-indigo-600 font-semibold hover:text-indigo-800 transition duration-300"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
};

export default Highlights;
