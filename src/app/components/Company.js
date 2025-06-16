"use client";
import { useState, useEffect } from "react";
import {
  Building2,
  Users,
  TrendingUp,
  DollarSign,
  MapPin,
  Award,
} from "lucide-react";

const CompanyGrid = () => {
  const [companies, setCompanies] = useState([
    // Sample data for demonstration
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=entropy&auto=format",
      companyName: "TechCorp Solutions",
      numStudents: 45,
      placementRate: 92,
      avgPackage: 8.5,
      location: "Bangalore",
      industry: "Software Development",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=entropy&auto=format",
      companyName: "InnovateTech Ltd",
      numStudents: 32,
      placementRate: 88,
      avgPackage: 7.2,
      location: "Mumbai",
      industry: "AI & Machine Learning",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&crop=entropy&auto=format",
      companyName: "DataFlow Systems",
      numStudents: 28,
      placementRate: 95,
      avgPackage: 9.1,
      location: "Hyderabad",
      industry: "Data Analytics",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=400&h=300&fit=crop&crop=entropy&auto=format",
      companyName: "CloudMaster Inc",
      numStudents: 38,
      placementRate: 90,
      avgPackage: 8.8,
      location: "Pune",
      industry: "Cloud Computing",
    },
  ]);

  // Uncomment this when you have your API ready
  // useEffect(() => {
  //   async function fetchCompanies() {
  //     try {
  //       const res = await fetch("/api/company");
  //       const data = await res.json();
  //       setCompanies(data);
  //     } catch (error) {
  //       console.error("Failed to fetch companies:", error);
  //     }
  //   }
  //   fetchCompanies();
  // }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Chief Recruiters
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partnering with industry leaders to provide exceptional career
            opportunities for our students
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                {companies.reduce(
                  (sum, company) => sum + company.numStudents,
                  0
                )}
              </div>
              <div className="text-sm text-gray-600">Total Placements</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">
                {Math.round(
                  companies.reduce(
                    (sum, company) => sum + company.placementRate,
                    0
                  ) / companies.length
                )}
                %
              </div>
              <div className="text-sm text-gray-600">Avg Placement Rate</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">
                {companies.length}+
              </div>
              <div className="text-sm text-gray-600">Partner Companies</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">
                ₹{Math.max(...companies.map((c) => c.avgPackage))}L
              </div>
              <div className="text-sm text-gray-600">Highest Package</div>
            </div>
          </div>
        </div>

        {/* Company Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
};

function CompanyCard({ company }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <div className="relative w-full h-48 sm:h-52">
          <img
            src={company.image}
            alt={company.companyName}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Floating Stats Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
          <TrendingUp className="w-4 h-4 text-green-600" />
          <span className="text-sm font-semibold text-green-600">
            {company.placementRate}%
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Company Name & Industry */}
        <div className="mb-4">
          <h3 className="font-bold text-xl text-gray-800 mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors duration-300">
            {company.companyName}
          </h3>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {company.location} • {company.industry}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-gray-600">Students Placed</span>
            </div>
            <span className="font-semibold text-gray-800">
              {company.numStudents}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-600">Success Rate</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-green-600">
                {company.placementRate}%
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-purple-500" />
              <span className="text-sm text-gray-600">Avg Package</span>
            </div>
            <span className="font-bold text-purple-600">
              ₹{company.avgPackage} LPA
            </span>
          </div>
        </div>

        {/* Progress Bar for Placement Rate */}
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: isHovered ? `${company.placementRate}%` : "0%" }}
            />
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
          View Details
        </button>
      </div>
    </div>
  );
}

export default CompanyGrid;

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";

// const CompanyGrid = () => {
//   const [companies, setCompanies] = useState([]);

//   useEffect(() => {
//     async function fetchCompanies() {
//       const res = await fetch("/api/company");
//       const data = await res.json();
//       setCompanies(data);
//     }
//     fetchCompanies();
//   }, []);

//   return (
//     <div className="">
//       <section className="mt-12">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="mb-6">
//             <h2 className="mb-6 text-3xl md:text-3xl font-bold tracking-tight border-l-8 border-yellow-400 p-1">
//               Our Chief Recruiters
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {companies.map((company, index) => (
//               <CompanyCard
//                 key={index}
//                 imageUrl={company.image}
//                 companyName={company.companyName}
//                 numStudents={company.numStudents}
//                 placementRate={company.placementRate}
//                 avgPackage={company.avgPackage}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// function CompanyCard({
//   imageUrl,
//   companyName,
//   numStudents,
//   placementRate,
//   avgPackage,
// }) {
//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
//       <div className="relative w-full pb-[56.25%]">
//         {" "}
//         {/* 16:9 Aspect Ratio */}
//         <img
//           src={imageUrl}
//           alt={companyName}
//           className="absolute top-0 left-0 w-full h-full object-cover"
//         />
//       </div>
//       <div className="p-6">
//         <Link href="#">
//           <h3 className="font-semibold text-xl text-gray-800 mb-2">
//             {companyName}
//           </h3>
//         </Link>
//         <p className="text-gray-600 mb-1">Students Placed: {numStudents}</p>
//         <p className="text-gray-500 text-lg mb-2 font-semibold">
//           Placement Rate: {placementRate}%
//         </p>
//         <p className="text-emerald-600 font-bold">
//           Average Package: {avgPackage} LPA
//         </p>
//       </div>
//     </div>
//   );
// }

// export default CompanyGrid;
