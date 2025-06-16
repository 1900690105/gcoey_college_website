import React, { useState, useEffect } from "react";
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  Eye,
  Filter,
  Download,
  Upload,
  BookOpen,
  Users,
  Clock,
  Award,
} from "lucide-react";

const CurriculumManagement = () => {
  const [curricula, setCurricula] = useState([]);
  const [filteredCurricula, setFilteredCurricula] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [selectedCurriculum, setSelectedCurriculum] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // Sample data
  const sampleCurricula = [
    {
      id: 1,
      name: "Computer Science Engineering",
      code: "CSE-2024",
      department: "Computer Science",
      degree: "B.Tech",
      duration: "4 Years",
      totalCredits: 180,
      totalSubjects: 45,
      status: "Active",
      version: "2.1",
      effectiveDate: "2024-07-01",
      createdBy: "Dr. Smith",
      lastModified: "2024-12-15",
      description:
        "Comprehensive curriculum covering programming, algorithms, data structures, and emerging technologies.",
      subjects: [
        {
          semester: 1,
          name: "Programming Fundamentals",
          credits: 4,
          type: "Core",
        },
        { semester: 1, name: "Mathematics I", credits: 4, type: "Core" },
        { semester: 2, name: "Data Structures", credits: 4, type: "Core" },
        { semester: 2, name: "Digital Logic", credits: 3, type: "Core" },
      ],
    },
    {
      id: 2,
      name: "Mechanical Engineering",
      code: "ME-2024",
      department: "Mechanical Engineering",
      degree: "B.Tech",
      duration: "4 Years",
      totalCredits: 175,
      totalSubjects: 42,
      status: "Active",
      version: "1.8",
      effectiveDate: "2024-07-01",
      createdBy: "Prof. Johnson",
      lastModified: "2024-11-20",
      description:
        "Curriculum focusing on mechanical systems, thermodynamics, and manufacturing processes.",
      subjects: [],
    },
    {
      id: 3,
      name: "Business Administration",
      code: "MBA-2024",
      department: "Management",
      degree: "MBA",
      duration: "2 Years",
      totalCredits: 120,
      totalSubjects: 24,
      status: "Draft",
      version: "1.0",
      effectiveDate: "2025-01-01",
      createdBy: "Dr. Williams",
      lastModified: "2024-12-01",
      description:
        "Strategic management curriculum with focus on leadership and innovation.",
      subjects: [],
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    department: "",
    degree: "",
    duration: "",
    totalCredits: "",
    totalSubjects: "",
    status: "Draft",
    version: "1.0",
    effectiveDate: "",
    description: "",
    subjects: [],
  });

  const departments = [
    "Computer Science",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
    "Management",
    "Arts & Science",
  ];
  const degrees = ["B.Tech", "M.Tech", "MBA", "BBA", "B.Sc", "M.Sc", "Ph.D"];
  const statuses = ["Active", "Draft", "Archived", "Under Review"];

  useEffect(() => {
    setCurricula(sampleCurricula);
    setFilteredCurricula(sampleCurricula);
  }, []);

  useEffect(() => {
    let filtered = curricula.filter((curriculum) => {
      const matchesSearch =
        curriculum.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        curriculum.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        curriculum.department.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment =
        !filterDepartment || curriculum.department === filterDepartment;
      const matchesStatus = !filterStatus || curriculum.status === filterStatus;

      return matchesSearch && matchesDepartment && matchesStatus;
    });

    setFilteredCurricula(filtered);
  }, [searchTerm, filterDepartment, filterStatus, curricula]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (modalMode === "add") {
      const newCurriculum = {
        ...formData,
        id: curricula.length + 1,
        createdBy: "Current Admin",
        lastModified: new Date().toISOString().split("T")[0],
        subjects: [],
      };
      setCurricula([...curricula, newCurriculum]);
    } else {
      setCurricula(
        curricula.map((c) =>
          c.id === selectedCurriculum.id
            ? {
                ...formData,
                id: selectedCurriculum.id,
                subjects: selectedCurriculum.subjects,
              }
            : c
        )
      );
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      code: "",
      department: "",
      degree: "",
      duration: "",
      totalCredits: "",
      totalSubjects: "",
      status: "Draft",
      version: "1.0",
      effectiveDate: "",
      description: "",
      subjects: [],
    });
    setShowModal(false);
    setSelectedCurriculum(null);
    setModalMode("add");
  };

  const handleEdit = (curriculum) => {
    setSelectedCurriculum(curriculum);
    setFormData({ ...curriculum });
    setModalMode("edit");
    setShowModal(true);
  };

  const handleView = (curriculum) => {
    setSelectedCurriculum(curriculum);
    setModalMode("view");
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    setCurricula(curricula.filter((c) => c.id !== deleteId));
    setShowDeleteConfirm(false);
    setDeleteId(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Draft":
        return "bg-yellow-100 text-yellow-800";
      case "Archived":
        return "bg-gray-100 text-gray-800";
      case "Under Review":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Curriculum Management
              </h1>
              <p className="text-gray-600">
                Manage academic curricula, courses, and degree programs
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Upload size={18} />
                Import
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Download size={18} />
                Export
              </button>
              <button
                onClick={() => {
                  setModalMode("add");
                  setShowModal(true);
                }}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <Plus size={18} />
                Add Curriculum
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Curricula
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {curricula.length}
                </p>
              </div>
              <div className="p-3 bg-indigo-100 rounded-lg">
                <BookOpen className="text-indigo-600" size={24} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Active Programs
                </p>
                <p className="text-3xl font-bold text-green-600">
                  {curricula.filter((c) => c.status === "Active").length}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Award className="text-green-600" size={24} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Departments</p>
                <p className="text-3xl font-bold text-purple-600">
                  {departments.length}
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="text-purple-600" size={24} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Under Review
                </p>
                <p className="text-3xl font-bold text-orange-600">
                  {curricula.filter((c) => c.status === "Under Review").length}
                </p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <Clock className="text-orange-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search curricula..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">All Status</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Curricula Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Curriculum
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Degree
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Credits
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Modified
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCurricula.map((curriculum) => (
                  <tr
                    key={curriculum.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {curriculum.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {curriculum.code}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {curriculum.department}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {curriculum.degree}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {curriculum.totalCredits}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                          curriculum.status
                        )}`}
                      >
                        {curriculum.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {curriculum.lastModified}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleView(curriculum)}
                          className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleEdit(curriculum)}
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(curriculum.id)}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">
                  {modalMode === "add"
                    ? "Add New Curriculum"
                    : modalMode === "edit"
                    ? "Edit Curriculum"
                    : "Curriculum Details"}
                </h2>
              </div>

              {modalMode === "view" ? (
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Curriculum Name
                      </label>
                      <p className="text-gray-900">
                        {selectedCurriculum?.name}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Code
                      </label>
                      <p className="text-gray-900">
                        {selectedCurriculum?.code}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Department
                      </label>
                      <p className="text-gray-900">
                        {selectedCurriculum?.department}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Degree
                      </label>
                      <p className="text-gray-900">
                        {selectedCurriculum?.degree}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Duration
                      </label>
                      <p className="text-gray-900">
                        {selectedCurriculum?.duration}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Total Credits
                      </label>
                      <p className="text-gray-900">
                        {selectedCurriculum?.totalCredits}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Status
                      </label>
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                          selectedCurriculum?.status
                        )}`}
                      >
                        {selectedCurriculum?.status}
                      </span>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Version
                      </label>
                      <p className="text-gray-900">
                        {selectedCurriculum?.version}
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <p className="text-gray-900">
                      {selectedCurriculum?.description}
                    </p>
                  </div>
                  {selectedCurriculum?.subjects?.length > 0 && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Sample Subjects
                      </label>
                      <div className="space-y-2">
                        {selectedCurriculum.subjects.map((subject, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div>
                              <span className="font-medium">
                                {subject.name}
                              </span>
                              <span className="text-sm text-gray-500 ml-2">
                                Semester {subject.semester}
                              </span>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-sm text-gray-600">
                                {subject.credits} Credits
                              </span>
                              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                                {subject.type}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Curriculum Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Code *
                      </label>
                      <input
                        type="text"
                        name="code"
                        required
                        value={formData.code}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Department *
                      </label>
                      <select
                        name="department"
                        required
                        value={formData.department}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Select Department</option>
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Degree *
                      </label>
                      <select
                        name="degree"
                        required
                        value={formData.degree}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Select Degree</option>
                        {degrees.map((degree) => (
                          <option key={degree} value={degree}>
                            {degree}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Duration *
                      </label>
                      <input
                        type="text"
                        name="duration"
                        required
                        placeholder="e.g., 4 Years"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Total Credits *
                      </label>
                      <input
                        type="number"
                        name="totalCredits"
                        required
                        value={formData.totalCredits}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Total Subjects
                      </label>
                      <input
                        type="number"
                        name="totalSubjects"
                        value={formData.totalSubjects}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Status *
                      </label>
                      <select
                        name="status"
                        required
                        value={formData.status}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        {statuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Version
                      </label>
                      <input
                        type="text"
                        name="version"
                        value={formData.version}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Effective Date
                      </label>
                      <input
                        type="date"
                        name="effectiveDate"
                        value={formData.effectiveDate}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Describe the curriculum objectives and structure..."
                    />
                  </div>
                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
                    >
                      {modalMode === "add"
                        ? "Add Curriculum"
                        : "Update Curriculum"}
                    </button>
                  </div>
                </form>
              )}

              <div className="p-6 border-t border-gray-200">
                <button
                  onClick={resetForm}
                  className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Confirm Delete
              </h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this curriculum? This action
                cannot be undone.
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurriculumManagement;
