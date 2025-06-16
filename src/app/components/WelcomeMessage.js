"use client";
import { useState, useEffect } from "react";

function WelcomeMessage() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    async function fetchMessage() {
      const res = await fetch("/api/message");
      const data = await res.json();
      // Convert to array if neededs
      if (Array.isArray(data)) {
        setMessage(data);
      } else {
        setMessage([data]); // Wrap single object in array
      }
    }
    fetchMessage();
  }, []);

  return (
    <>
      <div className="md:w-2/3 mr-10 text-justify mt-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 border-l-8 border-yellow-400 p-2">
          Welcome to <span className="text-black">GCoE, Yavatmal</span>
        </h1>
        <div>
          {message?.map((message) => (
            <p className="text-lg text-gray-600 mb-4 ml-4" key={message.id}>
              {message.message}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default WelcomeMessage;
