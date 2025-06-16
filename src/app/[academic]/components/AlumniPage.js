import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  MapPin,
  Phone,
  Briefcase,
  GraduationCap,
  ExternalLink,
  Calendar,
  DollarSign,
} from "lucide-react";
import { fetchAlumni } from "@/app/apicall/Alumni";
import Image from "next/image";

const AlumniPage = () => {
  const [alumni, setAlumni] = useState([]);
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("all");
  const [selectedBatch, setSelectedBatch] = useState("all");
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Sample data - replace with your API call
  const [sampleAlumni, setSampleAlumni] = useState([]);

  // Simulate API call
  useEffect(() => {
    const getEvents = async () => {
      try {
        setIsLoading(true);
        const data = await fetchAlumni();
        setAlumni(data);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setIsLoading(false);
      }
    };

    getEvents();
  }, []);

  // Filter alumni based on search and filters
  useEffect(() => {
    let filtered = alumni;

    if (searchTerm) {
      filtered = filtered.filter(
        (person) =>
          person.aname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          person.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          person.apost.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedDept !== "all") {
      filtered = filtered.filter((person) => person.adept === selectedDept);
    }

    if (selectedBatch !== "all") {
      filtered = filtered.filter((person) => person.abatch === selectedBatch);
    }

    setFilteredAlumni(filtered);
  }, [searchTerm, selectedDept, selectedBatch, alumni]);

  const departments = [...new Set(alumni.map((person) => person.adept))];
  const batches = [...new Set(alumni.map((person) => person.abatch))].sort(
    (a, b) => b - a
  );

  const AlumniCard = ({ person }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        <div className="absolute -bottom-12 left-6">
          <Image
            src={person.image}
            alt={person.aname}
            height={240}
            width={240}
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
      </div>

      <div className="pt-16 pb-6 px-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {person.aname}
            </h3>
            <p className="text-blue-600 font-semibold">{person.apost}</p>
            <p className="text-gray-600 text-sm">{person.company}</p>
          </div>
          {person.linkedin_url && (
            <a
              href={person.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <GraduationCap size={16} className="mr-2" />
            <span>
              {person.adept} - Batch {person.abatch}
            </span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <DollarSign size={16} className="mr-2" />
            <span className="font-semibold text-green-600">
              {person.package}
            </span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin size={16} className="mr-2" />
            <span>{person.aaddress}</span>
          </div>
        </div>

        <button
          onClick={() => setSelectedAlumni(person)}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold"
        >
          View Details
        </button>
      </div>
    </div>
  );

  const AlumniModal = ({ person, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 text-xl font-bold"
          >
            ×
          </button>
          <div className="absolute -bottom-16 left-8">
            <img
              src={person.image}
              alt={person.aname}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>

        <div className="pt-20 pb-8 px-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {person.aname}
              </h2>
              <p className="text-xl text-blue-600 font-semibold mb-1">
                {person.apost}
              </p>
              <p className="text-gray-600 text-lg">{person.company}</p>
            </div>
            {person.linkedin_url && (
              <a
                href={person.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <ExternalLink size={18} />
                LinkedIn
              </a>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <GraduationCap size={20} className="mr-3 text-blue-500" />
                <div>
                  <p className="font-semibold">Department</p>
                  <p>{person.adept}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <Calendar size={20} className="mr-3 text-green-500" />
                <div>
                  <p className="font-semibold">Graduation Year</p>
                  <p>{person.abatch}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <DollarSign size={20} className="mr-3 text-yellow-500" />
                <div>
                  <p className="font-semibold">Package</p>
                  <p className="text-green-600 font-bold">{person.package}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <MapPin size={20} className="mr-3 text-red-500" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p>{person.aaddress}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone size={20} className="mr-3 text-purple-500" />
                <div>
                  <p className="font-semibold">Contact</p>
                  <p>{person.aphone}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <Briefcase size={20} className="mr-3 text-indigo-500" />
                <div>
                  <p className="font-semibold">Company</p>
                  <p>{person.company}</p>
                </div>
              </div>
            </div>
          </div>

          {person.message && (
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">
                Message to Current Students
              </h3>
              <p className="text-gray-700 italic">"{person.message}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading alumni data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Distinguished Alumni
          </h1>
          <p className="text-xl opacity-90">
            Celebrating success stories and inspiring journeys
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by name, company, or position..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
              >
                <option value="all">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>

              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(e.target.value)}
              >
                <option value="all">All Batches</option>
                {batches.map((batch) => (
                  <option key={batch} value={batch}>
                    Batch {batch}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {alumni.length}
            </div>
            <div className="text-gray-600">Total Alumni</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {departments.length}
            </div>
            <div className="text-gray-600">Departments</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {batches.length}
            </div>
            <div className="text-gray-600">Graduating Years</div>
          </div>
        </div>

        {/* Alumni Grid */}
        {filteredAlumni.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-xl mb-4">No alumni found</div>
            <p className="text-gray-400">Try adjusting your search criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAlumni.map((person) => (
              <AlumniCard key={person.aid} person={person} />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedAlumni && (
        <AlumniModal
          person={selectedAlumni}
          onClose={() => setSelectedAlumni(null)}
        />
      )}
    </div>
  );
};

export default AlumniPage;
