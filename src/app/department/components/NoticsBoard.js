import React, { useState } from "react";
import {
  Plus,
  Edit3,
  Trash2,
  Calendar,
  User,
  Pin,
  X,
  Save,
  Download,
  Eye,
  FileText,
  Image,
  Paperclip,
} from "lucide-react";

const NoticeBoard = ({ notices, setNotices, dept }) => {
  //   const [notices, setNotices] = useState([
  //     {
  //       id: 1,
  //       title: "Mid-Semester Examination Schedule",
  //       content:
  //         "Mid-semester examinations will be conducted from March 15-22, 2025. Students are advised to check the detailed timetable on the portal.",
  //       author: "Dr. Rajesh Kumar",
  //       date: "2025-03-01",
  //       priority: "high",
  //       isPinned: true,
  //       department: "Computer Science",
  //       attachments: [
  //         {
  //           id: 1,
  //           name: "exam_schedule.pdf",
  //           type: "pdf",
  //           size: "2.3 MB",
  //           url: "https://example.com/exam_schedule.pdf",
  //         },
  //         {
  //           id: 2,
  //           name: "seating_arrangement.jpg",
  //           type: "image",
  //           size: "1.2 MB",
  //           url: "https://picsum.photos/800/600?random=1",
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: "Industry Expert Lecture Series",
  //       content:
  //         "Join us for an exciting lecture series featuring industry experts from leading tech companies. Topics include AI, Machine Learning, and Software Development.",
  //       author: "Prof. Priya Sharma",
  //       date: "2025-02-28",
  //       priority: "medium",
  //       isPinned: false,
  //       department: "Computer Science",
  //       attachments: [
  //         {
  //           id: 3,
  //           name: "lecture_poster.png",
  //           type: "image",
  //           size: "850 KB",
  //           url: "https://picsum.photos/600/800?random=2",
  //         },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       title: "Project Submission Guidelines",
  //       content:
  //         "Final year project submissions are due by April 30th. Please ensure all documentation is complete and follows the prescribed format.",
  //       author: "Dr. Amit Patel",
  //       date: "2025-02-25",
  //       priority: "medium",
  //       isPinned: false,
  //       department: "Computer Science",
  //       attachments: [
  //         {
  //           id: 4,
  //           name: "submission_guidelines.docx",
  //           type: "document",
  //           size: "1.5 MB",
  //           url: "https://example.com/submission_guidelines.docx",
  //         },
  //         {
  //           id: 5,
  //           name: "project_template.pdf",
  //           type: "pdf",
  //           size: "3.1 MB",
  //           url: "https://example.com/project_template.pdf",
  //         },
  //       ],
  //     },
  //   ]);

  const [isHOD, setIsHOD] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingNotice, setEditingNotice] = useState(null);
  const [previewFile, setPreviewFile] = useState(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    isPinned: false,
    attachments: [],
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    if (editingNotice) {
      setNotices((prev) =>
        prev.map((notice) =>
          notice.id === editingNotice.id ? { ...notice, ...formData } : notice
        )
      );
      setEditingNotice(null);
    } else {
      const newNotice = {
        ...formData,
        author: "Dr. Sarah Johnson (HOD)",
        date: new Date().toISOString().split("T")[0],
        dept: dept,
      };
      setNotices((prev) => [newNotice, ...prev]);
    }
    setFormData({
      title: "",
      description: "",
      priority: "medium",
      isPinned: false,
      attachments: [],
    });
    setShowAddForm(false);
  };

  const getFileIcon = (type) => {
    switch (type) {
      case "image":
        return <Image size={16} className="text-green-600" />;
      case "pdf":
        return <FileText size={16} className="text-red-600" />;
      case "document":
        return <FileText size={16} className="text-blue-600" />;
      default:
        return <Paperclip size={16} className="text-gray-600" />;
    }
  };

  const handleDownload = (attachment) => {
    // In a real application, this would trigger an actual download
    const link = document.createElement("a");
    link.href = attachment.url;
    link.download = attachment.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = (attachment) => {
    setPreviewFile(attachment);
    setShowPreviewModal(true);
  };

  const canPreview = (type) => {
    return type === "image" || type === "pdf";
  };

  const handleEdit = (notice) => {
    setEditingNotice(notice);
    setFormData({
      title: notice.title,
      description: notice.description,
      priority: notice.priority,
      isPinned: notice.isPinned,
      attachments: notice.attachments || [],
    });
    setShowAddForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this notice?")) {
      setNotices((prev) => prev.filter((notice) => notice.id !== id));
    }
  };

  const togglePin = (id) => {
    setNotices((prev) =>
      prev.map((notice) =>
        notice.id === id ? { ...notice, isPinned: !notice.isPinned } : notice
      )
    );
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "border-l-red-500 bg-red-50";
      case "medium":
        return "border-l-yellow-500 bg-yellow-50";
      case "low":
        return "border-l-green-500 bg-green-50";
      default:
        return "border-l-gray-500 bg-gray-50";
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const sortedNotices = notices?.sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Department Notice Board
              </h1>
              <p className="text-gray-600">Computer Science & Engineering</p>
            </div>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <input
                  type="checkbox"
                  checked={isHOD}
                  onChange={(e) => setIsHOD(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                HOD Mode
              </label>
              {isHOD && (
                <button
                  onClick={() => setShowAddForm(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <Plus size={18} />
                  Add Notice
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Add/Edit Form Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {editingNotice ? "Edit Notice" : "Add New Notice"}
                </h2>
                <button
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingNotice(null);
                    setFormData({
                      title: "",
                      description: "",
                      priority: "medium",
                      isPinned: false,
                      attachments: [],
                    });
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter notice title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter notice description"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priority
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  <div className="flex items-center pt-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="isPinned"
                        checked={formData.isPinned}
                        onChange={handleInputChange}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        Pin this notice
                      </span>
                    </label>
                  </div>
                </div>
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddForm(false);
                      setEditingNotice(null);
                      setFormData({
                        title: "",
                        description: "",
                        priority: "medium",
                        isPinned: false,
                        attachments: [],
                      });
                    }}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <Save size={18} />
                    {editingNotice ? "Update Notice" : "Add Notice"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notices Grid */}
        <div className="grid gap-6">
          {sortedNotices?.map((notice) => (
            <div
              key={notice.nid}
              className={`bg-white rounded-xl shadow-lg border-l-4 ${getPriorityColor(
                notice.priority
              )} overflow-hidden transform hover:scale-[1.02] transition-all duration-200`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    {notice.isPinned && (
                      <Pin className="text-red-500 fill-current" size={20} />
                    )}
                    <h3 className="text-xl font-semibold text-gray-800 leading-tight">
                      {notice.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityBadge(
                        notice.priority
                      )}`}
                    >
                      {notice.priority.toUpperCase()}
                    </span>
                    {isHOD && (
                      <div className="flex gap-1">
                        <button
                          onClick={() => togglePin(notice.id)}
                          className={`p-2 rounded-lg transition-colors ${
                            notice.isPinned
                              ? "text-red-600 hover:bg-red-50"
                              : "text-gray-400 hover:bg-gray-50"
                          }`}
                          title={
                            notice.isPinned ? "Unpin notice" : "Pin notice"
                          }
                        >
                          <Pin size={16} />
                        </button>
                        <button
                          onClick={() => handleEdit(notice)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit notice"
                        >
                          <Edit3 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(notice.nid)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete notice"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-wrap">
                  {notice.description}
                </p>

                {/* Attachments Section */}
                {/* {notice.attachments && notice.attachments.length > 0 && (
                  <div className="mb-4 p-4 bg-gray-50 rounded-lg border">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <Paperclip size={16} />
                      Attachments ({notice.attachments.length})
                    </h4>
                    <div className="grid gap-2">
                      {notice.attachments.map((attachment) => (
                        <div
                          key={attachment.id}
                          className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:shadow-sm transition-shadow"
                        >
                          <div className="flex items-center gap-3">
                            {getFileIcon(attachment.type)}
                            <div>
                              <p className="text-sm font-medium text-gray-800">
                                {attachment.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {attachment.size}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {canPreview(attachment.type) && (
                              <button
                                onClick={() => handlePreview(attachment)}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                title="Preview file"
                              >
                                <Eye size={16} />
                              </button>
                            )}
                            <button
                              onClick={() => handleDownload(attachment)}
                              className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                              title="Download file"
                            >
                              <Download size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )} */}

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{notice.tid}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>
                        {new Date(notice.date).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {notice.dept}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {notices.length === 0 && (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="text-gray-400 mb-4">
              <Calendar size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No Notices Available
            </h3>
            <p className="text-gray-500">
              There are currently no notices to display.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticeBoard;
