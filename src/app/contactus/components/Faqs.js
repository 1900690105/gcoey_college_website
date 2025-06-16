// components/Faqs.js
"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqsData = [
  {
    question: "How do I apply to the college?",
    answer:
      "You can apply through our online application portal. Visit our Admissions page for step-by-step instructions and to access the application form.",
  },
  {
    question: "What are the tuition fees?",
    answer:
      "Tuition fees vary depending on the program. For detailed information, please visit our Tuition and Fees page. Financial aid and scholarship options are also available for eligible students.",
  },
  {
    question: "What housing options are available for students?",
    answer:
      "We offer various on-campus housing options, including dormitories and apartment-style living. Off-campus housing resources are also available through our Housing Office.",
  },
  {
    question: "How can I schedule a campus tour?",
    answer:
      "You can schedule a campus tour online through our Visit Us page. We offer both in-person and virtual tour options to accommodate different needs.",
  },
  {
    question: "What academic support services are available?",
    answer:
      "We provide a range of academic support services, including tutoring, writing centers, academic advising, and study skills workshops. Visit our Academic Support page for more information.",
  },
];

const Faqs = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqsData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
      <button
        className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-800">{question}</span>
        {isOpen ? (
          <FaChevronUp className="text-blue-500" />
        ) : (
          <FaChevronDown className="text-blue-500" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Faqs;
