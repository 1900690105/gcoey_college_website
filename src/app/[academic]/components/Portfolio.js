import React, { useState } from "react";
import {
  Download,
  Eye,
  Filter,
  Search,
  Star,
  Calendar,
  User,
  FileText,
} from "lucide-react";

const PortfolioDistribution = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  const portfolioTemplates = [
    {
      id: 1,
      title: "Creative Design Portfolio",
      category: "design",
      description:
        "Perfect for graphic design, UI/UX, and creative arts students",
      preview: "/api/placeholder/300/200",
      downloads: 1247,
      rating: 4.8,
      fileSize: "2.4 MB",
      format: "PSD, Figma",
      lastUpdated: "2024-11-15",
      featured: true,
      tags: ["Modern", "Creative", "Responsive"],
    },
    {
      id: 2,
      title: "Engineering Portfolio",
      category: "engineering",
      description: "Showcase technical projects and engineering achievements",
      preview: "/api/placeholder/300/200",
      downloads: 892,
      rating: 4.6,
      fileSize: "1.8 MB",
      format: "HTML, CSS",
      lastUpdated: "2024-11-10",
      featured: false,
      tags: ["Technical", "Professional", "Clean"],
    },
    {
      id: 3,
      title: "Business Portfolio",
      category: "business",
      description: "Professional template for business and management students",
      preview: "/api/placeholder/300/200",
      downloads: 1156,
      rating: 4.7,
      fileSize: "3.1 MB",
      format: "PowerPoint, PDF",
      lastUpdated: "2024-11-12",
      featured: true,
      tags: ["Corporate", "Professional", "Elegant"],
    },
    {
      id: 4,
      title: "Developer Portfolio",
      category: "technology",
      description:
        "Ideal for computer science and software development students",
      preview: "/api/placeholder/300/200",
      downloads: 2031,
      rating: 4.9,
      fileSize: "4.2 MB",
      format: "React, Next.js",
      lastUpdated: "2024-11-18",
      featured: true,
      tags: ["Interactive", "Modern", "Code-based"],
    },
    {
      id: 5,
      title: "Art & Photography Portfolio",
      category: "arts",
      description: "Showcase your artistic work and photography projects",
      preview: "/api/placeholder/300/200",
      downloads: 743,
      rating: 4.5,
      fileSize: "5.7 MB",
      format: "Adobe Suite",
      lastUpdated: "2024-11-08",
      featured: false,
      tags: ["Visual", "Gallery", "Artistic"],
    },
    {
      id: 6,
      title: "Academic Research Portfolio",
      category: "research",
      description:
        "Perfect for research publications and academic achievements",
      preview: "/api/placeholder/300/200",
      downloads: 567,
      rating: 4.4,
      fileSize: "2.9 MB",
      format: "LaTeX, Word",
      lastUpdated: "2024-11-05",
      featured: false,
      tags: ["Academic", "Research", "Publications"],
    },
  ];

  const categories = [
    { id: "all", name: "All Categories", count: portfolioTemplates.length },
    {
      id: "design",
      name: "Design",
      count: portfolioTemplates.filter((p) => p.category === "design").length,
    },
    {
      id: "engineering",
      name: "Engineering",
      count: portfolioTemplates.filter((p) => p.category === "engineering")
        .length,
    },
    {
      id: "business",
      name: "Business",
      count: portfolioTemplates.filter((p) => p.category === "business").length,
    },
    {
      id: "technology",
      name: "Technology",
      count: portfolioTemplates.filter((p) => p.category === "technology")
        .length,
    },
    {
      id: "arts",
      name: "Arts",
      count: portfolioTemplates.filter((p) => p.category === "arts").length,
    },
    {
      id: "research",
      name: "Research",
      count: portfolioTemplates.filter((p) => p.category === "research").length,
    },
  ];

  const filteredPortfolios = portfolioTemplates.filter((portfolio) => {
    const matchesSearch =
      portfolio.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      portfolio.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      portfolio.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" || portfolio.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (portfolio) => {
    // Simulate download
    console.log(`Downloading ${portfolio.title}`);
    // In a real app, this would trigger an actual download
  };

  const handlePreview = (portfolio) => {
    // Simulate preview
    console.log(`Previewing ${portfolio.title}`);
    // In a real app, this would open a preview modal or new tab
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Portfolio Distribution Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover and download professional portfolio templates designed
              specifically for college students across various disciplines
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search portfolios, tags, or descriptions..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-gray-500 w-5 h-5" />
              <select
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
            <div className="text-3xl font-bold">
              {portfolioTemplates.length}
            </div>
            <div className="text-blue-100">Total Templates</div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
            <div className="text-3xl font-bold">
              {portfolioTemplates
                .reduce((sum, p) => sum + p.downloads, 0)
                .toLocaleString()}
            </div>
            <div className="text-green-100">Total Downloads</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
            <div className="text-3xl font-bold">
              {portfolioTemplates.filter((p) => p.featured).length}
            </div>
            <div className="text-purple-100">Featured Templates</div>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
            <div className="text-3xl font-bold">{categories.length - 1}</div>
            <div className="text-orange-100">Categories</div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPortfolios.length} of {portfolioTemplates.length}{" "}
            portfolio templates
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Featured Badge */}
              {portfolio.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Featured
                  </span>
                </div>
              )}

              {/* Preview Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-gray-400" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button
                    onClick={() => handlePreview(portfolio)}
                    className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </button>
                  <button
                    onClick={() => handleDownload(portfolio)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {portfolio.title}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm text-gray-600">
                      {portfolio.rating}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {portfolio.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {portfolio.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta Information */}
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>
                      {portfolio.downloads.toLocaleString()} downloads
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>
                      {portfolio.fileSize} • {portfolio.format}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      Updated{" "}
                      {new Date(portfolio.lastUpdated).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handlePreview(portfolio)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </button>
                  <button
                    onClick={() => handleDownload(portfolio)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPortfolios.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No portfolios found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Portfolio?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Can't find the perfect template? Our design team can create a custom
            portfolio tailored to your specific needs and field of study.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Request Custom Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDistribution;
