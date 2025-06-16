const SubmitPhotos = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Contribute to Our Gallery
      </h2>
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Your Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="email@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Upload Photos</label>
          <input
            type="file"
            className="w-full px-4 py-2 border rounded-lg"
            multiple
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitPhotos;
