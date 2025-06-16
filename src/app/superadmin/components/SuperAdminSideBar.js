"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Home,
  Users,
  GraduationCap,
  BookOpen,
  Calendar,
  FileText,
  MessageSquare,
  Settings,
  BarChart3,
  UserCheck,
  Award,
  Building,
  Camera,
  Bell,
  Globe,
  Shield,
  Download,
  Upload,
  Menu,
  X,
} from "lucide-react";

const AdminSidebar = ({ setActiveItem, activeItem }) => {
  const [expandedSections, setExpandedSections] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Home,
      path: "/admin/dashboard",
    },
    {
      id: "content",
      label: "Content Management",
      icon: FileText,
      children: [
        { id: "pages", label: "Pages", path: "/admin/content/pages" },
        {
          id: "announcements",
          label: "Announcements",
          path: "/admin/content/announcements",
        },
        {
          id: "flashnews",
          label: "Flash News",
          path: "/admin/content/announcements",
        },
        {
          id: "banner",
          label: "Banner",
          path: "/admin/content/banner",
        },
        { id: "news", label: "News & Events", path: "/admin/content/news" },
        {
          id: "gallery",
          label: "Photo Gallery",
          path: "/admin/content/gallery",
        },
      ],
    },
    {
      id: "academics",
      label: "Academic Management",
      icon: GraduationCap,
      children: [
        {
          id: "departments",
          label: "Departments",
          path: "/admin/academics/departments",
        },
        { id: "courses", label: "Courses", path: "/admin/academics/courses" },
        {
          id: "curriculum",
          label: "Curriculum",
          path: "/admin/academics/curriculum",
        },
        {
          id: "timetable",
          label: "Timetable",
          path: "/admin/academics/timetable",
        },
        { id: "exams", label: "Examinations", path: "/admin/academics/exams" },
      ],
    },
    {
      id: "users",
      label: "User Management",
      icon: Users,
      children: [
        { id: "students", label: "Students", path: "/admin/users/students" },
        { id: "faculty", label: "Faculty", path: "/admin/users/faculty" },
        { id: "alumni", label: "Alumni", path: "/admin/users/alumni" },
        {
          id: "roles",
          label: "Roles & Permissions",
          path: "/admin/users/roles",
        },
      ],
    },
    {
      id: "admissions",
      label: "Admissions",
      icon: UserCheck,
      children: [
        {
          id: "applications",
          label: "Applications",
          path: "/admin/admissions/applications",
        },
        {
          id: "admission-forms",
          label: "Admission Forms",
          path: "/admin/admissions/forms",
        },
        {
          id: "eligibility",
          label: "Eligibility Criteria",
          path: "/admin/admissions/eligibility",
        },
        {
          id: "fee-structure",
          label: "Fee Structure",
          path: "/admin/admissions/fees",
        },
      ],
    },
    {
      id: "library",
      label: "Library Management",
      icon: BookOpen,
      children: [
        { id: "books", label: "Books Catalog", path: "/admin/library/books" },
        {
          id: "digital-resources",
          label: "Digital Resources",
          path: "/admin/library/digital",
        },
        {
          id: "issue-return",
          label: "Issue/Return",
          path: "/admin/library/transactions",
        },
      ],
    },
    {
      id: "events",
      label: "Events & Calendar",
      icon: Calendar,
      children: [
        {
          id: "academic-calendar",
          label: "Academic Calendar",
          path: "/admin/events/academic",
        },
        {
          id: "events",
          label: "College Events",
          path: "/admin/events/college",
        },
        { id: "holidays", label: "Holidays", path: "/admin/events/holidays" },
      ],
    },
    {
      id: "facilities",
      label: "Facilities",
      icon: Building,
      children: [
        {
          id: "infrastructure",
          label: "Infrastructure",
          path: "/admin/facilities/infrastructure",
        },
        { id: "hostels", label: "Hostels", path: "/admin/facilities/hostels" },
        {
          id: "transportation",
          label: "Transportation",
          path: "/admin/facilities/transport",
        },
        { id: "canteen", label: "Canteen", path: "/admin/facilities/canteen" },
      ],
    },
    {
      id: "achievements",
      label: "Achievements",
      icon: Award,
      children: [
        {
          id: "student-achievements",
          label: "Student Achievements",
          path: "/admin/achievements/students",
        },
        {
          id: "faculty-achievements",
          label: "Faculty Achievements",
          path: "/admin/achievements/faculty",
        },
        {
          id: "college-rankings",
          label: "College Rankings",
          path: "/admin/achievements/rankings",
        },
      ],
    },
    {
      id: "communications",
      label: "Communications",
      icon: MessageSquare,
      children: [
        {
          id: "notifications",
          label: "Notifications",
          path: "/admin/communications/notifications",
        },
        {
          id: "emails",
          label: "Email Templates",
          path: "/admin/communications/emails",
        },
        {
          id: "sms",
          label: "SMS Management",
          path: "/admin/communications/sms",
        },
        {
          id: "contact-forms",
          label: "Contact Forms",
          path: "/admin/communications/contacts",
        },
      ],
    },
    {
      id: "media",
      label: "Media Management",
      icon: Camera,
      children: [
        {
          id: "image-gallery",
          label: "Image Gallery",
          path: "/admin/media/images",
        },
        {
          id: "video-gallery",
          label: "Video Gallery",
          path: "/admin/media/videos",
        },
        { id: "documents", label: "Documents", path: "/admin/media/documents" },
      ],
    },
    {
      id: "analytics",
      label: "Analytics & Reports",
      icon: BarChart3,
      children: [
        {
          id: "website-analytics",
          label: "Website Analytics",
          path: "/admin/analytics/website",
        },
        {
          id: "user-reports",
          label: "User Reports",
          path: "/admin/analytics/users",
        },
        {
          id: "content-performance",
          label: "Content Performance",
          path: "/admin/analytics/content",
        },
      ],
    },
    {
      id: "website",
      label: "Website Settings",
      icon: Globe,
      children: [
        {
          id: "general-settings",
          label: "General Settings",
          path: "/admin/website/general",
        },
        {
          id: "navigation",
          label: "Navigation Menu",
          path: "/admin/website/navigation",
        },
        {
          id: "footer",
          label: "Footer Content",
          path: "/admin/website/footer",
        },
        { id: "seo", label: "SEO Settings", path: "/admin/website/seo" },
      ],
    },
    {
      id: "security",
      label: "Security",
      icon: Shield,
      children: [
        {
          id: "access-logs",
          label: "Access Logs",
          path: "/admin/security/logs",
        },
        {
          id: "backup",
          label: "Backup Management",
          path: "/admin/security/backup",
        },
        {
          id: "security-settings",
          label: "Security Settings",
          path: "/admin/security/settings",
        },
      ],
    },
    {
      id: "settings",
      label: "System Settings",
      icon: Settings,
      path: "/admin/settings",
    },
  ];

  const renderMenuItem = (item, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections[item.id];
    const isActive = activeItem === item.id;
    const Icon = item.icon;

    return (
      <div key={item.id} className="mb-1">
        <div
          className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
            isActive
              ? "bg-blue-600 text-white shadow-md"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          } ${depth > 0 ? "ml-4 py-1.5" : ""}`}
          onClick={() => {
            if (hasChildren) {
              toggleSection(item.id);
            } else {
              setActiveItem(item.id);
            }
          }}
        >
          <div className="flex items-center space-x-3">
            {Icon && <Icon size={depth > 0 ? 16 : 18} />}
            <span className={`font-medium ${depth > 0 ? "text-sm" : ""}`}>
              {item.label}
            </span>
          </div>
          {hasChildren && (
            <div className="transition-transform duration-200">
              {isExpanded ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </div>
          )}
        </div>

        {hasChildren && isExpanded && (
          <div className="mt-1 space-y-1">
            {item.children.map((child) => renderMenuItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex  bg-gray-100">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:relative inset-y-0 left-0 z-50 w-80 bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">College Portal</h1>
              <p className="text-gray-400 text-sm">Super Admin</p>
            </div>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {menuItems.map((item) => renderMenuItem(item))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-3 text-gray-400">
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-white">SA</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Super Admin</p>
              <p className="text-xs">admin@college.edu</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-30 p-2 bg-gray-800 text-white rounded-lg shadow-lg"
      >
        <Menu size={20} />
      </button>

      {/* Main Content Area (Demo) */}
    </div>
  );
};

export default AdminSidebar;
