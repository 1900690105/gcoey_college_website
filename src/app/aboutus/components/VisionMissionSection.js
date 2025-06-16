import React from "react";

// Shared Tailwind CSS class strings
const containerClass = " text-gray-800 py-16 px-4 sm:px-6 lg:px-8";
const sectionClass =
  "bg-white rounded-lg shadow-lg border p-6 transition-all duration-300 hover:shadow-xl";
const titleClass = "text-2xl sm:text-3xl font-bold mb-4 text-indigo-600";
const contentClass = "text-base sm:text-lg text-gray-600 leading-relaxed";

const Section = ({ title, content, icon }) => {
  return (
    <div className={`${sectionClass} flex flex-col items-center text-center`}>
      {icon && <div className="text-4xl mb-4 text-indigo-500">{icon}</div>}
      <h2 className={titleClass}>{title}</h2>
      <p className={contentClass}>{content}</p>
    </div>
  );
};

const VisionMissionSection = () => {
  return (
    <div className={containerClass}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-indigo-800">
          Our Vision & Mission
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Section
            title="Our Vision"
            content="To be the leading provider of innovative solutions that empower individuals and organizations to achieve their full potential."
            icon="🚀"
          />
          <Section
            title="Our Mission"
            content="Our mission is to deliver high-quality products and services that create value and improve the lives of our customers. We strive to foster a culture of excellence, integrity, and continuous improvement."
            icon="🎯"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;
