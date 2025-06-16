import Image from "next/image";

const VirtualTour = () => {
  return (
    <div className="container mx-auto px-6 py-10 bg-gray-800 text-white text-center">
      <h2 className="text-2xl font-bold mb-6">Virtual Campus Tour</h2>
      <div className="relative">
        <Image
          src="/assets/hero/hero (1).png"
          alt="Virtual Tour"
          width={800}
          height={450}
          className="mx-auto"
        />
        <button className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold hover:bg-opacity-75 transition">
          Start Tour
        </button>
      </div>
    </div>
  );
};

export default VirtualTour;
