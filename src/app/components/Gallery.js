"use client";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
const SHARED_IMAGE_CLASSES =
  "cursor-pointer  transition-transform transform hover:scale-105 w-44 h-44";

const ImageGallery = () => {
  const [modalSrc, setModalSrc] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState([]);

  useEffect(() => {
    async function fetchGallery() {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      setImage(data);
    }
    fetchGallery();
  }, []);

  const openModal = (image) => {
    setModalSrc(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">Image Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2 w-full max-w-[1350px]">
        {image.map((image, index) => (
          <img
            key={index}
            src={image.gimage}
            alt={`Sample Image ${index + 1}`}
            className={SHARED_IMAGE_CLASSES}
            onClick={() => openModal(image.gimage)}
          />
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="relative">
            <img
              id="modalImage"
              src={modalSrc}
              alt="Enlarged Image"
              className="rounded-lg shadow-lg w-full h-96"
            />
            <button
              className="absolute top-2 right-2 text-white bg-gray-600 p-2 rounded-full "
              onClick={closeModal}
            >
              <IoCloseSharp />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
