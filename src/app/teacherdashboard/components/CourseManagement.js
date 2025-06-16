import { useState } from "react";

const CourseManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [editSubject, setEditSubject] = useState(null);
  const [subjects, setSubjects] = useState([
    {
      id: 1,
      className: "CO1",
      subjectName: "ML",
      type: "PR",
      numLectures: 5,
      duration: "3 months",
    },
    // Add more subjects here
  ]);

  const toggleForm = () => {
    setShowForm(!showForm);
    setEditSubject(null); // Clear edit mode when toggling form
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const className = event.target[0].value;
    const subjectName = event.target[1].value;
    const type = event.target[2].value;
    const numLectures = event.target[3].value;
    const duration = event.target[4].value;

    if (editSubject) {
      // Update existing subject
      setSubjects(
        subjects.map((subject) =>
          subject.id === editSubject.id
            ? {
                ...editSubject,
                className,
                subjectName,
                type,
                numLectures,
                duration,
              }
            : subject
        )
      );
      setEditSubject(null);
    } else {
      // Add new subject
      const newSubject = {
        id: Date.now(),
        className,
        subjectName,
        type,
        numLectures,
        duration,
      };
      setSubjects([...subjects, newSubject]);
    }
    setShowForm(false);
  };

  const handleEdit = (subject) => {
    setEditSubject(subject);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setSubjects(subjects.filter((subject) => subject.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6">Subject Management</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between mb-4">
          <h3 className="text-xl font-semibold">Subject</h3>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={toggleForm}
          >
            {showForm
              ? "Close Form"
              : editSubject
              ? "Edit Subject"
              : "Add New Subject"}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleFormSubmit} className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Class</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  defaultValue={editSubject ? editSubject.className : ""}
                  required
                >
                  <option value="" disabled>
                    Select Class
                  </option>
                  <option value="CO1">CO1</option>
                  <option value="CO2">CO2</option>
                  <option value="CO3">CO3</option>
                  <option value="CO4">CO4</option>
                  <option value="CO5">CO5</option>
                  <option value="CO6">CO6</option>
                  <option value="CO7">CO7</option>
                  <option value="CO8">CO8</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Subject Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter subject name"
                  defaultValue={editSubject ? editSubject.subjectName : ""}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Type (TH/PR)
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  defaultValue={editSubject ? editSubject.type : ""}
                  required
                >
                  <option value="" disabled>
                    Select Type
                  </option>
                  <option value="TH">TH</option>
                  <option value="PR">PR</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  No. of Lectures
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter number of lectures"
                  defaultValue={editSubject ? editSubject.numLectures : ""}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Duration
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter duration"
                  defaultValue={editSubject ? editSubject.duration : ""}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              {editSubject ? "Update Subject" : "Save Subject"}
            </button>
          </form>
        )}

        <table className="w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-4 text-left text-lg">Class</th>
              <th className="p-4 text-left text-lg">Subject</th>
              <th className="p-4 text-left text-lg">TH/PR</th>
              <th className="p-4 text-left text-lg">No. of Lect</th>
              <th className="p-4 text-left text-lg">Duration</th>
              <th className="p-4 text-left text-lg">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.id} className="border-b border-gray-300">
                <td className="p-4 text-lg">{subject.className}</td>
                <td className="p-4 text-lg">{subject.subjectName}</td>
                <td className="p-4 text-lg">{subject.type}</td>
                <td className="p-4 text-lg">{subject.numLectures}</td>
                <td className="p-4 text-lg">{subject.duration}</td>
                <td className="p-4 text-lg flex space-x-2">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => handleEdit(subject)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleDelete(subject.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseManagement;
