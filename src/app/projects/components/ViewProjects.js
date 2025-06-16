import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Star,
  Eye,
  Download,
  Github,
  ExternalLink,
  Calendar,
  User,
  BookOpen,
  Tag,
  Heart,
  MessageCircle,
  ChevronDown,
  Grid,
  List,
  X,
} from "lucide-react";

const ProjectGalleryComponent = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [likedProjects, setLikedProjects] = useState(new Set());

  // Mock data - in real app, this would come from API
  const mockProjects = [
    {
      id: 1,
      title: "E-Commerce Web Application",
      description:
        "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
      author: "John Doe",
      semester: "6th",
      subject: "Web Development",
      submissionDate: "2024-03-15",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      githubUrl: "https://github.com/johndoe/ecommerce-app",
      liveUrl: "https://ecommerce-demo.netlify.app",
      likes: 24,
      views: 156,
      rating: 4.5,
      thumbnail:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      files: [
        { name: "Project_Report.pdf", size: "2.3 MB", type: "pdf" },
        { name: "Source_Code.zip", size: "15.7 MB", type: "zip" },
      ],
      teamMembers: ["John Doe", "Jane Smith"],
      status: "approved",
    },
    {
      id: 2,
      title: "Machine Learning Stock Predictor",
      description:
        "A Python-based stock price prediction system using LSTM neural networks. Includes data preprocessing, model training, and real-time prediction capabilities.",
      author: "Alice Johnson",
      semester: "7th",
      subject: "Machine Learning",
      submissionDate: "2024-03-10",
      tags: ["Python", "TensorFlow", "LSTM", "Pandas", "NumPy"],
      githubUrl: "https://github.com/alice/stock-predictor",
      liveUrl: null,
      likes: 18,
      views: 89,
      rating: 4.2,
      thumbnail:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
      files: [
        { name: "ML_Model.pkl", size: "45.2 MB", type: "file" },
        { name: "Documentation.pdf", size: "5.1 MB", type: "pdf" },
      ],
      teamMembers: ["Alice Johnson"],
      status: "approved",
    },
    {
      id: 3,
      title: "Android Task Management App",
      description:
        "A native Android application for task management with features like reminders, categories, progress tracking, and cloud synchronization.",
      author: "Mike Wilson",
      semester: "5th",
      subject: "Mobile Development",
      submissionDate: "2024-03-05",
      tags: ["Android", "Java", "SQLite", "Firebase", "Material Design"],
      githubUrl: "https://github.com/mike/task-manager",
      liveUrl: null,
      likes: 32,
      views: 203,
      rating: 4.7,
      thumbnail:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      files: [
        { name: "TaskManager.apk", size: "8.9 MB", type: "apk" },
        { name: "User_Manual.pdf", size: "1.8 MB", type: "pdf" },
      ],
      teamMembers: ["Mike Wilson", "Sarah Davis"],
      status: "approved",
    },
    {
      id: 4,
      title: "Blockchain Voting System",
      description:
        "A decentralized voting system built on Ethereum blockchain ensuring transparency, security, and immutability of votes.",
      author: "David Chen",
      semester: "8th",
      subject: "Computer Networks",
      submissionDate: "2024-02-28",
      tags: ["Blockchain", "Solidity", "Web3.js", "Ethereum", "React"],
      githubUrl: "https://github.com/david/blockchain-voting",
      liveUrl: "https://voting-dapp.herokuapp.com",
      likes: 41,
      views: 287,
      rating: 4.8,
      thumbnail:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
      files: [
        { name: "Smart_Contract.sol", size: "125 KB", type: "file" },
        { name: "Project_Presentation.pptx", size: "12.4 MB", type: "ppt" },
      ],
      teamMembers: ["David Chen", "Emma Brown", "Tom Anderson"],
      status: "approved",
    },
    {
      id: 5,
      title: "IoT Home Automation System",
      description:
        "A comprehensive home automation system using Arduino, sensors, and mobile app control for lighting, temperature, and security management.",
      author: "Lisa Zhang",
      semester: "6th",
      subject: "Embedded Systems",
      submissionDate: "2024-02-20",
      tags: ["Arduino", "IoT", "Sensors", "Mobile App", "WiFi"],
      githubUrl: "https://github.com/lisa/iot-home",
      liveUrl: null,
      likes: 28,
      views: 134,
      rating: 4.4,
      thumbnail:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      files: [
        { name: "Arduino_Code.ino", size: "45 KB", type: "file" },
        { name: "Circuit_Diagram.pdf", size: "3.2 MB", type: "pdf" },
      ],
      teamMembers: ["Lisa Zhang"],
      status: "approved",
    },
  ];

  const subjects = [
    "All Subjects",
    "Web Development",
    "Machine Learning",
    "Mobile Development",
    "Computer Networks",
    "Embedded Systems",
    "Database Management",
    "Software Engineering",
  ];
  const semesters = [
    "All Semesters",
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
  ];

  useEffect(() => {
    setProjects(mockProjects);
    setFilteredProjects(mockProjects);
  }, []);

  useEffect(() => {
    let filtered = projects;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          project.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          project.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Subject filter
    if (selectedSubject && selectedSubject !== "All Subjects") {
      filtered = filtered.filter(
        (project) => project.subject === selectedSubject
      );
    }

    // Semester filter
    if (selectedSemester && selectedSemester !== "All Semesters") {
      filtered = filtered.filter(
        (project) => project.semester === selectedSemester
      );
    }

    // Sort
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "recent":
          return new Date(b.submissionDate) - new Date(a.submissionDate);
        case "popular":
          return b.likes - a.likes;
        case "rating":
          return b.rating - a.rating;
        case "views":
          return b.views - a.views;
        default:
          return 0;
      }
    });

    setFilteredProjects(filtered);
  }, [searchTerm, selectedSubject, selectedSemester, sortBy, projects]);

  const handleLike = (projectId) => {
    const newLikedProjects = new Set(likedProjects);
    if (newLikedProjects.has(projectId)) {
      newLikedProjects.delete(projectId);
    } else {
      newLikedProjects.add(projectId);
    }
    setLikedProjects(newLikedProjects);

    // Update project likes count
    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId
          ? {
              ...project,
              likes: project.likes + (newLikedProjects.has(projectId) ? 1 : -1),
            }
          : project
      )
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const ProjectCard = ({ project, isDetailed = false }) => (
    <div
      className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 ${
        isDetailed ? "col-span-full" : ""
      }`}
    >
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <span className="bg-white/90 backdrop-blur text-xs font-semibold px-2 py-1 rounded-full text-gray-700">
            {project.subject}
          </span>
          <span className="bg-white/90 backdrop-blur text-xs font-semibold px-2 py-1 rounded-full text-gray-700">
            {project.semester} Sem
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-3">
            {project.description}
          </p>

          {/* Author and Date */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span>{project.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{formatDate(project.submissionDate)}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-xs text-gray-500">
                +{project.tags.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              <span>{project.views}</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1 text-yellow-500" />
              <span>{project.rating}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleLike(project.id)}
              className={`flex items-center space-x-1 px-3 py-1 rounded-full transition-colors ${
                likedProjects.has(project.id)
                  ? "bg-red-100 text-red-600"
                  : "bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600"
              }`}
            >
              <Heart
                className={`w-4 h-4 ${
                  likedProjects.has(project.id) ? "fill-current" : ""
                }`}
              />
              <span className="text-sm">{project.likes}</span>
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
              >
                <Github className="w-4 h-4 mr-1" />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Demo
              </a>
            )}
          </div>

          <button
            onClick={() => setSelectedProject(project)}
            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Project Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-gray-500" />
                      <span>
                        <strong>Author:</strong> {project.author}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2 text-gray-500" />
                      <span>
                        <strong>Subject:</strong> {project.subject}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                      <span>
                        <strong>Semester:</strong> {project.semester}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                      <span>
                        <strong>Submitted:</strong>{" "}
                        {formatDate(project.submissionDate)}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Team Members
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.teamMembers.map((member, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Description</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Project Files</h3>
            <div className="space-y-2">
              {project.files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center">
                    <Download className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="font-medium">{file.name}</span>
                    <span className="text-sm text-gray-500 ml-2">
                      ({file.size})
                    </span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              )}
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                <span>{project.views} views</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-yellow-500" />
                <span>{project.rating} rating</span>
              </div>
              <button
                onClick={() => handleLike(project.id)}
                className={`flex items-center space-x-1 px-3 py-1 rounded-full transition-colors ${
                  likedProjects.has(project.id)
                    ? "bg-red-100 text-red-600"
                    : "bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600"
                }`}
              >
                <Heart
                  className={`w-4 h-4 ${
                    likedProjects.has(project.id) ? "fill-current" : ""
                  }`}
                />
                <span>{project.likes}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Student Projects
        </h1>
        <p className="text-gray-600">
          Explore innovative projects created by your fellow students
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects, authors, or technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <Filter className="w-5 h-5 mr-2" />
            Filters
            <ChevronDown
              className={`w-4 h-4 ml-2 transition-transform ${
                showFilters ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* View Mode Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                viewMode === "grid" ? "bg-white shadow-sm" : "hover:bg-gray-200"
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                viewMode === "list" ? "bg-white shadow-sm" : "hover:bg-gray-200"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="mt-6 pt-6 border-t border-gray-200 grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Semester
              </label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {semesters.map((semester) => (
                  <option key={semester} value={semester}>
                    {semester}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="recent">Most Recent</option>
                <option value="popular">Most Liked</option>
                <option value="rating">Highest Rated</option>
                <option value="views">Most Viewed</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </div>

      {/* Projects Grid */}
      <div
        className={`grid gap-6 ${
          viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
        }`}
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No projects found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search criteria or filters
          </p>
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectGalleryComponent;
