import Image from "next/image";
import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const FacultyProfiles = ({ faculty }) => {
  const [expandedCards, setExpandedCards] = useState({});
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  // const faculty = [
  //   {
  //     name: "Dr. John Doe",
  //     title: "Professor",
  //     department: "Computer Science",
  //     bio: "Specializes in Artificial Intelligence and Machine Learning with over 15 years of research experience. Published 50+ papers in top-tier conferences.",
  //     education: "PhD in Computer Science, MIT",
  //     office: "Room 301, CS Building",
  //     phone: "+1 (555) 123-4567",
  //     email: "john.doe@college.edu",
  //     image:
  //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  //     socialLinks: {
  //       linkedin: "https://www.linkedin.com/in/johndoe",
  //       github: "https://github.com/johndoe",
  //     },
  //     expertise: [
  //       "Artificial Intelligence",
  //       "Machine Learning",
  //       "Deep Learning",
  //       "Computer Vision",
  //     ],
  //   },
  // ];

  const departments = [
    "All",
    ...new Set(faculty.map((member) => member.department)),
  ];

  const filteredFaculty =
    selectedDepartment === "All"
      ? faculty
      : faculty.filter((member) => member.department === selectedDepartment);

  const toggleCard = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="faculty"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Faculty
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the brilliant minds shaping the future of education and
            research at our institution
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {filteredFaculty.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
            >
              {/* Card Header */}
              <div className="relative p-6 pb-4">
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300">
                      <Image
                        src={`https://drive.google.com/uc?export=view&id=${member.tphoto}`}
                        width={200}
                        height={200}
                        alt={member.tname}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            member.tname
                          )}&size=200&background=3b82f6&color=ffffff&bold=true`;
                        }}
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                      {member.tname}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm sm:text-base mb-2">
                      {member.tpost}
                    </p>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {member.tdept}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="px-6 pb-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {member.tqualification}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {member.tbio}
                </p>
                {/* Expertise Tags */}
                {/* <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.expertise.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
                        +{member.expertise.length - 3} more
                      </span>
                    )}
                  </div>
                </div> */}

                {/* Expandable Section */}
                {expandedCards[index] && (
                  <div className="border-t pt-4 space-y-3 animate-fadeIn">
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-gray-400 flex-shrink-0" />
                        <span>{member.taddress}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaPhone className="text-gray-400 flex-shrink-0" />
                        <span>{member.tphone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaEnvelope className="text-gray-400 flex-shrink-0" />
                        <span className="break-all">{member.temail}</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <p className="text-xs text-gray-500 font-medium mb-1">
                        Education:
                      </p>
                      <p className="text-sm text-gray-600">
                        {member.tqualification}
                      </p>
                    </div>
                  </div>
                )}

                {/* Social Links & Expand Button */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <div className="flex space-x-3">
                    <a
                      href={member.tlinkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 transform hover:scale-110"
                      aria-label={`${member.tname}'s LinkedIn`}
                    >
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                    {/* <a
                      href={member.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors duration-300 transform hover:scale-110"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <FaGithub className="w-4 h-4" />
                    </a> */}
                    <a
                      href={`mailto:${member.temail}`}
                      className="w-9 h-9 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-300 transform hover:scale-110"
                      aria-label={`Email ${member.tname}`}
                    >
                      <FaEnvelope className="w-4 h-4" />
                    </a>
                  </div>

                  {/* <button
                    onClick={() => toggleCard(index)}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-300"
                    aria-label={
                      expandedCards[index] ? "Show less" : "Show more"
                    }
                  >
                    {expandedCards[index] ? "Less" : "More"}
                    {expandedCards[index] ? (
                      <FaChevronUp className="w-3 h-3" />
                    ) : (
                      <FaChevronDown className="w-3 h-3" />
                    )}
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFaculty.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No faculty members found in this department.
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FacultyProfiles;
