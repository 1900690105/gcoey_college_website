"use client";

export default function ContactInfo() {
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`Copied to clipboard: ${text}`);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <div className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">Contact Us</h2>
      <p className="text-lg mb-4">
        For any inquiries regarding student clubs, reach out to our Student
        Activities Coordinator.
      </p>
      <div className="mb-4">
        <p
          className="mt-2 text-gray-600 cursor-pointer hover:text-blue-500"
          onClick={() => copyToClipboard("activities@college.edu")}
        >
          Email: <span className="font-semibold">activities@college.edu</span>
        </p>
        <p
          className="mt-2 text-gray-600 cursor-pointer hover:text-blue-500"
          onClick={() => copyToClipboard("(123) 456-7890")}
        >
          Phone: <span className="font-semibold">(123) 456-7890</span>
        </p>
      </div>
      <p className="text-sm text-gray-500">
        Feel free to reach out — we're here to help!
      </p>
    </div>
  );
}
