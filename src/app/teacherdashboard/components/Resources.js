const Resources = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6">Resources</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-4">Available Resources</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Resource 1: Course Material
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Resource 2: Lecture Notes
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Resource 3: Reference Books
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
