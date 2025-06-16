import {
  FaUserGraduate,
  FaCalendarAlt,
  FaHandshake,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaDollarSign,
  FaBuilding,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";

const AlumniNetwork = ({ alumniStories, dept }) => {
  const [activeTab, setActiveTab] = useState("stories");

  useEffect(() => {
    console.log(alumniStories);
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Careers Panel Discussion",
      date: "June 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Virtual Event",
      attendees: 150,
      description:
        "Join industry leaders discussing career paths in emerging technologies.",
    },
    {
      id: 2,
      title: "Annual Alumni Reunion",
      date: "July 22, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "University Campus",
      attendees: 500,
      description:
        "Reconnect with classmates and faculty. Includes lunch, networking sessions, and campus tours.",
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      date: "August 10, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Innovation Hub",
      attendees: 75,
      description:
        "Alumni entrepreneurs pitch their latest ventures. $10,000 prize for the winner.",
    },
  ];

  const contributions = [
    {
      id: 1,
      type: "Scholarship Fund",
      amount: "$250,000",
      contributor: "Class of 2015",
      impact: "25 students supported annually",
      icon: <FaDollarSign />,
    },
    {
      id: 2,
      type: "Lab Equipment",
      amount: "$100,000",
      contributor: "Tech Alumni Association",
      impact: "New AI/ML research lab established",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      type: "Mentorship Program",
      amount: "500+ hours",
      contributor: "Alumni Volunteers",
      impact: "1:1 mentoring for 100+ students",
      icon: <FaUsers />,
    },
  ];

  return (
    <section
      id="alumni"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Alumni Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our thriving community of graduates making impact
            across the globe
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border">
            <button
              onClick={() => setActiveTab("stories")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "stories"
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Success Stories
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "events"
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Events
            </button>
            <button
              onClick={() => setActiveTab("contributions")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "contributions"
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Contributions
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="min-h-[600px]">
          {/* Alumni Success Stories */}
          {activeTab === "stories" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {alumniStories?.map((alumni, index) => (
                <div
                  key={alumni.aid}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                    <div className="absolute -bottom-12 left-6">
                      <Image
                        src={`${alumni.image}`}
                        width={96}
                        height={96}
                        alt={alumni.aname}
                        className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
                      />
                    </div>
                  </div>
                  <div className="pt-16 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 capitalize">
                          {alumni.aname}
                        </h3>

                        <p className="text-blue-600 font-medium">
                          Batch:-{alumni.abatch}
                        </p>
                        <h5 className="text-base  text-gray-600 capitalize">
                          {dept}
                        </h5>
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={alumni.linkedin_url}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <FaLinkedin size={20} />
                        </a>
                        <a
                          href={"alumni.twitter"}
                          className="text-blue-400 hover:text-blue-600 transition-colors"
                        >
                          <FaTwitter size={20} />
                        </a>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold text-gray-800">
                        {alumni.role}
                      </p>
                      <p className="text-gray-600">Company: {alumni.company}</p>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {alumni.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Alumni Events */}
          {activeTab === "events" && (
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-blue-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <FaCalendarAlt className="text-2xl text-blue-500 mr-3" />
                        <h3 className="text-2xl font-bold text-gray-800">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4 text-lg">
                        {event.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <FaClock className="mr-2 text-blue-500" />
                          <span>
                            {event.date} • {event.time}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FaMapMarkerAlt className="mr-2 text-blue-500" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FaUsers className="mr-2 text-blue-500" />
                          <span>{event.attendees} attendees expected</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Alumni Contributions */}
          {activeTab === "contributions" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contributions.map((contribution, index) => (
                <div
                  key={contribution.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white text-2xl mb-6">
                    {contribution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {contribution.type}
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {contribution.amount}
                  </div>
                  <p className="text-gray-600 font-medium mb-4">
                    {contribution.contributor}
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-blue-800 font-semibold">Impact:</p>
                    <p className="text-blue-700">{contribution.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AlumniNetwork;
