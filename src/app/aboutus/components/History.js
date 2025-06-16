"use client";
import Image from "next/image";
import React, { useState } from "react";

const timelineData = [
  {
    step: "STEP 1",
    title: "Foundation",
    description:
      "Our journey began with a vision to revolutionize the industry.",
    icon: "🏛️",
  },
  {
    step: "STEP 2",
    title: "Growth",
    description: "We expanded our reach and diversified our product offerings.",
    icon: "📈",
  },
  {
    step: "STEP 3",
    title: "Innovation",
    description: "Our commitment to R&D led to groundbreaking technologies.",
    icon: "💡",
  },
  {
    step: "STEP 4",
    title: "Global Expansion",
    description: "We established a strong presence in international markets.",
    icon: "🌍",
  },
  {
    step: "FINISH",
    title: "Future Vision",
    description:
      "We continue to push boundaries and shape the future of our industry.",
    icon: "🚀",
  },
];

function TimelineItem({ item, isActive, onClick }) {
  return (
    <div
      className={`flex relative pb-12 cursor-pointer transition-all duration-300 ${
        isActive ? "scale-105" : ""
      }`}
      onClick={onClick}
    >
      {item.step !== "FINISH" && (
        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
          <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
      )}
      <div
        className={`flex-shrink-0 w-10 h-10 rounded-full ${
          isActive ? "bg-indigo-600" : "bg-indigo-500"
        } inline-flex items-center justify-center text-white relative z-10`}
      >
        {item.icon}
      </div>
      <div className="flex-grow pl-4">
        <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
          {item.step}
        </h2>
        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
        <p
          className={`leading-relaxed ${
            isActive ? "text-gray-800" : "text-gray-600"
          }`}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}

function History() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="text-gray-600 body-font bg-gray-50">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Journey
        </h1>
        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-1/2 px-4">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                isActive={index === activeStep}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>
          <div className="lg:w-1/2 px-4 mt-12 lg:mt-0">
            <div className="sticky top-24">
              <Image
                className="rounded-lg shadow-xl"
                src="/assets/hero/hero (2).png"
                alt="Company History"
                width={700}
                height={475}
                layout="responsive"
              />
              <p className="mt-4 text-gray-600 text-center">
                {timelineData[activeStep].title}:{" "}
                {timelineData[activeStep].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
