// components/AttendanceChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Marks = ({ marks }) => {
  const chartData = {
    labels: marks.map((item) => item.subject),
    datasets: [
      {
        label: "SGPA Marks",
        data: marks.map((item) => item.marks),
        backgroundColor: "rgba(255, 165, 0, 0.2)", // Light orange background
        borderColor: "rgba(255, 165, 0, 1)", // Solid orange border
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Semester",
          font: {
            weight: "bold",
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "SGPA Marks",
          font: {
            weight: "bold",
          },
        },
        min: 0,
        max: 10,
        ticks: {
          callback: (value) => `${value}`,
        },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl p-4">
      <div className="w-[400px] h-[350px]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Marks;
