import React from "react";
import { Mail, Phone, MapPin, Calendar, Award, BookOpen } from "lucide-react";

const PrincipalDesk = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Principal's Desk
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Welcome to our institution of excellence and innovation
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Principal's Photo and Basic Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
              {/* Photo */}
              <div className="text-center mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Principal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mt-4">
                  Dr. Rajesh Kumar
                </h2>
                <p className="text-blue-600 font-semibold">Principal</p>
                <p className="text-gray-600 text-sm mt-1">
                  Ph.D. in Computer Science
                </p>
              </div>

              {/* Quick Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <span className="text-sm">Experience: 25+ Years</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Award className="h-5 w-5 text-blue-500" />
                  <span className="text-sm">Awards: 15+ Academic Honors</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  <span className="text-sm">
                    Publications: 50+ Research Papers
                  </span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">principal@college.edu</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Room 101, Admin Block</span>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">
                  Office Hours
                </h3>
                <p className="text-sm text-blue-700">
                  Monday - Friday
                  <br />
                  9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Principal's Message */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Principal's Message
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6 text-lg font-medium text-blue-800 italic">
                  "Education is the most powerful weapon which you can use to
                  change the world."
                </p>

                <p className="mb-6">
                  Dear Students, Faculty, and Esteemed Members of our College
                  Community,
                </p>

                <p className="mb-6">
                  It gives me immense pleasure to welcome you to our prestigious
                  institution, a place where dreams take flight and futures are
                  shaped. As the Principal of this esteemed college, I am
                  honored to lead an institution that has been at the forefront
                  of academic excellence and holistic development for over three
                  decades.
                </p>

                <p className="mb-6">
                  Our college stands as a beacon of quality education, fostering
                  an environment where innovation meets tradition, and where
                  every student is encouraged to reach their full potential. We
                  believe in nurturing not just academic brilliance, but also
                  character, leadership, and social responsibility among our
                  students.
                </p>

                <p className="mb-6">
                  In today's rapidly evolving world, we are committed to
                  providing education that is both relevant and transformative.
                  Our state-of-the-art facilities, experienced faculty, and
                  comprehensive curriculum are designed to prepare our students
                  for the challenges and opportunities of the 21st century.
                </p>

                <p className="mb-6">
                  We take pride in our diverse community of learners who come
                  from different backgrounds but unite under our shared vision
                  of excellence. Our college is not just a place of learning;
                  it's a launching pad for lifelong success and meaningful
                  contribution to society.
                </p>

                <p className="mb-6">
                  I encourage each member of our college family to embrace the
                  opportunities available here, to question, to explore, and to
                  grow. Together, we will continue to uphold the traditions of
                  academic excellence while embracing innovation and positive
                  change.
                </p>

                <p className="mb-6 font-medium">
                  Thank you for being part of our journey towards excellence. I
                  look forward to working with all of you in making our college
                  a place where every dream finds its wings.
                </p>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="font-semibold text-gray-800">Warm Regards,</p>
                  <p className="font-bold text-xl text-blue-800 mt-2">
                    Dr. Rajesh Kumar
                  </p>
                  <p className="text-gray-600">Principal</p>
                </div>
              </div>
            </div>

            {/* Achievements & Vision */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-blue-100">
                  To be a leading institution of higher learning that empowers
                  students with knowledge, skills, and values to become
                  responsible global citizens and leaders of tomorrow.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-indigo-100">
                  To provide quality education through innovative teaching
                  methods, research excellence, and community engagement while
                  fostering critical thinking and lifelong learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Call to Action */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Have Questions or Suggestions?
          </h2>
          <p className="text-gray-600 mb-6">
            I'm always available to hear from our students, faculty, and
            community members.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            Schedule a Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrincipalDesk;
