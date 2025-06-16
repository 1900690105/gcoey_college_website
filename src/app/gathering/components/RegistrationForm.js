// components/RegistrationForm.js
import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
    alert("Registered Successfully!");
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
          Register for the Event
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Name"
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <InputField
              label="Email"
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <InputField
              label="Phone"
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <div className="md:col-span-2">
              <label className="flex items-center space-x-2 text-gray-700 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span>I agree to the terms and conditions</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg hover:from-blue-600 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            Register Now
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Already registered?{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </section>
  );
};

const InputField = ({ label, id, type, value, onChange }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default RegistrationForm;
