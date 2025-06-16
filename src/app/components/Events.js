import React, { useState } from "react";
import { Calendar, Clock, MapPin, Search, Filter } from "lucide-react";

const CollegeEventsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Sample event data - replace with your actual data
  const events = [
    {
      eid: "EVT001",
      etitle: "Annual Tech Symposium 2025",
      eimage:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
      date: "2025-07-15",
      etime: "09:00 AM",
      eplace: "Main Auditorium, Block A",
      description:
        "Join us for an exciting day of technology presentations, workshops, and networking with industry experts. Featuring keynote speakers from top tech companies and hands-on coding sessions.",
    },
    {
      eid: "EVT002",
      etitle: "Cultural Fest - Kaleidoscope",
      eimage:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      date: "2025-07-22",
      etime: "06:00 PM",
      eplace: "Campus Ground",
      description:
        "Experience the vibrant culture of our college through music, dance, drama, and art competitions. Open to all students with exciting prizes and performances.",
    },
    {
      eid: "EVT003",
      etitle: "Career Fair 2025",
      eimage:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      date: "2025-07-28",
      etime: "10:00 AM",
      eplace: "Sports Complex",
      description:
        "Connect with top employers and explore career opportunities. Over 50 companies participating with on-spot interviews and internship offers.",
    },
    {
      eid: "EVT004",
      etitle: "Science Exhibition",
      eimage:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop",
      date: "2025-08-05",
      etime: "11:00 AM",
      eplace: "Science Block, Hall 1",
      description:
        "Showcase of innovative projects and research work by students from various departments. Interactive exhibits and demonstrations.",
    },
    {
      eid: "EVT005",
      etitle: "Alumni Meet 2025",
      eimage:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop",
      date: "2025-08-12",
      etime: "04:00 PM",
      eplace: "Convention Center",
      description:
        "Reconnect with fellow alumni, share experiences, and network with professionals across various industries. Dinner and entertainment included.",
    },
    {
      eid: "EVT006",
      etitle: "Sports Day Championship",
      eimage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      date: "2025-08-18",
      etime: "08:00 AM",
      eplace: "Athletic Track & Field",
      description:
        "Annual inter-department sports competition featuring track and field events, team sports, and individual competitions. Medals and trophies for winners.",
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.etitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Campus Events
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest events and activities happening at our
            college
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white rounded-xl p-6 shadow-lg">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[150px]"
            >
              <option value="all">All Events</option>
              <option value="academic">Academic</option>
              <option value="cultural">Cultural</option>
              <option value="sports">Sports</option>
            </select>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.eid}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Event Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={event.eimage}
                  alt={event.etitle}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  ID: {event.eid}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {event.etitle}
                </h3>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="text-sm font-medium">
                      {formatDate(event.date)}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-green-500" />
                    <span className="text-sm font-medium">{event.etime}</span>
                  </div>

                  <div className="flex items-start text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 mt-0.5 text-red-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{event.eplace}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {event.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Register
                  </button>
                  <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Events Found */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No events found
            </h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Want to organize an event?
          </h2>
          <p className="mb-6 opacity-90">
            Submit your event proposal and get it featured on our portal
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Submit Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollegeEventsSection;
