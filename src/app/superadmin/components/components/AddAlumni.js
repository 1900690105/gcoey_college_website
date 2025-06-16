import Image from "next/image";
import React from "react";

function AddAlumni({ selectedAlumni }) {
  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-6">
          <Image
            src={selectedAlumni?.image}
            height={16}
            width={16}
            alt={selectedAlumni?.aname}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">{selectedAlumni?.aname}</h3>
            <p className="text-gray-600">ID: {selectedAlumni?.aid}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <strong>Department:</strong> {selectedAlumni?.adept}
          </div>
          <div>
            <strong>Position:</strong> {selectedAlumni?.apost}
          </div>
          <div>
            <strong>Company:</strong> {selectedAlumni?.company}
          </div>
          <div>
            <strong>Package:</strong> {selectedAlumni?.package}
          </div>
          <div>
            <strong>Phone:</strong> {selectedAlumni?.aphone}
          </div>
          <div>
            <strong>Status:</strong> {selectedAlumni?.status}
          </div>
          <div className="md:col-span-2">
            <strong>LinkedIn:</strong>
            <a
              href={selectedAlumni?.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline ml-1"
            >
              {selectedAlumni?.linkedin_url}
            </a>
          </div>
          <div className="md:col-span-2">
            <strong>Address:</strong> {selectedAlumni?.aaddress}
          </div>
          <div className="md:col-span-2">
            <strong>Message:</strong> {selectedAlumni?.message}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddAlumni;
