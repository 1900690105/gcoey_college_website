import { NextResponse } from "next/server";
import connect from "../../../../../lib/db";

// GET single alumni
export async function GET(request, { params }) {
  try {
    const [rows] = await connect.execute("SELECT * FROM alumni WHERE aid = ?", [
      params.id,
    ]);

    if (rows.length === 0) {
      return NextResponse.json({ error: "Alumni not found" }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Error fetching alumni:", error);
    return NextResponse.json(
      { error: "Failed to fetch alumni" },
      { status: 500 }
    );
  }
}

// PUT update alumni
export async function PUT(request, { params }) {
  try {
    const data = await request.json();

    const query = `
      UPDATE alumni 
      SET aname = ?, linkedin_url = ?, adept = ?, apost = ?, company = ?, 
          package = ?, aphone = ?, aaddress = ?, message = ?, image = ?, status = ?
      WHERE aid = ?
    `;

    const updateParams = [
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
      data.status,
      params.id, // Use route param for WHERE condition
    ];

    const [result] = await connect.execute(query, updateParams);

    if (result.affectedRows === 0) {
      return NextResponse.json({ error: "Alumni not found" }, { status: 404 });
    }

    // Fetch and return the updated alumni record
    const [updatedAlumni] = await connect.execute(
      "SELECT * FROM alumni WHERE aid = ?",
      [params.id]
    );

    return NextResponse.json(updatedAlumni[0]);
  } catch (error) {
    console.error("Error updating alumni:", error);
    return NextResponse.json(
      { error: "Failed to update alumni" },
      { status: 500 }
    );
  }
}

// DELETE alumni
export async function DELETE(request, { params }) {
  try {
    const [result] = await connect.execute("DELETE FROM alumni WHERE aid = ?", [
      params.id,
    ]);

    if (result.affectedRows === 0) {
      return NextResponse.json({ error: "Alumni not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Alumni deleted successfully" });
  } catch (error) {
    console.error("Error deleting alumni:", error);
    return NextResponse.json(
      { error: "Failed to delete alumni" },
      { status: 500 }
    );
  }
}
