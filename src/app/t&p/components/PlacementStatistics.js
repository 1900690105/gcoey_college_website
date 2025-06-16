// components/PlacementStatistics.js
import React from "react";

const PlacementStatistics = () => (
  <section className="py-12">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Placement Statistics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <p className="text-3xl font-bold text-blue-600">Placement Rate</p>
          <p className="text-2xl font-semibold text-gray-800">85%</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <p className="text-3xl font-bold text-green-600">Average Salary</p>
          <p className="text-2xl font-semibold text-gray-800">$60,000</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <p className="text-3xl font-bold text-orange-500">Tech Sector</p>
          <p className="text-2xl font-semibold text-gray-800">40%</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <p className="text-3xl font-bold text-red-500">Finance Sector</p>
          <p className="text-2xl font-semibold text-gray-800">25%</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <p className="text-3xl font-bold text-purple-500">Consulting</p>
          <p className="text-2xl font-semibold text-gray-800">15%</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <p className="text-3xl font-bold text-teal-500">Others</p>
          <p className="text-2xl font-semibold text-gray-800">20%</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h4 className="text-xl font-semibold text-gray-800">
          Placement by Sector:
        </h4>
        <ul className="list-disc list-inside inline-block text-left text-gray-800 mt-2">
          <li>
            Technology - <span className="font-bold">40%</span>
          </li>
          <li>
            Finance - <span className="font-bold">25%</span>
          </li>
          <li>
            Consulting - <span className="font-bold">15%</span>
          </li>
          <li>
            Others - <span className="font-bold">20%</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default PlacementStatistics;
