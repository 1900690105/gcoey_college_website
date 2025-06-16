// import { useState } from "react";

// const GradesAssessments = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [file, setFile] = useState(null);
//   const [assessments, setAssessments] = useState([]);
//   const [viewFileUrl, setViewFileUrl] = useState(null);

//   const toggleForm = () => {
//     setShowForm(!showForm);
//   };

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     if (file) {
//       const fileUrl = URL.createObjectURL(file);
//       const newAssessment = {
//         className: event.target[0].value,
//         assessmentName: event.target[1].value,
//         startDate: event.target[2].value,
//         endDate: event.target[3].value,
//         fileUrl,
//       };
//       setAssessments([...assessments, newAssessment]);
//       console.log("File uploaded:", file.name);
//     }
//     console.log("Form submitted");
//     setShowForm(false);
//   };

//   const handleViewFile = (fileUrl) => {
//     setViewFileUrl(fileUrl);
//   };

//   const handleCloseModal = () => {
//     setViewFileUrl(null);
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-3xl font-semibold mb-6">Assessments</h2>
//       <div className="bg-white shadow-md rounded-lg p-4">
//         <div className="flex justify-between mb-4">
//           <h3 className="text-xl font-semibold">Assessments</h3>
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             onClick={toggleForm}
//           >
//             {showForm ? "Close Form" : "Add New Assessment"}
//           </button>
//         </div>

//         {showForm && (
//           <form onSubmit={handleFormSubmit} className="mb-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-sm font-medium mb-1">Class</label>
//                 <input
//                   type="text"
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Assessment Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Start Date
//                 </label>
//                 <input
//                   type="date"
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   End Date
//                 </label>
//                 <input
//                   type="date"
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Upload Image or PDF
//                 </label>
//                 <input
//                   type="file"
//                   accept=".pdf,.jpg,.jpeg,.png"
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
//                   onChange={handleFileChange}
//                   required
//                 />
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//             >
//               Save Assessment
//             </button>
//           </form>
//         )}

//         <table className="w-full bg-white border border-gray-300 rounded-lg">
//           <thead>
//             <tr className="border-b border-gray-300">
//               <th className="p-4 text-left">Class</th>
//               <th className="p-4 text-left">Assessment Name</th>
//               <th className="p-4 text-left">Start Date</th>
//               <th className="p-4 text-left">End Date</th>
//               <th className="p-4 text-left">View</th>
//             </tr>
//           </thead>
//           <tbody>
//             {assessments.map((assessment, index) => (
//               <tr key={index} className="border-b border-gray-300">
//                 <td className="p-4">{assessment.className}</td>
//                 <td className="p-4">{assessment.assessmentName}</td>
//                 <td className="p-4">{assessment.startDate}</td>
//                 <td className="p-4">{assessment.endDate}</td>
//                 <td className="p-4">
//                   <button
//                     className="text-blue-500 hover:underline"
//                     onClick={() => handleViewFile(assessment.fileUrl)}
//                   >
//                     View
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {viewFileUrl && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl max-h-screen overflow-auto">
//               <button
//                 className="text-red-500 hover:underline mb-4"
//                 onClick={handleCloseModal}
//               >
//                 Close
//               </button>
//               {viewFileUrl.endsWith(".pdf") ? (
//                 <embed
//                   src={viewFileUrl}
//                   type="application/pdf"
//                   className="w-full h-screen"
//                 />
//               ) : (
//                 <img
//                   src={viewFileUrl}
//                   alt="Uploaded file"
//                   className="w-full h-auto"
//                 />
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GradesAssessments;
import { useState } from "react";

const GradesAssessments = () => {
  const [showForm, setShowForm] = useState(false);
  const [file, setFile] = useState(null);
  const [assessments, setAssessments] = useState([
    {
      id: 1,
      className: "CO6",
      assessmentName: "Midterm Exam",
      startDate: "2024-04-15",
      endDate: "2024-04-20",
      fileUrl: "https://example.com/midterm_exam.pdf", // Replace with actual URLs or local files for real use
    },
    {
      id: 2,
      className: "CO8",
      assessmentName: "AI Chapter 1",
      startDate: "2024-05-01",
      endDate: "2024-05-05",
      fileUrl: "https://example.com/ai_chapter1.pdf", // Replace with actual URLs or local files for real use
    },
  ]);
  const [viewFileUrl, setViewFileUrl] = useState(null);
  const [editAssessment, setEditAssessment] = useState(null);

  const toggleForm = () => {
    setShowForm(!showForm);
    setEditAssessment(null); // Clear edit mode when toggling form
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const className = event.target[0].value;
    const assessmentName = event.target[1].value;
    const startDate = event.target[2].value;
    const endDate = event.target[3].value;

    if (file) {
      const fileUrl = URL.createObjectURL(file);

      if (editAssessment) {
        // Update existing assessment
        setAssessments(
          assessments.map((assessment) =>
            assessment.id === editAssessment.id
              ? {
                  ...editAssessment,
                  className,
                  assessmentName,
                  startDate,
                  endDate,
                  fileUrl,
                }
              : assessment
          )
        );
        setEditAssessment(null);
      } else {
        // Add new assessment
        const newAssessment = {
          id: Date.now(),
          className,
          assessmentName,
          startDate,
          endDate,
          fileUrl,
        };
        setAssessments([...assessments, newAssessment]);
      }
    }

    setShowForm(false);
  };

  const handleEdit = (assessment) => {
    setEditAssessment(assessment);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setAssessments(assessments.filter((assessment) => assessment.id !== id));
  };

  const handleViewFile = (fileUrl) => {
    setViewFileUrl(fileUrl);
  };

  const handleCloseModal = () => {
    setViewFileUrl(null);
  };

  const classes = ["CO1", "CO2", "CO3", "CO4", "CO5", "CO6", "CO7", "CO8"];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6">Assessments</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between mb-4">
          <h3 className="text-xl font-semibold">Assessments</h3>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={toggleForm}
          >
            {showForm
              ? "Close Form"
              : editAssessment
              ? "Edit Assessment"
              : "Add New Assessment"}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleFormSubmit} className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Class</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  defaultValue={editAssessment ? editAssessment.className : ""}
                  required
                >
                  {classes.map((className, index) => (
                    <option key={index} value={className}>
                      {className}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Assessment Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  defaultValue={
                    editAssessment ? editAssessment.assessmentName : ""
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  defaultValue={editAssessment ? editAssessment.startDate : ""}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  defaultValue={editAssessment ? editAssessment.endDate : ""}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Upload Image or PDF
                </label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              {editAssessment ? "Update Assessment" : "Save Assessment"}
            </button>
          </form>
        )}

        {classes.map((className) => (
          <div key={className} className="mb-6">
            <h4 className="text-lg font-semibold mb-2">{className}</h4>
            <table className="w-full bg-white border border-gray-300 rounded-lg">
              <thead>
                <tr className="border-b border-gray-300 bg-gray-200">
                  <th className="p-4 text-left">Class</th>
                  <th className="p-4 text-left">Assessment Name</th>
                  <th className="p-4 text-left">Start Date</th>
                  <th className="p-4 text-left">End Date</th>
                  <th className="p-4 text-left">View</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {assessments
                  .filter((assessment) => assessment.className === className)
                  .map((assessment) => (
                    <tr
                      key={assessment.id}
                      className="border-b border-gray-300"
                    >
                      <td className="p-4">{assessment.className}</td>
                      <td className="p-4">{assessment.assessmentName}</td>
                      <td className="p-4">{assessment.startDate}</td>
                      <td className="p-4">{assessment.endDate}</td>
                      <td className="p-4">
                        <button
                          className="text-blue-500 hover:underline"
                          onClick={() => handleViewFile(assessment.fileUrl)}
                        >
                          View
                        </button>
                      </td>
                      <td className="p-4 flex space-x-2">
                        <button
                          className="text-yellow-500 hover:underline"
                          onClick={() => handleEdit(assessment)}
                        >
                          Edit
                        </button>
                        <button
                          className="text-red-500 hover:underline"
                          onClick={() => handleDelete(assessment.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ))}

        {viewFileUrl && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl max-h-screen overflow-auto">
              <button
                className="text-red-500 hover:underline mb-4"
                onClick={handleCloseModal}
              >
                Close
              </button>
              {viewFileUrl.endsWith(".pdf") ? (
                <embed
                  src={viewFileUrl}
                  type="application/pdf"
                  className="w-full h-screen"
                />
              ) : (
                <img
                  src={viewFileUrl}
                  alt="Uploaded file"
                  className="w-full h-auto"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GradesAssessments;
