"use client";
import Image from "next/image";
import WelcomeMessage from "./WelcomeMessage";
import { useState, useEffect } from "react";

export default function AdministrationSection() {
  const [administration, setAdministration] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAdministration() {
      try {
        const res = await fetch("/api/administration");
        const data = await res.json();
        setAdministration(data);
      } catch (error) {
        console.error("Error fetching administration data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAdministration();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative container mx-auto px-4 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Welcome Message Section */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <WelcomeMessage />
            </div>

            {/* Administration Section */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8 text-center">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    Administration
                  </h2>
                  <div className="w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {loading ? (
                    <div className="space-y-6">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="animate-pulse">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                            <div className="flex-1 space-y-2">
                              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : administration.length > 0 ? (
                    <div className="space-y-6">
                      {administration.map((admin, index) => (
                        <div
                          key={index}
                          className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-200"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="relative">
                              <Image
                                src={`https://drive.google.com/uc?export=view&id=${admin.administration_image}`}
                                alt={`${admin.administration_name} profile`}
                                width={64}
                                height={64}
                                className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                              />
                              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>

                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 truncate">
                                {admin.administration_name}
                              </h3>
                              <p className="text-sm font-medium text-blue-600 mb-1">
                                {admin.administration_post}
                              </p>
                              <p className="text-xs text-gray-500 truncate">
                                {admin.administration_department}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-sm">
                        No administration data available
                      </p>
                    </div>
                  )}
                </div>

                {/* View All Button */}
                {administration.length > 0 && (
                  <div className="px-6 pb-6">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg">
                      View All Administration
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Optimized Grid for smaller screens */}
      <style jsx>{`
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

// "use client";
// import Image from "next/image";
// import WelcomeMessage from "./WelcomeMessage";
// import { useState, useEffect } from "react";

// export default function AdministrationSection() {
//   const [administration, setAdministration] = useState([]);

//   useEffect(() => {
//     async function fetchAdministration() {
//       const res = await fetch("/api/administration");
//       const data = await res.json();
//       setAdministration(data);
//     }
//     fetchAdministration();
//   }, []);
//   return (
//     <div className="">
//       <section>
//         <div className="container mx-auto flex flex-col md:flex-row justify-between">
//           <div></div>
//           <WelcomeMessage />
//           <div className="md:w-1/3 lg:mt-8 md:mt-0 border p-2 mr-5 ml-12">
//             <h2 className="text-3xl font-semibold text-gray-800 mb-6">
//               Administration
//             </h2>
//             {administration.map((administration, index) => (
//               <div key={index} className="flex items-center mb-6 border-b ml-4">
//                 <Image
//                   src={administration.administration_image}
//                   alt="image"
//                   width={60}
//                   height={60}
//                   className="w-16 h-16 rounded-full"
//                 />
//                 <div className="ml-4">
//                   <h3 className="text-lg font-bold text-gray-800">
//                     {administration.administration_name}
//                   </h3>
//                   <p className="text-sm text-gray-600">
//                     {administration.administration_post}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     {administration.administration_department}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
