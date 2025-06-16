"use client";
import React, { useState, useRef, useEffect } from "react";
import { Upload, X, Eye, Trash2, Plus } from "lucide-react";
import Image from "next/image";

const GalleryAdmin = () => {
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false); // Declare uploading state

  const [newImage, setNewImage] = useState({
    title: "",
    category: "campus",
    file: null,
    preview: null,
  });
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");

  const fileInputRef = useRef(null);
  const categories = ["all", "campus", "events", "facilities"];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewImage((prev) => ({
          ...prev,
          file: file,
          preview: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file");
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/gallery", { cache: "no-store" }); // disable caching
        const data = await res.json();
        setImages(data); // direct rows array
      } catch (error) {
        console.error("Failed to load images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const accessToken = params.get("access_token");
      setToken(accessToken || "");
    }
  }, []);

  const handleUpload = async () => {
    if (newImage.file && newImage.title.trim()) {
      const file = newImage.file;

      const newImg = {
        title: newImage.title,
        category: newImage.category,
        url: newImage.preview,
        uploadDate: new Date().toISOString().split("T")[0],
      };

      if (!file || !token) {
        setMessage("❌ Missing file or access token.");
        return;
      }

      setUploading(true);
      setMessage("");

      const folderId = process.env.NEXT_PUBLIC_GOOGLE_FOLDER_ID2;

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

        newImg.url = fileUrl;

        // Save metadata to your backend
        const res = await fetch("/api/uploadgallery", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newImg),
        });

        const data = await res.json();

        if (res.ok) {
          setImages((prev) => [...prev, newImg]);
          setMessage("✅ Image uploaded successfully!");
          setNewImage({
            title: "",
            category: "campus",
            file: null,
            preview: null,
          });
          setShowUploadModal(false);
        } else {
          throw new Error(data.message || "Server error");
        }
      } catch (err) {
        console.error(err);
        setMessage(`❌ Upload failed: ${err.message}`);
      } finally {
        setUploading(false);
      }
    } else {
      setMessage("❌ Please select an image and enter a title.");
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Delete this image?");
    if (!confirm) return;

    const res = await fetch("/api/gallery/delete", {
      method: "POST",
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      setImages((prev) => prev.filter((img) => img.id !== id));
    } else {
      const data = await res.json();
      alert("Delete failed: " + data.error);
    }
  };

  const resetUploadForm = () => {
    setNewImage({ title: "", category: "campus", file: null, preview: null });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const getCategoryCount = (category) =>
    category === "all"
      ? images.length
      : images.filter((img) => img.category === category).length;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Gallery Admin</h2>
        <button
          onClick={() => setShowUploadModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus size={18} />
          Upload Image
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)} (
            {getCategoryCount(cat)})
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            className="relative group border rounded overflow-hidden shadow"
          >
            <div className="relative w-full h-40">
              <Image
                src={img.url}
                alt={img.title}
                fill
                className="object-cover rounded-t-md"
              />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-end items-start p-2 gap-2 opacity-0 group-hover:opacity-100 transition">
              <button
                onClick={() => setSelectedImage(img)}
                className="text-white"
              >
                <Eye size={20} />
              </button>
              <button
                onClick={() => handleDelete(img.id)}
                className="text-red-400"
              >
                <Trash2 size={20} />
              </button>
            </div>
            <div className="px-2 py-1 bg-white">
              <p className="text-sm font-medium truncate">{img.title}</p>
              <p className="text-xs text-gray-500">{img.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => {
                setShowUploadModal(false);
                resetUploadForm();
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              <X size={20} />
            </button>
            <h3 className="text-lg font-semibold mb-4">Upload Image</h3>
            <input
              type="text"
              placeholder="Image title"
              value={newImage.title}
              onChange={(e) =>
                setNewImage((prev) => ({ ...prev, title: e.target.value }))
              }
              className="w-full mb-3 px-3 py-2 border rounded"
            />
            <select
              value={newImage.category}
              onChange={(e) =>
                setNewImage((prev) => ({ ...prev, category: e.target.value }))
              }
              className="w-full mb-3 px-3 py-2 border rounded"
            >
              <option value="campus">Campus</option>
              <option value="events">Events</option>
              <option value="facilities">Facilities</option>
            </select>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              ref={fileInputRef}
              className="mb-3"
            />
            {newImage.preview && (
              <img
                src={newImage.preview}
                alt="Preview"
                className="mb-3 w-full h-40 object-cover rounded"
              />
            )}
            <button
              onClick={handleUpload}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
              disabled={!newImage.title || !newImage.category || uploading}
            >
              <Upload size={18} className="inline mr-2" />
              {uploading ? "Uploading..." : "Upload"}
            </button>
            {message && <p className="text-red-500 mt-2">{message}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryAdmin;
