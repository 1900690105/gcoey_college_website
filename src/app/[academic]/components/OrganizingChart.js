import React, { useState } from "react";
import { ChevronDown, ChevronRight, Users, Mail, Phone } from "lucide-react";

const OrganizationChart = () => {
  const [expandedNodes, setExpandedNodes] = useState(
    new Set(["principal", "academic", "admin"])
  );

  const orgData = {
    id: "principal",
    name: "Dr. Sarah Johnson",
    title: "Principal",
    department: "Administration",
    email: "principal@college.edu",
    phone: "+1 (555) 123-4567",
    image: "/api/placeholder/80/80",
    children: [
      {
        id: "academic",
        name: "Dr. Michael Chen",
        title: "Vice Principal (Academic)",
        department: "Academic Affairs",
        email: "academic@college.edu",
        phone: "+1 (555) 123-4568",
        image: "/api/placeholder/80/80",
        children: [
          {
            id: "science",
            name: "Dr. Emily Rodriguez",
            title: "Head of Science Department",
            department: "Science",
            email: "science@college.edu",
            phone: "+1 (555) 123-4569",
            image: "/api/placeholder/80/80",
            children: [
              {
                id: "physics",
                name: "Prof. James Wilson",
                title: "Physics Professor",
                department: "Physics",
                email: "physics@college.edu",
                phone: "+1 (555) 123-4570",
                image: "/api/placeholder/80/80",
              },
              {
                id: "chemistry",
                name: "Dr. Lisa Brown",
                title: "Chemistry Professor",
                department: "Chemistry",
                email: "chemistry@college.edu",
                phone: "+1 (555) 123-4571",
                image: "/api/placeholder/80/80",
              },
            ],
          },
          {
            id: "arts",
            name: "Prof. David Martinez",
            title: "Head of Arts Department",
            department: "Arts & Humanities",
            email: "arts@college.edu",
            phone: "+1 (555) 123-4572",
            image: "/api/placeholder/80/80",
            children: [
              {
                id: "english",
                name: "Dr. Anna Thompson",
                title: "English Professor",
                department: "English Literature",
                email: "english@college.edu",
                phone: "+1 (555) 123-4573",
                image: "/api/placeholder/80/80",
              },
              {
                id: "history",
                name: "Prof. Robert Davis",
                title: "History Professor",
                department: "History",
                email: "history@college.edu",
                phone: "+1 (555) 123-4574",
                image: "/api/placeholder/80/80",
              },
            ],
          },
        ],
      },
      {
        id: "admin",
        name: "Ms. Jennifer Lee",
        title: "Administrative Officer",
        department: "Administration",
        email: "admin@college.edu",
        phone: "+1 (555) 123-4575",
        image: "/api/placeholder/80/80",
        children: [
          {
            id: "finance",
            name: "Mr. Thomas Anderson",
            title: "Finance Manager",
            department: "Finance",
            email: "finance@college.edu",
            phone: "+1 (555) 123-4576",
            image: "/api/placeholder/80/80",
          },
          {
            id: "hr",
            name: "Ms. Maria Garcia",
            title: "HR Manager",
            department: "Human Resources",
            email: "hr@college.edu",
            phone: "+1 (555) 123-4577",
            image: "/api/placeholder/80/80",
          },
        ],
      },
      {
        id: "student",
        name: "Dr. Kevin Taylor",
        title: "Student Affairs Director",
        department: "Student Services",
        email: "student@college.edu",
        phone: "+1 (555) 123-4578",
        image: "/api/placeholder/80/80",
        children: [
          {
            id: "counseling",
            name: "Ms. Rachel Green",
            title: "Student Counselor",
            department: "Counseling",
            email: "counseling@college.edu",
            phone: "+1 (555) 123-4579",
            image: "/api/placeholder/80/80",
          },
          {
            id: "activities",
            name: "Mr. Alex Turner",
            title: "Activities Coordinator",
            department: "Student Activities",
            email: "activities@college.edu",
            phone: "+1 (555) 123-4580",
            image: "/api/placeholder/80/80",
          },
        ],
      },
    ],
  };

  const toggleNode = (nodeId) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const PersonCard = ({ person, level = 0, isLast = false }) => {
    const hasChildren = person.children && person.children.length > 0;
    const isExpanded = expandedNodes.has(person.id);

    return (
      <div className="relative">
        {/* Connection lines */}
        {level > 0 && (
          <>
            <div className="absolute left-0 top-0 w-8 h-6 border-l-2 border-b-2 border-gray-300"></div>
            {!isLast && (
              <div className="absolute left-0 top-6 w-0 h-full border-l-2 border-gray-300"></div>
            )}
          </>
        )}

        <div className={`${level > 0 ? "ml-8" : ""} mb-4`}>
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-16 h-16 rounded-full object-cover border-3 border-blue-100 group-hover:border-blue-200 transition-colors"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {person.name}
                      </h3>
                      <p className="text-blue-600 font-semibold text-sm mb-1">
                        {person.title}
                      </p>
                      <p className="text-gray-600 text-sm mb-3">
                        {person.department}
                      </p>
                    </div>

                    {hasChildren && (
                      <button
                        onClick={() => toggleNode(person.id)}
                        className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        {isExpanded ? (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Mail className="w-4 h-4" />
                      <span>{person.email}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Phone className="w-4 h-4" />
                      <span>{person.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {hasChildren && isExpanded && (
            <div className="mt-4 pl-4 border-l-2 border-gray-200">
              {person.children.map((child, index) => (
                <PersonCard
                  key={child.id}
                  person={child}
                  level={level + 1}
                  isLast={index === person.children.length - 1}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Organization Chart
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of educators and administrators committed to
            academic excellence
          </p>
        </div>

        {/* Legend */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-8 max-w-2xl mx-auto">
          <h3 className="font-semibold text-gray-900 mb-3">How to Navigate</h3>
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4" />
              <span>Click to expand</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronDown className="w-4 h-4" />
              <span>Click to collapse</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-1 bg-gray-300"></div>
              <span>Reporting structure</span>
            </div>
          </div>
        </div>

        {/* Organization Chart */}
        <div className="max-w-6xl mx-auto">
          <PersonCard person={orgData} />
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Faculty Members</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-600">Departments</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
            <div className="text-gray-600">Years of Excellence</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationChart;
