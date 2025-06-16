import React, { useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Upload,
  Eye,
  EyeOff,
  Save,
  X,
} from "lucide-react";

const BannerManagement = () => {
  const [banners, setBanners] = useState([
    {
      id: 1,
      title: "Welcome to Our College",
      description: "Excellence in Education Since 1950",
      imageUrl: "/api/placeholder/800/300",
      link: "/about",
      isActive: true,
      order: 1,
    },
    {
      id: 2,
      title: "Admissions Open 2025",
      description: "Apply now for undergraduate and graduate programs",
      imageUrl: "/api/placeholder/800/300",
      link: "/admissions",
      isActive: true,
      order: 2,
    },
    {
      id: 3,
      title: "Research Excellence",
      description: "Leading innovation in science and technology",
      imageUrl: "/api/placeholder/800/300",
      link: "/research",
      isActive: false,
      order: 3,
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingBanner, setEditingBanner] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    link: "",
    isActive: true,
  });

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      imageUrl: "",
      link: "",
      isActive: true,
    });
  };

  const handleAdd = () => {
    setIsAddModalOpen(true);
    resetForm();
  };

  const handleEdit = (banner) => {
    setEditingBanner(banner);
    setFormData({
      title: banner.title,
      description: banner.description,
      imageUrl: banner.imageUrl,
      link: banner.link,
      isActive: banner.isActive,
    });
  };

  const handleSave = () => {
    if (editingBanner) {
      // Update existing banner
      setBanners(
        banners.map((banner) =>
          banner.id === editingBanner.id ? { ...banner, ...formData } : banner
        )
      );
      setEditingBanner(null);
    } else {
      // Add new banner
      const newBanner = {
        id: Math.max(...banners.map((b) => b.id)) + 1,
        ...formData,
        order: banners.length + 1,
      };
      setBanners([...banners, newBanner]);
      setIsAddModalOpen(false);
    }
    resetForm();
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this banner?")) {
      setBanners(banners.filter((banner) => banner.id !== id));
    }
  };

  const handleToggleActive = (id) => {
    setBanners(
      banners.map((banner) =>
        banner.id === id ? { ...banner, isActive: !banner.isActive } : banner
      )
    );
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // In a real app, you'd upload to your server/cloud storage
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, imageUrl });
    }
  };

  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  };

  const BannerForm = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Banner Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter banner title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter banner description"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Banner Image
        </label>
        <div className="flex items-center space-x-4">
          <input
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 cursor-pointer"
          >
            <Upload size={16} className="mr-2" />
            Upload Image
          </label>
          {formData.imageUrl && (
            <img
              src={formData.imageUrl}
              alt="Preview"
              className="w-16 h-16 object-cover rounded-md"
            />
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Link URL (Optional)
        </label>
        <input
          type="url"
          value={formData.link}
          onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="https://example.com"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="isActive"
          checked={formData.isActive}
          onChange={(e) =>
            setFormData({ ...formData, isActive: e.target.checked })
          }
          className="mr-2"
        />
        <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
          Active (visible on homepage)
        </label>
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          onClick={() => {
            setIsAddModalOpen(false);
            setEditingBanner(null);
            resetForm();
          }}
          className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
        >
          <Save size={16} className="mr-2" />
          {editingBanner ? "Update" : "Add"} Banner
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Banner Management
              </h1>
              <p className="text-gray-600 mt-1">
                Manage homepage banners for your college website
              </p>
            </div>
            <button
              onClick={handleAdd}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
            >
              <Plus size={16} className="mr-2" />
              Add New Banner
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600">
              {banners.length}
            </div>
            <div className="text-gray-600">Total Banners</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-green-600">
              {banners.filter((b) => b.isActive).length}
            </div>
            <div className="text-gray-600">Active Banners</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-gray-600">
              {banners.filter((b) => !b.isActive).length}
            </div>
            <div className="text-gray-600">Inactive Banners</div>
          </div>
        </div>

        {/* Banner List */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">All Banners</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {banners.map((banner) => (
              <div key={banner.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={banner.imageUrl}
                      alt={banner.title}
                      className="w-20 h-12 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {banner.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {banner.description}
                      </p>
                      {banner.link && (
                        <p className="text-xs text-blue-600 mt-1">
                          Link: {banner.link}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        banner.isActive
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {banner.isActive ? "Active" : "Inactive"}
                    </span>

                    <button
                      onClick={() => handleToggleActive(banner.id)}
                      className={`p-2 rounded-md ${
                        banner.isActive
                          ? "text-gray-600 hover:bg-gray-100"
                          : "text-green-600 hover:bg-green-50"
                      }`}
                      title={banner.isActive ? "Hide banner" : "Show banner"}
                    >
                      {banner.isActive ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>

                    <button
                      onClick={() => handleEdit(banner)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-md"
                      title="Edit banner"
                    >
                      <Edit2 size={16} />
                    </button>

                    <button
                      onClick={() => handleDelete(banner.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-md"
                      title="Delete banner"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {banners.length === 0 && (
              <div className="p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <Plus size={48} className="mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-600 mb-2">
                  No banners yet
                </h3>
                <p className="text-gray-500 mb-4">
                  Get started by adding your first banner
                </p>
                <button
                  onClick={handleAdd}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Add Your First Banner
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Banner Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Banner"
      >
        <BannerForm />
      </Modal>

      {/* Edit Banner Modal */}
      <Modal
        isOpen={editingBanner !== null}
        onClose={() => {
          setEditingBanner(null);
          resetForm();
        }}
        title="Edit Banner"
      >
        <BannerForm />
      </Modal>
    </div>
  );
};

export default BannerManagement;
