// components/DepartmentContacts.js
import {
  FaPhone,
  FaEnvelope,
  FaUserGraduate,
  FaHandsHelping,
} from "react-icons/fa";

const departments = [
  {
    name: "Admissions Office",
    icon: <FaUserGraduate className="text-3xl text-blue-500" />,
    phone: "(123) 456-7891",
    email: "admissions@college.edu",
    description: "For inquiries about application process and enrollment.",
  },
  {
    name: "Support Services",
    icon: <FaHandsHelping className="text-3xl text-green-500" />,
    phone: "(123) 456-7892",
    email: "support@college.edu",
    description: "For student support, counseling, and general assistance.",
  },
  {
    name: "Financial Aid",
    icon: <FaUserGraduate className="text-3xl text-purple-500" />,
    phone: "(123) 456-7893",
    email: "finaid@college.edu",
    description:
      "For questions about scholarships, grants, and financial assistance.",
  },
  {
    name: "IT Help Desk",
    icon: <FaHandsHelping className="text-3xl text-red-500" />,
    phone: "(123) 456-7894",
    email: "ithelp@college.edu",
    description: "For technical support and IT-related issues.",
  },
];

const DepartmentContacts = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Department Contacts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, index) => (
            <DepartmentCard key={index} {...dept} />
          ))}
        </div>
      </div>
    </div>
  );
};

const DepartmentCard = ({ name, icon, phone, email, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4 text-gray-800">{name}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center mb-2">
        <FaPhone className="text-gray-500 mr-2" />
        <p className="text-gray-700">{phone}</p>
      </div>
      <div className="flex items-center">
        <FaEnvelope className="text-gray-500 mr-2" />
        <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
          {email}
        </a>
      </div>
    </div>
  );
};

export default DepartmentContacts;
