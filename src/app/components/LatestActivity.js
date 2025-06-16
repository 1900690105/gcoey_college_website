"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Calendar, MapPin, Users, Clock, Star, ArrowRight } from "lucide-react";

export default function LatestActivity() {
  const [activity, setActivity] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  // Mock data for demonstration
  useEffect(() => {
    // Simulate API call with mock data
    const mockData = [
      {
        id: 1,
        etitle: "Tech Symposium 2025",
        edescription:
          "Join us for cutting-edge presentations on AI, blockchain, and emerging technologies. Network with industry leaders.",
        eimage:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
        category: "Technology",
        date: "June 15, 2025",
        location: "Main Auditorium",
        attendees: 250,
        featured: true,
      },
      {
        id: 2,
        etitle: "Cultural Festival",
        edescription:
          "Experience diverse cultures through music, dance, and art. Celebrating our multicultural campus community.",
        eimage:
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop",
        category: "Cultural",
        date: "June 20, 2025",
        location: "Campus Grounds",
        attendees: 500,
        featured: false,
      },
      {
        id: 3,
        etitle: "Career Fair 2025",
        edescription:
          "Connect with top employers and explore internship opportunities. Bring your resume and business attire.",
        eimage:
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
        category: "Career",
        date: "June 25, 2025",
        location: "Sports Complex",
        attendees: 300,
        featured: true,
      },
      {
        id: 4,
        etitle: "Research Showcase",
        edescription:
          "Students present their innovative research projects across various disciplines. Awards ceremony included.",
        eimage:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        category: "Academic",
        date: "July 2, 2025",
        location: "Science Building",
        attendees: 180,
        featured: false,
      },
    ];
    setActivity(mockData);
  }, []);

  const categories = ["all", "Technology", "Cultural", "Career", "Academic"];
  const filteredActivity =
    activeFilter === "all"
      ? activity
      : activity.filter((item) => item.category === activeFilter);

  const getCategoryColor = (category) => {
    const colors = {
      Technology: "bg-blue-100 text-blue-800 border-blue-200",
      Cultural: "bg-purple-100 text-purple-800 border-purple-200",
      Career: "bg-green-100 text-green-800 border-green-200",
      Academic: "bg-orange-100 text-orange-800 border-orange-200",
    };
    return colors[category] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600">
              Live Updates
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Campus Activity Hub
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover exciting events, workshops, and opportunities happening
            across campus
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-200"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Activity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredActivity.map((item, index) => (
            <div
              key={item.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                item.featured ? "ring-2 ring-yellow-400 relative" : ""
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {item.featured && (
                <div className="absolute top-4 left-4 z-10 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  Featured
                </div>
              )}

              {/* Image Container */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.eimage}
                  alt={item.etitle}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(
                    item.category
                  )}`}
                >
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.etitle}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {item.edescription}
                </p>

                {/* Event Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users className="w-4 h-4 text-green-500" />
                    <span>{item.attendees} expected</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group/btn">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="bg-white hover:bg-blue-50 border-2 border-blue-200 text-blue-600 font-semibold px-8 py-3 rounded-full"
          >
            <Clock className="w-5 h-5 mr-2" />
            Load More Activities
          </Button>
        </div>

        {/* Stats Footer */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">150+</div>
              <div className="text-gray-600">Events This Month</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">5,000+</div>
              <div className="text-gray-600">Active Participants</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">50+</div>
              <div className="text-gray-600">Student Organizations</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import { Button } from "@/components/ui/button";
// import { useState, useEffect } from "react";

// export function LatestActivity() {
//   const [activity, setActivity] = useState([]);

//   useEffect(() => {
//     async function fetchActivity() {
//       const res = await fetch("/api/latestactivity");
//       const data = await res.json();
//       setActivity(data);
//     }
//     fetchActivity();
//   }, []);
//   return (
//     <section className="w-full">
//       <div className="container">
//         <div className="mt-6 flex items-center justify-between mb-6 md:mb-8">
//           <h2 className="text-3xl md:text-3xl font-bold tracking-tight border-l-8 border-yellow-400 p-1">
//             Latest Activity
//           </h2>
//           <div className="flex items-center gap-2">
//             <Button variant="outline" size="sm" className="p-2">
//               <ChevronLeftIcon className="w-5 h-5" />
//             </Button>
//             <Button variant="outline" size="sm" className="p-2">
//               <ChevronRightIcon className="w-5 h-5" />
//             </Button>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
//           {activity.map((activity) => (
//             <div
//               className="bg-card rounded-lg overflow-hidden border"
//               key={activity.id}
//             >
//               <img
//                 src={activity.eimage}
//                 alt="event Image"
//                 width={400}
//                 height={300}
//                 className="w-full h-48 object-cover"
//                 style={{ aspectRatio: "400/300", objectFit: "cover" }}
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold tracking-tight mb-2">
//                   {activity.etitle}
//                 </h3>
//                 <p className="text-muted-foreground text-sm leading-relaxed">
//                   {activity.edescription}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ChevronLeftIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m15 18-6-6 6-6" />
//     </svg>
//   );
// }

// function ChevronRightIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m9 18 6-6-6-6" />
//     </svg>
//   );
// }
