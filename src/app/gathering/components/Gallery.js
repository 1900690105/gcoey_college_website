// components/Gallery.js
import React, { useState } from "react";

const Gallery = () => {
  const images = [
    { src: "/image1.jpg", alt: "Event Highlight 1" },
    { src: "/image2.jpg", alt: "Event Highlight 2" },
    { src: "/image3.jpg", alt: "Event Highlight 3" },
    { src: "/image4.jpg", alt: "Event Highlight 4" },
    { src: "/image5.jpg", alt: "Event Highlight 5" },
    { src: "/image6.jpg", alt: "Event Highlight 6" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          Event Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <GalleryItem
              key={index}
              image={image}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>
      {selectedImage && (
        <LightboxModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};

const GalleryItem = ({ image, onClick }) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
      onClick={onClick}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-2xl opacity-0 hover:opacity-100 transition-opacity duration-300">
          🔍
        </span>
      </div>
    </div>
  );
};

const LightboxModal = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
      <div className="relative max-w-4xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
        >
          ✕
        </button>
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default Gallery;
