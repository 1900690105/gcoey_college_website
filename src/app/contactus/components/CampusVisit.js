// components/CampusVisit.js
"use client";
import { useState } from "react";

const CampusVisit = () => {
  const [formVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Schedule a Campus Visit
        </h2>
        <p className="text-gray-600 mb-8">
          Experience our campus firsthand by scheduling a visit. We’d love to
          show you around!
        </p>
        <div className="mb-6">
          <p className="text-lg font-medium text-gray-700">Contact Us:</p>
          <p className="text-gray-600">
            Phone:{" "}
            <a href="tel:+1234567893" className="text-blue-600 hover:underline">
              (+123) 456-7893
            </a>
          </p>
          <p className="text-gray-600">
            Email:{" "}
            <a
              href="mailto:visit@college.edu"
              className="text-blue-600 hover:underline"
            >
              visit@college.edu
            </a>
          </p>
        </div>
        <button
          onClick={toggleFormVisibility}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          {formVisible ? "Hide Form" : "Fill Out Online Form"}
        </button>
      </div>

      {formVisible && (
        <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Schedule Your Visit
          </h3>
          <form>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700">Preferred Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Additional Comments
                </label>
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CampusVisit;
