import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  ImageDownIcon,
} from "lucide-react";
import Image from "next/image";

// Mock data for demonstration
const mockPhotos = [
  {
    id: 1,
    title: "College Campus",
    category: "events",
    url: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
    upload_date: "2024-03-15",
  },
  {
    id: 2,
    title: "Graduation Day",
    category: "graduation",
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
    upload_date: "2024-05-20",
  },
  {
    id: 3,
    title: "Sports Day",
    category: "sports",
    url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
    upload_date: "2024-02-10",
  },
  {
    id: 4,
    title: "Cultural Fest",
    category: "events",
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    upload_date: "2024-04-05",
  },
  {
    id: 5,
    title: "Library Study Session",
    category: "academic",
    url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    upload_date: "2024-01-22",
  },
  {
    id: 6,
    title: "Annual Day Performance",
    category: "events",
    url: "https://images.unsplash.com/photo-1574391884720-bfbf5bfb6833?w=400&h=300&fit=crop",
    upload_date: "2024-03-28",
  },
  {
    id: 7,
    title: "Football Championship",
    category: "sports",
    url: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop",
    upload_date: "2024-02-25",
  },
  {
    id: 8,
    title: "Degree Ceremony",
    category: "graduation",
    url: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&h=300&fit=crop",
    upload_date: "2024-05-18",
  },
];

const PhotosPage = () => {
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch gallery data
  useEffect(() => {
    async function fetchGallery() {
      try {
        // Try to fetch from API first
        const res = await fetch("/api/gallery");
        if (res.ok) {
          const data = await res.json();
          setPhotos(data);
          setFilteredPhotos(data);
          const uniqueCategories = [
            ...new Set(data.map((photo) => photo.category)),
          ];
          setCategories(uniqueCategories);
        } else {
          throw new Error("API not available");
        }
      } catch (error) {
        // Fallback to mock data
        console.log("Using mock data for demonstration");
        setPhotos(mockPhotos);
        setFilteredPhotos(mockPhotos);
        const uniqueCategories = [
          ...new Set(mockPhotos.map((photo) => photo.category)),
        ];
        setCategories(uniqueCategories);
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();
  }, []);

  // Filter photos based on category and search term
  useEffect(() => {
    let filtered = photos;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (photo) => photo.category === selectedCategory
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (photo) =>
          photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          photo.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPhotos(filtered);
  }, [photos, selectedCategory, searchTerm]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const capitalizeCategory = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    // Restore body scroll
    document.body.style.overflow = "unset";
  };

  const navigatePhoto = (direction) => {
    if (!selectedPhoto) return;

    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.id === selectedPhoto.id
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredPhotos.length;
    } else {
      newIndex =
        currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1;
    }

    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedPhoto) return;

      switch (event.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          navigatePhoto("prev");
          break;
        case "ArrowRight":
          navigatePhoto("next");
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhoto, filteredPhotos]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading gallery...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Photo Gallery
            </h1>
            <p className="text-lg text-gray-600">
              Capturing moments and memories from our college life
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search photos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="text-gray-500 h-5 w-5" />
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {capitalizeCategory(category)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPhotos.length} of {photos.length} photos
            {selectedCategory !== "all" &&
              ` in ${capitalizeCategory(selectedCategory)}`}
          </p>
        </div>

        {/* Photo Grid */}
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-12">
            <ImageDownIcon className="mx-auto h-24 w-24 text-gray-300" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              No photos found
            </h3>
            <p className="mt-2 text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => openModal(photo)}
              >
                <div className="relative">
                  <Image
                    src={photo.url}
                    alt={photo.title}
                    height={240}
                    width={240}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {photo.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {capitalizeCategory(photo.category)}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(photo.upload_date)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            {filteredPhotos.length > 1 && (
              <>
                <button
                  onClick={() => navigatePhoto("prev")}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={() => navigatePhoto("next")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}

            {/* Image */}
            <Image
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              height={500}
              width={500}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-white text-xl font-semibold mb-2">
                {selectedPhoto.title}
              </h3>
              <div className="flex items-center justify-between text-gray-300 text-sm">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                  {capitalizeCategory(selectedPhoto.category)}
                </span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(selectedPhoto.upload_date)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotosPage;
