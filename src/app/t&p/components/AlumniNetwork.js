// components/AlumniNetwork.js
import React from "react";

const AlumniNetwork = () => (
  <section className="py-10">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-6">Alumni Network</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-700 mb-4">
          Our alumni network provides valuable support and mentorship to current
          students.
        </p>
        <ul className="list-disc list-inside">
          <li>Networking opportunities</li>
          <li>Mentorship programs</li>
          <li>Career advice and guidance</li>
        </ul>
        <p className="mt-4">
          Read success stories from our alumni{" "}
          <a href="/alumni-stories" className="text-blue-500">
            here
          </a>
          .
        </p>
      </div>
    </div>
  </section>
);

export default AlumniNetwork;
