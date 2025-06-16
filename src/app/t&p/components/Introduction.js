import React from "react";

const Introduction = () => (
  <section
    className="relative bg-cover bg-center py-12"
    style={{ backgroundImage: "url('/assest/hero/hero (1).png')" }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="container mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl font-extrabold text-white mb-6">
        Welcome to Training and Placement
      </h2>
      <p className="text-xl text-gray-200 max-w-2xl mx-auto">
        Our Training and Placement department is dedicated to preparing students
        for successful careers through comprehensive training programs and
        robust placement services.
      </p>
    </div>
  </section>
);

export default Introduction;
