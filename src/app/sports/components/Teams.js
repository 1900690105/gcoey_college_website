// components/Teams.js
import React from "react";
import { FaFutbol, FaBasketballBall } from "react-icons/fa";

const teams = [
  {
    name: "Football Team",
    image: "/assets/hero/hero (5).png",
    icon: <FaFutbol />,
  },
  {
    name: "Basketball Team",
    image: "/assets/hero/hero (8).png",
    icon: <FaBasketballBall />,
  },
  // Add more teams here
];

const Teams = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">
          Teams and Sports Offered
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <div key={index} className="text-center">
              <img
                src={team.image}
                alt={team.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="mt-4 flex items-center justify-center">
                {team.icon}
                <h3 className="ml-2 text-xl font-semibold">{team.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
