"use client";
import { useEffect, useState } from "react";
import FeaturedGallery from "./components/FeaturedGallery";
import HeroSection from "./components/HeroSection";

const GalleryPage = () => {
  const [image, setImages] = useState("");
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/gallery", { cache: "no-store" }); // disable caching
        const data = await res.json();
        setImages(data); // direct rows array
        console.log(data);
      } catch (error) {
        console.error("Failed to load images:", error);
      }
    };

    fetchImages();
  }, []);
  return (
    <div>
      <HeroSection image={image} />
      <FeaturedGallery image={image} />
    </div>
  );
};

export default GalleryPage;
