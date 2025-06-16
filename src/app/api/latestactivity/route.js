import { NextResponse } from "next/server";
import connect from "../../../../lib/db";

export async function GET() {
  try {
    const [activity] = await connect.query("SELECT * FROM events");
    return NextResponse.json(activity);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to Fetch Message" },
      { status: 500 }
    );
  }
}
