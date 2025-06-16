import React from "react";

export default function ContactInformation() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Campus Security Office
            </h3>
            <p className="mb-2">Phone: +1 123-456-7890</p>
            <p>
              Email:{" "}
              <a href="mailto:security@college.edu" className="text-blue-500">
                security@college.edu
              </a>
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Facilities Management
            </h3>
            <p className="mb-2">Phone: +1 123-456-7891</p>
            <p>
              Email:{" "}
              <a href="mailto:facilities@college.edu" className="text-blue-500">
                facilities@college.edu
              </a>
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Helpdesk</h3>
            <p className="mb-2">Phone: +1 123-456-7892</p>
            <p>
              Email:{" "}
              <a href="mailto:helpdesk@college.edu" className="text-blue-500">
                helpdesk@college.edu
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
