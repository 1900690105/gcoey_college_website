// components/Notifications.js
const Notifications = () => {
  const notifications = [
    { message: "New assignment posted: Math Homework", type: "info" },
    {
      message: "Reminder: Parent-Teacher Conference next week",
      type: "warning",
    },
    { message: "Grades have been updated", type: "success" },
    { message: "New message from your student", type: "info" },
  ];

  return (
    <div className="bg-gray-700 p-4 rounded-md">
      <h2 className="text-lg font-semibold mb-3">Notifications</h2>
      <ul className="space-y-2">
        {notifications.map((notification, index) => (
          <li
            key={index}
            className={`text-sm p-2 rounded ${
              notification.type === "success"
                ? "bg-green-500"
                : notification.type === "warning"
                ? "bg-yellow-500"
                : "bg-gray-600"
            }`}
          >
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
