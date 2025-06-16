import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Eye,
  MessageCircle,
  Clock,
  CheckCircle,
  AlertTriangle,
  User,
  GraduationCap,
  Calendar,
  ArrowUpDown,
} from "lucide-react";

const AdminComplaintSection = () => {
  const [complaints, setComplaints] = useState([]);
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Mock data - replace with actual API calls
  useEffect(() => {
    const mockComplaints = [
      {
        id: 1,
        type: "student",
        complainantName: "John Smith",
        complainantId: "STU001",
        subject: "Unfair Grading in Mathematics",
        description:
          "I believe my recent mathematics exam was graded unfairly. Despite showing all work correctly, I received a lower grade than expected. I would like this to be reviewed.",
        category: "Academic",
        status: "pending",
        priority: "medium",
        dateSubmitted: "2024-03-15T10:30:00Z",
        assignedTo: "Dr. Johnson",
        attachments: ["exam_paper.pdf"],
      },
      {
        id: 2,
        type: "teacher",
        complainantName: "Prof. Sarah Wilson",
        complainantId: "TCH045",
        subject: "Inadequate Classroom Facilities",
        description:
          "The projector in Room 301 has been malfunctioning for weeks. This is affecting my ability to conduct effective lectures. Multiple service requests have been ignored.",
        category: "Infrastructure",
        status: "in-progress",
        priority: "high",
        dateSubmitted: "2024-03-12T14:20:00Z",
        assignedTo: "Maintenance Team",
        attachments: [],
      },
      {
        id: 3,
        type: "student",
        complainantName: "Emily Davis",
        complainantId: "STU089",
        subject: "Harassment by Fellow Student",
        description:
          "I am being harassed by another student in my class. This includes inappropriate messages and uncomfortable behavior during group projects.",
        category: "Behavioral",
        status: "resolved",
        priority: "high",
        dateSubmitted: "2024-03-10T09:15:00Z",
        assignedTo: "Student Affairs",
        attachments: ["evidence_screenshots.zip"],
      },
      {
        id: 4,
        type: "teacher",
        complainantName: "Dr. Michael Brown",
        complainantId: "TCH023",
        subject: "Scheduling Conflicts",
        description:
          "My teaching schedule has multiple conflicts that were not resolved during the semester planning. This is causing confusion among students.",
        category: "Administrative",
        status: "pending",
        priority: "medium",
        dateSubmitted: "2024-03-08T16:45:00Z",
        assignedTo: "Academic Office",
        attachments: ["schedule_conflicts.xlsx"],
      },
    ];
    setComplaints(mockComplaints);
    setFilteredComplaints(mockComplaints);
  }, []);

  // Filter and search logic
  useEffect(() => {
    let filtered = complaints;

    // Filter by tab
    if (activeTab !== "all") {
      filtered = filtered.filter((complaint) => complaint.type === activeTab);
    }

    // Filter by status
    if (statusFilter !== "all") {
      filtered = filtered.filter(
        (complaint) => complaint.status === statusFilter
      );
    }

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (complaint) =>
          complaint.complainantName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          complaint.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
          complaint.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    filtered.sort((a, b) => {
      let aValue, bValue;
      switch (sortBy) {
        case "date":
          aValue = new Date(a.dateSubmitted);
          bValue = new Date(b.dateSubmitted);
          break;
        case "priority":
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          aValue = priorityOrder[a.priority];
          bValue = priorityOrder[b.priority];
          break;
        case "status":
          aValue = a.status;
          bValue = b.status;
          break;
        default:
          aValue = a[sortBy];
          bValue = b[sortBy];
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredComplaints(filtered);
  }, [complaints, activeTab, statusFilter, searchTerm, sortBy, sortOrder]);

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-600";
      case "medium":
        return "text-yellow-600";
      case "low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  };

  const handleStatusUpdate = (complaintId, newStatus) => {
    setComplaints((prev) =>
      prev.map((complaint) =>
        complaint.id === complaintId
          ? { ...complaint, status: newStatus }
          : complaint
      )
    );
    if (selectedComplaint && selectedComplaint.id === complaintId) {
      setSelectedComplaint((prev) => ({ ...prev, status: newStatus }));
    }
  };

  const ComplaintModal = ({ complaint, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">
            Complaint Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Complainant
              </label>
              <div className="flex items-center space-x-2">
                {complaint.type === "student" ? (
                  <GraduationCap className="h-4 w-4 text-blue-600" />
                ) : (
                  <User className="h-4 w-4 text-green-600" />
                )}
                <span className="font-medium">{complaint.complainantName}</span>
                <span className="text-gray-500">
                  ({complaint.complainantId})
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date Submitted
              </label>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span>{formatDate(complaint.dateSubmitted)}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                value={complaint.status}
                onChange={(e) =>
                  handleStatusUpdate(complaint.id, e.target.value)
                }
                className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                  complaint.status
                )}`}
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Priority
              </label>
              <span
                className={`font-medium ${getPriorityColor(
                  complaint.priority
                )}`}
              >
                {complaint.priority.charAt(0).toUpperCase() +
                  complaint.priority.slice(1)}
              </span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                {complaint.category}
              </span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Assigned To
              </label>
              <span>{complaint.assignedTo}</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <h3 className="text-lg font-medium text-gray-900">
              {complaint.subject}
            </h3>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                {complaint.description}
              </p>
            </div>
          </div>

          {complaint.attachments && complaint.attachments.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Attachments
              </label>
              <div className="space-y-2">
                {complaint.attachments.map((attachment, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
                  >
                    <span className="text-sm">{attachment}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Complaint Management
        </h1>
        <p className="text-gray-600">
          Manage and review complaints from students and teachers
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Total Complaints</p>
              <p className="text-2xl font-bold">{complaints.length}</p>
            </div>
            <MessageCircle className="h-8 w-8 text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 rounded-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100">Pending</p>
              <p className="text-2xl font-bold">
                {complaints.filter((c) => c.status === "pending").length}
              </p>
            </div>
            <Clock className="h-8 w-8 text-yellow-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100">In Progress</p>
              <p className="text-2xl font-bold">
                {complaints.filter((c) => c.status === "in-progress").length}
              </p>
            </div>
            <AlertTriangle className="h-8 w-8 text-orange-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Resolved</p>
              <p className="text-2xl font-bold">
                {complaints.filter((c) => c.status === "resolved").length}
              </p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-200" />
          </div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        {/* Tabs */}
        <div className="flex space-x-1 mb-6 bg-white p-1 rounded-lg">
          {[
            { key: "all", label: "All Complaints", count: complaints.length },
            {
              key: "student",
              label: "Students",
              count: complaints.filter((c) => c.type === "student").length,
            },
            {
              key: "teacher",
              label: "Teachers",
              count: complaints.filter((c) => c.type === "teacher").length,
            },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search complaints..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      </div>

      {/* Complaints Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Complainant
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort("subject")}
                    className="flex items-center space-x-1 hover:text-gray-700"
                  >
                    <span>Subject</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort("priority")}
                    className="flex items-center space-x-1 hover:text-gray-700"
                  >
                    <span>Priority</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort("status")}
                    className="flex items-center space-x-1 hover:text-gray-700"
                  >
                    <span>Status</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort("date")}
                    className="flex items-center space-x-1 hover:text-gray-700"
                  >
                    <span>Date</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredComplaints.map((complaint) => (
                <tr key={complaint.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      {complaint.type === "student" ? (
                        <GraduationCap className="h-5 w-5 text-blue-600" />
                      ) : (
                        <User className="h-5 w-5 text-green-600" />
                      )}
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {complaint.complainantName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {complaint.complainantId}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 font-medium">
                      {complaint.subject}
                    </div>
                    <div className="text-sm text-gray-500 truncate max-w-xs">
                      {complaint.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                      {complaint.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`text-sm font-medium ${getPriorityColor(
                        complaint.priority
                      )}`}
                    >
                      {complaint.priority.charAt(0).toUpperCase() +
                        complaint.priority.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        complaint.status
                      )}`}
                    >
                      {complaint.status.replace("-", " ")}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(complaint.dateSubmitted)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => {
                        setSelectedComplaint(complaint);
                        setShowModal(true);
                      }}
                      className="text-blue-600 hover:text-blue-900 flex items-center space-x-1"
                    >
                      <Eye className="h-4 w-4" />
                      <span>View</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredComplaints.length === 0 && (
          <div className="text-center py-12">
            <MessageCircle className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No complaints found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm || statusFilter !== "all"
                ? "Try adjusting your search or filters."
                : "No complaints have been submitted yet."}
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && selectedComplaint && (
        <ComplaintModal
          complaint={selectedComplaint}
          onClose={() => {
            setShowModal(false);
            setSelectedComplaint(null);
          }}
        />
      )}
    </div>
  );
};

export default AdminComplaintSection;
