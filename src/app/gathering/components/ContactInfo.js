import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
        Contact Us
      </h2>
      <div className="text-center">
        <p className="text-lg mb-4">For more information, please contact:</p>
        <p className="text-lg font-semibold mb-2">Event Committee</p>
        <div className="flex justify-center items-center mb-2">
          <FaEnvelope className="mr-2 text-blue-600" />
          <p className="text-lg">contact@collegeevent.com</p>
        </div>
        <div className="flex justify-center items-center">
          <FaPhoneAlt className="mr-2 text-blue-600" />
          <p className="text-lg">+1 234 567 890</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
