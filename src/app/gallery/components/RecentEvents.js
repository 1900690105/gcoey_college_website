import Image from "next/image";

const RecentEvents = () => {
  const recentEvents = [
    { name: "Event 1", date: "July 2024", src: "/assets/hero/hero (1).png" },
    { name: "Event 2", date: "June 2024", src: "/assets/hero/hero (1).png" },
    // Add more events as needed
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Recent Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recentEvents.map((event, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden">
            <Image src={event.src} alt={event.name} width={500} height={300} />
            <div className="p-4">
              <h3 className="text-lg font-bold">{event.name}</h3>
              <p className="text-gray-500">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentEvents;
