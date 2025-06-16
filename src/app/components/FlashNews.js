"use client";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function FlashNews() {
  const [newsItems, setNewItems] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFlashNews() {
      try {
        const res = await fetch("/api/flashnews");
        const json = await res.json();

        if (json.success && Array.isArray(json.data)) {
          setNewItems(json.data);
        } else {
          // console.error("FlashNews response is invalid:", json);
          setNewItems([]);
        }
      } catch (error) {
        console.error("Failed to fetch FlashNews:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchFlashNews();
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg">
      {/* Desktop and Tablet View */}
      <div className="hidden sm:flex items-center">
        {/* Flash News Label */}
        <div className="flex-shrink-0 bg-red-600 hover:bg-red-700 transition-colors duration-200 px-4 py-3 font-bold text-sm uppercase tracking-wide">
          <span className="flex items-center">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Flash News
          </span>
        </div>

        {/* Scrolling Content */}
        {newsItems && (
          <div className="flex-1 overflow-hidden relative">
            <div className="flex animate-marquee hover:pause-animation">
              {/* Duplicate items for seamless loop */}
              {newsItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  onClick={() => setPreviewUrl(item.file_path)}
                  className="flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 rounded-lg px-4 py-2 mx-2 whitespace-nowrap cursor-pointer group"
                >
                  <span className="text-sm font-medium group-hover:text-yellow-200">
                    {item.title}
                  </span>
                  {item.status === "active" && (
                    <div className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold animate-bounce">
                      NEW!
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

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

      {/* Mobile View */}
      <div className="sm:hidden">
        {/* Header */}
        <div className="flex items-center justify-between bg-red-600 px-4 py-2">
          <span className="font-bold text-sm uppercase tracking-wide flex items-center">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Flash News
          </span>
          <span className="text-xs opacity-75">Swipe to see more →</span>
        </div>

        {/* Scrollable Content */}
        {newsItems && (
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex py-3 px-2 gap-2 min-w-max">
              {newsItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 rounded-lg px-3 py-2 whitespace-nowrap cursor-pointer"
                >
                  <span className="text-sm font-medium">{item.title}</span>
                  {item.status === "active" && (
                    <div className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                      NEW!
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .pause-animation {
          animation-play-state: paused;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 640px) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
