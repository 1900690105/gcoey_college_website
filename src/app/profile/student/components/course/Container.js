// pages/index.js
import Head from "next/head";
import Image from "next/image";

const courses = [
  {
    title: "Introduction to SQL for Beginners",
    image: "/ab2.png",
    category: "Programming",
    chapters: 5,
    level: "Beginner",
    tag: "BEST COURSES",
    completedProjects: 2,
    totalProjects: 5,
  },
  {
    title: "Advanced React Native Development",
    image: "/ab2.png",
    category: "Programming",
    chapters: 5,
    level: "Advance",
    completedProjects: 3,
    totalProjects: 8,
  },
  {
    title: "Advanced YouTube Video Creation with AI",
    image: "/ab2.png",
    category: "Creative",
    chapters: 5,
    level: "Advance",
    completedProjects: 1,
    totalProjects: 6,
  },
];

export default function CoursesCard() {
  return (
    <div className="bg-gray-100 py-1 ">
      <div className="relative  ">
        <div className="relative px-4 py-1 sm:rounded-3xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Assigned Courses</h1>
            <button className="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-600 transition duration-300">
              Add My Course +
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:border hover:border-blue-300 cursor-pointer transition duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  {course.tag && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {course.tag}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h2 className="font-bold text-lg mb-2">{course.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {course.category}
                  </p>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-purple-600 text-sm">
                      <svg
                        className="w-4 h-4 inline mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        ></path>
                      </svg>
                      {course.chapters} Chapters
                    </span>
                    <span
                      className={`text-sm ${
                        course.level === "Beginner"
                          ? "text-blue-600"
                          : "text-purple-600"
                      }`}
                    >
                      {course.level}
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        Progress
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {course.completedProjects}/{course.totalProjects}{" "}
                        Projects
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{
                          width: `${
                            (course.completedProjects / course.totalProjects) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
