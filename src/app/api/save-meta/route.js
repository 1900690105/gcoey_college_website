// app/api/save-meta/route.js
//const fileUrl = `https://drive.google.com/uc?id=${fileId}`;

import mysql from "mysql2/promise";
import connect from "../../../../lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const { fileName, fileId } = body;

    if (!fileName || !fileId) {
      return new Response(JSON.stringify({ error: "Missing data" }), {
        status: 400,
      });
    }

    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "gcoey",
    });

    const [result] = await connection.execute(
      "INSERT INTO uploads (file_name, drive_file_id) VALUES (?, ?)",
      [fileName, fileId]
    );

    await connection.end();

    return new Response(
      JSON.stringify({ success: true, insertId: result.insertId }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Database error", detail: error.message }),
      {
        status: 500,
      }
    );
  }
}

// import mysql from "mysql2/promise";
// import connect from "../../../lib/db"; // adjust path as needed

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { fileName, fileId } = req.body;

//   if (!fileName || !fileId) {
//     return res.status(400).json({ error: "Missing data" });
//   }

//   try {
//     const connection = await mysql.createConnection({
//       host: connect.host,
//       user: connect.user,
//       password: connect.password,
//       database: connect.database,
//     });

//     await connection.execute(
//       "INSERT INTO uploads (file_name, drive_file_id) VALUES (?, ?)",
//       [fileName, fileId]
//     );

//     await connection.end();
//     return res.status(200).json({ success: true });
//   } catch (err) {
//     console.error("❌ MySQL Error:", err);
//     return res.status(500).json({ error: "Database error" });
//   }
// }

// import mysql from "mysql2/promise";
// import connect from "../../../../lib/db";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { fileName, fileId } = req.body;

//   if (!fileName || !fileId) {
//     return res.status(400).json({ error: "Missing data" });
//   }

//   try {
//     const connection = await mysql.createConnection({
//       host: connect.host,
//       user: connect.user,
//       password: connect.password,
//       database: connect.database,
//     });

//     const [result] = await connection.execute(
//       "INSERT INTO uploads (file_name, drive_file_id) VALUES (?, ?)",
//       [fileName, fileId]
//     );

//     await connection.end();

//     res.status(200).json({ success: true, id: result.insertId });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Database error" });
//   }
// }
