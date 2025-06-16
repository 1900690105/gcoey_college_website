import React from "react";

export default function FeedbackTestimonials() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-6">Feedback/Testimonials</h2>
      <div className="space-y-4">
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex items-start">
            <span className="material-icons text-gray-600 mr-2">
              format_quote
            </span>
            <p className="text-gray-600">
              "John is a diligent student with a keen interest in AI. He has
              shown great potential in his projects." - Professor A
            </p>
          </div>
        </div>
        {/* Add more testimonials as needed */}
      </div>
    </div>
  );
}
