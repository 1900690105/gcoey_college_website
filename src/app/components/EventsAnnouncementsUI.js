"use client";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { AnnouncementItem, EventItem } from "./components/EventAnnounce";
import { X, Loader2 } from "lucide-react";
import Image from "next/image";

const EventsAnnouncementsUI = () => {
  const [eventsData, setEventsData] = useState([]);
  const [announcementsData, setAnnouncementsData] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Pagination state
  const [eventsPage, setEventsPage] = useState(1);
  const [announcementsPage, setAnnouncementsPage] = useState(1);
  const [eventsLoading, setEventsLoading] = useState(false);
  const [announcementsLoading, setAnnouncementsLoading] = useState(false);
  const [eventsHasMore, setEventsHasMore] = useState(true);
  const [announcementsHasMore, setAnnouncementsHasMore] = useState(true);

  // Refs for scroll containers
  const eventsContainerRef = useRef(null);
  const announcementsContainerRef = useRef(null);

  const ITEMS_PER_PAGE = 10; // Adjust based on your API

  // Fetch events with pagination
  const fetchEvents = useCallback(
    async (page = 1, append = false) => {
      if (eventsLoading) return;

      setEventsLoading(true);
      try {
        const res = await fetch(
          `/api/event?page=${page}&limit=${ITEMS_PER_PAGE}`
        );
        const json = await res.json();

        if (Array.isArray(json)) {
          if (append) {
            setEventsData((prev) => [...prev, ...json]);
          } else {
            setEventsData(json);
          }

          // Check if there are more items
          if (json.length < ITEMS_PER_PAGE) {
            setEventsHasMore(false);
          }
        } else {
          console.error("Events response is invalid:", json);
          if (!append) setEventsData([]);
        }
      } catch (error) {
        console.error("Failed to fetch Events:", error);
        if (!append) setEventsData([]);
      } finally {
        setEventsLoading(false);
      }
    },
    [eventsLoading]
  );

  // Fetch announcements with pagination
  const fetchAnnouncements = useCallback(
    async (page = 1, append = false) => {
      if (announcementsLoading) return;

      setAnnouncementsLoading(true);
      try {
        const res = await fetch(
          `/api/announcements?page=${page}&limit=${ITEMS_PER_PAGE}`
        );
        const json = await res.json();

        if (Array.isArray(json)) {
          if (append) {
            setAnnouncementsData((prev) => [...prev, ...json]);
          } else {
            setAnnouncementsData(json);
          }

          // Check if there are more items
          if (json.length < ITEMS_PER_PAGE) {
            setAnnouncementsHasMore(false);
          }
        } else {
          console.error("Announcements response is invalid:", json);
          if (!append) setAnnouncementsData([]);
        }
      } catch (error) {
        console.error("Failed to fetch Announcements:", error);
        if (!append) setAnnouncementsData([]);
      } finally {
        setAnnouncementsLoading(false);
      }
    },
    [announcementsLoading]
  );

  // Load more events
  const loadMoreEvents = useCallback(() => {
    if (eventsHasMore && !eventsLoading) {
      const nextPage = eventsPage + 1;
      setEventsPage(nextPage);
      fetchEvents(nextPage, true);
    }
  }, [eventsPage, eventsHasMore, eventsLoading, fetchEvents]);

  // Load more announcements
  const loadMoreAnnouncements = useCallback(() => {
    if (announcementsHasMore && !announcementsLoading) {
      const nextPage = announcementsPage + 1;
      setAnnouncementsPage(nextPage);
      fetchAnnouncements(nextPage, true);
    }
  }, [
    announcementsPage,
    announcementsHasMore,
    announcementsLoading,
    fetchAnnouncements,
  ]);

  // Automatic scroll handler for events
  const handleEventsScroll = useCallback(() => {
    const container = eventsContainerRef.current;
    if (!container || eventsLoading || !eventsHasMore) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;

    // Auto-load when 70% scrolled (earlier trigger for smoother experience)
    if (scrollPercentage > 0.7) {
      loadMoreEvents();
    }
  }, [loadMoreEvents, eventsLoading, eventsHasMore]);

  // Automatic scroll handler for announcements
  const handleAnnouncementsScroll = useCallback(() => {
    const container = announcementsContainerRef.current;
    if (!container || announcementsLoading || !announcementsHasMore) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;

    // Auto-load when 70% scrolled (earlier trigger for smoother experience)
    if (scrollPercentage > 0.7) {
      loadMoreAnnouncements();
    }
  }, [loadMoreAnnouncements, announcementsLoading, announcementsHasMore]);

  // Initial data fetch
  useEffect(() => {
    fetchEvents(1, false);
    fetchAnnouncements(1, false);
  }, []);

  // Add scroll listeners with passive option for better performance
  useEffect(() => {
    const eventsContainer = eventsContainerRef.current;
    const announcementsContainer = announcementsContainerRef.current;

    const eventsScrollOptions = { passive: true };
    const announcementsScrollOptions = { passive: true };

    if (eventsContainer) {
      eventsContainer.addEventListener(
        "scroll",
        handleEventsScroll,
        eventsScrollOptions
      );
    }
    if (announcementsContainer) {
      announcementsContainer.addEventListener(
        "scroll",
        handleAnnouncementsScroll,
        announcementsScrollOptions
      );
    }

    return () => {
      if (eventsContainer) {
        eventsContainer.removeEventListener(
          "scroll",
          handleEventsScroll,
          eventsScrollOptions
        );
      }
      if (announcementsContainer) {
        announcementsContainer.removeEventListener(
          "scroll",
          handleAnnouncementsScroll,
          announcementsScrollOptions
        );
      }
    };
  }, [handleEventsScroll, handleAnnouncementsScroll]);

  const Card = ({ title, children, className = "" }) => (
    <div className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-blue-300 rounded-full opacity-60"></div>
        </div>
      </div>
      {children}
    </div>
  );

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center py-6">
      <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
      <span className="ml-2 text-sm text-gray-500">Loading...</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Events and News Card */}
          <Card title="Events and News" className="h-fit">
            <div
              ref={eventsContainerRef}
              className="space-y-4 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scroll-smooth"
            >
              {eventsData?.map((event, index) => (
                <EventItem
                  key={event.eid || `event-${index}`}
                  event={event}
                  setPreviewUrl={setPreviewUrl}
                />
              ))}

              {eventsLoading && <LoadingSpinner />}

              {!eventsHasMore && eventsData.length > 0 && (
                <div className="text-center py-4 text-xs text-gray-400 border-t border-gray-100 mt-4">
                  ✓ All events loaded
                </div>
              )}

              {eventsData.length === 0 && !eventsLoading && (
                <div className="text-center py-12 text-gray-400">
                  <div className="text-4xl mb-2">📅</div>
                  <div>No events available</div>
                </div>
              )}
            </div>

            <div className="mt-6 text-center">
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg"
                onClick={() => {
                  // Scroll to top of events container
                  if (eventsContainerRef.current) {
                    eventsContainerRef.current.scrollTop = 0;
                  }
                }}
              >
                Back to Top
              </button>
            </div>
          </Card>

          {previewUrl && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-4 rounded shadow-lg relative">
                <button
                  onClick={() => setPreviewUrl(null)}
                  className="absolute top-2 right-2 text-red-500 font-bold border border-black"
                >
                  <X />
                </button>
                <Image
                  height={600}
                  width={700}
                  src={previewUrl}
                  alt="Preview"
                  className="max-w-[90vw] max-h-[80vh]"
                />
                <div className="flex justify-center">
                  <a
                    href={previewUrl}
                    download
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Download Image
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Announcements Card */}
          <Card title="Announcements" className="h-fit">
            <div
              ref={announcementsContainerRef}
              className="space-y-4 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
            >
              {announcementsData.map((announcement, index) => (
                <AnnouncementItem
                  key={announcement.id || `announcement-${index}`}
                  announcement={announcement}
                />
              ))}

              {announcementsLoading && <LoadingSpinner />}

              {!announcementsHasMore && announcementsData.length > 0 && (
                <div className="text-center py-4 text-gray-500">
                  No more announcements to load
                </div>
              )}

              {announcementsData.length === 0 && !announcementsLoading && (
                <div className="text-center py-8 text-gray-500">
                  No announcements available
                </div>
              )}
            </div>

            <div className="mt-6 text-center">
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg"
                onClick={() => {
                  // Scroll to top of announcements container
                  if (announcementsContainerRef.current) {
                    announcementsContainerRef.current.scrollTop = 0;
                  }
                }}
              >
                Back to Top
              </button>
            </div>
          </Card>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-800/20 to-transparent pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24 pointer-events-none"></div>
    </div>
  );
};

