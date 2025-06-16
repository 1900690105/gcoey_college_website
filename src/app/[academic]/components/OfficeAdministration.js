import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Award,
  BookOpen,
  Users,
  Calendar,
  Star,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const OfficeAdministrationPage = () => {
  const [expandedTeacher, setExpandedTeacher] = useState(null);

  // Sample teacher data - replace with your actual data
  const teachers = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      position: "Department Head & Senior Professor",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c2b6d6d5?w=300&h=300&fit=crop&crop=face",
      email: "s.mitchell@college.edu",
      phone: "+1 (555) 123-4567",
      office: "Admin Building, Room 205",
      specialization: [
        "Business Administration",
        "Strategic Management",
        "Leadership",
      ],
      experience: "15+ years",
      education: "Ph.D. in Business Administration, MBA",
      courses: [
        "Business Strategy",
        "Organizational Behavior",
        "Management Principles",
      ],
      achievements: [
        "Excellence in Teaching Award 2023",
        "Published 25+ research papers",
        "Industry Consultant",
      ],
      rating: 4.9,
      students: 180,
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      position: "Associate Professor",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      email: "m.chen@college.edu",
      phone: "+1 (555) 234-5678",
      office: "Admin Building, Room 208",
      specialization: ["Financial Management", "Accounting", "Data Analysis"],
      experience: "12+ years",
      education: "Ph.D. in Finance, CPA",
      courses: [
        "Financial Accounting",
        "Cost Management",
        "Business Analytics",
      ],
      achievements: [
        "Best Faculty Award 2022",
        "Finance Department Innovation Award",
        "Guest Speaker at 15+ conferences",
      ],
      rating: 4.8,
      students: 165,
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      position: "Assistant Professor",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      email: "e.rodriguez@college.edu",
      phone: "+1 (555) 345-6789",
      office: "Admin Building, Room 212",
      specialization: [
        "Human Resources",
        "Organizational Psychology",
        "Training & Development",
      ],
      experience: "8+ years",
      education: "Ph.D. in Organizational Psychology, SHRM-CP",
      courses: [
        "Human Resource Management",
        "Employee Relations",
        "Training Design",
      ],
      achievements: [
        "Young Faculty Excellence Award",
        "HR Innovation Research Grant",
        "Corporate Training Consultant",
      ],
      rating: 4.7,
      students: 140,
    },
    {
      id: 4,
      name: "Prof. James Wilson",
      position: "Senior Lecturer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      email: "j.wilson@college.edu",
      phone: "+1 (555) 456-7890",
      office: "Admin Building, Room 215",
      specialization: [
        "Operations Management",
        "Supply Chain",
        "Project Management",
      ],
      experience: "10+ years",
      education: "MBA, PMP Certified",
      courses: [
        "Operations Research",
        "Supply Chain Management",
        "Project Planning",
      ],
      achievements: [
        "Industry Partnership Award",
        "Operations Excellence Recognition",
        "Student Mentor of the Year",
      ],
      rating: 4.6,
      students: 125,
    },
  ];

  const toggleExpanded = (teacherId) => {
    setExpandedTeacher(expandedTeacher === teacherId ? null : teacherId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">
              Office Administration Department
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Meet our exceptional faculty members who are dedicated to shaping
              future business leaders through innovative teaching and real-world
              experience.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                {teachers.length}
              </div>
              <div className="text-blue-200">Expert Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                {teachers.reduce((sum, teacher) => sum + teacher.students, 0)}
              </div>
              <div className="text-blue-200">Students Taught</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                {Math.round(
                  (teachers.reduce((sum, teacher) => sum + teacher.rating, 0) /
                    teachers.length) *
                    10
                ) / 10}
              </div>
              <div className="text-blue-200">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-blue-200">Years Combined Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Teacher Header */}
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="relative">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {teacher.name}
                      </h3>
                      <p className="text-indigo-600 font-semibold mb-3">
                        {teacher.position}
                      </p>

                      {/* Rating and Students */}
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="font-semibold text-gray-700">
                            {teacher.rating}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">
                            {teacher.students} students
                          </span>
                        </div>
                      </div>

                      {/* Quick Info */}
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-600 text-sm">
                          <Mail className="w-4 h-4 mr-2 text-indigo-500" />
                          {teacher.email}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Phone className="w-4 h-4 mr-2 text-indigo-500" />
                          {teacher.phone}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
                          {teacher.office}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Specialization Tags */}
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-2">
                      {teacher.specialization.map((spec, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expand Button */}
                  <button
                    onClick={() => toggleExpanded(teacher.id)}
                    className="mt-6 flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 font-semibold"
                  >
                    <span className="mr-2">
                      {expandedTeacher === teacher.id
                        ? "Show Less"
                        : "View Details"}
                    </span>
                    {expandedTeacher === teacher.id ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Expanded Details */}
                {expandedTeacher === teacher.id && (
                  <div className="px-8 pb-8 border-t border-gray-100 bg-gray-50">
                    <div className="pt-6 space-y-6">
                      {/* Education & Experience */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                            <BookOpen className="w-5 h-5 mr-2 text-indigo-600" />
                            Education
                          </h4>
                          <p className="text-gray-700">{teacher.education}</p>
                        </div>
                        <div>
                          <h4 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                            <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                            Experience
                          </h4>
                          <p className="text-gray-700">{teacher.experience}</p>
                        </div>
                      </div>

                      {/* Courses */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          Courses Taught
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {teacher.courses.map((course, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                          <Award className="w-5 h-5 mr-2 text-yellow-600" />
                          Achievements
                        </h4>
                        <ul className="space-y-2">
                          {teacher.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                              <span className="text-gray-700">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">
              Have questions about our Office Administration programs? Our
              faculty members are here to help guide your academic journey.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center text-white">
                <Mail className="w-5 h-5 mr-2" />
                <span>admin.dept@college.edu</span>
              </div>
              <div className="flex items-center text-white">
                <Phone className="w-5 h-5 mr-2" />
                <span>+1 (555) 100-2000</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Administration Building, 2nd Floor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeAdministrationPage;
