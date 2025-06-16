import { NextResponse } from "next/server";
import connect from "../../../../lib/db";

export async function GET() {
  try {
    const [administration] = await connect.query(
      "SELECT * FROM administration"
    );
    return NextResponse.json(administration);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch administration" },
      { status: 500 }
    );
  }
}
