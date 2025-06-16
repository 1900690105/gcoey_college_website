// app/api/announcements/route.js

import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "gcoey",
};

// POST: Create announcement
export async function POST(req) {
  try {
    const { title, content, priority, targetAudience, status } =
      await req.json();

    if (!title || !content) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute(
      `INSERT INTO announcement (title, content, priority, targetAudience, status)
       VALUES (?, ?, ?, ?, ?)`,
      [title, content, priority, targetAudience, status]
    );
    await connection.end();

    return NextResponse.json({ message: "Inserted", id: result.insertId });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

// GET: Fetch all announcements
export async function GET() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute(
      `SELECT * FROM announcement ORDER BY createdAt DESC`
    );
    await connection.end();

    return NextResponse.json(rows);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Failed to fetch" }, { status: 500 });
  }
}

// import { NextResponse } from "next/server";
// import mysql from "mysql2/promise";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { title, content, priority, targetAudience, status } = body;

//     if (!title || !content) {
//       return NextResponse.json(
//         { message: "Title and content are required" },
//         { status: 400 }
//       );
//     }

//     const connection = await mysql.createConnection({
//       host: "localhost",
//       user: "root",
//       password: "",
//       database: "gcoey",
//     });

//     const [result] = await connection.execute(
//       `INSERT INTO announcement (title, content, priority, targetAudience, status)
//        VALUES (?, ?, ?, ?, ?)`,
//       [title, content, priority, targetAudience, status]
//     );

//     await connection.end();

//     return NextResponse.json({
//       message: "Inserted successfully",
//       id: result.insertId,
//     });
//   } catch (err) {
//     console.error("MySQL insert error:", err);
//     return NextResponse.json(
//       { message: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }

// export async function GET() {
//   try {
//     const connection = await mysql.createConnection(dbConfig);
//     const [rows] = await connection.execute(
//       `SELECT * FROM announcement ORDER BY createdAt DESC`
//     );
//     await connection.end();

//     return NextResponse.json(rows);
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ message: "Failed to fetch" }, { status: 500 });
//   }
// }
