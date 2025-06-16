// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const StudentProgress = () => {
//   // Dummy student data
//   const students = [
//     {
//       id: "1",
//       name: "John Doe",
//       rollNumber: "12345",
//       personalDetails: {
//         age: 15,
//         class: "10th Grade",
//         address: "123 Elm Street, Springfield",
//       },
//       attendance: {
//         totalClasses: 100,
//         attended: 95,
//       },
//       result: {
//         subjects: [
//           { subject: "Mathematics", grade: "A" },
//           { subject: "Science", grade: "A" },
//           { subject: "English", grade: "B" },
//         ],
//       },
//       report: "John has shown excellent progress in Mathematics and Science.",
//       progressData: {
//         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//         datasets: [
//           {
//             label: "Progress",
//             data: [65, 59, 80, 81, 56, 55],
//             borderColor: "rgba(75, 192, 192, 1)",
//             backgroundColor: "rgba(75, 192, 192, 0.2)",
//           },
//         ],
//       },
//     },
//     {
//       id: "2",
//       name: "Jane Smith",
//       rollNumber: "12346",
//       personalDetails: {
//         age: 16,
//         class: "11th Grade",
//         address: "456 Oak Avenue, Shelbyville",
//       },
//       attendance: {
//         totalClasses: 100,
//         attended: 98,
//       },
//       result: {
//         subjects: [
//           { subject: "Mathematics", grade: "A" },
//           { subject: "Physics", grade: "A" },
//           { subject: "Chemistry", grade: "A" },
//         ],
//       },
//       report: "Jane consistently performs at a high level across all subjects.",
//       progressData: {
//         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//         datasets: [
//           {
//             label: "Progress",
//             data: [75, 82, 85, 90, 88, 92],
//             borderColor: "rgba(255, 99, 132, 1)",
//             backgroundColor: "rgba(255, 99, 132, 0.2)",
//           },
//         ],
//       },
//     },
//     {
//       id: "3",
//       name: "Mike Johnson",
//       rollNumber: "12347",
//       personalDetails: {
//         age: 15,
//         class: "10th Grade",
//         address: "789 Pine Road, Capital City",
//       },
//       attendance: {
//         totalClasses: 100,
//         attended: 85,
//       },
//       result: {
//         subjects: [
//           { subject: "Mathematics", grade: "C" },
//           { subject: "Science", grade: "B" },
//           { subject: "English", grade: "A" },
//         ],
//       },
//       report:
//         "Mike excels in English but needs additional support in Mathematics.",
//       progressData: {
//         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//         datasets: [
//           {
//             label: "Progress",
//             data: [50, 55, 60, 65, 70, 72],
//             borderColor: "rgba(54, 162, 235, 1)",
//             backgroundColor: "rgba(54, 162, 235, 0.2)",
//           },
//         ],
//       },
//     },
//     {
//       id: "4",
//       name: "Emily Davis",
//       rollNumber: "12348",
//       personalDetails: {
//         age: 16,
//         class: "11th Grade",
//         address: "101 Maple Lane, Riverside",
//       },
//       attendance: {
//         totalClasses: 100,
//         attended: 92,
//       },
//       result: {
//         subjects: [
//           { subject: "Biology", grade: "A" },
//           { subject: "Chemistry", grade: "B" },
//           { subject: "Physics", grade: "B" },
//         ],
//       },
//       report:
//         "Emily shows a strong aptitude for Biology and is making good progress in other sciences.",
//       progressData: {
//         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//         datasets: [
//           {
//             label: "Progress",
//             data: [70, 72, 75, 78, 80, 82],
//             borderColor: "rgba(255, 206, 86, 1)",
//             backgroundColor: "rgba(255, 206, 86, 0.2)",
//           },
//         ],
//       },
//     },
//     {
//       id: "5",
//       name: "Alex Wong",
//       rollNumber: "12349",
//       personalDetails: {
//         age: 15,
//         class: "10th Grade",
//         address: "202 Cedar Street, Hilltown",
//       },
//       attendance: {
//         totalClasses: 100,
//         attended: 97,
//       },
//       result: {
//         subjects: [
//           { subject: "Mathematics", grade: "A" },
//           { subject: "Computer Science", grade: "A" },
//           { subject: "Physics", grade: "B" },
//         ],
//       },
//       report:
//         "Alex demonstrates exceptional skills in Computer Science and Mathematics.",
//       progressData: {
//         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//         datasets: [
//           {
//             label: "Progress",
//             data: [80, 85, 88, 90, 92, 95],
//             borderColor: "rgba(153, 102, 255, 1)",
//             backgroundColor: "rgba(153, 102, 255, 0.2)",
//           },
//         ],
//       },
//     },
//   ];

