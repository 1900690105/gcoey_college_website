import React, { useState, useEffect } from "react";

const formatDate = (date) => {
  return date.toISOString().split("T")[0].split("-").reverse().join("/");
};

const formatTime = (date) => {
  return date.toTimeString().split(" ")[0];
};

const NotificationTable = ({ notifications }) => {
  const [currentTime, setCurrentTime] = useState({ date: "", time: "" });

  useEffect(() => {
    const now = new Date();
    setCurrentTime({
      date: formatDate(now),
      time: formatTime(now),
    });
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="divide-y divide-gray-200">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 hover:bg-gray-50 transition duration-150 ease-in-out"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-500">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-base text-gray-800">
                    {notification}
                  </p>
                  {currentTime.date && currentTime.time && (
                    <p className="mt-1 text-xs sm:text-sm text-gray-500">
                      {currentTime.date} • {currentTime.time}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationTable;
