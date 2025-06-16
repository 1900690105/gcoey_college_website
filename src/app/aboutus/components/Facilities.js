// import React from 'react';

// const cardClasses = "bg-card shadow-lg rounded-lg overflow-hidden";
// const textClasses = "text-sm text-muted-foreground";

// const Facilities = () => {
//     return (
//         <div className="bg-background text-primary-foreground py-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
//             <h2 className="text-3xl font-bold mb-8">Our Facilities</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <FacilityCard title="Library" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" imageText="Library" />
//                 <FacilityCard title="Science Lab" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" imageText="Science Lab" />
//                 <FacilityCard title="Sports Complex" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" imageText="Sports Complex" />
//             </div>
//         </div>
//     );
// };

// const FacilityCard = ({ title, description, imageText }) => {
//     return (
//         <div className={cardClasses}>
//             <img src={'/assets/hero/hero (1).png'} alt={imageText} className="w-full h-48 object-cover" />
//             <div className="p-4">
//                 <h3 className="text-xl font-semibold mb-2">{title}</h3>
//                 <p className={textClasses}>{description}</p>
//             </div>
//         </div>
//         );
// }

// export default Facilities;

// components/FeatureSection.js
import {
  FaBookOpen,
  FaUsers,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaUserTie,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function FeatureSection() {
  const features = [
    {
      title: "Diverse Courses",
      description:
        "Explore a wide range of courses to fit your academic goals and interests.",
      icon: <FaBookOpen className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "Student Organizations",
      description:
        "Join various student organizations to enhance your college experience and meet new friends.",
      icon: <FaUsers className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "Expert Faculty",
      description:
        "Learn from experienced faculty members dedicated to your success.",
      icon: <FaChalkboardTeacher className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "Career Services",
      description:
        "Get support for internships, job placements, and career counseling.",
      icon: <FaUserTie className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "Graduation Support",
      description:
        "Receive guidance and resources to help you prepare for graduation.",
      icon: <FaGraduationCap className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "Campus Events",
      description: "Stay updated on campus events, workshops, and activities.",
      icon: <FaExternalLinkAlt className="w-12 h-12 text-blue-500" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Explore Opportunities at Our College
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center border"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
