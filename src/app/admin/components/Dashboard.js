import React from "react";

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">College Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <DashboardCard
          title="Total Students"
          value="1,234"
          icon="👨‍🎓"
          color="bg-blue-100"
        />
        <DashboardCard
          title="Total Faculty"
          value="98"
          icon="👩‍🏫"
          color="bg-green-100"
        />
        <DashboardCard
          title="Courses Offered"
          value="56"
          icon="📚"
          color="bg-yellow-100"
        />
        <DashboardCard
          title="Upcoming Events"
          value="12"
          icon="📅"
          color="bg-purple-100"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivities />
        <UpcomingDeadlines />
      </div>
    </div>
  );
}

function DashboardCard({ title, value, icon, color }) {
  return (
    <div className={`${color} rounded-lg p-6 flex items-center`}>
      <div className="text-4xl mr-4">{icon}</div>
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    </div>
  );
}

function RecentActivities() {
  const activities = [
    { id: 1, text: "New student registration completed", time: "2 hours ago" },
    { id: 2, text: "Faculty meeting scheduled", time: "Yesterday" },
    { id: 3, text: "Exam results published", time: "2 days ago" },
    { id: 4, text: "New course proposal submitted", time: "3 days ago" },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.id} className="flex justify-between items-center">
            <span>{activity.text}</span>
            <span className="text-sm text-gray-500">{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UpcomingDeadlines() {
  const deadlines = [
    { id: 1, text: "Course registration deadline", date: "May 15, 2024" },
    { id: 2, text: "Faculty performance review", date: "May 20, 2024" },
    { id: 3, text: "Scholarship application due", date: "May 30, 2024" },
    { id: 4, text: "Summer session begins", date: "June 1, 2024" },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <h2 className="text-xl font-semibold mb-4">Upcoming Deadlines</h2>
      <ul className="space-y-4">
        {deadlines.map((deadline) => (
          <li key={deadline.id} className="flex justify-between items-center">
            <span>{deadline.text}</span>
            <span className="text-sm text-gray-500">{deadline.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
