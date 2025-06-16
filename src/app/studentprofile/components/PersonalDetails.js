import React from "react";

export default function PersonalDetails() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-6">Personal Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="font-medium text-gray-700 mb-2">Full Name</p>
          <p className="text-gray-500 capitalize">Nikhil vitthal kandhare</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="font-medium text-gray-700 mb-2">Mobile Number</p>
          <p className="text-gray-500">9112430021</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="font-medium text-gray-700 mb-2">Date of Birth</p>
          <p className="text-gray-500">17/04/2003</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="font-medium text-gray-700 mb-2">Religion</p>
          <p className="text-gray-500">Hinduism</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="font-medium text-gray-700 mb-2">Mobile Number</p>
          <p className="text-gray-500">9112430021</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="font-medium text-gray-700 mb-2">Parent Mobile Number</p>
          <p className="text-gray-500">9112430021</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="font-medium text-gray-700 mb-2">Email</p>
          <p className="text-gray-500">nikhilkandhare22@gmail.com</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="font-medium text-gray-700 mb-2">Address</p>
          <p className="text-gray-500">shakti nager itwara road nanded</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="font-medium text-gray-700 mb-2">City</p>
          <p className="text-gray-500">Nanded</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="font-medium text-gray-700 mb-2">State</p>
          <p className="text-gray-500">Nanded</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="font-medium text-gray-700 mb-2">Caste</p>
          <p className="text-gray-500">Matang</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="font-medium text-gray-700 mb-2">Category</p>
          <p className="text-gray-500">SC</p>
        </div>
      </div>
    </div>
  );
}
