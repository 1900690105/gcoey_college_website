const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full">
      <h2 className="text-3xl font-semibold mb-6">Teacher Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Total Courses</h3>
          <p className="text-2xl">30</p>
        </div>
        {/* Example Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Student Enrollments</h3>
          <p className="text-2xl">120</p>
        </div>
        {/* Example Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Active Teachers</h3>
          <p className="text-2xl">15</p>
        </div>
      </div>
      <div className="mt-6">
        {/* Additional Dashboard Content */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Recent Activities</h3>
          {/* Activity List */}
          <ul>
            <li className="mb-2">Course 'Math 101' updated by Admin</li>
            <li className="mb-2">New student enrolled in 'Science 202'</li>
            <li>Teacher 'John Doe' added to the system</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
