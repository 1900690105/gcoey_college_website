import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  Award,
  GraduationCap,
  Star,
  Clock,
  Camera,
  Edit3,
} from "lucide-react";

const StudentProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample student data
  const studentData = {
    personalInfo: {
      name: "Alex Johnson",
      studentId: "STU2024001",
      email: "alex.johnson@university.edu",
      phone: "+1 (555) 123-4567",
      dateOfBirth: "March 15, 2002",
      address: "123 Campus Drive, University City, UC 12345",
      profileImage: "/api/placeholder/150/150",
      emergencyContact: {
        name: "Sarah Johnson",
        relationship: "Mother",
        phone: "+1 (555) 987-6543",
      },
    },
    academicInfo: {
      program: "Computer Science",
      year: "Junior (3rd Year)",
      semester: "Fall 2024",
      gpa: "3.85",
      credits: "89/120",
      advisor: "Dr. Emily Chen",
      expectedGraduation: "May 2026",
      status: "Active",
    },
    courses: [
      {
        code: "CS 301",
        name: "Data Structures & Algorithms",
        credits: 3,
        grade: "A-",
        status: "Completed",
      },
      {
        code: "CS 320",
        name: "Software Engineering",
        credits: 3,
        grade: "A",
        status: "In Progress",
      },
      {
        code: "MATH 250",
        name: "Discrete Mathematics",
        credits: 4,
        grade: "B+",
        status: "Completed",
      },
      {
        code: "CS 340",
        name: "Database Systems",
        credits: 3,
        grade: "A",
        status: "In Progress",
      },
      {
        code: "ENG 201",
        name: "Technical Writing",
        credits: 2,
        grade: "A-",
        status: "Completed",
      },
    ],
    achievements: [
      {
        title: "Dean's List",
        date: "Spring 2024",
        description: "Achieved GPA above 3.5",
      },
      {
        title: "Hackathon Winner",
        date: "October 2023",
        description: "First place in University Code Challenge",
      },
      {
        title: "Academic Excellence Award",
        date: "May 2023",
        description: "Top 10% of class performance",
      },
    ],
    activities: [
      {
        name: "Computer Science Club",
        role: "Vice President",
        duration: "2023-2024",
      },
      {
        name: "Programming Tutor",
        role: "Peer Tutor",
        duration: "2024-Present",
      },
      {
        name: "Volunteer Coding Instructor",
        role: "Volunteer",
        duration: "2023-Present",
      },
    ],
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: User },
    { id: "academic", label: "Academic", icon: GraduationCap },
    { id: "courses", label: "Courses", icon: BookOpen },
    { id: "achievements", label: "Achievements", icon: Award },
  ];

  const TabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="">
            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-indigo-600" />
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-800">
                        {studentData.personalInfo.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-800">
                        {studentData.personalInfo.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Date of Birth</p>
                      <p className="text-gray-800">
                        {studentData.personalInfo.dateOfBirth}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="text-gray-800">
                        {studentData.personalInfo.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <User className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Emergency Contact</p>
                      <p className="text-gray-800">
                        {studentData.personalInfo.emergencyContact.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {studentData.personalInfo.emergencyContact.relationship}{" "}
                        - {studentData.personalInfo.emergencyContact.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activities */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Extracurricular Activities
              </h3>
              <div className="space-y-3">
                {studentData.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-gray-800">
                        {activity.name}
                      </p>
                      <p className="text-sm text-gray-600">{activity.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">
                        {activity.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "academic":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-600" />
                Academic Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="text-sm text-indigo-600 font-medium">
                      Current Program
                    </p>
                    <p className="text-xl font-semibold text-indigo-800">
                      {studentData.academicInfo.program}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Academic Year</p>
                      <p className="text-gray-800 font-medium">
                        {studentData.academicInfo.year}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Current Semester</p>
                      <p className="text-gray-800 font-medium">
                        {studentData.academicInfo.semester}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Academic Status</p>
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        {studentData.academicInfo.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-600 font-medium">
                      Current GPA
                    </p>
                    <p className="text-2xl font-bold text-green-800">
                      {studentData.academicInfo.gpa}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Credits Completed</p>
                      <p className="text-gray-800 font-medium">
                        {studentData.academicInfo.credits}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Academic Advisor</p>
                      <p className="text-gray-800 font-medium">
                        {studentData.academicInfo.advisor}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Expected Graduation
                      </p>
                      <p className="text-gray-800 font-medium">
                        {studentData.academicInfo.expectedGraduation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "courses":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                Course History
              </h3>
              <div className="space-y-3">
                {studentData.courses.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                          {course.code}
                        </span>
                        <h4 className="font-medium text-gray-800">
                          {course.name}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {course.credits} Credits
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          course.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {course.status}
                      </span>
                      <span className="font-semibold text-gray-800">
                        {course.grade}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "achievements":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" />
                Achievements & Awards
              </h3>
              <div className="space-y-4">
                {studentData.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200"
                  >
                    <div className="flex-shrink-0">
                      <Star className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {achievement.description}
                      </p>
                      <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {achievement.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                {studentData.personalInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <Camera className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                <h1 className="text-3xl font-bold text-gray-800">
                  {studentData.personalInfo.name}
                </h1>
                <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                  <Edit3 className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <p className="text-lg text-gray-600 mb-2">
                Student ID: {studentData.personalInfo.studentId}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 bg-indigo-100 px-3 py-1 rounded-full">
                  <GraduationCap className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-medium text-indigo-800">
                    {studentData.academicInfo.program}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800">
                    GPA: {studentData.academicInfo.gpa}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm p-2 mb-8 border border-gray-100">
          <div className="flex flex-wrap gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <TabContent />
      </div>
    </div>
  );
};

export default StudentProfile;
