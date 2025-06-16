import { FaShieldAlt, FaFirstAid } from "react-icons/fa";

export default function SafetyAndSecurity() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-blue-800">
          Safety & Security
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 shadow-xl rounded-lg transform transition duration-500 hover:scale-105">
            <FaShieldAlt className="text-4xl text-blue-700 mb-4" />
            <h3 className="text-2xl font-semibold text-blue-700">
              Security Features
            </h3>
            <p className="mt-4 text-blue-600">
              CCTV coverage, security personnel, and safe zones.
            </p>
          </div>
          <div className="bg-white p-8 shadow-xl rounded-lg transform transition duration-500 hover:scale-105">
            <FaFirstAid className="text-4xl text-blue-700 mb-4" />
            <h3 className="text-2xl font-semibold text-blue-700">
              Emergency Facilities
            </h3>
            <p className="mt-4 text-blue-600">
              Medical rooms, fire exits, and emergency gathering points.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
