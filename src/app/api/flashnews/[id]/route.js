// app/api/flashnews/[id]/route.js
import { NextResponse } from "next/server";
import { unlink } from "fs/promises";
import path from "path";
import connect from "../../../../../lib/db";

// DELETE - Delete flash news by ID
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID is required" },
        { status: 400 }
      );
    }

    // First, get the file path to delete the file
    const [rows] = await connect.execute(
      "SELECT file_path FROM flashnews WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { success: false, error: "Flash news not found" },
        { status: 404 }
      );
    }

    // Delete the file if it exists
    const filePath = rows[0].file_path;
    if (filePath) {
      try {
        const fullPath = path.join(process.cwd(), "public", filePath);
        await unlink(fullPath);
      } catch (fileError) {
        console.error("Error deleting file:", fileError);
        // Continue with database deletion even if file deletion fails
      }
    }

    // Delete from database
    const [result] = await connect.execute(
      "DELETE FROM flashnews WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { success: false, error: "Flash news not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Flash news deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting flash news:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete flash news" },
      { status: 500 }
    );
  }
}
