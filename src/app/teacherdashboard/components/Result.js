import React from "react";

const students = [
  {
    rollNumber: "101",
    name: "John Doe",
    CA1: "8",
    CA2: "8",
    MID: "16",
    Total: 32,
  },
  {
    rollNumber: "102",
    name: "Jane Smith",
    CA1: "8",
    CA2: "8",
    MID: "16",
    Total: 32,
  },
  {
    rollNumber: "103",
    name: "Bob Johnson",
    CA1: "8",
    CA2: "Absent",
    MID: "16",
    Total: 24,
  },
];

const StudentMarksList = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Student Marks List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100 text-left font-semibold">
                Roll Number
              </th>
              <th className="py-2 px-4 bg-gray-100 text-left font-semibold">
                Student Name
              </th>
              <th className="py-2 px-4 bg-gray-100 text-left font-semibold">
                CA1
              </th>
              <th className="py-2 px-4 bg-gray-100 text-left font-semibold">
                CA2
              </th>
              <th className="py-2 px-4 bg-gray-100 text-left font-semibold">
                MID
              </th>
              <th className="py-2 px-4 bg-gray-100 text-left font-semibold">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">{student.rollNumber}</td>
                <td className="py-2 px-4">{student.name}</td>
                <td className="py-2 px-4">{student.CA1}</td>
                <td className="py-2 px-4">{student.CA2}</td>
                <td className="py-2 px-4">{student.MID}</td>
                <td className="py-2 px-4">{student.Total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentMarksList;
