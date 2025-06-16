import React from "react";

const ContactFormWith = () => {
  return (
    <section className="flex flex-col md:flex-row  justify-center py-16 px-8 md:px-16">
      {/* Left Side - Contact Information */}
      <div className="md:w-1/2">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 lg:mt-6">
          Get In Touch With Us
        </h2>
        <p className="text-gray-600 mb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam quis nostrud exercitation ullamco.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-14 h-14 flex items-center justify-center bg-purple-600 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5l7.5-4.5 7.5 4.5v9l-7.5 4.5-7.5-4.5v-9z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="font-semibold">Our Location</p>
              <p>99 S.t Jomblo Park Pekanbaru 28292, Indonesia</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-14 h-14 flex items-center justify-center bg-purple-600 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75v10.5M20.25 6.75v10.5M7.5 19.5l9-15M7.5 4.5l9 15"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="font-semibold">Phone Number</p>
              <p>(+62)81 414 257 9980</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-14 h-14 flex items-center justify-center bg-purple-600 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75l-9 6-9-6m18 0v10.5a2.25 2.25 0 01-2.25 2.25h-13.5A2.25 2.25 0 013 17.25V6.75m18 0L12 12m0 0L3.75 6.75"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="font-semibold">Email Address</p>
              <p>info@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="md:w-1/2 mt-12 md:mt-0 md:ml-16">
        <form className="bg-purple-700 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              className="w-full px-4 py-2 border border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="text"
              id="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              className="w-full px-4 py-2 border border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="email"
              id="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="phone">
              Your Phone
            </label>
            <input
              className="w-full px-4 py-2 border border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="text"
              id="phone"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="w-full px-4 py-2 border border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              id="message"
              rows="4"
            ></textarea>
          </div>
          <button className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition duration-200">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormWith;
