import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Eye,
  Edit,
  Users,
  BookOpen,
  Calendar,
  TrendingUp,
  Award,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const HODCoursesPortal = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [expandedCourse, setExpandedCourse] = useState(null);

  // Mock data for courses
  useEffect(() => {
    const mockCourses = [
      {
        id: 1,
        code: "CS101",
        name: "Introduction to Programming",
        semester: 1,
        credits: 4,
        instructor: "Dr. Smith Johnson",
        enrolledStudents: 45,
        maxCapacity: 50,
        completionRate: 92,
        averageGrade: "B+",
        status: "active",
        schedule: "Mon, Wed, Fri - 9:00 AM",
        description: "Fundamental concepts of programming using Python",
        prerequisites: ["None"],
        outcomes: [
          "Basic programming skills",
          "Problem solving",
          "Algorithm design",
        ],
        assignments: 8,
        exams: 3,
        lastUpdated: "2025-05-15",
      },
      {
        id: 2,
        code: "CS201",
        name: "Data Structures & Algorithms",
        semester: 3,
        credits: 4,
        instructor: "Prof. Alice Wilson",
        enrolledStudents: 38,
        maxCapacity: 40,
        completionRate: 88,
        averageGrade: "A-",
        status: "active",
        schedule: "Tue, Thu - 2:00 PM",
        description: "Advanced data structures and algorithmic problem solving",
        prerequisites: ["CS101", "MATH201"],
        outcomes: [
          "Advanced programming",
          "Data structure implementation",
          "Algorithm analysis",
        ],
        assignments: 6,
        exams: 2,
        lastUpdated: "2025-05-20",
      },
      {
        id: 3,
        code: "CS301",
        name: "Database Management Systems",
        semester: 5,
        credits: 3,
        instructor: "Dr. Robert Chen",
        enrolledStudents: 32,
        maxCapacity: 35,
        completionRate: 95,
        averageGrade: "A",
        status: "active",
        schedule: "Mon, Wed - 11:00 AM",
        description:
          "Relational databases, SQL, and database design principles",
        prerequisites: ["CS201"],
        outcomes: ["Database design", "SQL proficiency", "Data modeling"],
        assignments: 5,
        exams: 2,
        lastUpdated: "2025-05-18",
      },
      {
        id: 4,
        code: "CS401",
        name: "Software Engineering",
        semester: 7,
        credits: 4,
        instructor: "Prof. Sarah Davis",
        enrolledStudents: 28,
        maxCapacity: 30,
        completionRate: 90,
        averageGrade: "B+",
        status: "planning",
        schedule: "Tue, Thu, Fri - 10:00 AM",
        description:
          "Software development lifecycle, project management, and team collaboration",
        prerequisites: ["CS201", "CS301"],
        outcomes: [
          "Project management",
          "Team collaboration",
          "Software architecture",
        ],
        assignments: 4,
        exams: 2,
        lastUpdated: "2025-05-10",
      },
    ];
    setCourses(mockCourses);
    setFilteredCourses(mockCourses);
  }, []);

  // Filter courses based on search and semester
  useEffect(() => {
    let filtered = courses.filter(
      (course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedSemester !== "all") {
      filtered = filtered.filter(
        (course) => course.semester.toString() === selectedSemester
      );
    }

    setFilteredCourses(filtered);
  }, [searchTerm, selectedSemester, courses]);

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "planning":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCapacityColor = (enrolled, max) => {
    const percentage = (enrolled / max) * 100;
    if (percentage >= 90) return "text-red-600";
    if (percentage >= 75) return "text-yellow-600";
    return "text-green-600";
  };

  const CourseCard = ({ course }) => (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{course.code}</h3>
          <p className="text-gray-600 font-medium">{course.name}</p>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusColor(
            course.status
          )}`}
        >
          {course.status}
        </span>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <Users className="w-4 h-4 mr-2" />
          <span
            className={getCapacityColor(
              course.enrolledStudents,
              course.maxCapacity
            )}
          >
            {course.enrolledStudents}/{course.maxCapacity} students
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <BookOpen className="w-4 h-4 mr-2" />
          <span>
            {course.credits} credits • Semester {course.semester}
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{course.schedule}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Award className="w-4 h-4 mr-2" />
          <span>
            Avg Grade: {course.averageGrade} ({course.completionRate}%
            completion)
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
        <div className="flex space-x-2">
          <button
            onClick={() => setSelectedCourse(course)}
            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors text-sm flex items-center"
          >
            <Eye className="w-4 h-4 mr-1" />
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  const CourseDetailModal = ({ course, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {course.code}: {course.name}
              </h2>
              <p className="text-gray-600">Instructor: {course.instructor}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Course Information
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Credits:</span>
                    <span className="font-medium">{course.credits}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Semester:</span>
                    <span className="font-medium">{course.semester}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Schedule:</span>
                    <span className="font-medium">{course.schedule}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        course.status
                      )}`}
                    >
                      {course.status}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Enrollment</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Enrolled:</span>
                    <span
                      className={`font-medium ${getCapacityColor(
                        course.enrolledStudents,
                        course.maxCapacity
                      )}`}
                    >
                      {course.enrolledStudents}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Capacity:</span>
                    <span className="font-medium">{course.maxCapacity}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: `${
                          (course.enrolledStudents / course.maxCapacity) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Performance Metrics
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Grade:</span>
                    <span className="font-medium">{course.averageGrade}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Completion Rate:</span>
                    <span className="font-medium">
                      {course.completionRate}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Assignments:</span>
                    <span className="font-medium">{course.assignments}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Exams:</span>
                    <span className="font-medium">{course.exams}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Last Updated
                </h3>
                <p className="text-sm text-gray-600">{course.lastUpdated}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-700">{course.description}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Prerequisites
              </h3>
              <div className="flex flex-wrap gap-2">
                {course.prerequisites.map((prereq, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                  >
                    {prereq}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Learning Outcomes
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {course.outcomes.map((outcome, index) => (
                  <li key={index} className="text-sm">
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6 pt-6 border-t">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center">
              <Edit className="w-4 h-4 mr-2" />
              Edit Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const StatsCard = ({ title, value, subtitle, icon: Icon, color }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className={`text-2xl font-bold ${color}`}>{value}</p>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Course Management Portal
          </h1>
          <p className="text-gray-600">
            Manage and monitor departmental courses
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Courses"
            value="4"
            subtitle="Currently offered"
            icon={BookOpen}
            color="text-blue-600"
          />
          <StatsCard
            title="Active Courses"
            value="3"
            subtitle="This semester"
            icon={TrendingUp}
            color="text-green-600"
          />
          <StatsCard
            title="Total Students"
            value="143"
            subtitle="Enrolled across all courses"
            icon={Users}
            color="text-purple-600"
          />
          <StatsCard
            title="Avg Completion"
            value="91%"
            subtitle="Department average"
            icon={Award}
            color="text-orange-600"
          />
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search courses, instructors, or course codes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Semesters</option>
              <option value="1">Semester 1</option>
              <option value="3">Semester 3</option>
              <option value="5">Semester 5</option>
              <option value="7">Semester 7</option>
            </select>
            <div className="flex border border-gray-300 rounded-md">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-4 py-2 ${
                  viewMode === "grid"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600"
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-4 py-2 ${
                  viewMode === "list"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600"
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Courses Display */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }
        >
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No courses found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Course Detail Modal */}
        {selectedCourse && (
          <CourseDetailModal
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
          />
        )}
      </div>
    </div>
  );
};

export default HODCoursesPortal;
