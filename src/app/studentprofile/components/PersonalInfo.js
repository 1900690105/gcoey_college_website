import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function PersonalInfo() {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src="/logo.png"
          alt="Profile Picture"
          className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-8"
        />
        <div>
          <h3 className="text-xl font-medium mb-2">John Doe</h3>
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-blue-500 mr-2" />
            <p className="text-gray-600">johndoe@example.com</p>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="text-blue-500 mr-2" />
            <p className="text-gray-600">+1234567890</p>
          </div>
          <p className="text-gray-600 mt-2">Enrollment Number: 12345678</p>
        </div>
      </div>
    </div>
  );
}
