"use client";
import { useState } from "react";

const photos = [
  { src: "/assets/hero/hero (2).png", alt: "Event 1" },
  { src: "/assets/hero/hero (3).png", alt: "Event 2" },
  { src: "/assets/hero/hero (4).png", alt: "Event 3" },
  { src: "/assets/hero/hero (5).png", alt: "Event 4" },
  { src: "/assets/hero/hero (6).png", alt: "Event 5" },
  { src: "/assets/hero/hero (7).png", alt: "Event 6" },
  // Add more photos here...
];

export default function PhotoGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (imgSrc) => {
    setCurrentImage(imgSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage("");
  };

  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-4xl text-center font-bold mb-8 text-blue-600">
        Photo Gallery
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full ml-24 mr-24">
        {photos.map((photo, index) => (
          <div key={index} className="relative group">
            <img
              src={photo.src}
              alt={photo.alt}
              onClick={() => openModal(photo.src)}
              className="w-full h-64 object-cover rounded-lg shadow-lg transform transition-transform duration-300 cursor-pointer hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">View</span>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={currentImage}
              alt="Large view"
              className="max-w-full max-h-screen object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl bg-black rounded-full p-1 hover:bg-gray-700 focus:outline-none"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
