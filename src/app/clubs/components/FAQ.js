"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How do I join a club?",
    answer:
      "You can join a club by contacting the club president or attending their meetings.",
  },
  {
    question: "Can I start my own club?",
    answer:
      "Yes! Reach out to the student activities office for more information.",
  },
  {
    question: "What are the benefits of joining a club?",
    answer:
      "Joining a club allows you to meet new people, develop new skills, and enhance your college experience.",
  },
  {
    question: "Are there any fees to join a club?",
    answer:
      "Some clubs may have membership fees, but many are free to join. Contact the club for more details.",
  },
  {
    question: "How often do clubs meet?",
    answer:
      "Meeting schedules vary by club. Check with the club president or their website for meeting times.",
  },
  {
    question: "Can I join multiple clubs?",
    answer:
      "Absolutely! You can join as many clubs as you like, as long as you can manage your time effectively.",
  },
  {
    question: "How can I find out about upcoming club events?",
    answer:
      "Club events are usually posted on the college's event calendar, social media, or via club newsletters.",
  },
  {
    question: "What should I do if I have a suggestion for a club?",
    answer:
      "You can share your suggestions with the club president or at a club meeting. Clubs are always open to new ideas.",
  },
  {
    question: "Are there online clubs I can join?",
    answer:
      "Yes, some clubs offer virtual participation. Contact the club for details on how to join online.",
  },
  {
    question: "Who can I contact if I have more questions about clubs?",
    answer:
      "You can contact the student activities office or the club president for more information.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 px-4 md:px-16">
      <h2 className="text-3xl text-center font-bold mb-8 text-blue-600">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl font-bold">{faq.question}</h3>
              <span
                className={`transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l4-4 4 4M8 15l4 4 4-4"
                  />
                </svg>
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
