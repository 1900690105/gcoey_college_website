// components/MainContent.js
const MainContent = () => {
  return (
    <div className="flex-grow p-6">
      <h1 className="text-3xl font-semibold mb-4">
        Welcome to the Teacher Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold">Total Students</h2>
          <p className="text-2xl">120</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold">Courses Active</h2>
          <p className="text-2xl">5</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold">New Messages</h2>
          <p className="text-2xl">3</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
