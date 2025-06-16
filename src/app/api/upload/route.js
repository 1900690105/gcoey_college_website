// import { google } from "googleapis";
// import { NextResponse } from "next/server";
// import { Readable } from "stream";

// export async function POST(req) {
//   try {
//     const formData = await req.formData();
//     const file = formData.get("file");

//     if (!file) {
//       return NextResponse.json(
//         { message: "No file provided" },
//         { status: 400 }
//       );
//     }

//     const buffer = Buffer.from(await file.arrayBuffer());

//     const auth = new google.auth.GoogleAuth({
//       credentials: {
//         client_email: process.env.GOOGLE_CLIENT_EMAIL,
//         private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
//       },
//       scopes: ["https://www.googleapis.com/auth/drive.file"],
//     });

//     const drive = google.drive({ version: "v3", auth });

//     const response = await drive.files.create({
//       requestBody: {
//         name: file.name,
//         mimeType: file.type,
//       },
//       media: {
//         mimeType: file.type,
//         body: Readable.from(buffer),
//       },
//     });

//     return NextResponse.json({
//       message: "Upload successful",
//       fileId: response.data.id,
//     });
//   } catch (error) {
//     console.error("Upload error:", error); // 🔥 Important
//     return NextResponse.json(
//       { message: "Upload failed", error: error.message },
//       { status: 500 }
//     );
//   }
// }

import { google } from "googleapis";
import { NextResponse } from "next/server";
import { Readable } from "stream";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json(
        { message: "No file provided" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
        private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n"
        ),
      },
      scopes: ["https://www.googleapis.com/auth/drive.file"],
    });

    const drive = google.drive({ version: "v3", auth });

    const response = await drive.files.create({
      requestBody: {
        name: file.name,
        mimeType: file.type || "application/octet-stream",
      },
      media: {
        mimeType: file.type || "application/octet-stream",
        body: Readable.from(buffer),
      },
    });

    return NextResponse.json({
      message: "Upload successful",
      fileId: response.data.id,
    });
  } catch (error) {
    console.error("Upload error:", error); // This logs detailed info
    return NextResponse.json(
      {
        message: "Upload failed",
        error: error.message, // This goes to the frontend
        stack: error.stack, // 👈 Add this for full server-side trace
      },
      { status: 500 }
    );
  }
}
