export default function CommunityEngagement() {
  const engagementPrograms = [
    {
      title: "Local Outreach Programs",
      description:
        "Our college actively engages in local community services, including education drives, health camps, and environmental initiatives.",
      image: "/assets/hero/hero (1).png",
    },
    {
      title: "Partnerships with NGOs",
      description:
        "Collaborating with NGOs, our students and faculty participate in various programs aimed at uplifting underprivileged sections of society.",
      image: "/assets/hero/hero (1).png",
    },
    {
      title: "Research & Innovation",
      description:
        "We are committed to research that addresses community needs, focusing on sustainable development, healthcare innovations, and more.",
      image: "/assets/hero/hero (1).png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-green-700">
          Community Engagement
        </h2>
        <p className="text-xl text-center text-gray-600 mt-4 italic">
          Making a Difference Beyond the Campus
        </p>

        {/* Engagement Programs */}
        <div className="mt-12 space-y-12">
          {engagementPrograms.map((program, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 mt-6 md:mt-0 md:px-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {program.title}
                </h3>
                <p className="text-gray-600 mt-4">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
