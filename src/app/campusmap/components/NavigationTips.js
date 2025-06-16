import { FaMapSigns } from "react-icons/fa";

export default function NavigationTips() {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-100 to-yellow-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-yellow-800">
          Navigation Tips
        </h2>
        <div className="mt-12">
          <FaMapSigns className="text-5xl text-yellow-700 mx-auto mb-6" />
          <p className="text-lg text-center text-yellow-700">
            Tips for getting around campus easily, including shortcuts, popular
            paths, and landmarks.
          </p>
          <div className="text-center mt-6">
            <a href="/virtual-tour" className="text-blue-600 underline">
              Take a Virtual Tour
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
