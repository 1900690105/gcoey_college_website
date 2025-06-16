import { FaParking, FaBus, FaAccessibleIcon } from "react-icons/fa";

export default function TransportationAndAccessibility() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800">
          Transportation & Accessibility
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-8 shadow-xl rounded-lg transform transition duration-500 hover:scale-105">
            <FaParking className="text-4xl text-gray-700 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700">
              Parking Information
            </h3>
            <p className="mt-4 text-gray-600">
              Details about parking spaces for students, staff, and visitors.
            </p>
          </div>
          <div className="bg-white p-8 shadow-xl rounded-lg transform transition duration-500 hover:scale-105">
            <FaBus className="text-4xl text-gray-700 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700">
              Public Transport Access
            </h3>
            <p className="mt-4 text-gray-600">
              Shuttle services and public transport connections.
            </p>
          </div>
          <div className="bg-white p-8 shadow-xl rounded-lg transform transition duration-500 hover:scale-105">
            <FaAccessibleIcon className="text-4xl text-gray-700 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700">
              Accessibility
            </h3>
            <p className="mt-4 text-gray-600">
              Facilities for differently-abled individuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
