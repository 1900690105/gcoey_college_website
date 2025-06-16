import React, { useState, useEffect } from "react";
import {
  Plus,
  Edit,
  Trash2,
  X,
  Upload,
  Calendar,
  FileText,
  ToggleLeft,
  ToggleRight,
  Loader,
} from "lucide-react";

const FlashNewsManager = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    file: null,
    fileName: "",
    expireDate: "",
    status: "active",
  });

  // Fetch news items from API
  const fetchNewsItems = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/flashnews");
      const data = await response.json();

      if (data.success) {
        setNewsItems(data.data);
      } else {
        console.error("Failed to fetch news items:", data.error);
        alert("Failed to fetch news items");
      }
    } catch (error) {
      console.error("Error fetching news items:", error);
      alert("Error fetching news items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsItems();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        file: file,
        fileName: file.name,
      }));
    }
  };

  const openModal = (item = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({
        title: item.title,
        file: null,
        fileName: item.file_name,
        expireDate: item.expire_date,
        status: item.status,
      });
    } else {
      setEditingItem(null);
      setFormData({
        title: "",
        file: null,
        fileName: "",
        expireDate: "",
        status: "active",
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
    setFormData({
      title: "",
      file: null,
      fileName: "",
      expireDate: "",
      status: "active",
    });
  };

  const handleSubmit = async (e) => {
    setSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("expireDate", formData.expireDate);
      formDataToSend.append("status", formData.status);

      if (formData.file) {
        formDataToSend.append("file", formData.file);
      }

      let response;
      if (editingItem) {
        // Update existing item
        formDataToSend.append("id", editingItem.id);
        response = await fetch("/api/flashnews", {
          method: "PUT",
          body: formDataToSend,
        });
      } else {
        // Add new item
        response = await fetch("/api/flashnews", {
          method: "POST",
          body: formDataToSend,
        });
      }

      const data = await response.json();

      if (data.success) {
        await fetchNewsItems(); // Refresh the list
        closeModal();
        alert(
          editingItem
            ? "News updated successfully!"
            : "News added successfully!"
        );
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (
      window.confirm("Are you sure you want to delete this flash news item?")
    ) {
      try {
        const response = await fetch(`/api/flashnews/${id}`, {
          method: "DELETE",
        });

        const data = await response.json();

        if (data.success) {
          await fetchNewsItems(); // Refresh the list
          alert("News deleted successfully!");
        } else {
          alert("Error: " + data.error);
        }
      } catch (error) {
        console.error("Error deleting news:", error);
        alert("Error deleting news");
      }
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    try {
      const formDataToSend = new FormData();
      const item = newsItems.find((item) => item.id === id);

      formDataToSend.append("id", id);
      formDataToSend.append("title", item.title);
      formDataToSend.append("expireDate", item.expire_date);
      formDataToSend.append(
        "status",
        currentStatus === "active" ? "inactive" : "active"
      );

      const response = await fetch("/api/flashnews", {
        method: "PUT",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        await fetchNewsItems(); // Refresh the list
      } else {
        alert("Error updating status: " + data.error);
      }
    } catch (error) {
      console.error("Error toggling status:", error);
      alert("Error updating status");
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const isExpired = (dateString) => {
    return new Date(dateString) < new Date();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <Loader className="animate-spin" size={32} />
          <span className="text-lg font-medium">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-slate-200">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">
                Flash News Management
              </h1>
              <p className="text-slate-600">
                Manage flash news announcements and notifications
              </p>
            </div>
            <button
              onClick={() => openModal()}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Plus size={20} />
              Add Flash News
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <FileText className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-slate-600 text-sm">Total News</p>
                <p className="text-2xl font-bold text-slate-800">
                  {newsItems.length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-full">
                <ToggleRight className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-slate-600 text-sm">Active News</p>
                <p className="text-2xl font-bold text-slate-800">
                  {newsItems.filter((item) => item.status === "active").length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-100 rounded-full">
                <Calendar className="text-red-600" size={24} />
              </div>
              <div>
                <p className="text-slate-600 text-sm">Expired News</p>
                <p className="text-2xl font-bold text-slate-800">
                  {
                    newsItems.filter((item) => isExpired(item.expireDate))
                      .length
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* News Items Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 mt-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Title</th>
                  <th className="px-6 py-4 text-left font-semibold">File</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Expire Date
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">Status</th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {newsItems.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`hover:bg-slate-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-slate-25"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <FileText className="text-slate-400" size={20} />
                        <span className="font-medium text-slate-800">
                          {item.title}
                        </span>
                      </div>
                    </td>
                    <td
                      className="px-6 py-4 text-slate-600 cursor-pointer hover:underline"
                      onClick={() => setPreviewUrl(item.file_path)}
                    >
                      {item.file_name}
                    </td>

                    {/* Simple Image Preview Modal */}
                    {previewUrl && (
                      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-4 rounded shadow-lg relative">
                          <button
                            onClick={() => setPreviewUrl(null)}
                            className="absolute top-2 right-2 text-red-500 font-bold"
                          >
                            ✕
                          </button>
                          <img
                            src={previewUrl}
                            alt="Preview"
                            className="max-w-[90vw] max-h-[80vh]"
                          />
                        </div>
                      </div>
                    )}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="text-slate-400" size={16} />
                        <span
                          className={`text-sm ${
                            isExpired(item.expireDate)
                              ? "text-red-600 font-medium"
                              : "text-slate-600"
                          }`}
                        >
                          {formatDate(item.expire_date)}
                          {isExpired(item.expire_date) && (
                            <span className="ml-2 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                              Expired
                            </span>
                          )}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleStatus(item.id)}
                        className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-all ${
                          item.status === "active"
                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                            : "bg-red-100 text-red-700 hover:bg-red-200"
                        }`}
                      >
                        {item.status === "active" ? (
                          <>
                            <ToggleRight size={16} />
                            Active
                          </>
                        ) : (
                          <>
                            <ToggleLeft size={16} />
                            Inactive
                          </>
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => openModal(item)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={18} />
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
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
              <div className="flex justify-between items-center p-6 border-b border-slate-200">
                <h2 className="text-xl font-bold text-slate-800">
                  {editingItem ? "Edit Flash News" : "Add Flash News"}
                </h2>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter flash news title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    File *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                      accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex items-center gap-3 w-full px-4 py-3 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors"
                    >
                      <Upload size={20} className="text-slate-500" />
                      <span className="text-slate-600">
                        {formData.fileName || "Choose file..."}
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Expire Date *
                  </label>
                  <input
                    type="date"
                    name="expireDate"
                    value={formData.expireDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 px-4 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={() => {
                      handleSubmit();
                    }}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-medium shadow-lg"
                  >
                    {editingItem ? "Update" : "Add"} News
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashNewsManager;
