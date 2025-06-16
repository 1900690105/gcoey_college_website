// components/CareerGuidance.js
import React from "react";

const CareerGuidance = () => (
  <section className="py-16">
    <div className="container mx-auto px-8">
      <h2 className="text-4xl font-bold text-center mb-8">Career Guidance</h2>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <p className="text-gray-800 mb-6">
          Our career guidance services are designed to help students make
          informed decisions about their future career paths.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-gray-700">
            <strong>One-on-one career counseling</strong>
          </li>
          <li className="text-gray-700">
            <strong>Resume and cover letter writing workshops</strong>
          </li>
          <li className="text-gray-700">
            <strong>Interview skills training</strong>
          </li>
          <li className="text-gray-700">
            <strong>Job search strategies</strong>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default CareerGuidance;
