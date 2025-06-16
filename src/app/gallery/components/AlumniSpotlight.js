import Image from "next/image";

const AlumniSpotlight = () => {
  const alumni = [
    {
      name: "John Doe",
      event: "Alumni Meet 2023",
      src: "/assets/hero/hero (6).png",
    },
    {
      name: "Jane Smith",
      event: "Alumni Meet 2023",
      src: "/assets/hero/hero (5).png",
    },
    // Add more alumni as needed
  ];

  return (
    <div className="container mx-auto px-6 py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">Alumni Memories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {alumni.map((person, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden">
            <Image
              src={person.src}
              alt={person.name}
              width={500}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{person.name}</h3>
              <p className="text-gray-500">{person.event}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniSpotlight;
