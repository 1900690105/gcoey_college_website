import { useState } from "react";

const ProgramsOffered = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const programs = [
    {
      id: "undergraduate",
      title: "Undergraduate Programs",
      subtitle: "Bachelor's Degree",
      description:
        "Comprehensive undergraduate education in computer science with cutting-edge specializations.",
      icon: "🎓",
      color: "blue",
      duration: "4 Years",
      intake: "120 Students",
      features: [
        "AI & Machine Learning",
        "Cybersecurity",
        "Data Science & Analytics",
        "Software Engineering",
        "Web Development",
        "Mobile App Development",
      ],
      highlights: [
        { label: "Industry Projects", value: "50+" },
        { label: "Placement Rate", value: "98%" },
        { label: "Average Package", value: "₹8.5 LPA" },
      ],
    },
    {
      id: "postgraduate",
      title: "Postgraduate Programs",
      subtitle: "Master's & PhD",
      description:
        "Advanced research-oriented programs for in-depth knowledge and innovation in computer science.",
      icon: "📚",
      color: "purple",
      duration: "2-5 Years",
      intake: "60 Students",
      features: [
        "Advanced AI Research",
        "Quantum Computing",
        "Blockchain Technology",
        "Computer Vision",
        "Natural Language Processing",
        "Distributed Systems",
      ],
      highlights: [
        { label: "Research Papers", value: "200+" },
        { label: "Industry Collaborations", value: "25+" },
        { label: "PhD Graduates", value: "150+" },
      ],
    },
    {
      id: "certifications",
      title: "Certifications & Courses",
      subtitle: "Professional Development",
      description:
        "Industry-relevant certifications and short courses to enhance your professional skills.",
      icon: "💻",
      color: "green",
      duration: "3-12 Months",
      intake: "Flexible",
      features: [
        "Full Stack Development",
        "Cloud Computing (AWS/Azure)",
        "DevOps & Automation",
        "Digital Marketing",
        "UI/UX Design",
        "Project Management",
      ],
      highlights: [
        { label: "Course Completion", value: "95%" },
        { label: "Industry Certifications", value: "15+" },
        { label: "Job Assistance", value: "100%" },
      ],
    },
  ];

  const getColorClasses = (color, type = "default") => {
    const colors = {
      blue: {
        bg: "from-blue-500 to-blue-600",
        hover: "from-blue-600 to-blue-700",
        light: "from-blue-50 to-blue-100",
        border: "border-blue-200",
        text: "text-blue-600",
        accent: "bg-blue-500",
      },
      purple: {
        bg: "from-purple-500 to-purple-600",
        hover: "from-purple-600 to-purple-700",
        light: "from-purple-50 to-purple-100",
        border: "border-purple-200",
        text: "text-purple-600",
        accent: "bg-purple-500",
      },
      green: {
        bg: "from-green-500 to-green-600",
        hover: "from-green-600 to-green-700",
        light: "from-green-50 to-green-100",
        border: "border-green-200",
        text: "text-green-600",
        accent: "bg-green-500",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="programs"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <span className="mr-2">🎯</span>
            Academic Excellence
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Programs{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Offered
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of programs designed to shape the
            future leaders of technology
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program) => {
            const colorClasses = getColorClasses(program.color);
            const isHovered = hoveredCard === program.id;

            return (
              <div
                key={program.id}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden border ${
                  colorClasses.border
                } ${isHovered ? "scale-105" : ""}`}
                onMouseEnter={() => setHoveredCard(program.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() =>
                  setSelectedProgram(
                    selectedProgram === program.id ? null : program.id
                  )
                }
              >
                {/* Card Header */}
                <div
                  className={`bg-gradient-to-r ${colorClasses.bg} p-6 text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 text-6xl opacity-10 transform rotate-12">
                    {program.icon}
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-4xl">{program.icon}</span>
                      <div className="text-right">
                        <div className="text-sm opacity-90">
                          {program.duration}
                        </div>
                        <div className="text-xs opacity-75">
                          {program.intake}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">
                      {program.title}
                    </h3>
                    <p className="text-sm opacity-90">{program.subtitle}</p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <span
                        className={`w-2 h-2 ${colorClasses.accent} rounded-full mr-2`}
                      ></span>
                      Key Specializations
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.features.slice(0, 4).map((feature, index) => (
                        <div
                          key={index}
                          className={`bg-gradient-to-r ${colorClasses.light} rounded-lg px-3 py-2 text-sm ${colorClasses.text} font-medium`}
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                    {program.features.length > 4 && (
                      <div className="mt-2 text-sm text-gray-500">
                        +{program.features.length - 4} more specializations
                      </div>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {program.highlights.map((highlight, index) => (
                      <div key={index} className="text-center">
                        <div
                          className={`text-lg font-bold ${colorClasses.text}`}
                        >
                          {highlight.value}
                        </div>
                        <div className="text-xs text-gray-500">
                          {highlight.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    className={`w-full bg-gradient-to-r ${colorClasses.bg} hover:${colorClasses.hover} text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg`}
                  >
                    Learn More
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${colorClasses.bg} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Detailed Program Information */}
        {selectedProgram && (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mb-16 animate-fadeIn">
            {(() => {
              const program = programs.find((p) => p.id === selectedProgram);
              const colorClasses = getColorClasses(program.color);

              return (
                <>
                  <div
                    className={`bg-gradient-to-r ${colorClasses.bg} p-6 text-white`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-3xl">{program.icon}</span>
                        <div>
                          <h3 className="text-2xl font-bold">
                            {program.title}
                          </h3>
                          <p className="opacity-90">{program.subtitle}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedProgram(null)}
                        className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                          All Specializations
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {program.features.map((feature, index) => (
                            <div
                              key={index}
                              className={`flex items-center p-3 bg-gradient-to-r ${colorClasses.light} rounded-lg border ${colorClasses.border}`}
                            >
                              <svg
                                className={`w-5 h-5 ${colorClasses.text} mr-3 flex-shrink-0`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="font-medium text-gray-800">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                          Program Statistics
                        </h4>
                        <div className="space-y-4">
                          {program.highlights.map((highlight, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                            >
                              <span className="font-medium text-gray-700">
                                {highlight.label}
                              </span>
                              <span
                                className={`text-2xl font-bold ${colorClasses.text}`}
                              >
                                {highlight.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium text-gray-700">
                              Duration:
                            </span>
                            <span className={`font-bold ${colorClasses.text}`}>
                              {program.duration}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm mt-2">
                            <span className="font-medium text-gray-700">
                              Annual Intake:
                            </span>
                            <span className={`font-bold ${colorClasses.text}`}>
                              {program.intake}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of successful graduates who started their careers
            with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Apply Now
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ProgramsOffered;
// import { FaGraduationCap, FaBook, FaLaptopCode } from "react-icons/fa";

// const ProgramsOffered = () => {
//   return (
//     <section id="programs" className="py-20 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 md:px-8">
//         <h2 className="text-4xl font-semibold text-center mb-12">
//           Programs Offered
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//             <div className="flex items-center mb-4">
//               <FaGraduationCap className="text-4xl text-blue-500 mr-3" />
//               <h3 className="text-2xl font-semibold">Undergraduate Programs</h3>
//             </div>
//             <p>
//               We offer a Bachelor's degree in Computer Science with
//               specializations in AI, Cybersecurity, Data Science, and more.
//             </p>
//           </div>
//           <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//             <div className="flex items-center mb-4">
//               <FaBook className="text-4xl text-blue-500 mr-3" />
//               <h3 className="text-2xl font-semibold">Postgraduate Programs</h3>
//             </div>
//             <p>
//               Our Master's and PhD programs provide advanced knowledge and
//               research opportunities in various cutting-edge areas of computer
//               science.
//             </p>
//           </div>
//           <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//             <div className="flex items-center mb-4">
//               <FaLaptopCode className="text-4xl text-blue-500 mr-3" />
//               <h3 className="text-2xl font-semibold">
//                 Certifications & Short Courses
//               </h3>
//             </div>
//             <p>
//               We offer a range of certifications and short courses in areas such
//               as web development, mobile app development, and cloud computing.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProgramsOffered;
