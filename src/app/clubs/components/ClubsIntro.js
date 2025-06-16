// components/ClubsIntro.js
import { FaUsers, FaLightbulb, FaHandshake } from "react-icons/fa";

export default function ClubsIntro() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Discover the Heart of Campus Life
        </h2>
        <p className="text-lg md:text-xl text-center mb-12 text-gray-600 max-w-4xl mx-auto">
          Our student clubs are more than just extracurricular activities -
          they're the pulse of our vibrant community. Whether you're looking to
          explore new interests, develop leadership skills, or forge lifelong
          friendships, there's a perfect club waiting for you. Dive into our
          diverse range of student organizations and find your place!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaUsers />}
            title="Connect"
            description="Meet like-minded peers and build lasting relationships within our inclusive community."
          />
          <FeatureCard
            icon={<FaLightbulb />}
            title="Grow"
            description="Develop new skills, explore your passions, and unlock your potential through hands-on experiences."
          />
          <FeatureCard
            icon={<FaHandshake />}
            title="Lead"
            description="Take on leadership roles, organize events, and make a real impact on campus and beyond."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
      <div className="text-4xl text-blue-500 mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
