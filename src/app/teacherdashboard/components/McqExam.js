import React, { useState } from "react";

const AddQuestionPaper = () => {
  const [examDetails, setExamDetails] = useState({
    examName: "",
    subject: "",
    teacherName: "",
    examDate: "", // Field for exam date
    examTime: "", // Field for exam duration
    examStartTime: "", // Field for exam start time
  });

  const [questions, setQuestions] = useState([]);

  const handleExamDetailsChange = (event) => {
    setExamDetails({ ...examDetails, [event.target.name]: event.target.value });
  };

  const handleQuestionTypeChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index].type = event.target.value;
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index][event.target.name] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, event) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleCorrectAnswerChange = (qIndex, event) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].correctAnswer = event.target.value;
    setQuestions(newQuestions);
  };

  const addNewQuestion = () => {
    setQuestions([
      ...questions,
      {
        type: "MCQ", // Default to MCQ, can be changed later
        question: "",
        options: ["", "", "", ""], // For MCQ type
        correctAnswer: "", // For both MCQ and True/False
      },
    ]);
  };

  const removeQuestion = (index) => {
    const newQuestions = questions.filter((_, qIndex) => qIndex !== index);
    setQuestions(newQuestions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ examDetails, questions });
    // Handle the submission logic here (e.g., sending data to the server)
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Add Question Paper</h2>
        <div className="lg:flex">
          <div className="lg:w-2/3 pr-4">
            <form onSubmit={handleSubmit}>
              {/* Exam Details Section */}
              <div className="mb-6 ">
                <label className="block mb-2 text-lg font-semibold">
                  Exam Name
                </label>
                <input
                  type="text"
                  name="examName"
                  value={examDetails.examName}
                  onChange={handleExamDetailsChange}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                  placeholder="Enter the exam name"
                  required
                />

                <label className="block mb-2 text-lg font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={examDetails.subject}
                  onChange={handleExamDetailsChange}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                  placeholder="Enter the subject"
                  required
                />

                <label className="block mb-2 text-lg font-semibold">
                  Teacher's Name
                </label>
                <input
                  type="text"
                  name="teacherName"
                  value={examDetails.teacherName}
                  onChange={handleExamDetailsChange}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                  placeholder="Enter the teacher's name"
                  required
                />

                <label className="block mb-2 text-lg font-semibold">
                  Exam Date
                </label>
                <input
                  type="date"
                  name="examDate"
                  value={examDetails.examDate}
                  onChange={handleExamDetailsChange}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                  required
                />

                <label className="block mb-2 text-lg font-semibold">
                  Exam Start Time
                </label>
                <input
                  type="time"
                  name="examStartTime"
                  value={examDetails.examStartTime}
                  onChange={handleExamDetailsChange}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                  required
                />

                <label className="block mb-2 text-lg font-semibold">
                  Exam Duration (in minutes)
                </label>
                <input
                  type="number"
                  name="examTime"
                  value={examDetails.examTime}
                  onChange={handleExamDetailsChange}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                  placeholder="Enter the exam duration"
                  required
                />
              </div>

              {/* Add New Question Button */}
              <button
                type="button"
                onClick={addNewQuestion}
                className="bg-blue-500 text-white p-2 rounded-md mb-6"
              >
                Add New Question
              </button>

              {/* Questions Section (Dynamic Rendering) */}
              {questions.map((question, qIndex) => (
                <div
                  key={qIndex}
                  className="mb-6 p-4 border border-gray-300 rounded-md"
                >
                  <label className="block mb-2 text-lg font-semibold">
                    Question {qIndex + 1}
                  </label>

                  {/* Question Type Selector */}
                  <select
                    value={question.type}
                    onChange={(event) =>
                      handleQuestionTypeChange(qIndex, event)
                    }
                    className="mb-4 p-2 border border-gray-300 rounded-md w-full"
                  >
                    <option value="MCQ">Multiple Choice</option>
                    <option value="True/False">True/False</option>
                  </select>

                  <textarea
                    name="question"
                    value={question.question}
                    onChange={(event) => handleQuestionChange(qIndex, event)}
                    className="w-full p-2 border border-gray-300 rounded-md mb-4"
                    placeholder="Enter the question here"
                    required
                  />

                  {/* Conditional Rendering Based on Question Type */}
                  {question.type === "MCQ" ? (
                    <>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {question.options.map((option, oIndex) => (
                          <input
                            key={oIndex}
                            type="text"
                            value={option}
                            onChange={(event) =>
                              handleOptionChange(qIndex, oIndex, event)
                            }
                            className="p-2 border border-gray-300 rounded-md"
                            placeholder={`Option ${String.fromCharCode(
                              65 + oIndex
                            )}`}
                            required
                          />
                        ))}
                      </div>
                      <label className="block mb-2 text-lg font-semibold">
                        Correct Answer
                      </label>
                      <select
                        value={question.correctAnswer}
                        onChange={(event) =>
                          handleCorrectAnswerChange(qIndex, event)
                        }
                        className="p-2 border border-gray-300 rounded-md w-full"
                        required
                      >
                        <option value="">Select Correct Answer</option>
                        {question.options.map((_, oIndex) => (
                          <option
                            key={oIndex}
                            value={String.fromCharCode(65 + oIndex)}
                          >
                            {String.fromCharCode(65 + oIndex)}
                          </option>
                        ))}
                      </select>
                    </>
                  ) : (
                    <>
                      <label className="block mb-2 text-lg font-semibold">
                        Correct Answer
                      </label>
                      <select
                        value={question.correctAnswer}
                        onChange={(event) =>
                          handleCorrectAnswerChange(qIndex, event)
                        }
                        className="p-2 border border-gray-300 rounded-md w-full"
                        required
                      >
                        <option value="">Select Correct Answer</option>
                        <option value="True">True</option>
                        <option value="False">False</option>
                      </select>
                    </>
                  )}

                  {/* Remove Question Button */}
                  <button
                    type="button"
                    onClick={() => removeQuestion(qIndex)}
                    className="bg-red-500 text-white p-2 rounded-md mt-4"
                  >
                    Remove Question
                  </button>
                </div>
              ))}

              {/* Submit Button */}
              {questions.length > 0 && (
                <button
                  type="submit"
                  className="bg-green-500 text-white p-2 rounded-md"
                >
                  Submit Question Paper
                </button>
              )}
            </form>
          </div>

          <div className="lg:w-1/3 pl-4 border-l border-gray-300">
            <h3 className="text-xl font-semibold mb-4">Preview</h3>
            {questions.length === 0 && (
              <p className="text-gray-600">No questions added yet.</p>
            )}
            {questions.map((question, index) => (
              <div
                key={index}
                className="mb-4 p-4 border border-gray-200 rounded-md"
              >
                <p className="font-semibold mb-2">
                  Q{index + 1}: {question.question}
                </p>
                {question.type === "MCQ" ? (
                  <ul className="list-disc pl-5">
                    {question.options.map((option, oIndex) => (
                      <li key={oIndex}>
                        {String.fromCharCode(65 + oIndex)}: {option}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{question.correctAnswer === "True" ? "True/False" : ""}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQuestionPaper;
