import { NextResponse } from "next/server";
import connect from "../../../../lib/db"; // Make sure this path is correct
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    const conn = await connect();
    const [adminlogin] = await conn.query(
      "SELECT * FROM adminlogin WHERE aemail = ?",
      [email]
    );

    if (adminlogin.length === 0) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(
      password,
      adminlogin[0].password
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Log in successful
    return NextResponse.json(
      { message: "Login successful", adminlogin: adminlogin[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error(error); // Log error for debugging
    return NextResponse.json({ error: "Failed to login." }, { status: 500 });
  }
}
