// components/HeroSection.js
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/assets/hero/hero (1).png")' }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6">
          Annual Gathering 2024
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10">
          Join us for an unforgettable experience on{" "}
          <span className="font-semibold">[Event Date]</span>
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          Register Now
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent opacity-50"></div>
    </section>
  );
};

export default HeroSection;
