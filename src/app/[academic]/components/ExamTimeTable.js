import { useState } from "react";
import {
  Calendar,
  Download,
  Clock,
  MapPin,
  Book,
  Search,
  Filter,
  Bell,
} from "lucide-react";

export default function ExamTimetablePage() {
  const [selectedSemester, setSelectedSemester] = useState("semester-6");
  const [selectedBranch, setSelectedBranch] = useState("computer-science");
  const [searchTerm, setSearchTerm] = useState("");

  // Sample exam data
  const examData = {
    "semester-6": {
      "computer-science": [
        {
          id: 1,
          subject: "Software Engineering",
          code: "CS601",
          date: "2025-06-20",
          time: "09:00 AM - 12:00 PM",
          venue: "Hall A-101",
          duration: "3 hours",
          type: "Theory",
        },
        {
          id: 2,
          subject: "Database Management Systems",
          code: "CS602",
          date: "2025-06-22",
          time: "02:00 PM - 05:00 PM",
          venue: "Hall B-205",
          duration: "3 hours",
          type: "Theory",
        },
        {
          id: 3,
          subject: "Computer Networks",
          code: "CS603",
          date: "2025-06-25",
          time: "09:00 AM - 12:00 PM",
          venue: "Hall C-301",
          duration: "3 hours",
          type: "Theory",
        },
        {
          id: 4,
          subject: "Web Development Lab",
          code: "CS604",
          date: "2025-06-27",
          time: "10:00 AM - 01:00 PM",
          venue: "Computer Lab 1",
          duration: "3 hours",
          type: "Practical",
        },
        {
          id: 5,
          subject: "Machine Learning",
          code: "CS605",
          date: "2025-06-30",
          time: "02:00 PM - 05:00 PM",
          venue: "Hall A-102",
          duration: "3 hours",
          type: "Theory",
        },
      ],
    },
  };

  const currentExams = examData[selectedSemester]?.[selectedBranch] || [];

  const filteredExams = currentExams.filter(
    (exam) =>
      exam.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const downloadTimetable = () => {
    // In a real application, this would generate and download a PDF
    alert("Timetable download started! Check your downloads folder.");
  };

  const downloadCalendar = () => {
    // In a real application, this would generate an .ics file
    alert("Calendar file (.ics) download started!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-blue-600" />
                Exam Timetable
              </h1>
              <p className="text-gray-600 mt-2">
                View and download your examination schedule
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={downloadCalendar}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Add to Calendar
              </button>
              <button
                onClick={downloadTimetable}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Filter className="w-4 h-4 inline mr-1" />
                Semester
              </label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="semester-6">Semester 6</option>
                <option value="semester-5">Semester 5</option>
                <option value="semester-4">Semester 4</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Branch
              </label>
              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="computer-science">Computer Science</option>
                <option value="electronics">Electronics</option>
                <option value="mechanical">Mechanical</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Search className="w-4 h-4 inline mr-1" />
                Search Subject
              </label>
              <input
                type="text"
                placeholder="Search by subject or code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <Bell className="w-5 h-5 text-amber-400 mt-0.5 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-amber-800">
                Important Instructions
              </h3>
              <p className="text-sm text-amber-700 mt-1">
                Please arrive 30 minutes before the exam time. Bring your ID
                card and admit card. Mobile phones are strictly prohibited in
                the examination hall.
              </p>
            </div>
          </div>
        </div>

        {/* Exam Cards */}
        <div className="grid gap-6">
          {filteredExams.length > 0 ? (
            filteredExams.map((exam) => (
              <div
                key={exam.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Book className="w-5 h-5 text-blue-600" />
                        <h3 className="text-xl font-semibold text-gray-900">
                          {exam.subject}
                        </h3>
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            exam.type === "Theory"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {exam.type}
                        </span>
                      </div>
                      <p className="text-gray-600 font-mono">{exam.code}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Calendar className="w-5 h-5 text-gray-600" />
                      <div>
                        <p className="text-sm text-gray-600">Date</p>
                        <p className="font-medium text-gray-900">
                          {formatDate(exam.date)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Clock className="w-5 h-5 text-gray-600" />
                      <div>
                        <p className="text-sm text-gray-600">Time</p>
                        <p className="font-medium text-gray-900">{exam.time}</p>
                        <p className="text-xs text-gray-500">
                          ({exam.duration})
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <MapPin className="w-5 h-5 text-gray-600" />
                      <div>
                        <p className="text-sm text-gray-600">Venue</p>
                        <p className="font-medium text-gray-900">
                          {exam.venue}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No Exams Found
              </h3>
              <p className="text-gray-600">
                No exams match your current filters. Try adjusting your search
                criteria.
              </p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-blue-100 mb-6">
              If you have any questions about your exam schedule or need
              assistance, contact the examination office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                Contact Exam Office
              </button>
              <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 transition-colors border border-blue-400">
                View Academic Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
