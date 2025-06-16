// components/ContactInformation.js
import React from "react";

const ContactInformation = () => (
  <section className="py-10">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-700 mb-4">
          For any queries regarding training programs and placements, please
          contact us:
        </p>
        <ul className="list-disc list-inside">
          <li>
            Email:{" "}
            <a href="mailto:training@college.edu" className="text-blue-500">
              training@college.edu
            </a>
          </li>
          <li>Phone: (123) 456-7890</li>
        </ul>
      </div>
    </div>
  </section>
);

export default ContactInformation;
