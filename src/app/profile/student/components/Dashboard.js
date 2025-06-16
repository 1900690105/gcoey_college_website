// pages/index.js
import React from "react";
import AttendanceChart from "./dashboard/AttendanceChart";
import Marks from "./dashboard/CGPA_SGPA_Container";
import NotificationTable from "./dashboard/Notification";

const data = [
  { subject: "BDA", attendancePercentage: 85 },
  { subject: "DT", attendancePercentage: 90 },
  { subject: "AI", attendancePercentage: 78 },
  { subject: "BI", attendancePercentage: 92 },
  { subject: "CC", attendancePercentage: 88 },
];

const marks = [
  {
    subject: "1",
    marks: 8.5,
  },
  {
    subject: "2",
    marks: 9.0,
  },
  {
    subject: "3",
    marks: 7.8,
  },
  {
    subject: "4",
    marks: 9.2,
  },
  {
    subject: "5",
    marks: 8.8,
  },
  {
    subject: "6",
    marks: 9.0,
  },
];

const notifications = [
  "Your assignment submission deadline is tomorrow!",
  "New lecture notes have been uploaded.",
  "Your class has been rescheduled to 3 PM.",
  "The campus will be closed on Friday for maintenance.",
];

const StudentDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      <div className="lg:flex">
        <AttendanceChart data={data} />
        <Marks marks={marks} />
        <NotificationTable notifications={notifications} />
      </div>
    </div>
  );
};

export default StudentDashboard;
