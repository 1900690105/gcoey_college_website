"use client";
import { useState, useEffect } from "react";
import {
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Download,
} from "lucide-react";

const Gallery = () => {
  // Sample college images - replace with your actual images
  const images = [
    {
      src: "/assets/hero/hero (1).png",
      title: "Main Campus Building",
      category: "Campus",
    },
    {
      src: "/assets/hero/hero (2).png",
      title: "Central Library",
      category: "Facilities",
    },
    {
      src: "/assets/hero/hero (3).png",
      title: "Research Laboratory",
      category: "Academics",
    },
    {
      src: "/assets/hero/hero (9).png",
      title: "Main Auditorium",
      category: "Events",
    },
    {
      src: "/assets/hero/hero (4).png",
      title: "Sports Complex",
      category: "Sports",
    },
    {
      src: "/assets/hero/hero (5).png",
      title: "Graduation Ceremony",
      category: "Events",
    },
    {
      src: "/assets/hero/hero (6).png",
      title: "Student Cafeteria",
      category: "Facilities",
    },
    {
      src: "/assets/hero/hero (7).png",
      title: "Student Dormitory",
      category: "Accommodation",
    },
    {
      src: "/assets/hero/hero (8).png",
      title: "Campus Garden",
      category: "Campus",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ["All", ...new Set(images.map((img) => img.category))];

  const filteredImages = images.filter((image) => {
    const matchesCategory =
      selectedCategory === "All" || image.category === selectedCategory;
    const matchesSearch =
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handlePrevImage = () => {
    const prevIndex =
      currentImageIndex > 0 ? currentImageIndex - 1 : filteredImages.length - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNextImage = () => {
    const nextIndex =
      currentImageIndex < filteredImages.length - 1 ? currentImageIndex + 1 : 0;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;

      switch (e.key) {
        case "Escape":
          handleCloseModal();
          break;
        case "ArrowLeft":
          handlePrevImage();
          break;
        case "ArrowRight":
          handleNextImage();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, currentImageIndex]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <section
      id="gallery"
      className="py-12 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Campus Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our beautiful campus, facilities, and memorable moments
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search images..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm transition-all duration-200"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 sm:ml-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredImages.length} image
            {filteredImages.length !== 1 ? "s" : ""}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white"
              onClick={() => handleImageClick(image, index)}
            >
              {/* Image Container with Aspect Ratio */}
              <div className="aspect-w-4 aspect-h-3 relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=${encodeURIComponent(
                      image.title
                    )}`;
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1 truncate">
                      {image.title}
                    </h3>
                    <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                      {image.category}
                    </span>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No images found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={handleCloseModal}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Main Image */}
              <div
                className="relative max-w-6xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/800x600/3B82F6/FFFFFF?text=${encodeURIComponent(
                      selectedImage.title
                    )}`;
                  }}
                />

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                    {selectedImage.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {selectedImage.category}
                  </span>
                </div>
              </div>

              {/* Navigation Controls */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevImage();
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextImage();
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Counter */}
              {filteredImages.length > 1 && (
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-2 rounded-full text-sm backdrop-blur-sm">
                  {currentImageIndex + 1} / {filteredImages.length}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

// "use client";
// import { useState } from "react";
// import { FaSearch, FaTimesCircle } from "react-icons/fa";

// const Gallery = () => {
//   const images = [
//     "/images/gallery/image1.jpg",
//     "/images/gallery/image2.jpg",
//     "/images/gallery/image3.jpg",
//     // Add more images here
//   ];

//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

//   const handleCloseModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <section id="gallery" className="py-20 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 md:px-8">
//         <h2 className="text-4xl font-semibold text-center mb-12">Gallery</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {images.map((src, index) => (
//             <div
//               key={index}
//               className="overflow-hidden rounded-lg shadow-md cursor-pointer"
//               onClick={() => handleImageClick(src)}
//             >
//               <img
//                 src={src}
//                 alt={`Gallery image ${index + 1}`}
//                 className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//               />
//             </div>
//           ))}
//         </div>
//         {selectedImage && (
//           <div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
//             onClick={handleCloseModal}
//           >
//             <div className="relative max-w-5xl w-full mx-4 sm:mx-6 md:mx-8">
//               <img
//                 src={selectedImage}
//                 alt="Selected Gallery Image"
//                 className="w-full h-auto rounded-lg shadow-lg"
//               />
//               <button
//                 className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
//                 onClick={handleCloseModal}
//               >
//                 <FaTimesCircle className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Gallery;
