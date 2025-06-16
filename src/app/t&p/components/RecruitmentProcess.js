// components/RecruitmentProcess.js
import React from "react";

const RecruitmentProcess = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="container mx-auto px-8 text-white">
        <h2 className="text-4xl font-bold text-center mb-6">
          Join Us in Shaping the Future
        </h2>
        <p className="text-lg text-center mb-12">
          Our recruitment process is designed to connect talented individuals
          with exciting opportunities.
        </p>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Steps to Collaborate with Us
          </h3>
          <ol className="space-y-4">
            <li className="border-l-4 pl-4 border-blue-500">
              <h4 className="font-medium text-gray-700">
                Step 1: Reach Out to Us
              </h4>
              <p className="text-gray-600">
                Connect with our placement office to express your interest in
                recruiting students.
              </p>
            </li>
            <li className="border-l-4 pl-4 border-blue-500">
              <h4 className="font-medium text-gray-700">
                Step 2: Share Job Details
              </h4>
              <p className="text-gray-600">
                Provide us with details about the available positions and your
                company.
              </p>
            </li>
            <li className="border-l-4 pl-4 border-blue-500">
              <h4 className="font-medium text-gray-700">
                Step 3: Engage in the Recruitment Process
              </h4>
              <p className="text-gray-600">
                Experience our streamlined process with interviews and
                recruitment drives.
              </p>
            </li>
            <li className="border-l-4 pl-4 border-blue-500">
              <h4 className="font-medium text-gray-700">
                Step 4: Finalize Your Hires
              </h4>
              <p className="text-gray-600">
                Complete the hiring process and welcome new talents to your
                team.
              </p>
            </li>
          </ol>
          <p className="mt-6 text-center text-gray-700">
            For further information, please reach out to us at{" "}
            <a
              href="mailto:placement@college.edu"
              className="text-blue-500 font-semibold hover:underline"
            >
              placement@college.edu
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentProcess;
