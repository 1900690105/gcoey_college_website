import React, { useState, useEffect } from "react";
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  Eye,
  X,
  Check,
  AlertCircle,
  Loader,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import AddAlumni from "./components/AddAlumni";
import Image from "next/image";

const AlumniManagement = () => {
  const [alumni, setAlumni] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [alumniToDelete, setAlumniToDelete] = useState(null);
  const [message, setMessage] = useState("");
  const params = useSearchParams();
  const [token, setToken] = useState(""); // You need to set this with your Google Drive token
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); // Added for file handling

  const [formData, setFormData] = useState({
    aid: "",
    aname: "",
    linkedin_url: "",
    adept: "",
    apost: "",
    company: "",
    package: "",
    aphone: "",
    aaddress: "",
    message: "",
    image: "",
    status: "Active",
  });

  // Initialize token (you need to implement proper OAuth flow)
  useEffect(() => {
    const tokan = params.get("access_token");
    if (tokan) {
      setToken(tokan);
    }
  }, []);

  const fetchAlumni = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (searchTerm) params.append("search", searchTerm);
      if (statusFilter !== "All") params.append("status", statusFilter);

      const response = await fetch(`/api/alumni?${params}`);
      if (!response.ok) throw new Error("Failed to fetch alumni");

      const data = await response.json();
      setAlumni(data);
      setError("");
    } catch (err) {
      setError("Failed to load alumni data");
      console.error("Error fetching alumni:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlumni();
  }, [searchTerm, statusFilter]);

  const resetForm = () => {
    setFormData({
      aid: "",
      aname: "",
      linkedin_url: "",
      adept: "",
      apost: "",
      company: "",
      package: "",
      aphone: "",
      aaddress: "",
      message: "",
      image: "",
      status: "Active",
    });
    setSelectedFile(null); // Reset selected file
    setMessage("");
    setError("");
  };

  const handleAdd = () => {
    resetForm();
    setModalMode("add");
    setShowModal(true);
  };

  const handleEdit = (alumnus) => {
    setFormData(alumnus);
    setSelectedAlumni(alumnus);
    setModalMode("edit");
    setShowModal(true);
  };

  const handleView = (alumnus) => {
    setSelectedAlumni(alumnus);
    setModalMode("view");
    setShowModal(true);
  };

  const handleDelete = (alumnus) => {
    setAlumniToDelete(alumnus);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    try {
      setSubmitting(true);
      const response = await fetch(`/api/alumni/${alumniToDelete.aid}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete alumni");

      await fetchAlumni();
      setShowDeleteConfirm(false);
      setAlumniToDelete(null);
      setError("");
    } catch (err) {
      setError("Failed to delete alumni");
      console.error("Error deleting alumni:", err);
    } finally {
      setSubmitting(false);
    }
  };

  // Fixed file handling
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      setMessage(`Selected file: ${file.name}`);
    }
  };

  const uploadToGoogleDrive = async (file) => {
    if (!token) {
      throw new Error("Google Drive access token is required");
    }

    const folderId = process.env.NEXT_PUBLIC_ALUMNI_ID;
    if (!folderId) {
      throw new Error("Google Drive folder ID is not configured");
    }

    const metadata = {
      name: file.name,
      mimeType: file.type,
      parents: [folderId],
    };

    const form = new FormData();
    form.append(
      "metadata",
      new Blob([JSON.stringify(metadata)], { type: "application/json" })
    );
    form.append("file", file);

    const driveRes = await fetch(
      `https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&access_token=${token}`,
      {
        method: "POST",
        body: form,
      }
    );

    if (!driveRes.ok) {
      const driveError = await driveRes.json();
      throw new Error(driveError.error?.message || "Upload failed");
    }

    const driveData = await driveRes.json();
    return `https://drive.google.com/uc?id=${driveData.id}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);
      setUploading(true);
      setError("");
      setMessage("");

      let imageUrl = formData.image; // Keep existing image URL for edits

      // Upload new image if file is selected
      if (selectedFile) {
        setMessage("Uploading image...");
        imageUrl = await uploadToGoogleDrive(selectedFile);
        setMessage("Image uploaded successfully!");
      }

      // Prepare form data
      const updatedFormData = {
        ...formData,
        image: imageUrl,
      };

      // Validate required fields
      if (
        !updatedFormData.aname ||
        !updatedFormData.aid ||
        !updatedFormData.adept ||
        !updatedFormData.apost ||
        !updatedFormData.company
      ) {
        throw new Error("Please fill in all required fields");
      }

      setMessage("Saving alumni data...");

      const method = modalMode === "add" ? "POST" : "PUT";
      const url =
        modalMode === "add" ? "/api/alumni" : `/api/alumni/${formData.aid}`;

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to save alumni");
      }

      setMessage("Alumni saved successfully!");
      await fetchAlumni();

      // Close modal after a brief delay to show success message
      setTimeout(() => {
        setShowModal(false);
        resetForm();
      }, 1500);
    } catch (err) {
      setError(err.message);
      console.error("Error saving alumni:", err);
    } finally {
      setUploading(false);
      setSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader className="animate-spin" size={20} />
          <span>Loading alumni data...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Alumni Management
              </h1>
              <p className="text-gray-600">
                Manage alumni records and information
              </p>
            </div>
            <button
              onClick={handleAdd}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Plus size={20} />
              Add Alumni
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, company, or department..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="w-full md:w-48">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Alumni Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Alumni
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Package
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
                {alumni.map((alumnus) => (
                  <tr key={alumnus.aid} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Image
                          src={alumnus.image}
                          alt={alumnus.aname}
                          height={10}
                          width={800}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 capitalize">
                            {alumnus.aname}
                          </div>
                          <div className="text-sm text-gray-500">
                            PRN No: {alumnus.aid}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {alumnus.adept}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {alumnus.apost}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {alumnus.company}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {alumnus.package}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          alumnus.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {alumnus.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleView(alumnus)}
                          className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50"
                          title="View Details"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleEdit(alumnus)}
                          className="text-indigo-600 hover:text-indigo-800 p-1 rounded hover:bg-indigo-50"
                          title="Edit"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(alumnus)}
                          className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50"
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
            {alumni.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500">
                  No alumni found matching your criteria
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Add/Edit Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    {modalMode === "add"
                      ? "Add New Alumni"
                      : modalMode === "edit"
                      ? "Edit Alumni"
                      : "Alumni Details"}
                  </h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100"
                  >
                    <X size={20} />
                  </button>
                </div>

                {modalMode === "view" ? (
                  <AddAlumni selectedAlumni={selectedAlumni} />
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="aname"
                          value={formData.aname}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          PRN No *
                        </label>
                        <input
                          type="text"
                          name="aid"
                          value={formData.aid}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Department *
                        </label>
                        <input
                          type="text"
                          name="adept"
                          value={formData.adept}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Position *
                        </label>
                        <input
                          type="text"
                          name="apost"
                          value={formData.apost}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Company *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Package
                        </label>
                        <input
                          type="text"
                          name="package"
                          value={formData.package}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="aphone"
                          value={formData.aphone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          LinkedIn URL
                        </label>
                        <input
                          type="url"
                          name="linkedin_url"
                          value={formData.linkedin_url}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Status
                        </label>
                        <select
                          name="status"
                          value={formData.status}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Address
                        </label>
                        <textarea
                          name="aaddress"
                          value={formData.aaddress}
                          onChange={handleInputChange}
                          rows={2}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Image URL
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSubmit(e);
                        }}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                      >
                        {submitting
                          ? "Adding Data..."
                          : `${
                              modalMode === "add"
                                ? "Add Alumni"
                                : "Update Alumni"
                            }`}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Confirm Delete
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete{" "}
                <strong>{alumniToDelete?.aname}</strong>? This action cannot be
                undone.
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
        {message && toast.success("✅ Data was added successful!")}
      </div>
    </div>
  );
};

export default AlumniManagement;
