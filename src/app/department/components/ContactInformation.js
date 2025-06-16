import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaGraduationCap,
  FaInfoCircle,
} from "react-icons/fa";

const ContactInformation = () => {
  const contactItems = [
    {
      icon: FaMapMarkerAlt,
      title: "Campus Location",
      content: "Computer Science Building, Room 205",
      subContent: "Main Campus, University District",
    },
    {
      icon: FaPhoneAlt,
      title: "Phone Numbers",
      content: "+1 (555) 123-4567",
      subContent: "Academic Office: +1 (555) 123-4568",
    },
    {
      icon: FaEnvelope,
      title: "Email Contacts",
      content: "cs.department@university.edu",
      subContent: "admissions.cs@university.edu",
    },
    {
      icon: FaClock,
      title: "Office Hours",
      content: "Monday - Friday: 8:00 AM - 6:00 PM",
      subContent: "Saturday: 9:00 AM - 2:00 PM",
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center mb-4">
            <FaGraduationCap className="text-3xl sm:text-4xl text-blue-600 mr-3" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
              Contact Information
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our Computer Science Department. We're here to
            help with your academic journey.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Details - Takes 2 columns on XL screens */}
          <div className="xl:col-span-2 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {contactItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="text-xl sm:text-2xl text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-base sm:text-lg font-medium text-gray-700 mb-1 break-words">
                          {item.content}
                        </p>
                        <p className="text-sm sm:text-base text-gray-500 break-words">
                          {item.subContent}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info Card */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 sm:p-8 rounded-2xl text-white shadow-lg">
              <div className="flex items-start space-x-4">
                <FaInfoCircle className="text-2xl sm:text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                    Important Notice
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-90">
                    For urgent matters outside office hours, please email us and
                    we'll respond within 24 hours. Virtual office hours are
                    available via Zoom - check the student portal for links.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section - Takes 1 column on XL screens */}
          <div className="xl:col-span-1">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 h-fit">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center">
                Find Us on Campus
              </h3>
              <div className="relative overflow-hidden rounded-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.9261716846137!2d-122.084249584692!3d37.42199977982595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5a6f869ffdb%3A0x2fef5e2c2c3af6ec!2sGoogleplex!5e0!3m2!1sen!2sus!4v1629045105507!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  className="w-full h-64 sm:h-80 lg:h-96 rounded-xl border-0"
                  allowFullScreen=""
                  loading="lazy"
                  title="Campus Location Map"
                ></iframe>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Parking:</strong> Visitor parking available in Lot C.
                  <br />
                  <strong>Public Transit:</strong> Bus routes 12, 45 stop
                  nearby.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 lg:mt-16">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Schedule Appointment
              </button>
              <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Academic Advising
              </button>
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                Course Information
              </button>
              <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Student Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;

// import {
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaClock,
// } from "react-icons/fa";

// const ContactInformation = () => {
//   return (
//     <section id="contact" className="py-20 bg-gray-100">
//       <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
//         <h2 className="text-4xl font-semibold mb-12">Contact Information</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="flex items-start mb-4">
//               <FaMapMarkerAlt className="text-4xl text-blue-500 mr-3" />
//               <div>
//                 <h3 className="text-2xl font-semibold">Department Office</h3>
//                 <p>Building A, Room 101</p>
//               </div>
//             </div>
//             <div className="flex items-start mb-4">
//               <FaPhoneAlt className="text-4xl text-blue-500 mr-3" />
//               <div>
//                 <h3 className="text-2xl font-semibold">Phone</h3>
//                 <p>+123 456 7890</p>
//               </div>
//             </div>
//             <div className="flex items-start mb-4">
//               <FaEnvelope className="text-4xl text-blue-500 mr-3" />
//               <div>
//                 <h3 className="text-2xl font-semibold">Email</h3>
//                 <p>csdept@yourcollege.edu</p>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <FaClock className="text-4xl text-blue-500 mr-3" />
//               <div>
//                 <h3 className="text-2xl font-semibold">Office Hours</h3>
//                 <p>Mon-Fri, 9 AM - 5 PM</p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.9261716846137!2d-122.084249584692!3d37.42199977982595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5a6f869ffdb%3A0x2fef5e2c2c3af6ec!2sGoogleplex!5e0!3m2!1sen!2sus!4v1629045105507!5m2!1sen!2sus"
//               width="600"
//               height="450"
//               className="w-full h-64 rounded-lg"
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactInformation;
