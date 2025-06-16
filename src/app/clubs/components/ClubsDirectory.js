// components/ClubsDirectory.js
"use client";
import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const allClubs = [
  { name: "Art Club", category: "Cultural", members: 30 },
  { name: "Debate Club", category: "Academic", members: 25 },
  { name: "Chess Club", category: "Games", members: 20 },
  { name: "Environmental Club", category: "Service", members: 35 },
  { name: "Photography Club", category: "Cultural", members: 28 },
  { name: "Robotics Club", category: "Academic", members: 22 },
  { name: "Dance Club", category: "Cultural", members: 40 },
  { name: "Book Club", category: "Academic", members: 18 },
  { name: "Volunteer Club", category: "Service", members: 45 },
];

const categories = ["All", ...new Set(allClubs.map((club) => club.category))];

export default function ClubsDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredClubs = allClubs.filter(
    (club) =>
      club.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || club.category === selectedCategory)
  );

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-12 text-gray-800">
          Club Directory
        </h2>

        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          <div className="relative mb-4 md:mb-0 w-full md:w-64">
            <input
              type="text"
              placeholder="Search clubs..."
              className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="relative w-full md:w-64">
            <select
              className="w-full pl-10 pr-4 py-2 border rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClubs.map((club, index) => (
            <ClubCard key={index} club={club} />
          ))}
        </div>

        {filteredClubs.length === 0 && (
          <p className="text-center text-gray-600 mt-8">
            No clubs found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
}

function ClubCard({ club }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{club.name}</h3>
      <p className="text-sm text-gray-500 mb-4">{club.category}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">{club.members} members</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition duration-300">
          Join
        </button>
      </div>
    </div>
  );
}
