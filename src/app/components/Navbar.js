"use client";
import React, { useState } from "react";
import { ChevronDown, Menu, X, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { name: "HOME", href: "/" },
    {
      name: "ABOUT",
      href: "/aboutus",
    },
    {
      name: "ACADEMICS",
      href: "/academics",
      hasDropdown: true,
      dropdownItems: [
        { name: "Acedemic Calender", href: "/academic?page=AcedemicCalender" },
        { name: "Adminssion", href: "/academic?page=Adminssion" },
        { name: "Exam Timetable", href: "/academic?page=ExamTimetable" },
        { name: "Syllabus", href: "/academic?page=Syllabus" },
      ],
    },
    {
      name: "ADMINISTRATION",
      href: "/administration",
      hasDropdown: true,
      dropdownItems: [
        { name: "Principal's Desk", href: "/administration?page=Principal" },
        {
          name: "Organization Chart",
          href: "/administration?page=Organization",
        },
        {
          name: "office Administration",
          href: "/administration?page=Administration",
        },
        { name: "Important GRs", href: "/administration?page=GRs" },
        {
          name: "Portfolio Distribution",
          href: "/administration?page=Portfolio",
        },
        { name: "Ombudsperson", href: "/administration?page=Ombudsperson" },
      ],
    },
    {
      name: "DEPARTMENTS",
      href: "/departments",
      hasDropdown: true,
      dropdownItems: [
        { name: "Computer Science", href: "/department?dept=CSE" },
        { name: "Mechanical", href: "/department?dept=ME" },
        { name: "Civil", href: "/department?dept=CE" },
        { name: "Electrical", href: "/department?dept=EE" },
        { name: "Electronics", href: "/department?dept=EXTC" },
      ],
    },
    {
      name: "FACILITIES",
      href: "/facilities",
      hasDropdown: true,
      dropdownItems: [
        { name: "All Faculty", href: "/facilities?page=Faculty" },
      ],
    },
    {
      name: "STUDENTS CORNER",
      href: "/students",
      hasDropdown: true,
      dropdownItems: [
        { name: "Alumni", href: "/stdcorner?page=Alumni" },
        { name: "Event", href: "/stdcorner?page=Event" },
        { name: "Photo Gallery", href: "/stdcorner?page=Photo" },
        { name: "Scholarship & Awards", href: "/stdcorner?page=Scholarship" },
        {
          name: "Student Support Facilities",
          href: "/stdcorner?page=Facilities",
        },
        { name: "Registration", href: "/auth?page=Registration" },
        { name: "Login", href: "/auth?page=Login" },
      ],
    },
    {
      name: "STUDY RESOURSES",
      href: "/study",
      hasDropdown: true,
      dropdownItems: [
        { name: "Role Selection", href: "/#" },
        { name: "Courses", href: "/#" },
        { name: "Projects", href: "/#" },
        { name: "Industry Tools Courses", href: "/#" },
        { name: "Resume Builder", href: "/#" },
        { name: "Presearch Knowledge", href: "/#" },
        { name: "MockInterview", href: "/#" },
        { name: "Coding Practice", href: "/#" },
        { name: "Login", href: "/stdcorner/activities" },
      ],
    },

    {
      name: "TEACHER CORNER",
      href: "/teacher",
      hasDropdown: true,
      dropdownItems: [
        { name: "Training", href: "/#" },
        { name: "Create Courses", href: "/#" },
        { name: "Raise complaint", href: "/#" },
        { name: "Presearch Knowledge", href: "/#" },
        { name: "Certifications", href: "/#" },
        { name: "Registration", href: "/#" },
        { name: "Login", href: "/#" },
      ],
    },
    { name: "TRAINING & PLACEMENT", href: "/t&p" },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className="bg-white shadow-lg">
      {/* Top Section with Logo and College Info */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Logo and College Name */}
          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
            <Link href="/">
              <Image
                src="/logo.jpg"
                height={100}
                width={900}
                alt="Logo"
                className="h-[55px] lg:h-16 md:h-14 w-[55px] lg:w-[60px] cursor-pointer"
              />
            </Link>
            <div className="text-center lg:text-left">
              <h1 className="text-xl lg:text-2xl font-bold text-blue-900 leading-tight">
                Government College of Engineering, Yavatmal
              </h1>
              <p className="text-blue-700 text-sm mt-1">
                (Affiliated to, Dr. Babasaheb Ambedkar Technological University)
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Dhamangaon Road, Yavatmal</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(07232)243278,238683</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>office.gcoeyavatmal@dtemaharashtra.gov.in</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      className="flex items-center space-x-1 px-4 py-4 hover:bg-blue-800 transition-colors"
                      onClick={() => toggleDropdown(index)}
                    >
                      <span className="text-sm font-medium">{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-1 px-4 py-4 hover:bg-blue-800 transition-colors"
                    >
                      <span className="text-sm font-medium capitalize">
                        {item.name}
                      </span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 bg-white text-gray-800 min-w-48 shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block capitalize px-4 py-3 hover:bg-gray-100 text-sm border-b border-gray-100 last:border-b-0"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-blue-800">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.hasDropdown ? (
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 hover:bg-blue-800 text-left"
                      onClick={() => toggleDropdown(index)}
                    >
                      <span className="text-sm font-medium">{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center justify-between w-full px-4 py-3 hover:bg-blue-800 text-left"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                  )}

                  {/* Mobile Dropdown */}
                  {item.hasDropdown && activeDropdown === index && (
                    <div className="bg-blue-800">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block capitalize px-8 py-2 hover:bg-blue-700 text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
