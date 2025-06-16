// components/EventAgenda.js
import React from "react";

const EventAgenda = () => {
  const schedule = [
    { time: "10:00 AM", event: "Opening Ceremony", icon: "🎉" },
    { time: "11:00 AM", event: "Keynote Speech", icon: "🎙️" },
    { time: "01:00 PM", event: "Cultural Performances", icon: "🎭" },
    { time: "03:00 PM", event: "Competitions", icon: "🏆" },
    { time: "05:00 PM", event: "Awards Ceremony", icon: "🏅" },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-purple-50 to-indigo-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          Event Agenda
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200 rounded-full"></div>
          {schedule.map((item, index) => (
            <TimelineItem
              key={index}
              time={item.time}
              event={item.event}
              icon={item.icon}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ time, event, icon, isLeft }) => {
  return (
    <div
      className={`flex items-center justify-${
        isLeft ? "start" : "end"
      } mb-8 relative`}
    >
      <div
        className={`w-5/12 ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}
      >
        <h3 className="text-xl font-semibold text-gray-800">{time}</h3>
        <p className="text-gray-600 mt-1">{event}</p>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-12 h-12 bg-white rounded-full border-4 border-indigo-500 flex items-center justify-center text-2xl z-10">
        {icon}
      </div>
      <div className={`w-5/12 ${isLeft ? "pl-8" : "pr-8"}`}></div>
    </div>
  );
};

export default EventAgenda;
