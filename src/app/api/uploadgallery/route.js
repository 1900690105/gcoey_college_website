import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

// POST handler
export async function POST(req) {
  try {
    const body = await req.json();
    const { title, category, url, uploadDate } = body;

    if (!title || !category || !url || !uploadDate) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    // Connect to MySQL
    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "gcoey",
    });

    const [result] = await db.execute(
      `INSERT INTO gallary (title, category, url, upload_date) VALUES (?, ?, ?, ?)`,
      [title, category, url, uploadDate]
    );

    await db.end();

    return NextResponse.json({ id: result.insertId }, { status: 200 });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
