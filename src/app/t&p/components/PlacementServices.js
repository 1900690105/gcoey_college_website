// components/PlacementServices.js
import React from "react";
import { FaBriefcase, FaUserCheck, FaRegEdit, FaUsers } from "react-icons/fa";

const PlacementServices = () => (
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Placement Services
      </h2>
      <p className="text-gray-700 mb-6 text-center">
        Our placement services connect students with top companies and provide
        support throughout the recruitment process.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center hover:shadow-xl transition-shadow duration-300">
          <FaUserCheck className="text-3xl text-blue-600 mr-4" />
          <div>
            <h3 className="text-xl font-semibold">
              Personalized Career Counseling
            </h3>
            <p className="text-gray-600">
              Receive tailored advice to navigate your career path.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center hover:shadow-xl transition-shadow duration-300">
          <FaRegEdit className="text-3xl text-green-600 mr-4" />
          <div>
            <h3 className="text-xl font-semibold">
              Resume and Cover Letter Review
            </h3>
            <p className="text-gray-600">
              Get professional feedback on your application documents.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center hover:shadow-xl transition-shadow duration-300">
          <FaBriefcase className="text-3xl text-orange-600 mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Interview Preparation</h3>
            <p className="text-gray-600">
              Prepare effectively for your interviews with our expert guidance.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center hover:shadow-xl transition-shadow duration-300">
          <FaUsers className="text-3xl text-purple-600 mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Networking Events</h3>
            <p className="text-gray-600">
              Connect with industry professionals and expand your network.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PlacementServices;
