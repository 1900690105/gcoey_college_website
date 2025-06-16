// components/ContactInfo.js
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Map from "./Map";

const ContactInfo = () => {
  return (
    <div className="py-16 -mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 gap-2">
            <ContactCard
              icon={<FaMapMarkerAlt className="text-3xl text-blue-600" />}
              title="Address"
              details={["123 College Road", "City, State, ZIP"]}
            />
            <ContactCard
              icon={<FaPhone className="text-3xl text-green-600" />}
              title="Phone Numbers"
              details={[
                "General Inquiry: (123) 456-7890",
                "Admissions: (123) 456-7891",
              ]}
            />
            <ContactCard
              icon={<FaEnvelope className="text-3xl text-red-600" />}
              title="Email Addresses"
              details={[
                "General: info@college.edu",
                "Admissions: admissions@college.edu",
              ]}
            />
          </div>
          <div>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, details }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl border">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4 text-gray-800">{title}</h3>
      </div>
      {details.map((detail, index) => (
        <p key={index} className="text-gray-600 mt-2">
          {detail}
        </p>
      ))}
    </div>
  );
};

export default ContactInfo;
