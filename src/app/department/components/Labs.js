import React, { useState } from "react";
import { 
  Monitor, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Users, 
  Clock, 
  MapPin, 
  ChevronLeft, 
  ChevronRight,
  Eye,
  Server,
  Network,
  Code,
  Database,
  Shield
} from "lucide-react";

const ComputerLabsComponent = () => {
  const [selectedLab, setSelectedLab] = useState(0);

  // Sample lab data - replace with your actual data
  const labsData = [
    {
      id: 1,
      name: "Programming Lab",
      code: "CSE-LAB-01",
      capacity: 60,
      floor: "Ground Floor",
      room: "Room 101",
      supervisor: "Prof. Rajesh Kumar",
      timing: "9:00 AM - 5:00 PM",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&h=600&fit=crop",
      specifications: {
        computers: 30,
        processor: "Intel Core i5 10th Gen",
        ram: "8 GB DDR4",
        storage: "256 GB SSD",
        os: "Windows 11 Pro",
        software: ["Visual Studio", "Code::Blocks", "NetBeans", "PyCharm"]
      },
      description: "Equipped with modern computers for programming courses including C, C++, Java, Python, and web development.",
      features: ["High-speed Internet", "Projector", "AC", "UPS Backup"],
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 2,
      name: "Network & Security Lab",
      code: "CSE-LAB-02",
      capacity: 40,
      floor: "First Floor",
      room: "Room 201",
      supervisor: "Dr. Priya Sharma",
      timing: "9:00 AM - 6:00 PM",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      specifications: {
        computers: 20,
        processor: "Intel Core i7 11th Gen",
        ram: "16 GB DDR4",
        storage: "512 GB SSD",
        os: "Windows 11 Pro / Ubuntu 22.04",
        software: ["Wireshark", "Nmap", "Metasploit", "VMware", "Cisco Packet Tracer"]
      },
      description: "Specialized lab for network administration, cybersecurity, and ethical hacking courses.",
      features: ["Dedicated Server Room", "Network Switches", "Firewall Setup", "Security Tools"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 3,
      name: "Database Lab",
      code: "CSE-LAB-03",
      capacity: 50,
      floor: "First Floor",
      room: "Room 205",
      supervisor: "Prof. Amit Patel",
      timing: "8:30 AM - 5:30 PM",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      specifications: {
        computers: 25,
        processor: "AMD Ryzen 5 5600G",
        ram: "12 GB DDR4",
        storage: "1 TB HDD + 256 GB SSD",
        os: "Windows 11 Pro",
        software: ["MySQL", "Oracle 19c", "MongoDB", "PostgreSQL", "SQL Server"]
      },
      description: "Dedicated for database management system courses and data analytics projects.",
      features: ["Database Servers", "Big Data Tools", "Cloud Access", "Backup Systems"],
      icon: <Database className="w-6 h-6" />
    },
    {
      id: 4,
      name: "Hardware Lab",
      code: "CSE-LAB-04",
      capacity: 30,
      floor: "Ground Floor",
      room: "Room 105",
      supervisor: "Prof. Sneha Joshi",
      timing: "10:00 AM - 4:00 PM",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      specifications: {
        computers: 15,
        processor: "Intel Core i3 10th Gen",
        ram: "4 GB DDR4",
        storage: "500 GB HDD",
        os: "Windows 10 Pro",
        software: ["Circuit Simulators", "PCB Design Tools", "Arduino IDE", "Proteus"]
      },
      description: "Hands-on lab for computer hardware, digital electronics, and microprocessor courses.",
      features: ["Hardware Kits", "Oscilloscopes", "Function Generators", "Soldering Stations"],
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  const nextLab = () => {
    setSelectedLab((prev) => (prev + 1) % labsData.length);
  };

  const prevLab = () => {
    setSelectedLab((prev) => (prev - 1 + labsData.length) % labsData.length);
  };

  const currentLab = labsData[selectedLab];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Computer Labs
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          State-of-the-art computing facilities equipped with modern hardware and software 
          to support practical learning and research in computer engineering.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded"></div>
      </div>

      {/* Lab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {labsData.map((lab, index) => (
          <button
            key={lab.id}
            onClick={() => setSelectedLab(index)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedLab === index
                ? "bg-blue-600 text-white shadow-lg transform scale-105"
                : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md"
            }`}
          >
            {lab.icon}
            <span>{lab.name}</span>
          </button>
        ))}
      </div>

      {/* Main Lab Display */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Lab Image and Navigation */}
        <div className="relative h-96 bg-gradient-to-r from-blue-600 to-indigo-700">
          <img
            src={currentLab.image}
            alt={currentLab.name}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevLab}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextLab}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Lab Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="flex items-center gap-3 mb-2">
              {currentLab.icon}
              <span className="text-blue-200 font-medium">{currentLab.code}</span>
            </div>
            <h2 className="text-4xl font-bold mb-2">{currentLab.name}</h2>
            <p className="text-blue-100 text-lg">{currentLab.description}</p>
          </div>
        </div>

        {/* Lab Details */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Information */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Eye className="text-blue-600" size={24} />
                Lab Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Users className="text-blue-600" size={20} />
                  <div>
                    <span className="font-medium text-gray-700">Capacity:</span>
                    <span className="ml-2 text-gray-600">{currentLab.capacity} students</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="text-blue-600" size={20} />
                  <div>
                    <span className="font-medium text-gray-700">Location:</span>
                    <span className="ml-2 text-gray-600">{currentLab.floor}, {currentLab.room}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Clock className="text-blue-600" size={20} />
                  <div>
                    <span className="font-medium text-gray-700">Timing:</span>
                    <span className="ml-2 text-gray-600">{currentLab.timing}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Users className="text-blue-600" size={20} />
                  <div>
                    <span className="font-medium text-gray-700">Supervisor:</span>
                    <span className="ml-2 text-gray-600">{currentLab.supervisor}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Monitor className="text-blue-600" size={24} />
                Technical Specifications
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <Monitor className="text-blue-600" size={20} />
                  <div>
                    <span className="font-medium text-gray-700">Computers:</span>
                    <span className="ml-2 text-gray-600">{currentLab.specifications.computers} units</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <Cpu className="text-blue-600" size={20} />
                  <div>
                    <span className="font-medium text-gray-700">Processor:</span>
                    <span className="ml-2 text-gray-600">{currentLab.specifications.processor}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <Server className="text-blue-600" size={20} />
                  <div>
                    <span className="font-medium text-gray-700">RAM:</span>
                    <span className="ml-2 text-gray-600">{currentLab.specifications.ram}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <HardDrive className="text-blue-600" size={20} />
                  <div>
                    <span className="font-medium text-gray-700">Storage:</span>
                    <span className="ml-2 text-gray-600">{currentLab.specifications.storage}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <Monitor className="text-blue-600" size={20} />
                  <div>
                    <span className="font-medium text-gray-700">OS:</span>
                    <span className="ml-2 text-gray-600">{currentLab.specifications.os}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Software and Features */}
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {/* Software */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Code className="text-blue-600" size={20} />
                Installed Software
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentLab.specifications.software.map((software, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {software}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Network className="text-blue-600" size={20} />
                Lab Features
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentLab.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Lab Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {labsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedLab(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  selectedLab === index
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {labsData.length}
          </div>
          <div className="text-gray-600 font-medium">Total Labs</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {labsData.reduce((sum, lab) => sum + lab.specifications.computers, 0)}
          </div>
          <div className="text-gray-600 font-medium">Computers</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">
            {labsData.reduce((sum, lab) => sum + lab.capacity, 0)}
          </div>
          <div className="text-gray-600 font-medium">Total Capacity</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
          <div className="text-gray-600 font-medium">Lab Access*</div>
        </div>
      </div>
    </div>
  );
};

export default ComputerLabsComponent;