import React from "react";
import { User, Quote, Calendar, Mail, Phone } from "lucide-react";
import Image from "next/image";

const HodMessageComponent = ({ dept }) => {
  const hodData = {
    name: "Dr. Sarah Johnson",
    designation: "Head of Department",
    department: "Computer Science & Engineering",
    image: "/api/placeholder/150/150", // Replace with actual image path
    message:
      "Dear Students and Visitors,Warm greetings from the Department of Computer Engineering at Government College of Engineering Yavatmal. Since its establishment in 2018, our department has been committed to providing quality education and shaping skilled professionals in the field of Computer Engineering. Computer Engineering is an ever-evolving discipline that plays a pivotal role in driving innovation and technological progress. It encompasses diverse areas, such as software development, artificial intelligence, data science, cybersecurity, and more. Our team of passionate and dedicated faculty members is committed to imparting knowledge and guiding students on their academic journey.In our department, we strongly believe in inclusivity and diversity and as we stride ahead on our path of growth and evolution, we pledge to cultivate an environment of innovation and creativity. Moving forward, we are enthusiastic about making meaningful contributions to the technological landscape and solving real-world challenges through innovation and collaboration. Our goal is to empower our graduates with the skills and knowledge necessary to thrive in the competitive global landscape and make positive contributions to society. To all our students, I extend my best wishes as you embark on this exciting journey of learning and self-discovery. Together, let's make a difference in the world of Computer Engineering and create a brighter future for all. \nWarm regards,",
    email: "sarah.johnson@college.edu",
    phone: "+1 (555) 123-4567",
    joinDate: "January 2018",
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex ">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-8 text-white">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 overflow-hidden">
              <Image
                src={`https://drive.google.com/uc?export=view&id=${dept.idhod}`}
                alt={hodData.name}
                className="w-full h-full object-cover"
                fill
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                className="w-full h-full bg-blue-500 flex items-center justify-center"
                style={{ display: "none" }}
              >
                <User size={48} className="text-white" />
              </div>
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl font-bold mb-2">{dept.dhod}</h1>
            <p className="text-blue-100 text-lg mb-1">{hodData.designation}</p>
            <p className="text-blue-200 font-medium">{dept.dname}</p>

            <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-sm text-blue-100">
                <Calendar size={16} />
                <span>Since {hodData.joinDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-blue-100 p-3 rounded-full">
            <Quote size={24} className="text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Message from HOD
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded"></div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed text-justify">
            {dept.hodmessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HodMessageComponent;
