import { NextResponse } from "next/server";
import connect from "../../../../lib/db";

export async function GET() {
  try {
    const [images] = await connect.query("SELECT * FROM gallary");
    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json(
      { error: "failed to fetch ALumin" },
      { status: 500 }
    );
  }
}
