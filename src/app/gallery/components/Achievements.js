import Image from "next/image";

const Achievements = () => {
  const achievements = [
    {
      title: "Best College Award",
      description: "Awarded Best College in 2024",
      src: "/assets/hero/hero (8).png",
    },
    {
      title: "Sports Championship",
      description: "Won the inter-college sports championship",
      src: "/assets/hero/hero (7).png",
    },
    // Add more achievements as needed
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Achievements & Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden">
            <Image
              src={achievement.src}
              alt={achievement.title}
              width={500}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{achievement.title}</h3>
              <p className="text-gray-500">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
