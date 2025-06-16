import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(request) {
  const { id } = await request.json(); // gallery image ID

  const conn = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gcoey",
  });

  await conn.execute("DELETE FROM gallary WHERE id = ?", [id]);
  await conn.end();

  return NextResponse.json({ success: true });
}
