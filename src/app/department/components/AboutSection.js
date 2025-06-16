import Image from "next/image";
import { useState } from "react";

const AboutSection = ({ dept }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: "📖" },
    { id: "mission", label: "Mission", icon: "🎯" },
    { id: "vision", label: "Vision", icon: "🔮" },
    { id: "achievements", label: "Achievements", icon: "🏆" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              {dept?.dmassage ||
                "Our department stands at the forefront of technological innovation, providing world-class education and cutting-edge research opportunities. We are committed to nurturing the next generation of technology leaders."}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Established
                </h4>
                <p className="text-blue-700">1998</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2">Students</h4>
                <p className="text-green-700">500+</p>
              </div>
            </div>
          </div>
        );
      case "mission":
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-900 mb-3">
                    Our Mission
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {dept?.mission ||
                      "To provide exceptional education in computer science and technology, fostering innovation, critical thinking, and ethical leadership to address global challenges and create positive societal impact."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case "vision":
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-purple-900 mb-3">
                    Our Vision
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {dept?.vision ||
                      "To be a globally recognized center of excellence in computer science education and research, leading technological advancement and producing graduates who shape the future of digital innovation."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case "achievements":
        return (
          <div className="space-y-6">
            <div className="grid gap-4">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border-l-4 border-yellow-500">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <h4 className="font-semibold text-yellow-900">
                      NAAC A+ Accreditation
                    </h4>
                    <p className="text-yellow-700 text-sm">
                      Highest academic standards recognition
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <h4 className="font-semibold text-green-900">
                      98% Placement Rate
                    </h4>
                    <p className="text-green-700 text-sm">
                      Industry-leading career outcomes
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔬</span>
                  <div>
                    <h4 className="font-semibold text-blue-900">
                      Research Excellence
                    </h4>
                    <p className="text-blue-700 text-sm">
                      50+ publications in top-tier journals
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 border-l-4 border-purple-500">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌟</span>
                  <div>
                    <h4 className="font-semibold text-purple-900">
                      Industry Partnerships
                    </h4>
                    <p className="text-purple-700 text-sm">
                      Collaborations with leading tech companies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            About Our Department
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {dept?.dname || "Computer Science"}
            </span>{" "}
            Department
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our journey, values, and commitment to excellence in
            technology education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content Side */}
          <div className="space-y-8">
            {/* Tab Navigation */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="flex flex-wrap bg-gray-50 border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 min-w-0 px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-white text-blue-600 border-b-2 border-blue-600 shadow-sm"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <span className="hidden sm:inline mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">{renderContent()}</div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">6+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {dept.dteacher}+
                </div>
                <div className="text-sm text-gray-600">Expert Faculty</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {dept.dstudent}+
                </div>
                <div className="text-sm text-gray-600">Active Students</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100 text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">
                  98%
                </div>
                <div className="text-sm text-gray-600">Placement Rate</div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative group">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/department/computer-lab-B2.jpg"
                  alt="Computer Science Lab - Modern Learning Environment"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                  className={`object-cover transition-all duration-700 group-hover:scale-105 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={handleImageLoad}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Image Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      State-of-the-Art Facilities
                    </h3>
                    <p className="text-sm text-gray-700">
                      Modern computer labs with latest technology and software
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">
                      Innovation Hub
                    </h4>
                    <p className="text-blue-700 text-sm">
                      Cutting-edge research
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900">
                      Industry Connect
                    </h4>
                    <p className="text-green-700 text-sm">
                      Strong partnerships
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;

// import Image from "next/image";

// const AboutSection = ({ dept }) => {
//   return (
//     <section id="about" className="py-20 bg-gray-100">
//       <div className="container mx-auto px-4 sm:px-6 md:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-4xl font-semibold mb-6">
//               About the Computer Science Department
//             </h2>
//             <p className="text-lg leading-relaxed mb-6">{dept?.dmassage}</p>
//             <div className="space-y-4">
//               <div>
//                 <h3 className="text-2xl font-semibold mb-2">Mission</h3>
//                 <p>{dept?.mission}</p>
//                 <h3 className="text-2xl font-semibold mb-2">Vision</h3>
//                 <p>{dept?.vision}</p>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-semibold mb-2">
//                   Accreditations & Achievements
//                 </h3>
//                 <p>
//                   The department is accredited by [Relevant Accreditation Body]
//                   and has received numerous awards for excellence in teaching
//                   and research.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="relative h-64 md:h-auto">
//             <Image
//               src={"/department/computer-lab-B2.jpg"}
//               alt="Computer Science Lab"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-md shadow-md"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
