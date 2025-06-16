// components/PhotoGallery.js
import React from "react";
import { FaCameraRetro } from "react-icons/fa";

const photos = [
  "/assets/hero/hero (1).png",
  "/assets/hero/hero (2).png",
  "/assets/hero/hero (3).png",
  // Add more photos here
];

const PhotoGallery = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center flex items-center justify-center">
          <FaCameraRetro className="mr-2" />
          Photo Gallery
        </h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Gallery photo ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
