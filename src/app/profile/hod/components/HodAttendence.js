import React, { useState } from "react";
import {
  Users,
  Calendar,
  Clock,
  TrendingUp,
  UserCheck,
  UserX,
  Download,
  Filter,
  Search,
  ChevronDown,
  Eye,
  Edit,
  MoreHorizontal,
  Bell,
  Settings,
  LogOut,
  Home,
  BarChart3,
  FileText,
  User,
} from "lucide-react";

const HODPortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data
  const departmentStats = {
    totalEmployees: 45,
    presentToday: 38,
    absentToday: 7,
    avgAttendance: 84.4,
  };

  const recentAttendance = [
    {
      id: 1,
      name: "John Smith",
      empId: "EMP001",
      checkIn: "09:15",
      checkOut: "18:30",
      status: "present",
      date: "2024-06-04",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      empId: "EMP002",
      checkIn: "09:00",
      checkOut: "18:15",
      status: "present",
      date: "2024-06-04",
    },
    {
      id: 3,
      name: "Mike Davis",
      empId: "EMP003",
      checkIn: "-",
      checkOut: "-",
      status: "absent",
      date: "2024-06-04",
    },
    {
      id: 4,
      name: "Lisa Wilson",
      empId: "EMP004",
      checkIn: "09:45",
      checkOut: "18:45",
      status: "late",
      date: "2024-06-04",
    },
    {
      id: 5,
      name: "David Brown",
      empId: "EMP005",
      checkIn: "08:55",
      checkOut: "18:20",
      status: "present",
      date: "2024-06-04",
    },
  ];

  const monthlyData = [
    { month: "Jan", attendance: 88 },
    { month: "Feb", attendance: 82 },
    { month: "Mar", attendance: 90 },
    { month: "Apr", attendance: 85 },
    { month: "May", attendance: 87 },
    { month: "Jun", attendance: 84 },
  ];

  const employees = [
    {
      id: 1,
      name: "John Smith",
      empId: "EMP001",
      position: "Senior Developer",
      attendance: 92,
      lastSeen: "2024-06-04",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      empId: "EMP002",
      position: "UI/UX Designer",
      attendance: 88,
      lastSeen: "2024-06-04",
    },
    {
      id: 3,
      name: "Mike Davis",
      empId: "EMP003",
      position: "Project Manager",
      attendance: 75,
      lastSeen: "2024-06-03",
    },
    {
      id: 4,
      name: "Lisa Wilson",
      empId: "EMP004",
      position: "QA Engineer",
      attendance: 95,
      lastSeen: "2024-06-04",
    },
    {
      id: 5,
      name: "David Brown",
      empId: "EMP005",
      position: "Backend Developer",
      attendance: 85,
      lastSeen: "2024-06-04",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "present":
        return "text-green-600 bg-green-100";
      case "absent":
        return "text-red-600 bg-red-100";
      case "late":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getAttendanceColor = (percentage) => {
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 80) return "text-yellow-600";
    return "text-red-600";
  };

  const filteredAttendance = recentAttendance.filter((record) => {
    const matchesSearch =
      record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.empId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || record.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const DashboardTab = () => (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Employees
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {departmentStats.totalEmployees}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users size={24} className="text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Present Today</p>
              <p className="text-3xl font-bold text-green-600">
                {departmentStats.presentToday}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <UserCheck size={24} className="text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Absent Today</p>
              <p className="text-3xl font-bold text-red-600">
                {departmentStats.absentToday}
              </p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <UserX size={24} className="text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Avg Attendance
              </p>
              <p className="text-3xl font-bold text-blue-600">
                {departmentStats.avgAttendance}%
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp size={24} className="text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Attendance Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Monthly Attendance Trend
          </h3>
          <div className="h-64 flex items-end justify-between space-x-2">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className="w-full bg-blue-600 rounded-t-md transition-all duration-300 hover:bg-blue-700"
                  style={{ height: `${(data.attendance / 100) * 200}px` }}
                ></div>
                <p className="text-xs text-gray-600 mt-2">{data.month}</p>
                <p className="text-xs font-medium text-gray-800">
                  {data.attendance}%
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Today's Attendance Summary
          </h3>
          <div className="space-y-4">
            {recentAttendance.slice(0, 5).map((record) => (
              <div
                key={record.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{record.name}</p>
                    <p className="text-sm text-gray-600">{record.empId}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      record.status
                    )}`}
                  >
                    {record.status}
                  </span>
                  {record.checkIn !== "-" && (
                    <p className="text-xs text-gray-600 mt-1">
                      {record.checkIn} - {record.checkOut}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const AttendanceTab = () => (
    <div className="p-6 space-y-6">
      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="present">Present</option>
              <option value="absent">Absent</option>
              <option value="late">Late</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <Download size={16} />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check In
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check Out
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAttendance.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User size={20} className="text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {record.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {record.empId}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <Clock size={16} className="mr-2 text-gray-400" />
                      {record.checkIn}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <Clock size={16} className="mr-2 text-gray-400" />
                      {record.checkOut}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        record.status
                      )}`}
                    >
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Eye size={16} />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <Edit size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const EmployeesTab = () => (
    <div className="p-6 space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Department Employees
          </h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add Employee
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <User size={24} className="text-blue-600" />
                </div>
                <MoreHorizontal
                  size={20}
                  className="text-gray-400 cursor-pointer"
                />
              </div>

              <h4 className="font-semibold text-gray-800 mb-1">
                {employee.name}
              </h4>
              <p className="text-sm text-gray-600 mb-2">{employee.empId}</p>
              <p className="text-sm text-gray-600 mb-4">{employee.position}</p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Attendance Rate</p>
                  <p
                    className={`text-lg font-bold ${getAttendanceColor(
                      employee.attendance
                    )}`}
                  >
                    {employee.attendance}%
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Last Seen</p>
                  <p className="text-sm text-gray-800">{employee.lastSeen}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ReportsTab = () => (
    <div className="p-6 space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">
          Generate Reports
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Daily Attendance Report",
              desc: "Generate daily attendance summary",
              icon: Calendar,
            },
            {
              title: "Monthly Report",
              desc: "Comprehensive monthly analysis",
              icon: BarChart3,
            },
            {
              title: "Employee Performance",
              desc: "Individual attendance records",
              icon: User,
            },
            {
              title: "Department Summary",
              desc: "Overall department statistics",
              icon: Users,
            },
            {
              title: "Late Arrivals Report",
              desc: "Track punctuality issues",
              icon: Clock,
            },
            {
              title: "Custom Report",
              desc: "Create custom date range reports",
              icon: FileText,
            },
          ].map((report, index) => {
            const Icon = report.icon;
            return (
              <div
                key={index}
                className="border rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {report.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4">{report.desc}</p>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Generate
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="">
        <main>
          {activeTab === "dashboard" && <DashboardTab />}
          {activeTab === "attendance" && <AttendanceTab />}
          {activeTab === "employees" && <EmployeesTab />}
          {activeTab === "reports" && <ReportsTab />}
          {activeTab === "settings" && (
            <div className="p-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Settings
                </h3>
                <p className="text-gray-600">Settings panel coming soon...</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default HODPortal;
