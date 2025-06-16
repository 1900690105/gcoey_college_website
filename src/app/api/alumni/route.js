import { NextResponse } from "next/server";
import connect from "../../../../lib/db";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const dept = searchParams.get("dept");

  try {
    let rows;
    if (dept) {
      [rows] = await connect.query(
        "SELECT * FROM alumni WHERE adept = ? ORDER BY package DESC",
        [dept]
      );
    } else {
      [rows] = await connect.query(
        "SELECT * FROM alumni ORDER BY package DESC"
      );
    }

    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to Fetch alumni" },
      { status: 500 }
    );
  }
}

// POST new alumni
export async function POST(request) {
  try {
    const data = await request.json();

    const query = `
      INSERT INTO alumni (aid,aname, linkedin_url, adept, apost, company, package, aphone, aaddress, message, image, status)
      VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [
      data.aid,
      data.aname,
      data.linkedin_url,
      data.adept,
      data.apost,
      data.company,
      data.package,
      data.aphone,
      data.aaddress,
      data.message,
      data.image,
      data.status || "Active",
    ];

    const [result] = await connect.execute(query, params);

    // Fetch the newly created alumni
    const [newAlumni] = await connect.execute(
      "SELECT * FROM alumni WHERE aid = ?",
      [result.insertId]
    );

    return NextResponse.json(newAlumni[0], { status: 201 });
  } catch (error) {
    console.error("Error creating alumni:", error);
    return NextResponse.json(
      { error: "Failed to create alumni" },
      { status: 500 }
    );
  }
}
