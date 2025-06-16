// components/FeaturedClubs.js
"use client";
import Image from "next/image";
import { useState } from "react";
import { FaUsers, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const clubs = [
  {
    name: "Coding Club",
    description:
      "Explore coding through exciting projects and competitions. Learn new languages, build apps, and solve real-world problems.",
    image: "/images/coding-club.jpg",
    members: 50,
    nextEvent: "Hackathon: May 15",
  },
  {
    name: "Music Club",
    description:
      "Express yourself through music and performance. Join bands, learn instruments, or showcase your talents at campus events.",
    image: "/images/music-club.jpg",
    members: 75,
    nextEvent: "Open Mic Night: April 22",
  },
  {
    name: "Sports Club",
    description:
      "Stay active with a variety of sports and fitness activities. Participate in intramural leagues or join casual pickup games.",
    image: "/images/sports-club.jpg",
    members: 100,
    nextEvent: "5K Fun Run: June 1",
  },
];

export default function FeaturedClubs() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-12 text-gray-800">
          Featured Clubs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club, index) => (
            <ClubCard key={index} club={club} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ClubCard({ club }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48">
        <Image
          src={club.image}
          alt={club.name}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-300"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{club.name}</h3>
        <p className="text-gray-600 mb-4">{club.description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <FaUsers className="mr-2" />
            <span>{club.members} members</span>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="mr-2" />
            <span>{club.nextEvent}</span>
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 flex items-center justify-center">
          Learn More
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
}
