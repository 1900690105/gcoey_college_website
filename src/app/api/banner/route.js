import { NextResponse } from "next/server";
import connect from "../../../../lib/db";

export async function GET() {
  try {
    const [banner] = await connect.query("SELECT * FROM banner");
    return NextResponse.json(banner);
  } catch {
    return NextResponse.json(
      { error: "failed to fetch banner" },
      { status: 500 }
    );
  }
}
