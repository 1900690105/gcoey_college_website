const CategoryFilters = () => {
  const categories = [
    "All",
    "Events",
    "Campus Life",
    "Achievements",
    "Alumni",
    "Workshops",
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="flex justify-center space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-lg w-1/2"
        />
      </div>
    </div>
  );
};

export default CategoryFilters;
