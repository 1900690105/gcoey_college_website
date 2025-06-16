"use client";
import React, { useState, useEffect } from "react";
import {
  Users,
  GraduationCap,
  BookOpen,
  TrendingUp,
  TrendingDown,
  Eye,
  MousePointer,
  Clock,
  Download,
  Bell,
  Calendar,
  FileText,
  Award,
  AlertTriangle,
  CheckCircle,
  Activity,
  Globe,
  UserPlus,
  MessageSquare,
  BarChart3,
  PieChart,
  ArrowUp,
  ArrowDown,
  RefreshCw,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Cell,
} from "recharts";
import { Pie } from "react-chartjs-2";

const AdminDashboard = () => {
  const [timeRange, setTimeRange] = useState("7days");
  const [isLoading, setIsLoading] = useState(false);

  // Sample data - in real app, this would come from API
  const websiteTrafficData = [
    { name: "Mon", visitors: 1200, pageViews: 3400, bounceRate: 45 },
    { name: "Tue", visitors: 1900, pageViews: 4200, bounceRate: 42 },
    { name: "Wed", visitors: 1400, pageViews: 3800, bounceRate: 48 },
    { name: "Thu", visitors: 2200, pageViews: 5100, bounceRate: 38 },
    { name: "Fri", visitors: 2800, pageViews: 6200, bounceRate: 35 },
    { name: "Sat", visitors: 1600, pageViews: 3900, bounceRate: 52 },
    { name: "Sun", visitors: 1100, pageViews: 2800, bounceRate: 58 },
  ];

  const userEngagementData = [
    { name: "Students", value: 2840, color: "#3B82F6" },
    { name: "Faculty", value: 320, color: "#10B981" },
    { name: "Staff", value: 180, color: "#F59E0B" },
    { name: "Alumni", value: 1240, color: "#8B5CF6" },
    { name: "Prospective", value: 890, color: "#EF4444" },
  ];

  const contentPerformanceData = [
    { page: "Admissions", views: 8450, engagement: 85 },
    { page: "Courses", views: 6220, engagement: 72 },
    { page: "Faculty", views: 4180, engagement: 68 },
    { page: "Events", views: 3920, engagement: 79 },
    { page: "Gallery", views: 3650, engagement: 81 },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "user",
      message: "25 new student registrations",
      time: "2 hours ago",
      icon: UserPlus,
      color: "text-green-600",
    },
    {
      id: 2,
      type: "content",
      message: "New announcement published",
      time: "4 hours ago",
      icon: Bell,
      color: "text-blue-600",
    },
    {
      id: 3,
      type: "system",
      message: "Website backup completed",
      time: "6 hours ago",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      id: 4,
      type: "alert",
      message: "High server load detected",
      time: "8 hours ago",
      icon: AlertTriangle,
      color: "text-orange-600",
    },
    {
      id: 5,
      type: "content",
      message: "Event gallery updated",
      time: "12 hours ago",
      icon: FileText,
      color: "text-purple-600",
    },
  ];

  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const StatCard = ({
    title,
    value,
    change,
    changeType,
    icon: Icon,
    color,
    subtitle,
  }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
              <Icon className={`${color} w-6 h-6`} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">{title}</p>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              {subtitle && (
                <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
              )}
            </div>
          </div>
        </div>
        {change && (
          <div
            className={`flex items-center space-x-1 px-2 py-1 rounded-full text-sm font-medium ${
              changeType === "increase"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {changeType === "increase" ? (
              <ArrowUp className="w-3 h-3" />
            ) : (
              <ArrowDown className="w-3 h-3" />
            )}
            <span>{change}</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Dashboard Overview
            </h1>
            <p className="text-gray-600 mt-1">
              Monitor your college portal's performance and analytics
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="90days">Last 90 Days</option>
            </select>
            <button
              onClick={refreshData}
              disabled={isLoading}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <RefreshCw
                className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`}
              />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Users"
            value="4,570"
            change="12.5%"
            changeType="increase"
            icon={Users}
            color="text-blue-600"
            subtitle="Active this month"
          />
          <StatCard
            title="Page Views"
            value="127K"
            change="8.2%"
            changeType="increase"
            icon={Eye}
            color="text-green-600"
            subtitle="This week"
          />
          <StatCard
            title="Avg. Session"
            value="4m 32s"
            change="3.1%"
            changeType="decrease"
            icon={Clock}
            color="text-purple-600"
            subtitle="Duration"
          />
          <StatCard
            title="Bounce Rate"
            value="42.8%"
            change="2.4%"
            changeType="decrease"
            icon={TrendingDown}
            color="text-orange-600"
            subtitle="Lower is better"
          />
        </div>

        {/* Website Traffic Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Website Traffic
              </h2>
              <p className="text-gray-600">Daily visitors and page views</p>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Visitors</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Page Views</span>
              </div>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={websiteTrafficData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="name" className="text-gray-600" />
                <YAxis className="text-gray-600" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="visitors"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="pageViews"
                  stroke="#10B981"
                  fill="#10B981"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Distribution and Content Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  User Distribution
                </h2>
                <p className="text-gray-600">Active users by category</p>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    dataKey="value"
                    data={userEngagementData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                    labelLine={false}
                  >
                    {userEngagementData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [value.toLocaleString(), "Users"]}
                  />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {userEngagementData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-600">
                    {item.name}: {item.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Content Performance */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Top Pages</h2>
                <p className="text-gray-600">Most visited content</p>
              </div>
            </div>
            <div className="space-y-4">
              {contentPerformanceData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">
                        {item.page}
                      </span>
                      <span className="text-sm text-gray-600">
                        {item.views.toLocaleString()} views
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.engagement}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 mt-1">
                      {item.engagement}% engagement
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity and Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Recent Activity
                </h2>
                <p className="text-gray-600">
                  Latest system events and updates
                </p>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div
                    className={`p-2 rounded-full bg-gray-100 ${activity.color}`}
                  >
                    <activity.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">
                      {activity.message}
                    </p>
                    <p className="text-gray-500 text-sm">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                System Health
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Server Status</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 text-sm font-medium">
                      Online
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Database</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 text-sm font-medium">
                      Healthy
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Storage Used</span>
                  <span className="text-gray-900 font-medium">68%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Last Backup</span>
                  <span className="text-gray-900 font-medium">2h ago</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-2 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Bell className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">Send Announcement</span>
                </button>
                <button className="w-full flex items-center space-x-2 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <UserPlus className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">Add New User</span>
                </button>
                <button className="w-full flex items-center space-x-2 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <FileText className="w-4 h-4 text-purple-600" />
                  <span className="text-gray-700">Update Content</span>
                </button>
                <button className="w-full flex items-center space-x-2 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <BarChart3 className="w-4 h-4 text-orange-600" />
                  <span className="text-gray-700">View Reports</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
