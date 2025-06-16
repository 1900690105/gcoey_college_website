import connect from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const dept = searchParams.get("dept");

  try {
    let rows;
    if (dept) {
      [rows] = await connect.query("SELECT * FROM notices WHERE dept = ?", [
        dept,
      ]);
    } else {
      [rows] = await connect.query("SELECT * FROM notices");
    }

    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to Fetch noticess" },
      { status: 500 }
    );
  }
}
