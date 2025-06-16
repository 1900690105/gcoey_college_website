"use client";
import React, { useState } from "react";

const Attendance = () => {
  const [totalRollNumbers, setTotalRollNumbers] = useState(""); // Default to 72
  const [selectedRolls, setSelectedRolls] = useState([]);
  const [presentStudents, setPresentStudents] = useState([]);

  const rollNumbers = Array.from({ length: totalRollNumbers }, (_, i) => i + 1);

  // Sample subjects for the dropdown
  const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "History",
    "Geography",
    "Computer Science",
  ];
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);

  // Semesters for the dropdown
  const semesters = Array.from({ length: 8 }, (_, i) => i + 1);
  const [selectedSemester, setSelectedSemester] = useState(semesters[0]);

  const handleRollClick = (roll) => {
    if (selectedRolls.includes(roll)) {
      setSelectedRolls(selectedRolls.filter((r) => r !== roll));
    } else {
      setSelectedRolls([...selectedRolls, roll]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPresentStudents(selectedRolls);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Attendance Form</h1>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Teacher Name:
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter teacher's name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Subject Name:
        </label>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {subjects.map((subject, index) => (
            <option key={index} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Semester:
        </label>
        <select
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {semesters.map((semester, index) => (
            <option key={index} value={semester}>
              Semester {semester}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Total Number of Students:
        </label>
        <input
          type="number"
          value={totalRollNumbers}
          onChange={(e) => setTotalRollNumbers(e.target.value, 1)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter total number of students"
          min="1"
          max="72"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Type:</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="theory"
            name="type"
            value="theory"
            className="mr-2"
          />
          <label htmlFor="theory" className="mr-4">
            Theory
          </label>

          <input
            type="radio"
            id="practical"
            name="type"
            value="practical"
            className="mr-2"
          />
          <label htmlFor="practical">Practical</label>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-4">
          Mark Attendance:
        </label>
        <div className="grid grid-cols-12 gap-4">
          {rollNumbers.map((roll) => (
            <div
              key={roll}
              onClick={() => handleRollClick(roll)}
              className={`w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer ${
                selectedRolls.includes(roll)
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {roll}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end mb-6">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </div>

      {presentStudents.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-700">Present Students:</h2>
          <p className="mt-2 text-gray-700">{presentStudents.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default Attendance;
