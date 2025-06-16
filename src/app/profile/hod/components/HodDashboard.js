import React, { useState } from "react";
import {
  Users,
  BookOpen,
  Calendar,
  TrendingUp,
  TrendingDown,
  Award,
  Clock,
  AlertTriangle,
  CheckCircle,
  GraduationCap,
  UserCheck,
  FileText,
  BarChart3,
  ArrowUp,
  ArrowDown,
  Eye,
  Download,
  Bell,
  Filter,
} from "lucide-react";

const HODDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  // Mock data for dashboard
  const stats = [
    {
      title: "Total Students",
      value: "1,247",
      change: "+12",
      changeType: "increase",
      icon: GraduationCap,
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Faculty Members",
      value: "45",
      change: "+2",
      changeType: "increase",
      icon: Users,
      color: "bg-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Active Courses",
      value: "28",
      change: "+1",
      changeType: "increase",
      icon: BookOpen,
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Attendance Rate",
      value: "92.5%",
      change: "-2.1%",
      changeType: "decrease",
      icon: UserCheck,
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "assignment",
      title: "New assignment submitted",
      description: "Data Structures - Assignment 3 by Prof. Johnson",
      time: "2 hours ago",
      icon: FileText,
      color: "text-blue-500",
    },
    {
      id: 2,
      type: "attendance",
      title: "Low attendance alert",
      description: "Computer Networks class - Only 65% attendance",
      time: "4 hours ago",
      icon: AlertTriangle,
      color: "text-red-500",
    },
    {
      id: 3,
      type: "grade",
      title: "Grades updated",
      description: "Database Management - Mid-term results published",
      time: "6 hours ago",
      icon: Award,
      color: "text-green-500",
    },
    {
      id: 4,
      type: "schedule",
      title: "Schedule changed",
      description: "Machine Learning class moved to Lab 2",
      time: "1 day ago",
      icon: Calendar,
      color: "text-purple-500",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Faculty Meeting",
      date: "Today, 3:00 PM",
      type: "meeting",
      priority: "high",
    },
    {
      id: 2,
      title: "Student Council Review",
      date: "Tomorrow, 10:00 AM",
      type: "review",
      priority: "medium",
    },
    {
      id: 3,
      title: "Department Budget Review",
      date: "Jun 6, 2:00 PM",
      type: "finance",
      priority: "high",
    },
    {
      id: 4,
      title: "Course Curriculum Update",
      date: "Jun 8, 11:00 AM",
      type: "academic",
      priority: "low",
    },
  ];

  const coursePerformance = [
    { name: "Data Structures", students: 85, avgGrade: "B+", completion: 92 },
    { name: "Algorithms", students: 78, avgGrade: "A-", completion: 88 },
    { name: "Database Systems", students: 92, avgGrade: "B", completion: 85 },
    { name: "Computer Networks", students: 67, avgGrade: "B-", completion: 79 },
    { name: "Machine Learning", students: 54, avgGrade: "A-", completion: 94 },
  ];

  const StatCard = ({ stat }) => {
    const Icon = stat.icon;
    return (
      <div className="bg-white w-full rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div
            className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}
          >
            <Icon className={`w-6 h-6 ${stat.textColor}`} />
          </div>
          <div
            className={`flex items-center space-x-1 text-sm ${
              stat.changeType === "increase" ? "text-green-600" : "text-red-600"
            }`}
          >
            {stat.changeType === "increase" ? (
              <ArrowUp className="w-4 h-4" />
            ) : (
              <ArrowDown className="w-4 h-4" />
            )}
            <span className="font-medium">{stat.change}</span>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
          <p className="text-gray-600 text-sm mt-1">{stat.title}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Department Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Welcome back, Dr. Smith. Here's your department overview.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="semester">This Semester</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Course Performance */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Course Performance
            </h2>
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
              <Eye className="w-4 h-4" />
              <span>View All</span>
            </button>
          </div>
          <div className="space-y-4">
            {coursePerformance.map((course, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{course.name}</h3>
                  <p className="text-sm text-gray-600">
                    {course.students} students enrolled
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-900">
                      {course.avgGrade}
                    </p>
                    <p className="text-xs text-gray-600">Avg Grade</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-900">
                      {course.completion}%
                    </p>
                    <p className="text-xs text-gray-600">Completion</p>
                  </div>
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.completion}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Upcoming Events
            </h2>
            <button className="text-blue-600 hover:text-blue-800">
              <Calendar className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    event.priority === "high"
                      ? "bg-red-500"
                      : event.priority === "medium"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                ></div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 text-sm">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-xs mt-1">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Recent Activities
          </h2>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
              <Filter className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
              <Bell className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="space-y-4">
          {recentActivities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.id}
                className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div
                  className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center`}
                >
                  <Icon className={`w-5 h-5 ${activity.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {activity.description}
                  </p>
                  <p className="text-gray-500 text-xs mt-2">{activity.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HODDashboard;
