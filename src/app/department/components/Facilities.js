import { FaDesktop, FaBook, FaLightbulb } from "react-icons/fa";

const Facilities = () => {
  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-4xl font-semibold text-center mb-12">Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaDesktop className="text-4xl text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold">Computer Labs</h3>
            </div>
            <p>
              Our computer labs are equipped with the latest hardware and
              software to support your learning.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaBook className="text-4xl text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold">Library</h3>
            </div>
            <p>
              Our library has a vast collection of books, journals, and digital
              resources in computer science.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaLightbulb className="text-4xl text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold">
                Innovation and Startup Incubation Center
              </h3>
            </div>
            <p>
              We provide resources and mentorship for students interested in
              launching their own tech startups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
