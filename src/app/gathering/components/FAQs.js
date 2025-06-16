// components/FAQs.js
import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the dress code?",
      answer:
        "The dress code for the event is formal attire. We recommend suits or cocktail dresses. If you have any specific questions about appropriate attire, please don't hesitate to contact our event organizers.",
    },
    {
      question: "Is there parking available?",
      answer:
        "Yes, there is ample parking available at the venue. We offer both self-parking and valet services. The parking area is well-lit and secure. If you require handicap parking, please let us know in advance so we can reserve a spot for you.",
    },
    {
      question: "Can I bring a guest?",
      answer:
        "Yes, each registered participant is welcome to bring one guest. Please ensure that you indicate this during the registration process so we can make appropriate arrangements for seating and catering. Additional guests beyond one may be accommodated for an extra fee, subject to availability.",
    },
    {
      question: "What time does the event start and end?",
      answer:
        "The event is scheduled to begin at 6:00 PM with a welcome reception. The main program will start at 7:00 PM and is expected to conclude around 10:00 PM. We recommend arriving at least 30 minutes early to allow time for check-in and seating.",
    },
    {
      question: "Are dietary restrictions accommodated?",
      answer:
        "Absolutely! We strive to accommodate various dietary needs. During the registration process, you'll have the opportunity to indicate any dietary restrictions or preferences. Our catering team will ensure that suitable options are available for you.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isActive={activeIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Don't see your question here? Feel free to reach out to us directly.
          </p>
          <a
            href="mailto:info@eventname.com"
            className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ faq, isActive, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
        onClick={onClick}
      >
        <span className="text-lg font-semibold text-gray-800">
          {faq.question}
        </span>
        <span
          className={`transform transition-transform duration-300 ${
            isActive ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      {isActive && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQs;