export default EventsAnnouncementsUI;

// "use client";
// import React, { useEffect, useState } from "react";
// import { AnnouncementItem, EventItem } from "./components/EventAnnounce";
// import { X } from "lucide-react";
// import Image from "next/image";

// const EventsAnnouncementsUI = () => {
//   const [eventsData, setEventsData] = useState([]);
//   const [announcementsData, setAnnouncementsData] = useState([]);
//   const [previewUrl, setPreviewUrl] = useState(null);

//   useEffect(() => {
//     async function fetchEvents() {
//       try {
//         const res = await fetch("/api/event");
//         const json = await res.json();

//         if (Array.isArray(json)) {
//           setEventsData(json);
//         } else {
//           console.error("Events response is invalid:", json);
//           setEventsData([]);
//         }
//       } catch (error) {
//         console.error("Failed to fetch Events:", error);
//       }
//     }
//     async function fetchAnnouncements() {
//       try {
//         const res = await fetch("/api/announcements");
//         const json = await res.json();

//         if (Array.isArray(json)) {
//           setAnnouncementsData(json);
//         } else {
//           console.error("Announcements response is invalid:", json);
//           setAnnouncementsData([]);
//         }
//       } catch (error) {
//         console.error("Failed to fetch Announcements:", error);
//       }
//     }
//     fetchAnnouncements();
//     fetchEvents();
//   }, []);

