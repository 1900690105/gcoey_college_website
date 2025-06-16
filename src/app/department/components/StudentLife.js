import { useState, useEffect } from "react";
import {
  FaUserGraduate,
  FaCalendarAlt,
  FaTrophy,
  FaUsers,
  FaLightbulb,
  FaMedal,
} from "react-icons/fa";

const StudentLife = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: FaUserGraduate,
      title: "Clubs and Societies",
      description:
        "Join our coding club, participate in hackathons, and collaborate with like-minded peers.",
      color: "from-blue-500 to-purple-600",
      stats: "50+ Active Clubs",
    },
    {
      icon: FaCalendarAlt,
      title: "Events and Workshops",
      description:
        "We host regular events and workshops featuring industry experts and hands-on activities.",
      color: "from-green-500 to-teal-600",
      stats: "100+ Events/Year",
    },
    {
      icon: FaTrophy,
      title: "Student Achievements",
      description:
        "Our students regularly win awards at national and international competitions.",
      color: "from-yellow-500 to-orange-600",
      stats: "200+ Awards Won",
    },
  ];

  return (
    <section
      id="student-life"
      className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-gradient-to-br from-green-100 to-teal-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <FaUsers className="text-2xl sm:text-3xl text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Student Life
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover endless opportunities to grow, learn, and excel beyond the
            classroom
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-transparent hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                ></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl sm:rounded-3xl -z-10"></div>

                {/* Icon Section */}
                <div
                  className={`relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="text-2xl sm:text-3xl text-white" />
                </div>

                {/* Content Section */}
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {feature.description}
                  </p>

                  {/* Stats Badge */}
                  <div
                    className={`inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r ${feature.color} text-white text-xs sm:text-sm font-semibold rounded-full shadow-md`}
                  >
                    <FaMedal className="mr-1 sm:mr-2" />
                    {feature.stats}
                  </div>
                </div>

                {/* Hover Effect Decoration */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`text-center mt-12 sm:mt-16 lg:mt-20 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center justify-center space-x-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <FaLightbulb className="text-lg sm:text-xl" />
            <span className="text-sm sm:text-base">
              Explore More Opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentLife;

// import { FaUserGraduate, FaCalendarAlt, FaTrophy } from "react-icons/fa";

// const StudentLife = () => {
//   return (
//     <section id="student-life" className="py-20 bg-gray-100">
//       <div className="container mx-auto px-4 sm:px-6 md:px-8">
//         <h2 className="text-4xl font-semibold text-center mb-12">
//           Student Life
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="flex items-center mb-4">
//               <FaUserGraduate className="text-4xl text-blue-500 mr-3" />
//               <h3 className="text-2xl font-semibold">Clubs and Societies</h3>
//             </div>
//             <p>
//               Join our coding club, participate in hackathons, and collaborate
//               with like-minded peers.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="flex items-center mb-4">
//               <FaCalendarAlt className="text-4xl text-blue-500 mr-3" />
//               <h3 className="text-2xl font-semibold">Events and Workshops</h3>
//             </div>
//             <p>
//               We host regular events and workshops featuring industry experts
//               and hands-on activities.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="flex items-center mb-4">
//               <FaTrophy className="text-4xl text-blue-500 mr-3" />
//               <h3 className="text-2xl font-semibold">Student Achievements</h3>
//             </div>
//             <p>
//               Our students regularly win awards at national and international
//               competitions.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StudentLife;
