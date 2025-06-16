import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  BookOpen,
} from "lucide-react";

const TeacherList = () => {
  // Sample teacher data
  const [teachers] = useState([
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@college.edu",
      phone: "+1 (555) 123-4567",
      department: "Computer Science",
      designation: "Professor",
      experience: "15 years",
      qualification: "Ph.D. in Computer Science",
      subjects: ["Data Structures", "Algorithms", "Machine Learning"],
      joinDate: "2010-08-15",
      status: "Active",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      email: "michael.chen@college.edu",
      phone: "+1 (555) 234-5678",
      department: "Mathematics",
      designation: "Associate Professor",
      experience: "12 years",
      qualification: "Ph.D. in Applied Mathematics",
      subjects: ["Calculus", "Linear Algebra", "Statistics"],
      joinDate: "2012-01-20",
      status: "Active",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      email: "emily.rodriguez@college.edu",
      phone: "+1 (555) 345-6789",
      department: "Physics",
      designation: "Assistant Professor",
      experience: "8 years",
      qualification: "Ph.D. in Theoretical Physics",
      subjects: ["Quantum Mechanics", "Thermodynamics", "Optics"],
      joinDate: "2016-09-01",
      status: "Active",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Prof. David Wilson",
      email: "david.wilson@college.edu",
      phone: "+1 (555) 456-7890",
      department: "Chemistry",
      designation: "Professor",
      experience: "20 years",
      qualification: "Ph.D. in Organic Chemistry",
      subjects: ["Organic Chemistry", "Biochemistry", "Analytical Chemistry"],
      joinDate: "2005-03-10",
      status: "On Leave",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      email: "lisa.thompson@college.edu",
      phone: "+1 (555) 567-8901",
      department: "English",
      designation: "Associate Professor",
      experience: "10 years",
      qualification: "Ph.D. in English Literature",
      subjects: ["Literature", "Creative Writing", "Linguistics"],
      joinDate: "2014-07-15",
      status: "Active",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'table'

  // Get unique departments and statuses for filters
  const departments = [
    ...new Set(teachers.map((teacher) => teacher.department)),
  ];
  const statuses = [...new Set(teachers.map((teacher) => teacher.status))];

  // Filter teachers based on search and filters
  const filteredTeachers = useMemo(() => {
    return teachers.filter((teacher) => {
      const matchesSearch =
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.department.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment =
        selectedDepartment === "" || teacher.department === selectedDepartment;
      const matchesStatus =
        selectedStatus === "" || teacher.status === selectedStatus;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [teachers, searchTerm, selectedDepartment, selectedStatus]);

  const handleAction = (action, teacherId) => {
    console.log(`${action} action for teacher ID: ${teacherId}`);
    // Implement actual actions here
  };

  const TeacherCard = ({ teacher }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200">
      <div className="flex items-start space-x-4">
        <img
          src={teacher.avatar}
          alt={teacher.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {teacher.name}
            </h3>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                teacher.status === "Active"
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {teacher.status}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-1">{teacher.designation}</p>
          <p className="text-sm font-medium text-blue-600 mb-3">
            {teacher.department}
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-500">
              <Mail className="w-4 h-4 mr-2" />
              {teacher.email}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Phone className="w-4 h-4 mr-2" />
              {teacher.phone}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              Joined: {new Date(teacher.joinDate).toLocaleDateString()}
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-1">Subjects:</p>
            <div className="flex flex-wrap gap-1">
              {teacher.subjects.map((subject, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => handleAction("view", teacher.id)}
              className="flex items-center px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Eye className="w-4 h-4 mr-1" />
              View
            </button>
            <button
              onClick={() => handleAction("edit", teacher.id)}
              className="flex items-center px-3 py-1.5 text-sm bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Edit className="w-4 h-4 mr-1" />
              Edit
            </button>
            <button
              onClick={() => handleAction("delete", teacher.id)}
              className="flex items-center px-3 py-1.5 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
            >
              <Trash2 className="w-4 h-4 mr-1" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const TeacherTableRow = ({ teacher }) => (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            src={teacher.avatar}
            alt={teacher.name}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div>
            <div className="text-sm font-medium text-gray-900">
              {teacher.name}
            </div>
            <div className="text-sm text-gray-500">{teacher.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {teacher.department}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {teacher.designation}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {teacher.experience}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            teacher.status === "Active"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {teacher.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex space-x-2">
          <button
            onClick={() => handleAction("view", teacher.id)}
            className="text-blue-600 hover:text-blue-900"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleAction("edit", teacher.id)}
            className="text-gray-600 hover:text-gray-900"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleAction("delete", teacher.id)}
            className="text-red-600 hover:text-red-900"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Teacher Management
          </h1>
          <p className="text-gray-600">
            Manage and view all teachers in the college portal
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Total Teachers
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {teachers.length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Active Teachers
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {teachers.filter((t) => t.status === "Active").length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <MapPin className="w-8 h-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Departments</p>
                <p className="text-2xl font-bold text-gray-900">
                  {departments.length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <Calendar className="w-8 h-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">On Leave</p>
                <p className="text-2xl font-bold text-gray-900">
                  {teachers.filter((t) => t.status === "On Leave").length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search teachers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Status</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>

              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-2 text-sm font-medium ${
                    viewMode === "grid"
                      ? "bg-blue-50 text-blue-600"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`px-4 py-2 text-sm font-medium border-l border-gray-300 ${
                    viewMode === "table"
                      ? "bg-blue-50 text-blue-600"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Table
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredTeachers.length} of {teachers.length} teachers
          </p>
        </div>

        {/* Teachers Display */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredTeachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Teacher
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Designation
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Experience
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTeachers.map((teacher) => (
                  <TeacherTableRow key={teacher.id} teacher={teacher} />
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* No Results */}
        {filteredTeachers.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No teachers found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherList;