//   useEffect(() => {}, []);

//   const Card = ({ title, children, className = "" }) => (
//     <div className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}>
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
//         <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//           <div className="w-6 h-6 bg-blue-300 rounded-full opacity-60"></div>
//         </div>
//       </div>
//       {children}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Events and News Card */}
//           <Card title="Events and News" className="h-fit">
//             <div className="space-y-4">
//               {eventsData?.map((event, index) => (
//                 <EventItem
//                   key={event.eid || index}
//                   event={event}
//                   setPreviewUrl={setPreviewUrl}
//                 />
//               ))}
//             </div>
//             <div className="mt-6 text-center">
//               <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg">
//                 View All
//               </button>
//             </div>
//           </Card>

//           {previewUrl && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//               <div className="bg-white p-4 rounded shadow-lg relative">
//                 <button
//                   onClick={() => setPreviewUrl(null)}
//                   className="absolute top-2 right-2 text-red-500 font-bold border border-black"
//                 >
//                   <X />
//                 </button>
//                 <Image
//                   height={600}
//                   width={700}
//                   src={previewUrl}
//                   alt="Preview"
//                   className="max-w-[90vw] max-h-[80vh]"
//                 />
//                 <div className="flex justify-center">
//                   <a
//                     href={previewUrl}
//                     download
//                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//                   >
//                     Download Image
//                   </a>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Announcements Card */}
//           <Card title="Announcements" className="h-fit">
//             <div className="space-y-4">
//               {announcementsData.map((announcement, index) => (
//                 <AnnouncementItem key={index} announcement={announcement} />
//               ))}
//             </div>
//             <div className="mt-6 text-center">
//               <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg">
//                 View All
//               </button>
//             </div>
//           </Card>
//         </div>
//       </div>

//       {/* Decorative Elements */}
//       <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-800/20 to-transparent pointer-events-none"></div>
//       <div className="fixed top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32 pointer-events-none"></div>
//       <div className="fixed bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24 pointer-events-none"></div>
//     </div>
//   );
// };

// export default EventsAnnouncementsUI;
