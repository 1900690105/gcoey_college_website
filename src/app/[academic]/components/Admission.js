import React from "react";
import {
  CheckCircle,
  Calendar,
  DollarSign,
  FileText,
  Users,
  Clock,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const AdmissionPage = () => {
  const admissionSteps = [
    {
      step: 1,
      title: "Application Submission",
      description: "Submit your online application with required documents",
      timeline: "March 1 - June 30",
    },
    {
      step: 2,
      title: "Document Verification",
      description:
        "Upload and submit all academic transcripts and certificates",
      timeline: "Within 7 days of application",
    },
    {
      step: 3,
      title: "Entrance Examination",
      description:
        "Appear for college entrance test or submit standardized test scores",
      timeline: "July 1 - July 15",
    },
    {
      step: 4,
      title: "Merit List Publication",
      description: "Check your name in the published merit list",
      timeline: "July 20",
    },
    {
      step: 5,
      title: "Counseling & Seat Allocation",
      description: "Attend counseling session for course and seat selection",
      timeline: "July 25 - August 5",
    },
    {
      step: 6,
      title: "Fee Payment & Confirmation",
      description: "Pay admission fees and confirm your seat",
      timeline: "Within 3 days of seat allocation",
    },
  ];

  const feeStructure = [
    {
      program: "Engineering (B.Tech)",
      tuitionFee: "₹9,96,000",
      labFee: "₹1,66,000",
      libraryFee: "₹41,500",
      total: "₹12,03,500",
    },
    {
      program: "Business Administration (MBA)",
      tuitionFee: "₹12,45,000",
      labFee: "₹1,24,500",
      libraryFee: "₹41,500",
      total: "₹13,11,000",
    },
    {
      program: "Computer Science (B.Sc)",
      tuitionFee: "₹8,30,000",
      labFee: "₹2,07,500",
      libraryFee: "₹41,500",
      total: "₹10,79,000",
    },
    {
      program: "Arts & Humanities (B.A)",
      tuitionFee: "₹6,64,000",
      labFee: "₹41,500",
      libraryFee: "₹41,500",
      total: "₹7,47,000",
    },
  ];

  const guidelines = [
    {
      category: "Eligibility Criteria",
      items: [
        "Minimum 60% marks in 12th grade or equivalent",
        "Age limit: 17-25 years for undergraduate programs",
        "Valid entrance exam scores (SAT/ACT/JEE/local entrance)",
        "English proficiency certification for international students",
      ],
    },
    {
      category: "Required Documents",
      items: [
        "Official academic transcripts from previous institutions",
        "Birth certificate or age proof",
        "Identity proof (Passport/Driver's License/National ID)",
        "Character certificate from previous institution",
        "Medical fitness certificate",
        "Passport-size photographs (6 copies)",
      ],
    },
    {
      category: "Application Guidelines",
      items: [
        "Fill the application form completely and accurately",
        "Upload clear, legible copies of all documents",
        "Pay application fee before the deadline",
        "Keep multiple copies of submitted documents",
        "Check email regularly for updates and notifications",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our prestigious institution and embark on a journey of academic
            excellence and personal growth
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Apply Now
          </button>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="container mx-auto px-4 -mt-10 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Application Deadline</h3>
            <p className="text-gray-600">June 30, 2025</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Available Seats</h3>
            <p className="text-gray-600">2,500+ Seats</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <DollarSign className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Scholarships</h3>
            <p className="text-gray-600">Up to 75% Merit-based</p>
          </div>
        </div>
      </div>

      {/* Admission Process */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Admission Process
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {admissionSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <div className="flex items-center text-sm text-blue-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {step.timeline}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fee Structure */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Fee Structure
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Program</th>
                  <th className="px-6 py-4 text-right">Tuition Fee</th>
                  <th className="px-6 py-4 text-right">Lab Fee</th>
                  <th className="px-6 py-4 text-right">Library Fee</th>
                  <th className="px-6 py-4 text-right">Total Annual Fee</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-blue-50 transition duration-200`}
                  >
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {fee.program}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-600">
                      {fee.tuitionFee}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-600">
                      {fee.labFee}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-600">
                      {fee.libraryFee}
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-blue-600">
                      {fee.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              *Additional fees may apply for hostel, transportation, and other
              facilities
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Download Detailed Fee Structure
            </button>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Admission Guidelines
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {guidelines.map((guideline, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-blue-600" />
                {guideline.category}
              </h3>
              <ul className="space-y-3">
                {guideline.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Important Dates */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Important Dates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 rounded-lg p-4 mb-4">
                <Calendar className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="font-semibold mb-2">Application Opens</h3>
              <p className="text-gray-300">March 1, 2025</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 rounded-lg p-4 mb-4">
                <FileText className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="font-semibold mb-2">Application Deadline</h3>
              <p className="text-gray-300">June 30, 2025</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 rounded-lg p-4 mb-4">
                <Users className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="font-semibold mb-2">Entrance Exam</h3>
              <p className="text-gray-300">July 1-15, 2025</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 rounded-lg p-4 mb-4">
                <CheckCircle className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="font-semibold mb-2">Classes Begin</h3>
              <p className="text-gray-300">August 15, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Need Help?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <p className="text-gray-600">Mon-Fri: 9AM-6PM</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">admissions@college.edu</p>
            <p className="text-gray-600">info@college.edu</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600">123 College Street</p>
            <p className="text-gray-600">Education City, EC 12345</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards your bright future. Apply now and join
            thousands of successful graduates.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Start Application
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionPage;
