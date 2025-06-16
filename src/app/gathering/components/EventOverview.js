// components/EventOverview.js
import React from "react";

const EventOverview = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
          Event Overview
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            The Annual Gathering is a grand celebration that brings together
            students, faculty, and alumni for an evening of fun, entertainment,
            and memories. This year, we are excited to present a series of
            performances and activities under the theme:
          </p>
          <p className="text-2xl md:text-3xl font-semibold mt-6 mb-8 text-center text-indigo-600">
            '[Your Theme]'
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <FeatureItem icon="🎭" title="Performances">
              Enjoy breathtaking shows by talented artists
            </FeatureItem>
            <FeatureItem icon="🍽️" title="Gourmet Experience">
              Savor exquisite cuisine from top chefs
            </FeatureItem>
            <FeatureItem icon="🤝" title="Networking">
              Connect with peers and industry leaders
            </FeatureItem>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, children }) => {
  return (
    <div className="text-center">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  );
};

export default EventOverview;
