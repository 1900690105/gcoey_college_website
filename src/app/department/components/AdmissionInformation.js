import { FaUserCheck, FaClipboardList, FaCalendarAlt } from "react-icons/fa";

const AdmissionInformation = () => {
  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-4xl font-semibold text-center mb-12">
          Admission Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaUserCheck className="text-4xl text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold">Eligibility Criteria</h3>
            </div>
            <p>
              Find out the requirements for applying to our undergraduate,
              postgraduate, and doctoral programs.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaClipboardList className="text-4xl text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold">Application Process</h3>
            </div>
            <p>
              Follow these steps to apply for our programs. Make sure to check
              all the requirements and deadlines.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="text-4xl text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold">Important Dates</h3>
            </div>
            <p>
              Keep track of the key dates for applications, exams, and other
              important events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionInformation;
