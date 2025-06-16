"use client";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FacultyProfiles from "./components/FacultyProfiles";
import StudentLife from "./components/StudentLife";
import AlumniNetwork from "./components/AlumniNetwork";
import Gallery from "./components/Gallery";
import ContactInformation from "./components/ContactInformation";
import { useEffect, useState } from "react";
import HodMessageComponent from "./components/HodMessage";
import ComputerLabsComponent from "./components/Labs";
import { useSearchParams, useRouter } from "next/navigation";
import NoticeBoard from "./components/NoticsBoard";

export default function Home() {
  const [dept, setDept] = useState(null);
  const [loading, setLoading] = useState(true);
  const [faculty, setFaculty] = useState([]);
  const [alumni, setAlumni] = useState([]);
  const [notice, setNotice] = useState([]);
  const [error, setError] = useState(null);
  const [dname, setDname] = useState("");
  const params = useSearchParams();
  const router = useRouter();
  const department = params.get("dept");

  useEffect(() => {
    if (!department) {
      setError("No department specified");
      setLoading(false);
      return;
    }

    async function fetchDept() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`/api/collegedepartment?dept=${department}`);

        if (!res.ok) {
          throw new Error(`Failed to fetch department data: ${res.status}`);
        }

        const data = await res.json();

        if (!data || data.length === 0) {
          throw new Error("Department not found");
        }

        setDept(data);
        setDname(data[0].dname);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching department:", err);
      } finally {
        setLoading(false);
      }
    }

    async function fetchTeacher() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`/api/teacher?dept=${department}`);

        if (!res.ok) {
          throw new Error(`Failed to fetch teacher data: ${res.status}`);
        }

        const data = await res.json();

        if (!data || data.length === 0) {
          throw new Error("teacher not found");
        }

        setFaculty(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching teacher:", err);
      } finally {
        setLoading(false);
      }
    }

    async function fetchAlumni() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`/api/alumni?dept=${department}`);

        if (!res.ok) {
          throw new Error(`Failed to fetch alumni data: ${res.status}`);
        }

        const data = await res.json();
        if (!data || data.length === 0) {
          throw new Error("alumni not found");
        }

        setAlumni(data);
      } catch (err) {
        // setError(err.message);
        console.error("Error fetching alumni:", err);
      } finally {
        setLoading(false);
      }
    }

    async function fetchNotice() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`/api/notice?dept=${department}`);

        if (!res.ok) {
          throw new Error(`Failed to fetch notice data: ${res.status}`);
        }

        const data = await res.json();
        if (!data || data.length === 0) {
          throw new Error("notice not found");
        }

        setNotice(data);
      } catch (err) {
        // setError(err.message);
        console.error("Error fetching alumni:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDept();
    fetchTeacher();
    fetchAlumni();
    fetchNotice();
  }, [department]);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Loading Department Information
          </h2>
          <p className="text-gray-500">
            Please wait while we fetch the details...
          </p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="bg-red-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Department Not Found
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={() => router.push("/")}
              className="w-full bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Success State - Render Department Content
  return (
    <div>
      {dept?.map((deptItem, index) => (
        <div key={deptItem.id || index}>
          <HeroSection dept={deptItem} />
          <AboutSection dept={deptItem} />
          <HodMessageComponent dept={deptItem} />
          <FacultyProfiles faculty={faculty} />
          <NoticeBoard
            notices={notice}
            setNotices={setNotice}
            dept={department}
          />
          <ComputerLabsComponent />
          <AlumniNetwork alumniStories={alumni} dept={dname} />
          <Gallery />
          <ContactInformation />
        </div>
      ))}
    </div>
  );
}
