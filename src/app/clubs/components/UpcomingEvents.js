// components/UpcomingEvents.js
"use client";
import { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const events = [
  {
    name: "Tech Talk",
    date: "Aug 20, 2024",
    time: "3:00 PM",
    club: "Coding Club",
    location: "Auditorium A",
    description:
      "Join us for an insightful discussion on emerging technologies and their impact on our future.",
  },
  {
    name: "Battle of Bands",
    date: "Sep 10, 2024",
    time: "7:00 PM",
    club: "Music Club",
    location: "Campus Amphitheater",
    description:
      "Experience the electrifying performances of our talented student bands as they compete for the top spot!",
  },
  {
    name: "Environmental Awareness Workshop",
    date: "Aug 25, 2024",
    time: "2:00 PM",
    club: "Environmental Club",
    location: "Science Building, Room 101",
    description:
      "Learn about sustainable practices and how you can contribute to a greener campus.",
  },
  {
    name: "Art Exhibition",
    date: "Sep 5, 2024",
    time: "11:00 AM",
    club: "Art Club",
    location: "Student Center Gallery",
    description:
      "Explore the creative works of our talented student artists in this semester's art showcase.",
  },
  {
    name: "Debate Championship",
    date: "Sep 15, 2024",
    time: "4:00 PM",
    club: "Debate Club",
    location: "Lecture Hall B",
    description:
      "Watch our top debaters tackle challenging topics in this exciting championship event.",
  },
];

export default function UpcomingEvents() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const nextEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEventIndex(
      (prevIndex) => (prevIndex - 1 + events.length) % events.length
    );
  };

  const currentEvent = events[currentEventIndex];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-12 text-gray-800">
          Upcoming Events
        </h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center justify-between bg-blue-500 text-white p-4">
            <button
              onClick={prevEvent}
              className="focus:outline-none hover:bg-blue-600 p-2 rounded-full transition duration-300"
            >
              <FaChevronLeft />
            </button>
            <h3 className="text-2xl font-bold">{currentEvent.name}</h3>
            <button
              onClick={nextEvent}
              className="focus:outline-none hover:bg-blue-600 p-2 rounded-full transition duration-300"
            >
              <FaChevronRight />
            </button>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap mb-4">
              <EventDetail icon={<FaCalendarAlt />} text={currentEvent.date} />
              <EventDetail icon={<FaClock />} text={currentEvent.time} />
              <EventDetail
                icon={<FaMapMarkerAlt />}
                text={currentEvent.location}
              />
            </div>
            <p className="text-gray-600 mb-4">{currentEvent.description}</p>
            <p className="text-sm text-gray-500">
              Organized by: {currentEvent.club}
            </p>
          </div>
          <div className="bg-gray-50 px-6 py-4">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
              Register for Event
            </button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Showing event {currentEventIndex + 1} of {events.length}
          </p>
        </div>
      </div>
    </div>
  );
}

function EventDetail({ icon, text }) {
  return (
    <div className="flex items-center mr-6 mb-2">
      <div className="text-blue-500 mr-2">{icon}</div>
      <span className="text-gray-700">{text}</span>
    </div>
  );
}
