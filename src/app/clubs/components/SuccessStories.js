// components/SuccessStories.js
const stories = [
  {
    name: "Jane Doe",
    club: "Debate Club",
    story: "Joining Debate Club helped me improve my public speaking skills...",
    image: "path/to/jane-image.jpg", // Placeholder for Jane's image
  },
  {
    name: "John Smith",
    club: "Coding Club",
    story: "The Coding Club allowed me to work on real-world projects...",
    image: "path/to/john-image.jpg", // Placeholder for John's image
  },
  // Add more stories here...
];

export default function SuccessStories() {
  return (
    <div className="py-12 px-4 md:px-16 bg-gray-100">
      <h2 className="text-4xl text-center font-bold mb-8 text-blue-600">
        Success Stories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <img
              src={story.image}
              alt={`${story.name}'s story`}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800">{story.name}</h3>
            <p className="mt-2 text-gray-600 italic">Club: {story.club}</p>
            <p className="mt-4 text-gray-700">{story.story}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
