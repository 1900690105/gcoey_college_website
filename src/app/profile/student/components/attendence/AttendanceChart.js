import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import OverallAttendance from "./OverallAttendance";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May"];

const data = {
  BDA: [15, 12, 18, 20, 25],
  CC: [18, 15, 20, 22, 28],
  DT: [17, 14, 19, 21, 26],
  AI: [16, 13, 18, 20, 25],
  BI: [14, 11, 17, 19, 24],
};

const colorPalette = {
  BDA: "#FF6384", // Red
  CC: "#36A2EB", // Blue
  DT: "#FFCE56", // Yellow
  AI: "#4BC0C0", // Teal
  BI: "#9966FF", // Purple
};

const AttendanceChart = ({ subject, attendance }) => (
  <div className="mb-6 w-full sm:w-1/2 lg:w-1/3 px-2">
    <h2 className="text-lg font-semibold mb-2 text-center">
      {subject} Attendance
    </h2>
    <div className="bg-white shadow-md rounded-lg p-2">
      <Bar
        data={{
          labels: monthLabels,
          datasets: [
            {
              label: `${subject} Attendance`,
              data: attendance,
              backgroundColor: colorPalette[subject] || "#FFCE56", // Default color
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 5,
              },
            },
          },
        }}
      />
    </div>
  </div>
);

const SubjectAttendance = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl sm:text-2xl font-bold mb-6 ">
        Subject Attendance Month-wise
      </h1>
      <div className="flex flex-wrap justify-center">
        {Object.entries(data).map(([subject, attendance]) => (
          <AttendanceChart
            key={subject}
            subject={subject}
            attendance={attendance}
          />
        ))}
      </div>
    </div>
  );
};

export default SubjectAttendance;
