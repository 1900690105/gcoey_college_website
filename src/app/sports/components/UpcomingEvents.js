// components/UpcomingEvents.js
import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const events = [
  {
    date: "August 20, 2024",
    name: "Football Championship",
    location: "Main Stadium",
  },
  {
    date: "September 15, 2024",
    name: "Basketball Tournament",
    location: "Sports Complex",
  },
  // Add more events here
];

const UpcomingEvents = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Upcoming Events</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold">{event.name}</h3>
              <div className="mt-2 flex items-center text-gray-600">
                <FaCalendarAlt className="mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="mt-1 flex items-center text-gray-500">
                <FaMapMarkerAlt className="mr-2" />
                <span>{event.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
