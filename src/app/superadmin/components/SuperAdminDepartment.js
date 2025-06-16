import React, { useState, useEffect } from "react";
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Search,
  Users,
  Building,
  Mail,
  Phone,
  User,
  MessageSquare,
  RefreshCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SuperAdminDepartmentPortal = () => {
  const [departments, setDepartments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDept, setEditingDept] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [formData, setFormData] = useState({
    dname: "",
    code: "",
    idhod: "",
    dhod: "",
    hodemail: "", // Fixed: was 'email'
    hodphone: "", // Fixed: was 'phone'
    established: "",
    dstudent: "",
    dteacher: "",
    dclassroom: "",
    dlabs: "",
    dmassage: "",
    dabout: "",
    vision: "",
    mission: "",
    dcurriculum: "",
    timetable: "",
  });

  useEffect(() => {
    async function fetchDept() {
      try {
        const res = await fetch("/api/collegedepartment");
        if (!res.ok) throw new Error("Failed to fetch departments");
        const data = await res.json();
        setDepartments(data);
        console.log("data fetched");
      } catch (error) {
        console.error("Fetch error:", error);
        // Set some sample data for demo purposes
        setDepartments([
          {
            id: 1,
            dname: "Computer Science Engineering",
            code: "CSE",
            idhod: "HOD001",
            dhod: "Dr. John Smith",
            hodemail: "john.smith@college.edu",
            hodphone: "+1-555-0123",
            established: "1995",
            dstudent: 450,
            dteacher: 25,
            dclassroom: 8,
            dlabs: 5,
            dmassage: "Welcome to Computer Science Department",
            dabout:
              "Leading department in computer science education and research.",
            vision:
              "To be a world-class center of excellence in computer science education.",
            mission:
              "To provide quality education and conduct cutting-edge research.",
            dcurriculum:
              "Comprehensive curriculum covering all aspects of computer science.",
            timetable: "Monday to Friday, 9:00 AM - 5:00 PM",
          },
        ]);
      }
    }
    fetchDept();
  }, [refresh]);

  const resetForm = () => {
    setFormData({
      dname: "",
      code: "",
      idhod: "",
      dhod: "",
      hodemail: "", // Fixed: was 'email'
      hodphone: "", // Fixed: was 'phone'
      established: "",
      dstudent: "",
      dteacher: "",
      dclassroom: "",
      dlabs: "",
      dmassage: "",
      dabout: "",
      vision: "",
      mission: "",
      dcurriculum: "",
      timetable: "",
    });
  };

  const openModal = (dept = null) => {
    if (dept) {
      setEditingDept(dept);
      setFormData(dept);
    } else {
      setEditingDept(null);
      resetForm();
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingDept(null);
    resetForm();
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      if (editingDept) {
        // Update existing department
        const res = await fetch(`/api/collegedepartment/${editingDept.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            dstudent: parseInt(formData.dstudent) || 0,
            dteacher: parseInt(formData.dteacher) || 0,
            dclassroom: parseInt(formData.dclassroom) || 0,
            dlabs: parseInt(formData.dlabs) || 0,
          }),
        });

        if (!res.ok) throw new Error("Failed to update department");

        const updatedDept = await res.json();
        setDepartments(
          departments.map((dept) =>
            dept.id === editingDept.id ? updatedDept : dept
          )
        );
      } else {
        // Add new department
        const res = await fetch("/api/collegedepartment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            dstudent: parseInt(formData.dstudent) || 0,
            dteacher: parseInt(formData.dteacher) || 0,
            dclassroom: parseInt(formData.dclassroom) || 0,
            dlabs: parseInt(formData.dlabs) || 0,
          }),
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Failed to save department");
        }

        const newDept = await res.json();
        setDepartments([...departments, newDept]);
      }
      setRefresh(true);
      closeModal();
    } catch (error) {
      console.error("Submit error:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteDepartment = async (id) => {
    if (window.confirm("Are you sure you want to delete this department?")) {
      try {
        const res = await fetch(`/api/collegedepartment/${id}`, {
          method: "DELETE",
        });

        if (!res.ok) throw new Error("Failed to delete department");

        setDepartments(departments.filter((dept) => dept.id !== id));
      } catch (error) {
        console.error("Delete error:", error);
        alert("Failed to delete department");
      }
    }
  };

  const filteredDepartments = departments.filter(
    (dept) =>
      dept.dname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.code?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.dhod?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Super Admin Portal
              </h1>
              <p className="text-gray-600 mt-2">Manage College Departments</p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  setRefresh(!refresh);
                }}
              >
                <RefreshCcw />
              </Button>
              <button
                onClick={() => openModal()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Plus size={20} />
                Add Department
              </button>
            </div>
          </div>
        </div>

        {/* Search and Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="md:col-span-2">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search departments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <Building className="text-blue-600" size={24} />
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {departments.length}
                </p>
                <p className="text-gray-600 text-sm">Total Departments</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <Users className="text-green-600" size={24} />
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {departments.reduce(
                    (sum, dept) => sum + (dept.dstudent || 0),
                    0
                  )}
                </p>
                <p className="text-gray-600 text-sm">Total Students</p>
              </div>
            </div>
          </div>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDepartments.map((dept) => (
            <div
              key={dept.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {dept.dname}
                    </h3>
                    <p className="text-blue-600 font-medium">{dept.code}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openModal(dept)}
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => deleteDepartment(dept.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

                {/* Department Message */}
                {dept.dmassage && (
                  <div className="bg-blue-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MessageSquare className="text-blue-600 mt-1" size={16} />
                      <p className="text-blue-800 text-sm font-medium">
                        {dept.dmassage}
                      </p>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <User size={16} />
                    <span className="text-sm">
                      {dept.dhod} ({dept.idhod})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail size={16} />
                    <span className="text-sm">{dept.hodemail}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone size={16} />
                    <span className="text-sm">{dept.hodphone}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <p className="text-lg font-bold text-blue-600">
                      {dept.dstudent || 0}
                    </p>
                    <p className="text-xs text-gray-500">Students</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-green-600">
                      {dept.dteacher || 0}
                    </p>
                    <p className="text-xs text-gray-500">Faculty</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-purple-600">
                      {dept.dclassroom || 0}
                    </p>
                    <p className="text-xs text-gray-500">Classrooms</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-orange-600">
                      {dept.dlabs || 0}
                    </p>
                    <p className="text-xs text-gray-500">Labs</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {dept.dabout}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDepartments.length === 0 && (
          <div className="text-center py-12">
            <Building className="mx-auto text-gray-300 mb-4" size={48} />
            <p className="text-gray-500">
              No departments found matching your search.
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingDept ? "Edit Department" : "Add New Department"}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.dname}
                      onChange={(e) =>
                        setFormData({ ...formData, dname: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Computer Science Engineering"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.code}
                      onChange={(e) =>
                        setFormData({ ...formData, code: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="CSE"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      HOD ID *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.idhod}
                      onChange={(e) =>
                        setFormData({ ...formData, idhod: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="HOD001"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department Head *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.dhod}
                      onChange={(e) =>
                        setFormData({ ...formData, dhod: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Dr. John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.hodemail}
                      onChange={(e) =>
                        setFormData({ ...formData, hodemail: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="dept@college.edu"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.hodphone}
                      onChange={(e) =>
                        setFormData({ ...formData, hodphone: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1-555-0123"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Established Year
                    </label>
                    <input
                      type="text"
                      value={formData.established}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          established: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="1995"
                    />
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Department Statistics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Students
                    </label>
                    <input
                      type="number"
                      value={formData.dstudent}
                      onChange={(e) =>
                        setFormData({ ...formData, dstudent: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="450"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Teachers
                    </label>
                    <input
                      type="number"
                      value={formData.dteacher}
                      onChange={(e) =>
                        setFormData({ ...formData, dteacher: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="25"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Classrooms
                    </label>
                    <input
                      type="number"
                      value={formData.dclassroom}
                      onChange={(e) =>
                        setFormData({ ...formData, dclassroom: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="8"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Labs
                    </label>
                    <input
                      type="number"
                      value={formData.dlabs}
                      onChange={(e) =>
                        setFormData({ ...formData, dlabs: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="5"
                    />
                  </div>
                </div>
              </div>

              {/* Department Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Department Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department Message
                    </label>
                    <input
                      type="text"
                      value={formData.dmassage}
                      onChange={(e) =>
                        setFormData({ ...formData, dmassage: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Welcome message for the department"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      About Department
                    </label>
                    <textarea
                      value={formData.dabout}
                      onChange={(e) =>
                        setFormData({ ...formData, dabout: e.target.value })
                      }
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Brief description about the department..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Vision
                      </label>
                      <textarea
                        value={formData.vision}
                        onChange={(e) =>
                          setFormData({ ...formData, vision: e.target.value })
                        }
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Department's vision statement..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mission
                      </label>
                      <textarea
                        value={formData.mission}
                        onChange={(e) =>
                          setFormData({ ...formData, mission: e.target.value })
                        }
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Department's mission statement..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Curriculum
                    </label>
                    <textarea
                      value={formData.dcurriculum}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dcurriculum: e.target.value,
                        })
                      }
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Description of curriculum and courses offered..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timetable
                    </label>
                    <input
                      type="text"
                      value={formData.timetable}
                      onChange={(e) =>
                        setFormData({ ...formData, timetable: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Department working hours and schedule"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={isLoading}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50"
                >
                  <Save size={18} />
                  {isLoading
                    ? "Saving..."
                    : editingDept
                    ? "Update"
                    : "Create"}{" "}
                  Department
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperAdminDepartmentPortal;

// import React, { useState, useEffect } from "react";
// import {
//   Plus,
//   Edit,
//   Trash2,
//   Save,
//   X,
//   Search,
//   Users,
//   GraduationCap,
//   Building,
//   Mail,
//   Phone,
//   User,
//   Clock,
//   BookOpen,
//   Target,
//   Eye,
//   MessageSquare,
//   School,
// } from "lucide-react";

// const SuperAdminDepartmentPortal = () => {
//   const [departments, setDepartments] = useState([]);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingDept, setEditingDept] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [formData, setFormData] = useState({
//     dname: "",
//     code: "",
//     idhod: "",
//     dhod: "",
//     hodemail: "",
//     hodphone: "",
//     established: "",
//     dstudent: "",
//     dteacher: "",
//     dclassroom: "",
//     dlabs: "",
//     dmassage: "",
//     dabout: "",
//     vision: "",
//     mission: "",
//     dcurriculum: "",
//     timetable: "",
//   });

//   useEffect(() => {
//     async function fetchDept() {
//       const res = await fetch("/api/collegedepartment");
//       const data = await res.json();
//       setDepartments(data);
//     }
//     fetchDept();
//   }, []);

//   const resetForm = () => {
//     setFormData({
//       dname: "",
//       code: "",
//       idhod: "",
//       dhod: "",
//       email: "",
//       phone: "",
//       established: "",
//       dstudent: "",
//       dteacher: "",
//       dclassroom: "",
//       dlabs: "",
//       dmassage: "",
//       dabout: "",
//       vision: "",
//       mission: "",
//       dcurriculum: "",
//       timetable: "",
//     });
//   };

//   const openModal = (dept = null) => {
//     if (dept) {
//       setEditingDept(dept);
//       setFormData(dept);
//     } else {
//       setEditingDept(null);
//       resetForm();
//     }
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setEditingDept(null);
//     resetForm();
//   };

//   const handleSubmit = async () => {
//     if (editingDept) {
//       // Update existing department
//       setDepartments(
//         departments.map((dept) =>
//           dept.id === editingDept.id
//             ? {
//                 ...formData,
//                 id: editingDept.id,
//                 dstudent: parseInt(formData.dstudent) || 0,
//                 dteacher: parseInt(formData.dteacher) || 0,
//                 dclassroom: parseInt(formData.dclassroom) || 0,
//                 dlabs: parseInt(formData.dlabs) || 0,
//               }
//             : dept
//         )
//       );
//     } else {
//       // Add new department
//       const newDept = {
//         ...formData,
//         id: Math.max(...departments.map((d) => d.id)) + 1,
//         dstudent: parseInt(formData.dstudent) || 0,
//         dteacher: parseInt(formData.dteacher) || 0,
//         dclassroom: parseInt(formData.dclassroom) || 0,
//         dlabs: parseInt(formData.dlabs) || 0,
//       };

//       setDepartments([...departments, newDept]);
//       try {
//         const res = await fetch("/api/collegedepartment", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             ...formData,
//             dstudent: parseInt(formData.dstudent) || 0,
//             dteacher: parseInt(formData.dteacher) || 0,
//             dclassroom: parseInt(formData.dclassroom) || 0,
//             dlabs: parseInt(formData.dlabs) || 0,
//           }),
//         });

//         if (!res.ok) throw new Error("Failed to save department");

//         const newDept = await res.json();
//         setDepartments([...departments, { ...formData, id: newDept.id }]);
//         closeModal();
//       } catch (error) {
//         console.error("Insert error:", error);
//         alert("Failed to save department");
//       }
//     }

//     closeModal();
//   };

//   const deleteDepartment = (id) => {
//     if (window.confirm("Are you sure you want to delete this department?")) {
//       setDepartments(departments.filter((dept) => dept.id !== id));
//     }
//   };

//   const filteredDepartments = departments.filter(
//     (dept) =>
//       dept.dname.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       dept.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       dept.dhod.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">
//                 Super Admin Portal
//               </h1>
//               <p className="text-gray-600 mt-2">Manage College Departments</p>
//             </div>
//             <button
//               onClick={() => openModal()}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
//             >
//               <Plus size={20} />
//               Add Department
//             </button>
//           </div>
//         </div>

//         {/* Search and Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
//           <div className="md:col-span-2">
//             <div className="relative">
//               <Search
//                 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//                 size={20}
//               />
//               <input
//                 type="text"
//                 placeholder="Search departments..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <div className="flex items-center gap-3">
//               <Building className="text-blue-600" size={24} />
//               <div>
//                 <p className="text-2xl font-bold text-gray-900">
//                   {departments.length}
//                 </p>
//                 <p className="text-gray-600 text-sm">Total Departments</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <div className="flex items-center gap-3">
//               <Users className="text-green-600" size={24} />
//               <div>
//                 <p className="text-2xl font-bold text-gray-900">
//                   {departments.reduce((sum, dept) => sum + dept.dstudent, 0)}
//                 </p>
//                 <p className="text-gray-600 text-sm">Total Students</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Departments Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredDepartments.map((dept) => (
//             <div
//               key={dept.id}
//               className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
//             >
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-900">
//                       {dept.dname}
//                     </h3>
//                     <p className="text-blue-600 font-medium">{dept.code}</p>
//                   </div>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => openModal(dept)}
//                       className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                     >
//                       <Edit size={18} />
//                     </button>
//                     <button
//                       onClick={() => deleteDepartment(dept.id)}
//                       className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                     >
//                       <Trash2 size={18} />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Department Message */}
//                 {dept.dmassage && (
//                   <div className="bg-blue-50 p-3 rounded-lg mb-4">
//                     <div className="flex items-start gap-2">
//                       <MessageSquare className="text-blue-600 mt-1" size={16} />
//                       <p className="text-blue-800 text-sm font-medium">
//                         {dept.dmassage}
//                       </p>
//                     </div>
//                   </div>
//                 )}

//                 <div className="space-y-3">
//                   <div className="flex items-center gap-2 text-gray-600">
//                     <User size={16} />
//                     <span className="text-sm">
//                       {dept.dhod} ({dept.idhod})
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-2 text-gray-600">
//                     <Mail size={16} />
//                     <span className="text-sm">{dept.hodemail}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-gray-600">
//                     <Phone size={16} />
//                     <span className="text-sm">{dept.hodphone}</span>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
//                   <div className="text-center">
//                     <p className="text-lg font-bold text-blue-600">
//                       {dept.dstudent}
//                     </p>
//                     <p className="text-xs text-gray-500">Students</p>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-lg font-bold text-green-600">
//                       {dept.dteacher}
//                     </p>
//                     <p className="text-xs text-gray-500">Faculty</p>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-lg font-bold text-purple-600">
//                       {dept.dclassroom}
//                     </p>
//                     <p className="text-xs text-gray-500">Classrooms</p>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-lg font-bold text-orange-600">
//                       {dept.dlabs}
//                     </p>
//                     <p className="text-xs text-gray-500">Labs</p>
//                   </div>
//                 </div>

//                 <div className="mt-4 pt-4 border-t border-gray-100">
//                   <p className="text-gray-600 text-sm line-clamp-2">
//                     {dept.dabout}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filteredDepartments.length === 0 && (
//           <div className="text-center py-12">
//             <Building className="mx-auto text-gray-300 mb-4" size={48} />
//             <p className="text-gray-500">
//               No departments found matching your search.
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between items-center p-6 border-b">
//               <h2 className="text-2xl font-bold text-gray-900">
//                 {editingDept ? "Edit Department" : "Add New Department"}
//               </h2>
//               <button
//                 onClick={closeModal}
//                 className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             <div className="p-6 space-y-6">
//               {/* Basic Information */}
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                   Basic Information
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Department Name *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.dname}
//                       onChange={(e) =>
//                         setFormData({ ...formData, dname: e.target.value })
//                       }
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="Computer Science Engineering"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Department Code *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.code}
//                       onChange={(e) =>
//                         setFormData({ ...formData, code: e.target.value })
//                       }
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="CSE"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       HOD ID *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.idhod}
//                       onChange={(e) =>
//                         setFormData({ ...formData, idhod: e.target.value })
//                       }
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="HOD001"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Department Head *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.dhod}
//                       onChange={(e) =>
//                         setFormData({ ...formData, dhod: e.target.value })
//                       }
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="Dr. John Doe"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       required
//                       value={formData.hodemail}
//                       onChange={(e) =>
//                         setFormData({ ...formData, email: e.target.value })
//                       }
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="dept@college.edu"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       value={formData.hodphone}
//                       onChange={(e) =>
//                         setFormData({ ...formData, phone: e.target.value })
//                       }
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="+1-555-0123"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Established Year
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.established}
//                       onChange={(e) =>
//                         setFormData({
//                           ...formData,
//                           established: e.target.value,
//                         })
//                       }
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="1995"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Statistics */}
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                   Department Statistics
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Number of Students
//                     </label>
//                     <input
//                       type="number"
//                       value={formData.dstudent}
//                       onChange={(e) =>
//                         setFormData({ ...formData, dstudent: e.target.value })
//                       }
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="450"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Number of Teachers
//                     </label>
//                     <input
//                       type="number"
//                       value={formData.dteacher}
//                       onChange={(e) =>
//                         setFormData({ ...formData, dteacher: e.target.value })
//                       }
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="25"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Number of Classrooms
//                     </label>
//                     <input
//                       type="number"
//                       value={formData.dclassroom}
//                       onChange={(e) =>
//                         setFormData({ ...formData, dclassroom: e.target.value })
//                       }
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="8"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Number of Labs
//                     </label>
//                     <input
//                       type="number"
//                       value={formData.dlabs}
//                       onChange={(e) =>
//                         setFormData({ ...formData, dlabs: e.target.value })
//                       }
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="5"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Department Information */}
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                   Department Information
//                 </h3>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Department Message
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.dmassage}
//                       onChange={(e) =>
//                         setFormData({ ...formData, dmassage: e.target.value })
//                       }
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="Welcome message for the department"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       About Department
//                     </label>
//                     <textarea
//                       value={formData.dabout}
//                       onChange={(e) =>
//                         setFormData({ ...formData, dabout: e.target.value })
//                       }
//                       rows={3}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="Brief description about the department..."
//                     />
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Vision
//                       </label>
//                       <textarea
//                         value={formData.vision}
//                         onChange={(e) =>
//                           setFormData({ ...formData, vision: e.target.value })
//                         }
//                         rows={3}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="Department's vision statement..."
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Mission
//                       </label>
//                       <textarea
//                         value={formData.mission}
//                         onChange={(e) =>
//                           setFormData({ ...formData, mission: e.target.value })
//                         }
//                         rows={3}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="Department's mission statement..."
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Curriculum
//                     </label>
//                     <textarea
//                       value={formData.dcurriculum}
//                       onChange={(e) =>
//                         setFormData({
//                           ...formData,
//                           dcurriculum: e.target.value,
//                         })
//                       }
//                       rows={3}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="Description of curriculum and courses offered..."
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Timetable
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.timetable}
//                       onChange={(e) =>
//                         setFormData({ ...formData, timetable: e.target.value })
//                       }
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="Department working hours and schedule"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-end gap-3 pt-4 border-t">
//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleSubmit}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
//                 >
//                   <Save size={18} />
//                   {editingDept ? "Update" : "Create"} Department
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SuperAdminDepartmentPortal;
