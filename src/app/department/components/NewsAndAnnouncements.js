import { FaNewspaper, FaBullhorn } from "react-icons/fa";

const NewsAndAnnouncements = () => {
  return (
    <section id="news" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-4xl font-semibold text-center mb-12">
          News & Announcements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaNewspaper className="text-4xl text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold">Latest News</h3>
            </div>
            <p>
              Stay updated with the latest happenings in the Computer Science
              Department.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaBullhorn className="text-4xl text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold">Announcements</h3>
            </div>
            <p>
              Check out important notices, exam schedules, and other relevant
              announcements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndAnnouncements;
