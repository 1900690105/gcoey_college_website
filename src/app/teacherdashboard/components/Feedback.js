import React, { useState, useEffect } from "react";

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    // Dummy data representing feedback
    const dummyFeedbacks = [
      {
        studentName: "John Doe",
        content: "Great teaching style! Really clear and concise.",
        rating: 5,
        date: "2024-08-01",
      },
      {
        studentName: "Jane Smith",
        content: "Very helpful with assignments.",
        rating: 4,
        date: "2024-07-25",
      },
      {
        studentName: "Alice Johnson",
        content: "Sometimes hard to follow, but overall good.",
        rating: 3,
        date: "2024-07-20",
      },
      {
        studentName: "Michael Brown",
        content: "Excellent teacher. Really enjoys teaching.",
        rating: 5,
        date: "2024-07-15",
      },
    ];

    // Set the feedbacks to the state
    setFeedbacks(dummyFeedbacks);

    // Calculate average rating
    const avgRating =
      dummyFeedbacks.reduce((sum, fb) => sum + fb.rating, 0) /
      dummyFeedbacks.length;
    setAverageRating(avgRating);
  }, []);

  return (
    <div className="p-6">
      <header className="text-2xl font-bold mb-4">Your Feedback</header>
      <div className="mb-6">
        <h2 className="text-lg font-medium">
          Average Rating: {averageRating.toFixed(1)} / 5
        </h2>
        <p className="text-sm text-gray-600">
          Total Feedback Received: {feedbacks.length}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Student Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Feedback
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Rating
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-700">
                  {feedback.studentName}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-700">
                  {feedback.content}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-700">
                  <span className="text-yellow-500">
                    {"★".repeat(feedback.rating)}{" "}
                    <span className="text-gray-500">{5 - feedback.rating}</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-700">
                  {feedback.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeedbackPage;
