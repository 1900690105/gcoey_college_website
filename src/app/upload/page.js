"use client";
import { useState, useEffect } from "react";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const accessToken = params.get("access_token");
      setToken(accessToken || "");
    }
  }, []);

  const handleUpload = async () => {
    if (!file || !token) {
      setMessage("❌ Missing file or access token.");
      return;
    }

    setUploading(true);
    setMessage("");

    const folderId = process.env.NEXT_PUBLIC_GOOGLE_FOLDER_ID;

    const metadata = {
      name: file.name,
      mimeType: file.type,
      parents: [folderId],
    };

    const form = new FormData();
    form.append(
      "metadata",
      new Blob([JSON.stringify(metadata)], { type: "application/json" })
    );
    form.append("file", file);

    try {
      // Upload to Google Drive
      const driveRes = await fetch(
        `https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&access_token=${token}`,
        {
          method: "POST",
          body: form,
        }
      );

      const driveData = await driveRes.json();

      if (!driveRes.ok)
        throw new Error(driveData.error?.message || "Upload failed");

      // Save to MySQL
      const saveRes = await fetch("/api/save-meta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileName: file.name,
          fileId: driveData.id,
        }),
      });

      const saveData = await saveRes.json();

      if (!saveRes.ok) throw new Error(saveData.error || "MySQL save failed");

      setMessage(`✅ Uploaded & Saved! File ID: ${driveData.id}`);
    } catch (err) {
      setMessage("❌ Upload failed: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Upload to Banner</h2>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="mb-4 w-full"
        />
        <button
          onClick={handleUpload}
          disabled={uploading || !file || !token}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
        {message && <p className="mt-4 text-sm text-center">{message}</p>}
      </div>
    </div>
  );
}
