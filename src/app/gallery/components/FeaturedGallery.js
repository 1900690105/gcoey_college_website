"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Eye, Heart } from "lucide-react";
import Image from "next/image";

const FeaturedGallery = ({ image }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const imageArray = Array.isArray(image)
    ? image.map((img) => ({
        src: img.url,
        alt: img.title || "Event Image",
        category: img.category,
        views: "1.2k", // Placeholder or you can derive this from data
        likes: 100, // Placeholder or from data
      }))
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
              Featured Gallery {image?.length}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Discover moments that matter. Experience our most captivating
              events through stunning visuals.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
                <Play className="w-5 h-5 inline mr-2" />
                Watch Highlights
              </button>
              <button className="px-8 py-3 border border-purple-400/50 rounded-full text-purple-200 hover:bg-purple-600/20 transition-all duration-300">
                View All Events
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imageArray.map((img, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                <div className="text-white text-sm font-semibold">
                  {img.category}
                </div>
                <div className="flex items-center justify-between text-gray-200 text-xs mt-1">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" /> {img.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" /> {img.likes}
                  </span>
                </div>
              </div>
              {/* Click to view indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <Eye className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Selected Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="w-full h-full object-contain rounded-2xl max-h-[90vh]"
            />
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300 text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
              <h3 className="text-white text-2xl font-bold mb-2">
                {selectedImage.alt}
              </h3>
              <div className="flex items-center gap-4 text-gray-300">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {selectedImage.views} views
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  {selectedImage.likes} likes
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedGallery;

// "use client";
// import { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight, Play, Eye, Heart } from "lucide-react";
// import Image from "next/image";

// const FeaturedGallery = ({ image }) => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const imageArray = Array.isArray(image)
//     ? image.map((img) => ({
//         src: img.url,
//         alt: img.title || "Event Image",
//         category: img.category,
//         views: "1.2k", // Placeholder or you can derive this from data
//         likes: 100, // Placeholder or from data
//       }))
//     : [];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
//         <div className="relative container mx-auto px-6 py-20">
//           <div className="text-center">
//             <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
//               Featured Gallery {image?.length}
//             </h1>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
//               Discover moments that matter. Experience our most captivating
//               events through stunning visuals.
//             </p>
//             <div className="flex justify-center gap-4">
//               <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
//                 <Play className="w-5 h-5 inline mr-2" />
//                 Watch Highlights
//               </button>
//               <button className="px-8 py-3 border border-purple-400/50 rounded-full text-purple-200 hover:bg-purple-600/20 transition-all duration-300">
//                 View All Events
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Gallery Grid */}
//       <div className="container mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {imageArray.map((img, index) => (
//             <div
//               key={index}
//               className="relative group rounded-lg overflow-hidden shadow-lg"
//             >
//               <Image
//                 src={img.src}
//                 alt={img.alt}
//                 width={800}
//                 height={600}
//                 className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
//               />
//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
//                 <div className="text-white text-sm font-semibold">
//                   {img.category}
//                 </div>
//                 <div className="flex items-center justify-between text-gray-200 text-xs mt-1">
//                   <span className="flex items-center gap-1">
//                     <Eye className="w-4 h-4" /> {img.views}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Heart className="w-4 h-4" /> {img.likes}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal for Selected Image */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="relative max-w-4xl max-h-full">
//             <Image
//               src={selectedImage.src}
//               alt={selectedImage.title}
//               className="w-full h-full object-contain rounded-2xl"
//             />
//             <button
//               className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
//               onClick={() => setSelectedImage(null)}
//             >
//               ×
//             </button>
//             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
//               <h3 className="text-white text-2xl font-bold mb-2">
//                 {selectedImage.alt}
//               </h3>
//               <div className="flex items-center gap-4 text-gray-300">
//                 <span className="flex items-center gap-1">
//                   <Eye className="w-4 h-4" />
//                   {selectedImage.views} views
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <Heart className="w-4 h-4" />
//                   {selectedImage.likes} likes
//                 </span>
//                 <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
//                   {selectedImage.category}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FeaturedGallery;

// // import Image from "next/image";

// // const FeaturedGallery = () => {
// //   const image = [
// //     { src: "/assets/hero/hero (1).png", alt: "Event 1" },
// //     { src: "/assets/hero/hero (2).png", alt: "Event 2" },
// //     // Add more images as needed
// //   ];

// //   return (
// //     <div className="container mx-auto px-6 py-10">
// //       <h2 className="text-2xl font-bold text-center mb-6">Featured Gallery</h2>
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //         {image.map((image, index) => (
// //           <div key={index} className="overflow-hidden rounded-lg">
// //             <Image
// //               src={image.src}
// //               alt={image.alt}
// //               width={500}
// //               height={300}
// //               className="hover:scale-105 transform transition duration-300"
// //             />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default FeaturedGallery;
