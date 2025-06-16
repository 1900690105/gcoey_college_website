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

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May"];

const data = {
  BDA: [15, 12, 18, 20, 25],
  CC: [18, 15, 20, 22, 28],
  DT: [17, 14, 19, 21, 26],
  AI: [16, 13, 18, 20, 25],
  BI: [14, 11, 17, 19, 24],
};

const calculateOverallAttendance = (data) => {
  const overallAttendance = Array(monthLabels.length).fill(0);
  Object.values(data).forEach((attendance) => {
    attendance.forEach((value, index) => {
      overallAttendance[index] += value;
    });
  });
  return overallAttendance;
};

const overallAttendanceData = calculateOverallAttendance(data);

const OverallAttendance = () => (
  <div className="w-full max-w-4xl mx-auto p-4">
    <h2 className="text-2xl font-bold mb-6 text-center">
      Overall Attendance Month-wise
    </h2>
    <div className="bg-white shadow-md rounded-lg p-4 h-[300px]">
      <Bar
        data={{
          labels: monthLabels,
          datasets: [
            {
              label: "Overall Attendance",
              data: overallAttendanceData,
              backgroundColor: "#ffa500", // Teal color for overall attendance
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              mode: "index",
              intersect: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 20,
              },
              title: {
                display: true,
                text: "Total Attendance",
              },
            },
            x: {
              title: {
                display: true,
                text: "Months",
              },
            },
          },
        }}
      />
    </div>
  </div>
);

export default OverallAttendance;
