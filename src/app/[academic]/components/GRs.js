import React, { useState, useMemo } from "react";
import {
  Search,
  Download,
  FileText,
  Calendar,
  Filter,
  Eye,
} from "lucide-react";

const ImportantGRsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  // Sample GR data - replace with actual data from your backend
  const grs = [
    {
      id: 1,
      title: "Academic Calendar 2024-25",
      category: "Academic",
      year: "2024",
      date: "2024-03-15",
      size: "2.3 MB",
      downloads: 1245,
      description:
        "Complete academic calendar with exam schedules, holidays, and important dates.",
      url: "/documents/academic-calendar-2024-25.pdf",
    },
    {
      id: 2,
      title: "Examination Rules and Regulations",
      category: "Examination",
      year: "2024",
      date: "2024-02-20",
      size: "1.8 MB",
      downloads: 892,
      description:
        "Guidelines for examinations, grading system, and evaluation procedures.",
      url: "/documents/exam-rules-2024.pdf",
    },
    {
      id: 3,
      title: "Hostel Admission Guidelines",
      category: "Admission",
      year: "2024",
      date: "2024-04-10",
      size: "1.2 MB",
      downloads: 654,
      description:
        "Complete guide for hostel admission process and requirements.",
      url: "/documents/hostel-admission-2024.pdf",
    },
    {
      id: 4,
      title: "Fee Structure 2024-25",
      category: "Finance",
      year: "2024",
      date: "2024-03-01",
      size: "850 KB",
      downloads: 1567,
      description: "Detailed fee structure for all courses and programs.",
      url: "/documents/fee-structure-2024-25.pdf",
    },
    {
      id: 5,
      title: "Student Code of Conduct",
      category: "General",
      year: "2023",
      date: "2023-08-15",
      size: "1.5 MB",
      downloads: 423,
      description:
        "Rules and regulations for student behavior and disciplinary procedures.",
      url: "/documents/student-code-conduct.pdf",
    },
    {
      id: 6,
      title: "Scholarship Application Process",
      category: "Finance",
      year: "2024",
      date: "2024-01-30",
      size: "1.1 MB",
      downloads: 789,
      description:
        "Guidelines for various scholarship programs and application procedures.",
      url: "/documents/scholarship-process-2024.pdf",
    },
    {
      id: 7,
      title: "Sports and Cultural Activities Rules",
      category: "General",
      year: "2024",
      date: "2024-02-14",
      size: "900 KB",
      downloads: 234,
      description:
        "Guidelines for participation in sports and cultural events.",
      url: "/documents/sports-cultural-rules.pdf",
    },
    {
      id: 8,
      title: "Library Usage Guidelines",
      category: "Academic",
      year: "2024",
      date: "2024-01-15",
      size: "750 KB",
      downloads: 567,
      description:
        "Rules and procedures for library access and book borrowing.",
      url: "/documents/library-guidelines-2024.pdf",
    },
  ];

  const categories = [
    "All",
    "Academic",
    "Examination",
    "Admission",
    "Finance",
    "General",
  ];
  const years = ["All", "2024", "2023", "2022"];

  const filteredGRs = useMemo(() => {
    return grs.filter((gr) => {
      const matchesSearch =
        gr.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gr.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || gr.category === selectedCategory;
      const matchesYear = selectedYear === "All" || gr.year === selectedYear;

      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [searchTerm, selectedCategory, selectedYear, grs]);

  const handleDownload = (gr) => {
    // In a real application, this would trigger the actual download
    console.log(`Downloading: ${gr.title}`);
    // You can implement actual download logic here
    window.open(gr.url, "_blank");
  };

  const handlePreview = (gr) => {
    // In a real application, this would open a preview modal or new tab
    console.log(`Previewing: ${gr.title}`);
    window.open(gr.url, "_blank");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Important Government Resolutions (GRs)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access and download important government resolutions, guidelines,
            and official documents relevant to students and academic procedures.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search GRs by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-40"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-32"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        {searchTerm && (
          <div className="mb-6">
            <p className="text-gray-600">
              Found {filteredGRs.length} result
              {filteredGRs.length !== 1 ? "s" : ""} for "{searchTerm}"
            </p>
          </div>
        )}

        {/* GRs Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredGRs.map((gr) => (
            <div
              key={gr.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <FileText className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          gr.category === "Academic"
                            ? "bg-blue-100 text-blue-800"
                            : gr.category === "Examination"
                            ? "bg-green-100 text-green-800"
                            : gr.category === "Admission"
                            ? "bg-purple-100 text-purple-800"
                            : gr.category === "Finance"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {gr.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{gr.year}</span>
                </div>

                {/* Title and Description */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {gr.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {gr.description}
                </p>

                {/* Metadata */}
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>Updated: {formatDate(gr.date)}</span>
                  <span>{gr.size}</span>
                </div>

                {/* Download Stats */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Download className="w-4 h-4 mr-1" />
                  <span>{gr.downloads.toLocaleString()} downloads</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handlePreview(gr)}
                    className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </button>
                  <button
                    onClick={() => handleDownload(gr)}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredGRs.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No GRs found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search terms or filters to find what you're
              looking for.
            </p>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="w-5 h-5 text-blue-600 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                Important Note
              </h3>
              <div className="mt-1 text-sm text-blue-700">
                <p>
                  All documents are official government resolutions and
                  guidelines. For the most current information, please contact
                  the administration office. If you encounter any issues with
                  downloads, please report them to the IT helpdesk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantGRsPage;
