// components/Sponsors.js
import React from "react";

const Sponsors = () => {
  const sponsors = [
    { name: "Sponsor 1", logo: "/sponsor1.png", tier: "Gold" },
    { name: "Sponsor 2", logo: "/sponsor2.png", tier: "Silver" },
    { name: "Sponsor 3", logo: "/sponsor3.png", tier: "Silver" },
    { name: "Sponsor 4", logo: "/sponsor4.png", tier: "Bronze" },
    { name: "Sponsor 5", logo: "/sponsor5.png", tier: "Bronze" },
    { name: "Sponsor 6", logo: "/sponsor6.png", tier: "Bronze" },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          Our Esteemed Sponsors
        </h2>
        <div className="space-y-12">
          <SponsorTier
            tier="Gold"
            sponsors={sponsors.filter((s) => s.tier === "Gold")}
          />
          <SponsorTier
            tier="Silver"
            sponsors={sponsors.filter((s) => s.tier === "Silver")}
          />
          <SponsorTier
            tier="Bronze"
            sponsors={sponsors.filter((s) => s.tier === "Bronze")}
          />
        </div>
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block bg-indigo-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
};

const SponsorTier = ({ tier, sponsors }) => {
  if (sponsors.length === 0) return null;

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6 text-center text-gray-700">
        {tier} Sponsors
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sponsors.map((sponsor, index) => (
          <SponsorLogo key={index} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
};

const SponsorLogo = ({ sponsor }) => {
  return (
    <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        className="max-h-16 md:max-h-20 max-w-full object-contain"
      />
    </div>
  );
};

export default Sponsors;
