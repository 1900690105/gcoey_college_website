import Image from "next/image";
import { useEffect, useState } from "react";

const HeroSection = ({ dept }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!dept) {
      alert("No data found");
    }
  }, [dept]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`https://drive.google.com/uc?export=view&id=1Iwr571kzvE7Ia7reKnLu1ysGfphD83yn`}
          alt="Computer Lab Background"
          fill
          sizes="100vw"
          quality={85}
          priority
          className={`object-cover transition-opacity duration-700 ${
            imageLoaded ? "opacity-70" : "opacity-0"
          }`}
          onLoad={handleImageLoad}
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Department Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 mb-4">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Department Portal
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-bold leading-tight">
            <span className="block text-white mb-2">Welcome to</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {dept?.dname || "Department"} Department
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mt-2 mx-auto text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
            Empowering the Future of Technology Through Innovation, Excellence,
            and Academic Leadership
          </p>

          {/* Key Features */}
          <div className="hidden sm:flex justify-center items-center space-x-8 text-white/80 text-sm font-medium mt-8">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Excellence
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3z"
                  clipRule="evenodd"
                />
              </svg>
              Innovation
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-cyan-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
              Community
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                500+
              </div>
              <div className="text-sm text-gray-300">Students</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                50+
              </div>
              <div className="text-sm text-gray-300">Faculty</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                15+
              </div>
              <div className="text-sm text-gray-300">Programs</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                25+
              </div>
              <div className="text-sm text-gray-300">Years</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/60 text-sm font-medium">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </div>

      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default HeroSection;

// import Image from "next/image";
// import { useEffect } from "react";

// const HeroSection = ({ dept }) => {
//   useEffect(() => {
//     if (!dept) {
//       alert("No data found");
//     } else {
//       console.log(dept);
//     }
//   }, [dept]);

//   return (
//     <section className="relative flex items-center justify-center py-32 px-4 sm:px-8 bg-gray-900 text-white">
//       <Image
//         src="/assets/hero/hero (1).png"
//         alt="Computer Lab"
//         layout="fill"
//         objectFit="cover"
//         quality={80}
//         className="absolute inset-0 z-0"
//       />
//       <div className="relative z-10 max-w-2xl mx-auto text-center">
//         <h1 className="text-4xl sm:text-5xl font-bold">
//           Welcome to the {dept.dname} Department
//         </h1>
//         <p className="mt-6 sm:mt-8 text-lg sm:text-xl">
//           Empowering the Future of Technology
//         </p>
//         <div className="mt-8 sm:mt-10 flex justify-center">
//           <a
//             href="#"
//             className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md shadow-md transition duration-300"
//           >
//             Learn More
//             <svg
//               className="ml-2 w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M14 5l7 7m0 0l-7 7m7-7H3"
//               />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
