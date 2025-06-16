import connect from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const dept = searchParams.get("dept");

  try {
    let rows;
    if (dept) {
      [rows] = await connect.query("SELECT * FROM teacher WHERE tdept = ?", [
        dept,
      ]);
    } else {
      [rows] = await connect.query("SELECT * FROM teacher");
    }

    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to Fetch teachers" },
      { status: 500 }
    );
  }
}
