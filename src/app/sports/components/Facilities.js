// components/Facilities.js
import React from "react";
import { FaBuilding, FaBasketballBall } from "react-icons/fa";

const facilities = [
  {
    name: "Main Stadium",
    description:
      "A state-of-the-art stadium with seating for 10,000 spectators.",
    image: "/assets/hero/hero (8).png",
    icon: <FaBuilding />,
  },
  {
    name: "Sports Complex",
    description: "Indoor facilities for basketball, volleyball, and more.",
    image: "/assets/hero/hero (9).png",
    icon: <FaBasketballBall />,
  },
  // Add more facilities here
];

const Facilities = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center flex items-center justify-center">
          <FaBuilding className="mr-2" />
          Our Facilities
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="text-center">
              <img
                src={facility.image}
                alt={facility.name}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <div className="mt-4 flex items-center justify-center">
                {facility.icon}
                <h3 className="ml-2 text-xl font-semibold">{facility.name}</h3>
              </div>
              <p className="mt-2 text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
