import Image from "next/image";

const CampusLife = () => {
  const campusImages = [
    { src: "/assets/hero/hero (1).png", alt: "Campus Life 1" },
    { src: "/assets/hero/hero (1).png", alt: "Campus Life 2" },
    // Add more images as needed
  ];

  return (
    <div className="container mx-auto px-6 py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">
        Life at [College Name]
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {campusImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={300}
              className="hover:scale-105 transform transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusLife;
