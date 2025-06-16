// components/VenueDetails.js
import React from "react";

const VenueDetails = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-green-50 to-teal-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          Venue & Logistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <VenueCard
            title="Venue"
            icon="🏛️"
            details={[
              { label: "Name", value: "[Venue Name]" },
              { label: "Address", value: "[Address]" },
              { label: "City", value: "[City]" },
              { label: "State", value: "[State]" },
              { label: "Zip Code", value: "[Zip Code]" },
            ]}
          />
          <VenueCard
            title="Transportation"
            icon="🚗"
            details={[
              { label: "Public Transport", value: "Available nearby" },
              { label: "Parking", value: "On-site parking available" },
              { label: "Shuttle Service", value: "From major hotels" },
            ]}
          />
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Location Map
          </h3>
          <div className="bg-white rounded-lg shadow-lg p-4 aspect-w-16 aspect-h-9">
            {/* Replace with actual map component or embed */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
              Interactive Map Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VenueCard = ({ title, icon, details }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transition duration-300 hover:shadow-xl">
      <div className="flex items-center mb-6">
        <span className="text-4xl mr-4">{icon}</span>
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      </div>
      <ul className="space-y-3">
        {details.map((detail, index) => (
          <li key={index} className="flex">
            <span className="font-medium text-gray-600 w-1/3">
              {detail.label}:
            </span>
            <span className="text-gray-800">{detail.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VenueDetails;
