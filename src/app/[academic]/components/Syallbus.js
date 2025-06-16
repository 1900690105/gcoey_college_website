import React, { useState } from "react";
import {
  Download,
  Eye,
  Calendar,
  Clock,
  User,
  BookOpen,
  FileText,
  Search,
  Filter,
  ChevronDown,
} from "lucide-react";

const SyllabusPage = () => {
  const [selectedSemester, setSelectedSemester] = useState("current");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");

  // Mock data for syllabi
  const syllabi = [
    {
      id: 1,
      courseCode: "CS101",
      courseName: "Introduction to Computer Science",
      instructor: "Dr. Sarah Johnson",
      semester: "Fall 2024",
      credits: 3,
      lastUpdated: "2024-08-15",
      fileSize: "2.4 MB",
      status: "active",
      subject: "Computer Science",
    },
    {
      id: 2,
      courseCode: "MATH201",
      courseName: "Calculus II",
      instructor: "Prof. Michael Chen",
      semester: "Fall 2024",
      credits: 4,
      lastUpdated: "2024-08-20",
      fileSize: "3.1 MB",
      status: "active",
      subject: "Mathematics",
    },
    {
      id: 3,
      courseCode: "ENG102",
      courseName: "English Composition",
      instructor: "Dr. Emily Rodriguez",
      semester: "Fall 2024",
      credits: 3,
      lastUpdated: "2024-08-18",
      fileSize: "1.8 MB",
      status: "active",
      subject: "English",
    },
    {
      id: 4,
      courseCode: "PHYS201",
      courseName: "Physics I",
      instructor: "Dr. Robert Kim",
      semester: "Fall 2024",
      credits: 4,
      lastUpdated: "2024-08-22",
      fileSize: "4.2 MB",
      status: "active",
      subject: "Physics",
    },
    {
      id: 5,
      courseCode: "CS102",
      courseName: "Data Structures",
      instructor: "Prof. Lisa Thompson",
      semester: "Spring 2024",
      credits: 3,
      lastUpdated: "2024-01-15",
      fileSize: "2.8 MB",
      status: "archived",
      subject: "Computer Science",
    },
  ];

  const subjects = [
    "all",
    "Computer Science",
    "Mathematics",
    "English",
    "Physics",
  ];
  const semesters = [
    { value: "current", label: "Current Semester" },
    { value: "fall2024", label: "Fall 2024" },
    { value: "spring2024", label: "Spring 2024" },
    { value: "fall2023", label: "Fall 2023" },
  ];

  const filteredSyllabi = syllabi.filter((syllabus) => {
    const matchesSearch =
      syllabus.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      syllabus.courseCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      syllabus.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject =
      selectedSubject === "all" || syllabus.subject === selectedSubject;
    const matchesSemester =
      selectedSemester === "current" ||
      syllabus.semester.toLowerCase().replace(" ", "") === selectedSemester;

    return matchesSearch && matchesSubject && matchesSemester;
  });

  const handleDownload = (syllabus) => {
    // In a real application, this would trigger an actual download
    console.log(`Downloading syllabus for ${syllabus.courseCode}`);
    alert(`Downloading ${syllabus.courseName} syllabus...`);
  };

  const handleView = (syllabus) => {
    // In a real application, this would open the syllabus in a modal or new page
    console.log(`Viewing syllabus for ${syllabus.courseCode}`);
    alert(`Opening ${syllabus.courseName} syllabus...`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Course Syllabi
              </h1>
              <p className="mt-2 text-gray-600">
                Access and download your course syllabi
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>Academic Year 2024-2025</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses or instructors..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Subject Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <select
                className="w-full pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject === "all" ? "All Subjects" : subject}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Semester Filter */}
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <select
                className="w-full pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
              >
                {semesters.map((semester) => (
                  <option key={semester.value} value={semester.value}>
                    {semester.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredSyllabi.length} of {syllabi.length} syllabi
          </p>
        </div>

        {/* Syllabi Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredSyllabi.map((syllabus) => (
            <div
              key={syllabus.id}
              className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                {/* Course Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {syllabus.courseCode}
                      </span>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          syllabus.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {syllabus.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {syllabus.courseName}
                    </h3>
                  </div>
                </div>

                {/* Course Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="w-4 h-4 mr-2" />
                    {syllabus.instructor}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {syllabus.semester}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BookOpen className="w-4 h-4 mr-2" />
                    {syllabus.credits} Credits
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    Updated:{" "}
                    {new Date(syllabus.lastUpdated).toLocaleDateString()}
                  </div>
                </div>

                {/* File Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-1" />
                    PDF Document
                  </div>
                  <span>{syllabus.fileSize}</span>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleView(syllabus)}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </button>
                  <button
                    onClick={() => handleDownload(syllabus)}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredSyllabi.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No syllabi found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters to find more
              syllabi.
            </p>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-blue-900 mb-2">Need Help?</h3>
          <p className="text-blue-700 mb-4">
            If you can't find a syllabus or need assistance, please contact your
            instructor or the academic office.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-blue-600 hover:text-blue-800 underline">
              Contact Academic Office
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800 underline">
              Technical Support
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800 underline">
              Student Portal Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyllabusPage;
