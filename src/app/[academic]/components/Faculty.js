import React, { useState } from "react";
import {
  ChevronLeft,
  Mail,
  Phone,
  MapPin,
  Users,
  BookOpen,
  Dumbbell,
  FlaskConical,
  Building,
  Trophy,
  Coffee,
  ShoppingCart,
  User,
  GraduationCap,
} from "lucide-react";

const FacultyDirectory = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const departments = [
    {
      id: "library",
      name: "Library",
      icon: BookOpen,
      color: "from-blue-500 to-blue-700",
      description: "Academic resources and research support",
      faculty: [
        {
          id: 1,
          name: "Dr. Sarah Johnson",
          position: "Chief Librarian",
          email: "sarah.johnson@college.edu",
          phone: "+91 98765 43210",
          office: "Library - Ground Floor",
          specialization: "Digital Archives & Research",
          experience: "15 years",
          image:
            "https://images.unsplash.com/photo-1494790108755-2616c27b2db3?w=150&h=150&fit=crop&crop=face",
        },
        {
          id: 2,
          name: "Mr. David Chen",
          position: "Assistant Librarian",
          email: "david.chen@college.edu",
          phone: "+91 98765 43211",
          office: "Library - First Floor",
          specialization: "Technical Resources",
          experience: "8 years",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        },
      ],
    },
    {
      id: "gymkhana",
      name: "Gymkhana",
      icon: Users,
      color: "from-purple-500 to-purple-700",
      description: "Student activities and cultural events",
      faculty: [
        {
          id: 3,
          name: "Prof. Rajesh Kumar",
          position: "Gymkhana Director",
          email: "rajesh.kumar@college.edu",
          phone: "+91 98765 43212",
          office: "Gymkhana Building - 201",
          specialization: "Student Affairs & Cultural Programs",
          experience: "12 years",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        },
        {
          id: 4,
          name: "Ms. Priya Sharma",
          position: "Cultural Coordinator",
          email: "priya.sharma@college.edu",
          phone: "+91 98765 43213",
          office: "Gymkhana Building - 105",
          specialization: "Event Management & Arts",
          experience: "6 years",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        },
      ],
    },
    {
      id: "laboratories",
      name: "Laboratories",
      icon: FlaskConical,
      color: "from-green-500 to-green-700",
      description: "Research facilities and equipment",
      faculty: [
        {
          id: 5,
          name: "Dr. Michael Rodriguez",
          position: "Lab Director",
          email: "michael.rodriguez@college.edu",
          phone: "+91 98765 43214",
          office: "Science Block - 302",
          specialization: "Laboratory Management & Safety",
          experience: "18 years",
          image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
        },
        {
          id: 6,
          name: "Dr. Anita Patel",
          position: "Research Coordinator",
          email: "anita.patel@college.edu",
          phone: "+91 98765 43215",
          office: "Science Block - 205",
          specialization: "Biochemistry & Molecular Biology",
          experience: "10 years",
          image:
            "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
        },
      ],
    },
    {
      id: "hostel",
      name: "Hostel",
      icon: Building,
      color: "from-orange-500 to-orange-700",
      description: "Student accommodation and welfare",
      faculty: [
        {
          id: 7,
          name: "Dr. Robert Wilson",
          position: "Chief Warden",
          email: "robert.wilson@college.edu",
          phone: "+91 98765 43216",
          office: "Hostel Office - Block A",
          specialization: "Student Welfare & Accommodation",
          experience: "14 years",
          image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
        },
        {
          id: 8,
          name: "Ms. Kavita Mehta",
          position: "Assistant Warden",
          email: "kavita.mehta@college.edu",
          phone: "+91 98765 43217",
          office: "Hostel Office - Block B",
          specialization: "Student Support & Counseling",
          experience: "7 years",
          image:
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        },
      ],
    },
    {
      id: "sports",
      name: "Sports",
      icon: Trophy,
      color: "from-red-500 to-red-700",
      description: "Athletic programs and facilities",
      faculty: [
        {
          id: 9,
          name: "Coach James Thompson",
          position: "Sports Director",
          email: "james.thompson@college.edu",
          phone: "+91 98765 43218",
          office: "Sports Complex - Main Office",
          specialization: "Athletic Training & Sports Medicine",
          experience: "20 years",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        },
        {
          id: 10,
          name: "Ms. Lisa Anderson",
          position: "Fitness Coordinator",
          email: "lisa.anderson@college.edu",
          phone: "+91 98765 43219",
          office: "Sports Complex - Gym",
          specialization: "Fitness Training & Wellness",
          experience: "9 years",
          image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        },
      ],
    },
    {
      id: "canteen",
      name: "Canteen",
      icon: Coffee,
      color: "from-yellow-500 to-yellow-700",
      description: "Food services and nutrition",
      faculty: [
        {
          id: 11,
          name: "Mr. Suresh Gupta",
          position: "Canteen Manager",
          email: "suresh.gupta@college.edu",
          phone: "+91 98765 43220",
          office: "Canteen - Administrative Office",
          specialization: "Food Service Management",
          experience: "16 years",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        },
        {
          id: 12,
          name: "Ms. Meera Singh",
          position: "Nutritionist",
          email: "meera.singh@college.edu",
          phone: "+91 98765 43221",
          office: "Canteen - Nutrition Office",
          specialization: "Dietary Planning & Nutrition",
          experience: "5 years",
          image:
            "https://images.unsplash.com/photo-1494790108755-2616c27b2db3?w=150&h=150&fit=crop&crop=face",
        },
      ],
    },
    {
      id: "coop",
      name: "Co-Op Store",
      icon: ShoppingCart,
      color: "from-indigo-500 to-indigo-700",
      description: "Campus store and supplies",
      faculty: [
        {
          id: 13,
          name: "Mr. Amit Joshi",
          position: "Store Manager",
          email: "amit.joshi@college.edu",
          phone: "+91 98765 43222",
          office: "Co-Op Store - Main Counter",
          specialization: "Inventory Management & Procurement",
          experience: "11 years",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        },
        {
          id: 14,
          name: "Ms. Ritu Agarwal",
          position: "Assistant Manager",
          email: "ritu.agarwal@college.edu",
          phone: "+91 98765 43223",
          office: "Co-Op Store - Stationery Section",
          specialization: "Customer Service & Sales",
          experience: "4 years",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        },
      ],
    },
  ];

  const renderDepartmentGrid = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="w-12 h-12 text-blue-600 mr-4" />
            <h1 className="text-5xl font-bold text-gray-800">
              Faculty Directory
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the dedicated faculty members across all departments who
            make our institution exceptional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {departments.map((dept) => {
            const IconComponent = dept.icon;
            return (
              <div
                key={dept.id}
                onClick={() => setSelectedDepartment(dept)}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  <div
                    className={`h-32 bg-gradient-to-r ${dept.color} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <IconComponent className="w-16 h-16 text-white transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {dept.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {dept.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {dept.faculty.length} Faculty
                      </span>
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <ChevronLeft className="w-4 h-4 text-blue-600 rotate-180" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderFacultyList = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center mb-8">
          <button
            onClick={() => setSelectedDepartment(null)}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mr-6 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Departments
          </button>
          <div className="flex items-center">
            <div
              className={`w-12 h-12 bg-gradient-to-r ${selectedDepartment.color} rounded-xl flex items-center justify-center mr-4`}
            >
              <selectedDepartment.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {selectedDepartment.name} Faculty
              </h1>
              <p className="text-gray-600">{selectedDepartment.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedDepartment.faculty.map((faculty) => (
            <div
              key={faculty.id}
              onClick={() => setSelectedFaculty(faculty)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-gray-100 group-hover:ring-blue-200 transition-all"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {faculty.name}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {faculty.position}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="truncate">{faculty.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{faculty.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="truncate">{faculty.office}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-700 font-medium mb-1">
                    Specialization
                  </p>
                  <p className="text-sm text-gray-600">
                    {faculty.specialization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFacultyProfile = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center mb-8">
          <button
            onClick={() => setSelectedFaculty(null)}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mr-6 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Faculty
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div
              className={`h-48 bg-gradient-to-r ${selectedDepartment.color} relative`}
            >
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div className="absolute bottom-6 left-6 flex items-end">
                <img
                  src={selectedFaculty.image}
                  alt={selectedFaculty.name}
                  className="w-32 h-32 rounded-2xl object-cover ring-4 ring-white shadow-2xl"
                />
                <div className="ml-6 text-white">
                  <h1 className="text-4xl font-bold mb-2">
                    {selectedFaculty.name}
                  </h1>
                  <p className="text-xl opacity-90">
                    {selectedFaculty.position}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                      <Mail className="w-6 h-6 text-blue-600 mr-4" />
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-medium text-gray-800">
                          {selectedFaculty.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                      <Phone className="w-6 h-6 text-blue-600 mr-4" />
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="font-medium text-gray-800">
                          {selectedFaculty.phone}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                      <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                      <div>
                        <p className="text-sm text-gray-600">Office</p>
                        <p className="font-medium text-gray-800">
                          {selectedFaculty.office}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Professional Details
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-sm text-gray-600 mb-2">Department</p>
                      <div className="flex items-center">
                        <selectedDepartment.icon className="w-5 h-5 text-blue-600 mr-2" />
                        <p className="font-medium text-gray-800">
                          {selectedDepartment.name}
                        </p>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-sm text-gray-600 mb-2">
                        Specialization
                      </p>
                      <p className="font-medium text-gray-800">
                        {selectedFaculty.specialization}
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-sm text-gray-600 mb-2">Experience</p>
                      <p className="font-medium text-gray-800">
                        {selectedFaculty.experience}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (selectedFaculty) {
    return renderFacultyProfile();
  } else if (selectedDepartment) {
    return renderFacultyList();
  } else {
    return renderDepartmentGrid();
  }
};

export default FacultyDirectory;
