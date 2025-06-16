import connect from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await connect.query("SELECT * FROM events");

    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to Fetch eventss" },
      { status: 500 }
    );
  }
}
