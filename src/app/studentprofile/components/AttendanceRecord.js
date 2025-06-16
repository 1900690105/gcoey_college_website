import Image from "next/image";
import React from "react";

export default function AttendanceRecord() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-6">Attendance Record</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 rounded-lg p-4 ">
          <div>
            <p className="font-medium text-gray-700 mb-2">Overall Attendance</p>
            <p className="text-4xl font-bold text-gray-800">82.2%</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 ">
          <div>
            <p className="font-medium text-gray-700 mb-2">
              Subject-wise Attendance
            </p>

            <div className="flex justify-between">
              <ul className="list-disc ml-4 text-gray-600">
                <li>AI: 95%</li>
                <li>BDA: 79%</li>
                <li>DT: 91</li>
                <li>BI: 85%</li>
                <li>CC: 76%</li>
              </ul>
              <Image
                src={"/chart.png"}
                alt="chart"
                height={114}
                width={700}
                className="w-60 h-36"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
