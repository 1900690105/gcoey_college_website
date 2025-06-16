// components/JoinTeam.js
import React from "react";
import { FaUsers } from "react-icons/fa";

const JoinTeam = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center flex items-center justify-center">
          <FaUsers className="mr-2" />
          Join a Team / Get Involved
        </h2>
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600">
            Interested in joining one of our sports teams? Check out the tryouts
            and get involved!
          </p>
          <a
            href="/tryouts"
            className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;
