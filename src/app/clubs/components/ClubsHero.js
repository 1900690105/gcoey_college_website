// components/ClubsHero.js
import Image from "next/image";

export default function ClubsHero() {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <Image
        src="/assets/hero/hero (1).png"
        alt="Students participating in various club activities"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4 md:px-16 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Discover Your Passion
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Explore Our Diverse Student Clubs and Organizations
        </p>
        <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">
          Find Your Club
        </button>
      </div>
    </div>
  );
}
