// components/FAQs.js
"use client";
import React, { useState } from "react";

const FAQs = () => {
  const faqData = [
    {
      question: "How can I apply for training programs?",
      answer:
        "You can apply through the training programs section on our website or visit our office for more details.",
    },
    {
      question: "What companies do we work with for placements?",
      answer:
        "We have partnerships with numerous leading companies across various sectors. Please check the Placement Services section for more details.",
    },
    {
      question: "Are there any fees for the training programs?",
      answer:
        "Yes, some training programs may have fees associated with them. Please refer to the specific program details for more information.",
    },
    {
      question: "What is the duration of the training programs?",
      answer:
        "The duration of our training programs varies depending on the specific course. Most programs range from a few weeks to several months.",
    },
    {
      question: "Do you provide placement assistance after training?",
      answer:
        "Yes, we provide placement assistance to all our trainees, guiding you throughout the job application process and connecting you with potential employers.",
    },
    {
      question:
        "What qualifications do I need to enroll in a training program?",
      answer:
        "The qualifications required vary by program. Some courses may require specific educational backgrounds or skills, while others are open to all.",
    },
    {
      question: "Will I receive a certificate after completing the training?",
      answer:
        "Yes, upon successful completion of the training program, you will receive a certificate that acknowledges your skills and knowledge.",
    },
    {
      question: "Are the training programs available online?",
      answer:
        "Yes, we offer both in-person and online training programs to make learning more accessible for everyone.",
    },
    {
      question: "How does the placement process work?",
      answer:
        "After completing your training, you will have access to our placement services, including resume building, interview preparation, and job referrals to our partner companies.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-black text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="bg-white rounded-lg shadow-lg">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b">
              <div
                className="flex justify-between items-center p-4 hover:bg-gray-100 transition duration-300 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span
                  className={`transform transition-transform duration-200 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15l-5-5h10l-5 5z"
                    />
                  </svg>
                </span>
              </div>
              {activeIndex === index && (
                <p className="p-4 text-gray-700 text-opacity-75 transition duration-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
