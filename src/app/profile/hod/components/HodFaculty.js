import React, { useState, useEffect } from "react";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Mail,
  Phone,
  BookOpen,
  Users,
  Filter,
  Download,
  MoreVertical,
} from "lucide-react";

const TeacherManagement = () => {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@college.edu",
      phone: "+1 (555) 123-4567",
      department: "Computer Science",
      designation: "Professor",
      specialization: "Machine Learning, Data Science",
      experience: "15 years",
      qualification: "PhD in Computer Science",
      status: "Active",
      joinDate: "2019-08-15",
      subjects: ["Data Structures", "Machine Learning", "Algorithms"],
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      email: "michael.chen@college.edu",
      phone: "+1 (555) 234-5678",
      department: "Computer Science",
      designation: "Associate Professor",
      specialization: "Software Engineering, Web Development",
      experience: "12 years",
      qualification: "PhD in Software Engineering",
      status: "Active",
      joinDate: "2020-01-20",
      subjects: ["Software Engineering", "Web Development", "Database Systems"],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      email: "emily.rodriguez@college.edu",
      phone: "+1 (555) 345-6789",
      department: "Computer Science",
      designation: "Assistant Professor",
      specialization: "Cybersecurity, Network Security",
      experience: "8 years",
      qualification: "PhD in Cybersecurity",
      status: "On Leave",
      joinDate: "2021-03-10",
      subjects: ["Network Security", "Cryptography", "Ethical Hacking"],
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Prof. David Wilson",
      email: "david.wilson@college.edu",
      phone: "+1 (555) 456-7890",
      department: "Computer Science",
      designation: "Professor",
      specialization: "Artificial Intelligence, Robotics",
      experience: "20 years",
      qualification: "PhD in Artificial Intelligence",
      status: "Active",
      joinDate: "2018-07-01",
      subjects: ["Artificial Intelligence", "Robotics", "Computer Vision"],
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewType, setViewType] = useState("grid");

  const [newTeacher, setNewTeacher] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    specialization: "",
    experience: "",
    qualification: "",
    subjects: "",
  });

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesSearch =
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "All" || teacher.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleAddTeacher = () => {
    if (newTeacher.name && newTeacher.email) {
      const teacher = {
        id: teachers.length + 1,
        ...newTeacher,
        department: "Computer Science",
        status: "Active",
        joinDate: new Date().toISOString().split("T")[0],
        subjects: newTeacher.subjects.split(",").map((s) => s.trim()),
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      };
      setTeachers([...teachers, teacher]);
      setNewTeacher({
        name: "",
        email: "",
        phone: "",
        designation: "",
        specialization: "",
        experience: "",
        qualification: "",
        subjects: "",
      });
      setShowAddModal(false);
    }
  };

  const handleEditTeacher = () => {
    setTeachers(
      teachers.map((teacher) =>
        teacher.id === selectedTeacher.id
          ? {
              ...selectedTeacher,
              subjects: selectedTeacher.subjects.join
                ? selectedTeacher.subjects
                : selectedTeacher.subjects.split(",").map((s) => s.trim()),
            }
          : teacher
      )
    );
    setShowEditModal(false);
    setSelectedTeacher(null);
  };

  const handleDeleteTeacher = (id) => {
    if (window.confirm("Are you sure you want to delete this teacher?")) {
      setTeachers(teachers.filter((teacher) => teacher.id !== id));
    }
  };

  const statusColors = {
    Active: "bg-green-100 text-green-800",
    "On Leave": "bg-yellow-100 text-yellow-800",
    Inactive: "bg-red-100 text-red-800",
  };

  const TeacherCard = ({ teacher }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {teacher.name}
              </h3>
              <p className="text-sm text-gray-600">{teacher.designation}</p>
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  statusColors[teacher.status]
                }`}
              >
                {teacher.status}
              </span>
            </div>
          </div>
          <div className="relative">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <MoreVertical className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="w-4 h-4 mr-2" />
            {teacher.email}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="w-4 h-4 mr-2" />
            {teacher.phone}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <BookOpen className="w-4 h-4 mr-2" />
            {teacher.specialization}
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {teacher.subjects.slice(0, 2).map((subject, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
            >
              {subject}
            </span>
          ))}
          {teacher.subjects.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{teacher.subjects.length - 2} more
            </span>
          )}
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => {
              setSelectedTeacher(teacher);
              setShowViewModal(true);
            }}
            className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center"
          >
            <Eye className="w-4 h-4 mr-1" />
            View
          </button>
          <button
            onClick={() => {
              setSelectedTeacher(teacher);
              setShowEditModal(true);
            }}
            className="flex-1 bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium flex items-center justify-center"
          >
            <Edit className="w-4 h-4 mr-1" />
            Edit
          </button>
          <button
            onClick={() => handleDeleteTeacher(teacher.id)}
            className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const Modal = ({ show, onClose, title, children }) => {
    if (!show) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
          </div>
          <div className="p-6">{children}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-4 lg:mb-0">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Teacher Management
              </h1>
              <p className="text-gray-600">
                Manage your department's teaching staff
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Teachers</p>
                <p className="text-2xl font-bold text-blue-600">
                  {teachers.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 flex-1">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search teachers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active</option>
                  <option value="On Leave">On Leave</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Teacher
              </button>
            </div>
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTeachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>

        {filteredTeachers.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No teachers found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filters
            </p>
          </div>
        )}

        {/* Add Teacher Modal */}
        <Modal
          show={showAddModal}
          onClose={() => setShowAddModal(false)}
          title="Add New Teacher"
        >
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={newTeacher.name}
                  onChange={(e) =>
                    setNewTeacher({ ...newTeacher, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={newTeacher.email}
                  onChange={(e) =>
                    setNewTeacher({ ...newTeacher, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  value={newTeacher.phone}
                  onChange={(e) =>
                    setNewTeacher({ ...newTeacher, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Designation
                </label>
                <select
                  value={newTeacher.designation}
                  onChange={(e) =>
                    setNewTeacher({
                      ...newTeacher,
                      designation: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select designation</option>
                  <option value="Professor">Professor</option>
                  <option value="Associate Professor">
                    Associate Professor
                  </option>
                  <option value="Assistant Professor">
                    Assistant Professor
                  </option>
                  <option value="Lecturer">Lecturer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Experience
                </label>
                <input
                  type="text"
                  value={newTeacher.experience}
                  onChange={(e) =>
                    setNewTeacher({ ...newTeacher, experience: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 5 years"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Qualification
                </label>
                <input
                  type="text"
                  value={newTeacher.qualification}
                  onChange={(e) =>
                    setNewTeacher({
                      ...newTeacher,
                      qualification: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., PhD in Computer Science"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Specialization
              </label>
              <input
                type="text"
                value={newTeacher.specialization}
                onChange={(e) =>
                  setNewTeacher({
                    ...newTeacher,
                    specialization: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Machine Learning, Data Science"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subjects (comma-separated)
              </label>
              <input
                type="text"
                value={newTeacher.subjects}
                onChange={(e) =>
                  setNewTeacher({ ...newTeacher, subjects: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Data Structures, Algorithms, Machine Learning"
              />
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTeacher}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Teacher
              </button>
            </div>
          </div>
        </Modal>

        {/* Edit Teacher Modal */}
        <Modal
          show={showEditModal}
          onClose={() => setShowEditModal(false)}
          title="Edit Teacher"
        >
          {selectedTeacher && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={selectedTeacher.name}
                    onChange={(e) =>
                      setSelectedTeacher({
                        ...selectedTeacher,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={selectedTeacher.email}
                    onChange={(e) =>
                      setSelectedTeacher({
                        ...selectedTeacher,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={selectedTeacher.phone}
                    onChange={(e) =>
                      setSelectedTeacher({
                        ...selectedTeacher,
                        phone: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    value={selectedTeacher.status}
                    onChange={(e) =>
                      setSelectedTeacher({
                        ...selectedTeacher,
                        status: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Active">Active</option>
                    <option value="On Leave">On Leave</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleEditTeacher}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </Modal>

        {/* View Teacher Modal */}
        <Modal
          show={showViewModal}
          onClose={() => setShowViewModal(false)}
          title="Teacher Details"
        >
          {selectedTeacher && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <img
                  src={selectedTeacher.image}
                  alt={selectedTeacher.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedTeacher.name}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {selectedTeacher.designation}
                  </p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      statusColors[selectedTeacher.status]
                    }`}
                  >
                    {selectedTeacher.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Contact Information
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-4 h-4 mr-2" />
                      {selectedTeacher.email}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 mr-2" />
                      {selectedTeacher.phone}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Professional Details
                  </h4>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Experience:</span>{" "}
                      {selectedTeacher.experience}
                    </p>
                    <p>
                      <span className="font-medium">Qualification:</span>{" "}
                      {selectedTeacher.qualification}
                    </p>
                    <p>
                      <span className="font-medium">Join Date:</span>{" "}
                      {new Date(selectedTeacher.joinDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Specialization
                </h4>
                <p className="text-gray-600">
                  {selectedTeacher.specialization}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Subjects Teaching
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTeacher.subjects.map((subject, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default TeacherManagement;
