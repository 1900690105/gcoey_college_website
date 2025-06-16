"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const FOLDER_ID = process.env.NEXT_PUBLIC_HERO_BANNER_FOLDER_ID;
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

const HeroSection = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImagesFromDrive = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType)`
        );
        const data = await response.json();

        // Filter image files only
        const imageFiles = data.files.filter((file) =>
          file.mimeType.startsWith("image/")
        );

        // Generate public image URLs
        const imageUrls = imageFiles.map(
          (file) => `https://drive.google.com/uc?export=view&id=${file.id}`
        );

        setImages(imageUrls);
      } catch (err) {
        console.error("Failed to fetch images from Google Drive", err);
      }
    };

    fetchImagesFromDrive();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative h-screen flex items-center justify-center w-full overflow-hidden">
      {images.length > 0 && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={images[currentImageIndex]}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
            priority
          />
        </div>
      )}
    </div>
  );
};

export default HeroSection;

// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// const HeroSection = () => {
//   const [images, setImages] = useState([]);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await fetch("/api/banner");
//         const data = await response.json();
//         const imageUrls = data.map((banner) => `${banner.bimage}`);
//         setImages(imageUrls);
//         console.log(imageUrls);
//       } catch (error) {
//         console.error("Failed to fetch images:", error);
//       }
//     };

//     fetchImages();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative h-screen flex items-center justify-center w-full overflow-hidden">
//       {images.length > 0 && (
//         <>
//           <div className="absolute inset-0 w-full h-full">
//             <Image
//               src={images[currentImageIndex]}
//               alt="Background"
//               layout="fill"
//               objectFit="cover"
//               className="w-full h-full object-cover"
//               priority
//             />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default HeroSection;
