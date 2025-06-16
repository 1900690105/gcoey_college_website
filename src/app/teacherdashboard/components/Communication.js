const Communication = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6">Communication</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-4">Messages</h3>
        <div className="space-y-4">
          {/* Example message */}
          <div className="bg-gray-200 p-4 rounded-lg">
            <h4 className="font-semibold">Message from Admin</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              non urna vel urna feugiat gravida.
            </p>
          </div>
          {/* More messages */}
        </div>
      </div>
    </div>
  );
};

export default Communication;
