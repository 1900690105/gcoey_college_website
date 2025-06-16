import React, { useState, useEffect } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Calendar,
  Eye,
  EyeOff,
  Clock,
  Tag,
  User,
  X,
  Save,
  FileText,
  Loader2,
  ImageDown,
} from "lucide-react";
import Image from "next/image";

const NewsManager = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "general",
    author: "",
    status: "draft",
    featured: false,
    imageUrl: "",
    tags: [],
  });

  // Fetch news articles from API
  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/news");
      const result = await response.json();

      if (result.success) {
        setNewsArticles(result.data);
      } else {
        console.error("Error fetching news:", result.error);
        alert("Failed to fetch news articles");
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      alert("Failed to fetch news articles");
    } finally {
      setLoading(false);
    }
  };

  // Load news on component mount
  useEffect(() => {
    fetchNews();
  }, []);

  const categories = [
    { value: "all", label: "All Categories", count: newsArticles.length },
    {
      value: "events",
      label: "Events",
      count: newsArticles.filter((n) => n.category === "events").length,
    },
    {
      value: "academic",
      label: "Academic",
      count: newsArticles.filter((n) => n.category === "academic").length,
    },
    {
      value: "infrastructure",
      label: "Infrastructure",
      count: newsArticles.filter((n) => n.category === "infrastructure").length,
    },
    {
      value: "alumni",
      label: "Alumni",
      count: newsArticles.filter((n) => n.category === "alumni").length,
    },
    {
      value: "sports",
      label: "Sports",
      count: newsArticles.filter((n) => n.category === "sports").length,
    },
    {
      value: "general",
      label: "General",
      count: newsArticles.filter((n) => n.category === "general").length,
    },
  ];

  const statusColors = {
    published: "bg-green-100 text-green-800 border-green-200",
    draft: "bg-yellow-100 text-yellow-800 border-yellow-200",
    archived: "bg-gray-100 text-gray-800 border-gray-200",
  };

  const categoryColors = {
    events: "bg-blue-100 text-blue-800",
    academic: "bg-purple-100 text-purple-800",
    infrastructure: "bg-orange-100 text-orange-800",
    alumni: "bg-indigo-100 text-indigo-800",
    sports: "bg-red-100 text-red-800",
    general: "bg-gray-100 text-gray-800",
  };
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");

  const filteredNews =
    selectedCategory === "all"
      ? newsArticles
      : newsArticles.filter((news) => news.category === selectedCategory);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const accessToken = params.get("access_token");
      setToken(accessToken || "");
    }
  }, []);

  const handleSubmit = async () => {
    if (
      !formData.title.trim() ||
      !formData.excerpt.trim() ||
      !formData.content.trim()
    ) {
      alert("Please fill in all required fields");
      return;
    }

    if (!formData.imageUrl || !token) {
      setMessage("❌ Missing file or access token.");
      return;
    }

    setSubmitting(true);
    const folderId = process.env.NEXT_PUBLIC_GOOGLE_FOLDER_ID3_NEWS;
    const metadata = {
      name: formData.imageUrl.name,
      mimeType: formData.imageUrl.type,
      parents: [folderId],
    };

    const form = new FormData();
    form.append(
      "metadata",
      new Blob([JSON.stringify(metadata)], { type: "application/json" })
    );
    form.append("file", formData.imageUrl);

    try {
      // Upload to Google Drive
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
      const fileId = driveData.id;
      const fileUrl = `https://drive.google.com/uc?id=${fileId}`;

      formData.imageUrl = fileUrl;
    } catch (uploadError) {
      console.error("Error uploading file:", uploadError);
      setMessage("❌ Error uploading file: " + uploadError.message);
      setSubmitting(false);
      return;
    }

    try {
      const method = editingNews ? "PUT" : "POST";
      const payload = editingNews
        ? { ...formData, id: editingNews.id }
        : formData;

      const response = await fetch("/api/news", {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        await fetchNews(); // Refresh the news list
        resetForm();
        alert(
          editingNews
            ? "News updated successfully!"
            : "News created successfully!"
        );
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.error("Error saving news:", error);
      alert("Failed to save news article");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (news) => {
    setEditingNews(news);
    setFormData({
      title: news.title,
      excerpt: news.excerpt,
      content: news.content,
      category: news.category,
      author: news.author,
      status: news.status,
      featured: news.featured,
      imageUrl: news.image_url || "",
      tags: news.tags || [],
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this news article?")) {
      try {
        const response = await fetch(`/api/news?id=${id}`, {
          method: "DELETE",
        });

        const result = await response.json();

        if (result.success) {
          await fetchNews(); // Refresh the news list
          alert("News deleted successfully!");
        } else {
          alert("Error: " + result.error);
        }
      } catch (error) {
        console.error("Error deleting news:", error);
        alert("Failed to delete news article");
      }
    }
  };

  const toggleStatus = async (id) => {
    const news = newsArticles.find((n) => n.id === id);
    if (!news) return;

    const newStatus = news.status === "published" ? "draft" : "published";

    try {
      const response = await fetch("/api/news", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...news,
          id: news.id,
          status: newStatus,
          imageUrl: news.image_url,
        }),
      });

      const result = await response.json();

      if (result.success) {
        await fetchNews(); // Refresh the news list
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status");
    }
  };

  const toggleFeatured = async (id) => {
    const news = newsArticles.find((n) => n.id === id);
    if (!news) return;

    try {
      const response = await fetch("/api/news", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...news,
          id: news.id,
          featured: !news.featured,
          imageUrl: news.image_url,
        }),
      });

      const result = await response.json();

      if (result.success) {
        await fetchNews(); // Refresh the news list
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.error("Error updating featured status:", error);
      alert("Failed to update featured status");
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "general",
      author: "",
      status: "draft",
      featured: false,
      imageUrl: "",
      tags: [],
    });
    setEditingNews(null);
    setShowModal(false);
  };

  const handleTagInput = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      const newTag = e.target.value.trim().toLowerCase();
      if (!formData.tags.includes(newTag)) {
        setFormData((prev) => ({
          ...prev,
          tags: [...prev.tags, newTag],
        }));
      }
      e.target.value = "";
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                News Management
              </h1>
              <p className="text-gray-600 mt-1">
                Create and manage news articles for your college portal
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Plus size={20} />
              New Article
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Articles</p>
                <p className="text-2xl font-bold text-gray-900">
                  {newsArticles.length}
                </p>
              </div>
              <div className="bg-blue-100 p-2 rounded-lg">
                <FileText className="text-blue-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Published</p>
                <p className="text-2xl font-bold text-green-600">
                  {newsArticles.filter((n) => n.status === "published").length}
                </p>
              </div>
              <div className="bg-green-100 p-2 rounded-lg">
                <Eye className="text-green-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Featured</p>
                <p className="text-2xl font-bold text-purple-600">
                  {newsArticles.filter((n) => n.featured).length}
                </p>
              </div>
              <div className="bg-purple-100 p-2 rounded-lg">
                <Tag className="text-purple-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Views</p>
                <p className="text-2xl font-bold text-orange-600">
                  {newsArticles
                    .reduce((sum, n) => sum + n.views, 0)
                    .toLocaleString()}
                </p>
              </div>
              <div className="bg-orange-100 p-2 rounded-lg">
                <Eye className="text-orange-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-fit">
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors flex items-center justify-between ${
                    selectedCategory === category.value
                      ? "bg-blue-100 text-blue-700 border border-blue-200"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span>{category.label}</span>
                  <span className="text-sm font-medium">{category.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  {selectedCategory === "all"
                    ? "All News Articles"
                    : `${
                        categories.find((c) => c.value === selectedCategory)
                          ?.label
                      } Articles`}
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {filteredNews.map((news) => (
                  <div
                    key={news.id}
                    className="p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex gap-4">
                      {/* Image */}
                      <div className="w-32 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                        {news.imageUrl ? (
                          <Image
                            src={news.imageUrl}
                            alt={news.title}
                            width={32}
                            height={24}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <ImageDown className="text-gray-400" size={24} />
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-medium text-gray-900">
                              {news.title} {news.imageUrl}
                            </h3>
                            {news.featured && (
                              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                                Featured
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full border ${
                                statusColors[news.status]
                              }`}
                            >
                              {news.status.toUpperCase()}
                            </span>
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full ${
                                categoryColors[news.category]
                              }`}
                            >
                              {news.category.toUpperCase()}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-3 line-clamp-2">
                          {news.excerpt}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <User size={14} />
                            {news.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {news.publishDate}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye size={14} />
                            {news.views.toLocaleString()} views
                          </div>
                        </div>

                        {news.tags && news.tags.length > 0 && (
                          <div className="flex gap-1 mb-3">
                            {news.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => toggleFeatured(news.id)}
                          className={`p-2 rounded-md transition-colors ${
                            news.featured
                              ? "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                          }`}
                          title={
                            news.featured
                              ? "Remove from featured"
                              : "Add to featured"
                          }
                        >
                          <Tag size={16} />
                        </button>
                        <button
                          onClick={() => toggleStatus(news.id)}
                          className={`p-2 rounded-md transition-colors ${
                            news.status === "published"
                              ? "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                              : "bg-green-100 text-green-600 hover:bg-green-200"
                          }`}
                          title={
                            news.status === "published"
                              ? "Unpublish"
                              : "Publish"
                          }
                        >
                          {news.status === "published" ? (
                            <EyeOff size={16} />
                          ) : (
                            <Eye size={16} />
                          )}
                        </button>
                        <button
                          onClick={() => handleEdit(news)}
                          className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(news.id)}
                          className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {editingNews ? "Edit News Article" : "Create New Article"}
                  </h2>
                  <button
                    onClick={resetForm}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Title *
                      </label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            title: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter article title"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Excerpt *
                      </label>
                      <textarea
                        rows={3}
                        value={formData.excerpt}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            excerpt: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Brief summary of the article"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Content *
                      </label>
                      <textarea
                        rows={8}
                        value={formData.content}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            content: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Full article content"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Image
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            imageUrl: e.target.files[0], // store the file object
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            category: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="general">General</option>
                        <option value="events">Events</option>
                        <option value="academic">Academic</option>
                        <option value="infrastructure">Infrastructure</option>
                        <option value="alumni">Alumni</option>
                        <option value="sports">Sports</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Author
                      </label>
                      <input
                        type="text"
                        value={formData.author}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            author: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Author name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Status
                      </label>
                      <select
                        value={formData.status}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            status: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                        <option value="archived">Archived</option>
                      </select>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={formData.featured}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            featured: e.target.checked,
                          }))
                        }
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="featured"
                        className="ml-2 text-sm text-gray-700"
                      >
                        Featured Article
                      </label>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tags
                      </label>
                      <input
                        type="text"
                        onKeyDown={handleTagInput}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Press Enter to add tags"
                      />
                      {formData.tags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {formData.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded flex items-center gap-1"
                            >
                              #{tag}
                              <button
                                onClick={() => removeTag(tag)}
                                className="text-blue-600 hover:text-blue-800"
                              >
                                <X size={12} />
                              </button>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-gray-200">
                  <button
                    onClick={handleSubmit}
                    disabled={
                      submitting ||
                      loading ||
                      !formData.title ||
                      !formData.content ||
                      !formData.category ||
                      !formData.author ||
                      !formData.status ||
                      !formData.tags ||
                      !formData.imageUrl
                    }
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
                  >
                    <Save size={16} />
                    {submitting
                      ? "Saving..."
                      : `${editingNews ? "Update" : "Create"} Article`}
                  </button>
                  <button
                    onClick={resetForm}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition-colors"
                  >
                    Cancel
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

export default NewsManager;

// import React, { useState } from "react";
// import {
//   Plus,
//   Edit2,
//   Trash2,
//   Calendar,
//   Eye,
//   EyeOff,
//   Clock,
//   Tag,
//   User,
//   X,
//   Save,
//   Image,
//   FileText,
// } from "lucide-react";

// const NewsManager = () => {
//   const [newsArticles, setNewsArticles] = useState([
//     {
//       id: 1,
//       title: "College Hosts Annual Science Fair 2025",
//       excerpt:
//         "Students from all departments showcased innovative projects and research work at the annual science fair held in the main auditorium.",
//       content:
//         "The annual science fair witnessed participation from over 200 students across various departments. The event featured cutting-edge research projects, innovative solutions, and creative presentations. Winners will receive scholarships and internship opportunities with leading tech companies.",
//       category: "events",
//       author: "Dr. Sarah Johnson",
//       publishDate: "2025-06-02",
//       status: "published",
//       featured: true,
//       views: 1250,
//       imageUrl:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
//       tags: ["science", "students", "research", "innovation"],
//     },
//     {
//       id: 2,
//       title: "New Library Wing Opens Next Month",
//       excerpt:
//         "The state-of-the-art library extension will feature modern study spaces, digital resources, and collaborative work areas.",
//       content:
//         "Construction of the new library wing has been completed ahead of schedule. The facility includes 500 additional seats, advanced computer labs, quiet study pods, and a 24/7 study area. The digital collection has been expanded with access to over 10,000 new journals and e-books.",
//       category: "infrastructure",
//       author: "Admin Team",
//       publishDate: "2025-06-01",
//       status: "published",
//       featured: false,
//       views: 890,
//       imageUrl:
//         "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
//       tags: ["library", "infrastructure", "students", "facilities"],
//     },
//     {
//       id: 3,
//       title: "Alumni Networking Event Scheduled",
//       excerpt:
//         "Connect with successful graduates and explore career opportunities at our upcoming alumni networking event.",
//       content:
//         "The college will host its quarterly alumni networking event on June 15th. The event will feature panel discussions, career guidance sessions, and networking opportunities with alumni from various industries including technology, healthcare, finance, and entrepreneurship.",
//       category: "alumni",
//       author: "Alumni Relations Office",
//       publishDate: "2025-05-30",
//       status: "draft",
//       featured: false,
//       views: 0,
//       imageUrl:
//         "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
//       tags: ["alumni", "networking", "career", "professional"],
//     },
//   ]);

//   const [showModal, setShowModal] = useState(false);
//   const [editingNews, setEditingNews] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [formData, setFormData] = useState({
//     title: "",
//     excerpt: "",
//     content: "",
//     category: "general",
//     author: "",
//     status: "draft",
//     featured: false,
//     imageUrl: "",
//     tags: [],
//   });

//   const categories = [
//     { value: "all", label: "All Categories", count: newsArticles.length },
//     {
//       value: "events",
//       label: "Events",
//       count: newsArticles.filter((n) => n.category === "events").length,
//     },
//     {
//       value: "academic",
//       label: "Academic",
//       count: newsArticles.filter((n) => n.category === "academic").length,
//     },
//     {
//       value: "infrastructure",
//       label: "Infrastructure",
//       count: newsArticles.filter((n) => n.category === "infrastructure").length,
//     },
//     {
//       value: "alumni",
//       label: "Alumni",
//       count: newsArticles.filter((n) => n.category === "alumni").length,
//     },
//     {
//       value: "sports",
//       label: "Sports",
//       count: newsArticles.filter((n) => n.category === "sports").length,
//     },
//     {
//       value: "general",
//       label: "General",
//       count: newsArticles.filter((n) => n.category === "general").length,
//     },
//   ];

//   const statusColors = {
//     published: "bg-green-100 text-green-800 border-green-200",
//     draft: "bg-yellow-100 text-yellow-800 border-yellow-200",
//     archived: "bg-gray-100 text-gray-800 border-gray-200",
//   };

//   const categoryColors = {
//     events: "bg-blue-100 text-blue-800",
//     academic: "bg-purple-100 text-purple-800",
//     infrastructure: "bg-orange-100 text-orange-800",
//     alumni: "bg-indigo-100 text-indigo-800",
//     sports: "bg-red-100 text-red-800",
//     general: "bg-gray-100 text-gray-800",
//   };

//   const filteredNews =
//     selectedCategory === "all"
//       ? newsArticles
//       : newsArticles.filter((news) => news.category === selectedCategory);

//   const handleSubmit = () => {
//     if (
//       !formData.title.trim() ||
//       !formData.excerpt.trim() ||
//       !formData.content.trim()
//     ) {
//       alert("Please fill in all required fields");
//       return;
//     }

//     if (editingNews) {
//       setNewsArticles((prev) =>
//         prev.map((news) =>
//           news.id === editingNews.id ? { ...news, ...formData } : news
//         )
//       );
//     } else {
//       const newNews = {
//         id: Date.now(),
//         ...formData,
//         publishDate: new Date().toISOString().split("T")[0],
//         views: 0,
//       };
//       setNewsArticles((prev) => [newNews, ...prev]);
//     }

//     resetForm();
//   };

//   const handleEdit = (news) => {
//     setEditingNews(news);
//     setFormData({
//       title: news.title,
//       excerpt: news.excerpt,
//       content: news.content,
//       category: news.category,
//       author: news.author,
//       status: news.status,
//       featured: news.featured,
//       imageUrl: news.imageUrl || "",
//       tags: news.tags || [],
//     });
//     setShowModal(true);
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this news article?")) {
//       setNewsArticles((prev) => prev.filter((news) => news.id !== id));
//     }
//   };

//   const toggleStatus = (id) => {
//     setNewsArticles((prev) =>
//       prev.map((news) =>
//         news.id === id
//           ? {
//               ...news,
//               status: news.status === "published" ? "draft" : "published",
//               publishDate:
//                 news.status === "draft"
//                   ? new Date().toISOString().split("T")[0]
//                   : news.publishDate,
//             }
//           : news
//       )
//     );
//   };

//   const toggleFeatured = (id) => {
//     setNewsArticles((prev) =>
//       prev.map((news) =>
//         news.id === id ? { ...news, featured: !news.featured } : news
//       )
//     );
//   };

//   const resetForm = () => {
//     setFormData({
//       title: "",
//       excerpt: "",
//       content: "",
//       category: "general",
//       author: "",
//       status: "draft",
//       featured: false,
//       imageUrl: "",
//       tags: [],
//     });
//     setEditingNews(null);
//     setShowModal(false);
//   };

//   const handleTagInput = (e) => {
//     if (e.key === "Enter" && e.target.value.trim()) {
//       const newTag = e.target.value.trim().toLowerCase();
//       if (!formData.tags.includes(newTag)) {
//         setFormData((prev) => ({
//           ...prev,
//           tags: [...prev.tags, newTag],
//         }));
//       }
//       e.target.value = "";
//     }
//   };

//   const removeTag = (tagToRemove) => {
//     setFormData((prev) => ({
//       ...prev,
//       tags: prev.tags.filter((tag) => tag !== tagToRemove),
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-900">
//                 News Management
//               </h1>
//               <p className="text-gray-600 mt-1">
//                 Create and manage news articles for your college portal
//               </p>
//             </div>
//             <button
//               onClick={() => setShowModal(true)}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
//             >
//               <Plus size={20} />
//               New Article
//             </button>
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//           <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600">Total Articles</p>
//                 <p className="text-2xl font-bold text-gray-900">
//                   {newsArticles.length}
//                 </p>
//               </div>
//               <div className="bg-blue-100 p-2 rounded-lg">
//                 <FileText className="text-blue-600" size={24} />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600">Published</p>
//                 <p className="text-2xl font-bold text-green-600">
//                   {newsArticles.filter((n) => n.status === "published").length}
//                 </p>
//               </div>
//               <div className="bg-green-100 p-2 rounded-lg">
//                 <Eye className="text-green-600" size={24} />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600">Featured</p>
//                 <p className="text-2xl font-bold text-purple-600">
//                   {newsArticles.filter((n) => n.featured).length}
//                 </p>
//               </div>
//               <div className="bg-purple-100 p-2 rounded-lg">
//                 <Tag className="text-purple-600" size={24} />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600">Total Views</p>
//                 <p className="text-2xl font-bold text-orange-600">
//                   {newsArticles
//                     .reduce((sum, n) => sum + n.views, 0)
//                     .toLocaleString()}
//                 </p>
//               </div>
//               <div className="bg-orange-100 p-2 rounded-lg">
//                 <Eye className="text-orange-600" size={24} />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-6">
//           {/* Sidebar */}
//           <div className="w-64 bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-fit">
//             <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
//             <div className="space-y-2">
//               {categories.map((category) => (
//                 <button
//                   key={category.value}
//                   onClick={() => setSelectedCategory(category.value)}
//                   className={`w-full text-left px-3 py-2 rounded-md transition-colors flex items-center justify-between ${
//                     selectedCategory === category.value
//                       ? "bg-blue-100 text-blue-700 border border-blue-200"
//                       : "text-gray-600 hover:bg-gray-100"
//                   }`}
//                 >
//                   <span>{category.label}</span>
//                   <span className="text-sm font-medium">{category.count}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="flex-1">
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//               <div className="p-6 border-b border-gray-200">
//                 <h2 className="text-lg font-semibold text-gray-900">
//                   {selectedCategory === "all"
//                     ? "All News Articles"
//                     : `${
//                         categories.find((c) => c.value === selectedCategory)
//                           ?.label
//                       } Articles`}
//                 </h2>
//               </div>

//               <div className="divide-y divide-gray-200">
//                 {filteredNews.map((news) => (
//                   <div
//                     key={news.id}
//                     className="p-6 hover:bg-gray-50 transition-colors"
//                   >
//                     <div className="flex gap-4">
//                       {/* Image */}
//                       <div className="w-32 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
//                         {news.imageUrl ? (
//                           <img
//                             src={news.imageUrl}
//                             alt={news.title}
//                             className="w-full h-full object-cover"
//                           />
//                         ) : (
//                           <div className="w-full h-full flex items-center justify-center">
//                             <Image className="text-gray-400" size={24} />
//                           </div>
//                         )}
//                       </div>

//                       {/* Content */}
//                       <div className="flex-1">
//                         <div className="flex items-start justify-between mb-2">
//                           <div className="flex items-center gap-2">
//                             <h3 className="text-lg font-medium text-gray-900">
//                               {news.title}
//                             </h3>
//                             {news.featured && (
//                               <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
//                                 Featured
//                               </span>
//                             )}
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <span
//                               className={`px-2 py-1 text-xs font-medium rounded-full border ${
//                                 statusColors[news.status]
//                               }`}
//                             >
//                               {news.status.toUpperCase()}
//                             </span>
//                             <span
//                               className={`px-2 py-1 text-xs font-medium rounded-full ${
//                                 categoryColors[news.category]
//                               }`}
//                             >
//                               {news.category.toUpperCase()}
//                             </span>
//                           </div>
//                         </div>

//                         <p className="text-gray-600 mb-3 line-clamp-2">
//                           {news.excerpt}
//                         </p>

//                         <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
//                           <div className="flex items-center gap-1">
//                             <User size={14} />
//                             {news.author}
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <Calendar size={14} />
//                             {news.publishDate}
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <Eye size={14} />
//                             {news.views.toLocaleString()} views
//                           </div>
//                         </div>

//                         {news.tags && news.tags.length > 0 && (
//                           <div className="flex gap-1 mb-3">
//                             {news.tags.map((tag) => (
//                               <span
//                                 key={tag}
//                                 className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
//                               >
//                                 #{tag}
//                               </span>
//                             ))}
//                           </div>
//                         )}
//                       </div>

//                       {/* Actions */}
//                       <div className="flex flex-col gap-2">
//                         <button
//                           onClick={() => toggleFeatured(news.id)}
//                           className={`p-2 rounded-md transition-colors ${
//                             news.featured
//                               ? "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
//                               : "bg-gray-100 text-gray-500 hover:bg-gray-200"
//                           }`}
//                           title={
//                             news.featured
//                               ? "Remove from featured"
//                               : "Add to featured"
//                           }
//                         >
//                           <Tag size={16} />
//                         </button>
//                         <button
//                           onClick={() => toggleStatus(news.id)}
//                           className={`p-2 rounded-md transition-colors ${
//                             news.status === "published"
//                               ? "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
//                               : "bg-green-100 text-green-600 hover:bg-green-200"
//                           }`}
//                           title={
//                             news.status === "published"
//                               ? "Unpublish"
//                               : "Publish"
//                           }
//                         >
//                           {news.status === "published" ? (
//                             <EyeOff size={16} />
//                           ) : (
//                             <Eye size={16} />
//                           )}
//                         </button>
//                         <button
//                           onClick={() => handleEdit(news)}
//                           className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
//                         >
//                           <Edit2 size={16} />
//                         </button>
//                         <button
//                           onClick={() => handleDelete(news.id)}
//                           className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
//                         >
//                           <Trash2 size={16} />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Modal */}
//         {showModal && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//             <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//               <div className="p-6 border-b border-gray-200">
//                 <div className="flex items-center justify-between">
//                   <h2 className="text-xl font-semibold text-gray-900">
//                     {editingNews ? "Edit News Article" : "Create New Article"}
//                   </h2>
//                   <button
//                     onClick={resetForm}
//                     className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
//                   >
//                     <X size={20} />
//                   </button>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                   {/* Main Content */}
//                   <div className="lg:col-span-2 space-y-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Title *
//                       </label>
//                       <input
//                         type="text"
//                         value={formData.title}
//                         onChange={(e) =>
//                           setFormData((prev) => ({
//                             ...prev,
//                             title: e.target.value,
//                           }))
//                         }
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="Enter article title"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Excerpt *
//                       </label>
//                       <textarea
//                         rows={3}
//                         value={formData.excerpt}
//                         onChange={(e) =>
//                           setFormData((prev) => ({
//                             ...prev,
//                             excerpt: e.target.value,
//                           }))
//                         }
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="Brief summary of the article"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Content *
//                       </label>
//                       <textarea
//                         rows={8}
//                         value={formData.content}
//                         onChange={(e) =>
//                           setFormData((prev) => ({
//                             ...prev,
//                             content: e.target.value,
//                           }))
//                         }
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="Full article content"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Image URL
//                       </label>
//                       <input
//                         type="url"
//                         value={formData.imageUrl}
//                         onChange={(e) =>
//                           setFormData((prev) => ({
//                             ...prev,
//                             imageUrl: e.target.value,
//                           }))
//                         }
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="https://example.com/image.jpg"
//                       />
//                     </div>
//                   </div>

//                   {/* Sidebar */}
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Category
//                       </label>
//                       <select
//                         value={formData.category}
//                         onChange={(e) =>
//                           setFormData((prev) => ({
//                             ...prev,
//                             category: e.target.value,
//                           }))
//                         }
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       >
//                         <option value="general">General</option>
//                         <option value="events">Events</option>
//                         <option value="academic">Academic</option>
//                         <option value="infrastructure">Infrastructure</option>
//                         <option value="alumni">Alumni</option>
//                         <option value="sports">Sports</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Author
//                       </label>
//                       <input
//                         type="text"
//                         value={formData.author}
//                         onChange={(e) =>
//                           setFormData((prev) => ({
//                             ...prev,
//                             author: e.target.value,
//                           }))
//                         }
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="Author name"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Status
//                       </label>
//                       <select
//                         value={formData.status}
//                         onChange={(e) =>
//                           setFormData((prev) => ({
//                             ...prev,
//                             status: e.target.value,
//                           }))
//                         }
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       >
//                         <option value="draft">Draft</option>
//                         <option value="published">Published</option>
//                         <option value="archived">Archived</option>
//                       </select>
//                     </div>

//                     <div className="flex items-center">
//                       <input
//                         type="checkbox"
//                         id="featured"
//                         checked={formData.featured}
//                         onChange={(e) =>
//                           setFormData((prev) => ({
//                             ...prev,
//                             featured: e.target.checked,
//                           }))
//                         }
//                         className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                       />
//                       <label
//                         htmlFor="featured"
//                         className="ml-2 text-sm text-gray-700"
//                       >
//                         Featured Article
//                       </label>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Tags
//                       </label>
//                       <input
//                         type="text"
//                         onKeyDown={handleTagInput}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="Press Enter to add tags"
//                       />
//                       {formData.tags.length > 0 && (
//                         <div className="mt-2 flex flex-wrap gap-1">
//                           {formData.tags.map((tag) => (
//                             <span
//                               key={tag}
//                               className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded flex items-center gap-1"
//                             >
//                               #{tag}
//                               <button
//                                 onClick={() => removeTag(tag)}
//                                 className="text-blue-600 hover:text-blue-800"
//                               >
//                                 <X size={12} />
//                               </button>
//                             </span>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3 pt-6 mt-6 border-t border-gray-200">
//                   <button
//                     onClick={handleSubmit}
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
//                   >
//                     <Save size={16} />
//                     {editingNews ? "Update" : "Create"} Article
//                   </button>
//                   <button
//                     onClick={resetForm}
//                     className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition-colors"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NewsManager;
