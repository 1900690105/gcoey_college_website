// components/BuildingsAndFacilities.js
import { useState } from "react";

const facilitiesData = [
  {
    title: "Academic Buildings",
    description:
      "State-of-the-art classrooms, labs, and lecture halls equipped with the latest technology.",
    details:
      "Our academic buildings feature smart classrooms, collaborative spaces, and specialized labs for various disciplines. The library offers extensive digital and print resources.",
    icon: "🏫",
  },
  {
    title: "Residential Halls",
    description:
      "Modern and comfortable living spaces designed for student life and community building.",
    details:
      "Our residential halls offer a variety of room types, from singles to suites. Each hall has common areas, study rooms, and laundry facilities. We also have themed living communities.",
    icon: "🏠",
  },
  {
    title: "Recreational Areas",
    description:
      "Diverse facilities for sports, fitness, and leisure to promote a balanced student life.",
    details:
      "Our campus features a state-of-the-art gym, Olympic-sized swimming pool, multiple sports courts, and a rock climbing wall. Outdoor enthusiasts can enjoy our hiking trails and green spaces.",
    icon: "🏋️‍♀️",
  },
  {
    title: "Student Center",
    description:
      "A hub for student activities, dining, and services to enhance campus life.",
    details:
      "The student center houses multiple dining options, a bookstore, meeting rooms, and offices for student organizations. It's the heart of campus social life.",
    icon: "🎭",
  },
  {
    title: "Research Facilities",
    description:
      "Cutting-edge labs and resources for groundbreaking research across disciplines.",
    details:
      "Our research facilities include high-tech labs for sciences, a supercomputing center, and specialized equipment for engineering and medical research.",
    icon: "🔬",
  },
  {
    title: "Arts Center",
    description:
      "Spaces for creativity and performance to nurture artistic talents.",
    details:
      "The arts center features a theater, concert hall, art galleries, and studios for various media. It hosts regular performances and exhibitions.",
    icon: "🎨",
  },
];

function FacilityCard({
  title,
  description,
  details,
  icon,
  isActive,
  onClick,
}) {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${
        isActive ? "ring-2 ring-blue-500 shadow-xl" : "hover:shadow-xl"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <span className="text-4xl mr-4">{icon}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
      {isActive && (
        <div className="mt-4 text-sm text-gray-700 bg-gray-100 p-4 rounded-md">
          {details}
        </div>
      )}
    </div>
  );
}

export default function BuildingsAndFacilities() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Buildings & Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesData.map((facility, index) => (
            <FacilityCard
              key={index}
              {...facility}
              isActive={index === activeIndex}
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
