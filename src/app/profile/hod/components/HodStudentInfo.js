import React, { useState, useMemo } from "react";
import {
  Search,
  User,
  BookOpen,
  Award,
  TrendingUp,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Filter,
  Eye,
  Download,
} from "lucide-react";

const HODStudentDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [filterSemester, setFilterSemester] = useState("all");
  const [filterPerformance, setFilterPerformance] = useState("all");

  // Mock student data
  const students = [
    {
      id: 1,
      name: "Arjun Sharma",
      rollNumber: "CS21B001",
      email: "arjun.sharma@college.edu",
      phone: "+91 9876543210",
      semester: 6,
      branch: "Computer Science",
      cgpa: 8.5,
      attendance: 92,
      address: "Mumbai, Maharashtra",
      subjects: [
        { name: "Data Structures", marks: 85, grade: "A", credits: 4 },
        { name: "Database Systems", marks: 88, grade: "A", credits: 4 },
        { name: "Operating Systems", marks: 82, grade: "A", credits: 3 },
        { name: "Computer Networks", marks: 90, grade: "A+", credits: 4 },
        { name: "Software Engineering", marks: 87, grade: "A", credits: 3 },
      ],
      semesterResults: [
        { sem: 1, cgpa: 7.8, credits: 22 },
        { sem: 2, cgpa: 8.1, credits: 24 },
        { sem: 3, cgpa: 8.3, credits: 26 },
        { sem: 4, cgpa: 8.4, credits: 24 },
        { sem: 5, cgpa: 8.6, credits: 25 },
        { sem: 6, cgpa: 8.5, credits: 23 },
      ],
    },
    {
      id: 2,
      name: "Priya Patel",
      rollNumber: "CS21B002",
      email: "priya.patel@college.edu",
      phone: "+91 9876543211",
      semester: 6,
      branch: "Computer Science",
      cgpa: 9.2,
      attendance: 96,
      address: "Pune, Maharashtra",
      subjects: [
        { name: "Data Structures", marks: 95, grade: "A+", credits: 4 },
        { name: "Database Systems", marks: 92, grade: "A+", credits: 4 },
        { name: "Operating Systems", marks: 89, grade: "A", credits: 3 },
        { name: "Computer Networks", marks: 94, grade: "A+", credits: 4 },
        { name: "Software Engineering", marks: 91, grade: "A+", credits: 3 },
      ],
      semesterResults: [
        { sem: 1, cgpa: 8.9, credits: 22 },
        { sem: 2, cgpa: 9.0, credits: 24 },
        { sem: 3, cgpa: 9.1, credits: 26 },
        { sem: 4, cgpa: 9.2, credits: 24 },
        { sem: 5, cgpa: 9.3, credits: 25 },
        { sem: 6, cgpa: 9.2, credits: 23 },
      ],
    },
    {
      id: 3,
      name: "Rahul Kumar",
      rollNumber: "CS21B003",
      email: "rahul.kumar@college.edu",
      phone: "+91 9876543212",
      semester: 4,
      branch: "Computer Science",
      cgpa: 7.2,
      attendance: 78,
      address: "Delhi, Delhi",
      subjects: [
        { name: "Data Structures", marks: 68, grade: "B", credits: 4 },
        { name: "Database Systems", marks: 72, grade: "B+", credits: 4 },
        { name: "Operating Systems", marks: 75, grade: "B+", credits: 3 },
        { name: "Computer Networks", marks: 70, grade: "B", credits: 4 },
        { name: "Software Engineering", marks: 73, grade: "B+", credits: 3 },
      ],
      semesterResults: [
        { sem: 1, cgpa: 6.8, credits: 22 },
        { sem: 2, cgpa: 7.0, credits: 24 },
        { sem: 3, cgpa: 7.1, credits: 26 },
        { sem: 4, cgpa: 7.2, credits: 24 },
      ],
    },
  ];

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSemester =
        filterSemester === "all" ||
        student.semester.toString() === filterSemester;
      const matchesPerformance =
        filterPerformance === "all" ||
        (filterPerformance === "excellent" && student.cgpa >= 9.0) ||
        (filterPerformance === "good" &&
          student.cgpa >= 8.0 &&
          student.cgpa < 9.0) ||
        (filterPerformance === "average" &&
          student.cgpa >= 7.0 &&
          student.cgpa < 8.0) ||
        (filterPerformance === "poor" && student.cgpa < 7.0);

      return matchesSearch && matchesSemester && matchesPerformance;
    });
  }, [searchTerm, filterSemester, filterPerformance]);

  const getPerformanceColor = (cgpa) => {
    if (cgpa >= 9.0) return "text-green-600 bg-green-50";
    if (cgpa >= 8.0) return "text-blue-600 bg-blue-50";
    if (cgpa >= 7.0) return "text-orange-600 bg-orange-50";
    return "text-red-600 bg-red-50";
  };

  const getAttendanceColor = (attendance) => {
    if (attendance >= 90) return "text-green-600";
    if (attendance >= 80) return "text-orange-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Student Management Dashboard
          </h1>
          <p className="text-gray-600">
            Monitor student performance and manage academic records
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel - Student List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Search and Filters */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by name or roll number..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2">
                    <select
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      value={filterSemester}
                      onChange={(e) => setFilterSemester(e.target.value)}
                    >
                      <option value="all">All Semesters</option>
                      <option value="4">Semester 4</option>
                      <option value="6">Semester 6</option>
                      <option value="8">Semester 8</option>
                    </select>
                    <select
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      value={filterPerformance}
                      onChange={(e) => setFilterPerformance(e.target.value)}
                    >
                      <option value="all">All Performance</option>
                      <option value="excellent">Excellent (9.0+)</option>
                      <option value="good">Good (8.0-8.9)</option>
                      <option value="average">Average (7.0-7.9)</option>
                      <option value="poor">Needs Attention (&lt;7.0)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Student List */}
              <div className="divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <div
                    key={student.id}
                    className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${
                      selectedStudent?.id === student.id
                        ? "bg-blue-50 border-r-4 border-blue-500"
                        : ""
                    }`}
                    onClick={() => setSelectedStudent(student)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {student.name}
                          </h3>
                          <p className="text-gray-600">
                            {student.rollNumber} • Semester {student.semester}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getPerformanceColor(
                            student.cgpa
                          )}`}
                        >
                          CGPA: {student.cgpa}
                        </div>
                        <p
                          className={`text-sm mt-1 ${getAttendanceColor(
                            student.attendance
                          )}`}
                        >
                          Attendance: {student.attendance}%
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Student Details */}
          <div className="lg:col-span-1">
            {selectedStudent ? (
              <div className="bg-white rounded-lg shadow-sm">
                {/* Student Info Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-900">
                      Student Details
                    </h2>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {selectedStudent.name}
                      </h3>
                      <p className="text-gray-600">
                        {selectedStudent.rollNumber}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="p-6 border-b border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Contact Information
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {selectedStudent.email}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {selectedStudent.phone}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {selectedStudent.address}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Academic Performance */}
                <div className="p-6 border-b border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Academic Performance
                  </h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        {selectedStudent.cgpa}
                      </div>
                      <div className="text-sm text-gray-600">CGPA</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        {selectedStudent.attendance}%
                      </div>
                      <div className="text-sm text-gray-600">Attendance</div>
                    </div>
                  </div>

                  {/* Semester Progress */}
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-900 mb-2">
                      Semester Progress
                    </h5>
                    <div className="space-y-2">
                      {selectedStudent.semesterResults.map((result) => (
                        <div
                          key={result.sem}
                          className="flex justify-between items-center"
                        >
                          <span className="text-sm text-gray-600">
                            Semester {result.sem}
                          </span>
                          <span className="text-sm font-medium text-gray-900">
                            {result.cgpa}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Current Subjects */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Current Subjects
                  </h4>
                  <div className="space-y-3">
                    {selectedStudent.subjects.map((subject, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <div className="font-medium text-gray-900">
                            {subject.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {subject.credits} Credits
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-900">
                            {subject.marks}
                          </div>
                          <div className="text-sm text-blue-600">
                            {subject.grade}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-center text-gray-500">
                  <User className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Select a student to view detailed information</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HODStudentDashboard;
