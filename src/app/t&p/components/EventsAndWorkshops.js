// components/EventsAndWorkshops.js
import React from "react";

const EventsAndWorkshops = () => {
  const events = [
    {
      title: "Networking Event",
      description: "An event to connect with industry professionals.",
      date: "June 5, 2024",
      location: "Downtown Conference Center",
    },
    {
      title: "Interview Skills Workshop",
      description: "Prepare for interviews with expert guidance.",
      date: "July 10, 2024",
      location: "Skill Development Hub",
    },
    {
      title: "Career Fair",
      description: "Meet recruiters from various companies.",
      date: "August 20, 2024",
      location: "City Convention Center",
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Upcoming Events & Workshops
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg p-6 transition-transform duration-300 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <p className="text-gray-600 mb-1">
                Date: <span className="font-semibold">{event.date}</span>
              </p>
              <p className="text-gray-600">
                Location:{" "}
                <span className="font-semibold">{event.location}</span>
              </p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsAndWorkshops;
