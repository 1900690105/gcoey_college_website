import { useState, useEffect } from "react";
import {
  FaLaptopCode,
  FaGraduationCap,
  FaBookOpen,
  FaArrowRight,
  FaUsers,
  FaTrophy,
  FaChartLine,
} from "react-icons/fa";

const ResearchAndPublications = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const researchAreas = [
    {
      icon: FaLaptopCode,
      title: "AI & Machine Learning",
      subtitle: "Next-Gen Intelligence",
      description:
        "Pioneering breakthroughs in artificial intelligence, neural networks, and deep learning systems that shape tomorrow's technology landscape.",
      stats: "15+ Active Projects",
      gradient: "from-purple-600 to-blue-600",
      accent: "bg-purple-500",
    },
    {
      icon: FaGraduationCap,
      title: "Cybersecurity Research",
      subtitle: "Digital Defense Innovation",
      description:
        "Developing cutting-edge security protocols and threat detection systems to protect digital infrastructure and data privacy.",
      stats: "8 Industry Partners",
      gradient: "from-emerald-600 to-teal-600",
      accent: "bg-emerald-500",
    },
    {
      icon: FaBookOpen,
      title: "Publications & Impact",
      subtitle: "Knowledge Dissemination",
      description:
        "Our research reaches global audiences through top-tier journals, conferences, and collaborative publications with leading institutions.",
      stats: "120+ Publications",
      gradient: "from-orange-600 to-red-600",
      accent: "bg-orange-500",
    },
  ];

  const achievements = [
    { icon: FaUsers, number: "50+", label: "Research Students" },
    { icon: FaTrophy, number: "25", label: "Awards Won" },
    { icon: FaChartLine, number: "2.5M", label: "Research Funding" },
  ];

  return (
    <section
      id="research"
      className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
            Research & Innovation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Pushing the boundaries of technology and knowledge through
            groundbreaking research initiatives and collaborative innovation.
          </p>
        </div>

        {/* Achievement Stats */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <achievement.icon className="text-4xl text-purple-400 mx-auto mb-4 group-hover:text-purple-300 transition-colors duration-300" />
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {achievement.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {achievement.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className={`group cursor-pointer transform transition-all duration-700 hover:scale-105 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 overflow-hidden group-hover:border-transparent transition-all duration-500">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-center mb-6">
                    <div
                      className={`p-4 ${area.accent} rounded-2xl mr-4 transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <area.icon className="text-3xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                        {area.title}
                      </h3>
                      <p className="text-purple-400 font-medium">
                        {area.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {area.description}
                  </p>

                  {/* Stats and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-sm font-semibold text-purple-300">
                        {area.stats}
                      </span>
                    </div>
                    <div
                      className={`flex items-center text-purple-400 font-medium transform transition-all duration-300 ${
                        activeCard === index ? "translate-x-2" : ""
                      }`}
                    >
                      <span className="mr-2">Explore</span>
                      <FaArrowRight className="text-sm" />
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-20 transform transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
            <span className="mr-3">View All Research Projects</span>
            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResearchAndPublications;

// import { FaLaptopCode, FaGraduationCap, FaBookOpen } from "react-icons/fa";

// const ResearchAndPublications = () => {
//   return (
//     <section id="research" className="py-20 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 md:px-8">
//         <h2 className="text-4xl font-semibold text-center mb-12">
//           Research and Publications
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//             <div className="flex items-center mb-4">
//               <FaLaptopCode className="text-4xl text-blue-500 mr-3" />
//               <h3 className="text-2xl font-semibold">Research Labs</h3>
//             </div>
//             <p>
//               Our department houses state-of-the-art research labs focused on
//               AI, cybersecurity, and more.
//             </p>
//           </div>
//           <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//             <div className="flex items-center mb-4">
//               <FaGraduationCap className="text-4xl text-blue-500 mr-3" />
//               <h3 className="text-2xl font-semibold">Ongoing Projects</h3>
//             </div>
//             <p>
//               Explore our current research projects that are making significant
//               contributions to the field.
//             </p>
//           </div>
//           <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//             <div className="flex items-center mb-4">
//               <FaBookOpen className="text-4xl text-blue-500 mr-3" />
//               <h3 className="text-2xl font-semibold">Publications</h3>
//             </div>
//             <p>
//               Our faculty and students regularly publish in leading journals and
//               conferences. Check out some of our latest work.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ResearchAndPublications;
