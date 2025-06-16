// components/OperatingHours.js
"use client";
import { useState } from "react";
import { FaClock, FaCalendarAlt } from "react-icons/fa";

const weekdays = [
  { day: "Monday", hours: "8:00 AM - 5:00 PM" },
  { day: "Tuesday", hours: "8:00 AM - 5:00 PM" },
  { day: "Wednesday", hours: "8:00 AM - 5:00 PM" },
  { day: "Thursday", hours: "8:00 AM - 5:00 PM" },
  { day: "Friday", hours: "8:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
];

const OperatingHours = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Operating Hours
        </h2>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-center mb-4">
              <FaClock className="text-2xl text-blue-500 mr-2" />
              <span className="text-lg font-semibold">Regular Hours</span>
            </div>
            <div className="text-center mb-4">
              <p className="text-gray-700">
                Monday - Friday: 8:00 AM - 5:00 PM
              </p>
              <p className="text-gray-700">Saturday - Sunday: Closed</p>
            </div>
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <FaCalendarAlt className="mr-2" />
              {isExpanded ? "Hide Details" : "Show Full Schedule"}
            </button>
          </div>
          {isExpanded && (
            <div className="bg-gray-50 p-6 border-t border-gray-200">
              <table className="w-full">
                <tbody>
                  {weekdays.map((day) => (
                    <tr key={day.day} className="border-b last:border-b-0">
                      <td className="py-2 font-semibold text-gray-700">
                        {day.day}
                      </td>
                      <td className="py-2 text-right text-gray-600">
                        {day.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OperatingHours;
