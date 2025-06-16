const Calendar = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6">Calendar</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-4">Monthly View</h3>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4">
            <div className="bg-gray-200 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">Navigation</h4>
              <button className="block w-full mb-2 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
                Previous Month
              </button>
              <button className="block w-full mb-2 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
                Next Month
              </button>
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="bg-gray-200 rounded-lg p-4">
              {/* Placeholder for calendar */}
              <div className="grid grid-cols-7 gap-1">
                <div className="p-2 text-center font-semibold">Sun</div>
                <div className="p-2 text-center font-semibold">Mon</div>
                <div className="p-2 text-center font-semibold">Tue</div>
                <div className="p-2 text-center font-semibold">Wed</div>
                <div className="p-2 text-center font-semibold">Thu</div>
                <div className="p-2 text-center font-semibold">Fri</div>
                <div className="p-2 text-center font-semibold">Sat</div>
                {/* Example days */}
                {[...Array(30).keys()].map((day) => (
                  <div
                    key={day}
                    className="p-4 text-center border rounded-lg hover:bg-blue-100 cursor-pointer"
                  >
                    {day + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
