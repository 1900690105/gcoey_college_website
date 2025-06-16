import { FaLeaf, FaTint } from "react-icons/fa";

export default function SustainabilityInitiatives() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-100 to-green-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-green-800">
          Sustainability Initiatives
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 shadow-xl rounded-lg transform transition duration-500 hover:scale-105">
            <FaLeaf className="text-4xl text-green-700 mb-4" />
            <h3 className="text-2xl font-semibold text-green-700">
              Green Buildings
            </h3>
            <p className="mt-4 text-green-600">
              Eco-friendly or LEED-certified buildings.
            </p>
          </div>
          <div className="bg-white p-8 shadow-xl rounded-lg transform transition duration-500 hover:scale-105">
            <FaTint className="text-4xl text-green-700 mb-4" />
            <h3 className="text-2xl font-semibold text-green-700">
              Energy & Water Management
            </h3>
            <p className="mt-4 text-green-600">
              Energy conservation and water recycling initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