//   const [selectedStudent, setSelectedStudent] = useState(null);

//   const handleViewReport = (student) => {
//     setSelectedStudent(student);
//   };

//   const handleCloseModal = () => {
//     setSelectedStudent(null);
//   };

//   return (
//     <section className="container mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//         Student Progress
//       </h2>
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Name
//                 </th>
//                 <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Roll Number
//                 </th>
//                 <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                   Progress Report
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {students.map((student) => (
//                 <tr key={student.id} className="hover:bg-gray-50">
//                   <td className="py-4 px-6 whitespace-nowrap">
//                     {student.name}
//                   </td>
//                   <td className="py-4 px-6 whitespace-nowrap">
//                     {student.rollNumber}
//                   </td>
//                   <td className="py-4 px-6 whitespace-nowrap">
//                     <button
//                       onClick={() => handleViewReport(student)}
//                       className="text-indigo-600 hover:text-indigo-900 font-medium"
//                     >
//                       View Report
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {selectedStudent && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
//           <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <h3 className="text-2xl font-bold mb-4 text-gray-800">
//                 Report for {selectedStudent.name}
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <h4 className="text-lg font-semibold mb-2 text-gray-700">
//                     Personal Details
//                   </h4>
//                   <ul className="space-y-1 text-gray-600">
//                     <li>
//                       <span className="font-medium">Age:</span>{" "}
//                       {selectedStudent.personalDetails.age}
//                     </li>
//                     <li>
//                       <span className="font-medium">Class:</span>{" "}
//                       {selectedStudent.personalDetails.class}
//                     </li>
//                     <li>
//                       <span className="font-medium">Address:</span>{" "}
//                       {selectedStudent.personalDetails.address}
//                     </li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold mb-2 text-gray-700">
//                     Attendance
//                   </h4>
//                   <ul className="space-y-1 text-gray-600">
//                     <li>
//                       <span className="font-medium">Total Classes:</span>{" "}
//                       {selectedStudent.attendance.totalClasses}
//                     </li>
//                     <li>
//                       <span className="font-medium">Attended:</span>{" "}
//                       {selectedStudent.attendance.attended}
//                     </li>
//                     <li>
//                       <span className="font-medium">Attendance Rate:</span>{" "}
//                       {(
//                         (selectedStudent.attendance.attended /
//                           selectedStudent.attendance.totalClasses) *
//                         100
//                       ).toFixed(2)}
//                       %
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="mt-6">
//                 <h4 className="text-lg font-semibold mb-2 text-gray-700">
//                   Results
//                 </h4>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                   {selectedStudent.result.subjects.map((sub, index) => (
//                     <div key={index} className="bg-gray-100 p-3 rounded-lg">
//                       <p className="font-medium text-gray-700">{sub.subject}</p>
//                       <p className="text-2xl font-bold text-indigo-600">
//                         {sub.grade}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="mt-6">
//                 <h4 className="text-lg font-semibold mb-2 text-gray-700">
//                   Progress Chart
//                 </h4>
//                 <div className="bg-white p-4 rounded-lg shadow">
//                   <Line
//                     data={selectedStudent.progressData}
//                     options={{
//                       responsive: true,
//                       plugins: {
//                         legend: {
//                           position: "top",
//                         },
//                         title: {
//                           display: true,
//                           text: "Student Progress Over Time",
//                         },
//                       },
//                     }}
//                   />
//                 </div>
//               </div>
//               <div className="mt-6">
//                 <h4 className="text-lg font-semibold mb-2 text-gray-700">
//                   Teacher's Report
//                 </h4>
//                 <p className="text-gray-600">{selectedStudent.report}</p>
//               </div>
//               <button
//                 onClick={handleCloseModal}
//                 className="mt-8 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default StudentProgress;

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Header from "./Header";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StudentProgress = () => {
  // Dummy student data with PRN numbers
  const students = [
    {
      id: 1,
      name: "John Doe",
      prnNumber: "PRN123456",
      personalDetails: {
        age: 16,
        class: "10th Grade",
        address: "123 Elm Street",
      },
      attendance: {
        totalClasses: 50,
        attended: 45,
      },
      result: {
        subjects: [
          { subject: "Math", grade: "A" },
          { subject: "Science", grade: "B+" },
          { subject: "English", grade: "A-" },
        ],
      },
      progressData: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Progress",
            data: [80, 85, 90, 88, 92],
            borderColor: "#4A90E2",
            backgroundColor: "rgba(74, 144, 226, 0.2)",
          },
        ],
      },
      report:
        "John has shown significant improvement over the past few months.",
    },
    // Add more student data as needed
  ];

  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleViewReport = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
  };

  const generatePDF = () => {
    const element = document.getElementById("report-content");

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save(`${selectedStudent.name}_Report.pdf`);
    });
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Student Progress
      </h2>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  PRN Number
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Progress Report
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6 whitespace-nowrap">
                    {student.name}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    {student.prnNumber}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <button
                      onClick={() => handleViewReport(student)}
                      className="text-indigo-600 hover:text-indigo-900 font-medium"
                    >
                      View Report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6" id="report-content">
              <Header />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Report for {selectedStudent.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-700">
                    Personal Details
                  </h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>
                      <span className="font-medium">Age:</span>{" "}
                      {selectedStudent.personalDetails.age}
                    </li>
                    <li>
                      <span className="font-medium">Class:</span>{" "}
                      {selectedStudent.personalDetails.class}
                    </li>
                    <li>
                      <span className="font-medium">Address:</span>{" "}
                      {selectedStudent.personalDetails.address}
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-700">
                    Attendance
                  </h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>
                      <span className="font-medium">Total Classes:</span>{" "}
                      {selectedStudent.attendance.totalClasses}
                    </li>
                    <li>
                      <span className="font-medium">Attended:</span>{" "}
                      {selectedStudent.attendance.attended}
                    </li>
                    <li>
                      <span className="font-medium">Attendance Rate:</span>{" "}
                      {(
                        (selectedStudent.attendance.attended /
                          selectedStudent.attendance.totalClasses) *
                        100
                      ).toFixed(2)}
                      %
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-700">
                  Results
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedStudent.result.subjects.map((sub, index) => (
                    <div key={index} className="bg-gray-100 p-3 rounded-lg">
                      <p className="font-medium text-gray-700">{sub.subject}</p>
                      <p className="text-2xl font-bold text-indigo-600">
                        {sub.grade}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-700">
                  Progress Chart
                </h4>
                <div className="bg-white p-4 rounded-lg shadow">
                  <Line
                    data={selectedStudent.progressData}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: "top",
                        },
                        title: {
                          display: true,
                          text: "Student Progress Over Time",
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-700">
                  Teacher's Report
                </h4>
                <p className="text-gray-600">{selectedStudent.report}</p>
              </div>
            </div>

            <button
              onClick={generatePDF}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 ease-in-out"
            >
              Download PDF
            </button>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default StudentProgress;
