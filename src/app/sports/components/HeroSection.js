// components/HeroSection.js
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/assets/hero/hero (1).png')" }}
      aria-label="Hero section showcasing college's sports culture"
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Explore Our College's Thriving Sports Culture
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-md">
          Join us in celebrating our love for sports!
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
