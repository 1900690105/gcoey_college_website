// app/api/flashnews/route.js
import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import connect from "../../../../lib/db";

// GET - Fetch all flash news
export async function GET() {
  try {
    const [rows] = await connect.execute(
      "SELECT * FROM flashnews ORDER BY created_at DESC"
    );

    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch flash news" },
      { status: 500 }
    );
  }
}

// POST - Create new flash news
export async function POST(request) {
  try {
    const formData = await request.formData();
    const title = formData.get("title");
    const file = formData.get("file");
    const expireDate = formData.get("expireDate");
    const status = formData.get("status") || "active";

    if (!title || !file || !expireDate) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Handle file upload
    let fileName = "";
    let filePath = "";

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Create uploads directory if it doesn't exist
      const uploadDir = path.join(
        process.cwd(),
        "public",
        "uploads",
        "flashnews"
      );
      await mkdir(uploadDir, { recursive: true });

      // Generate unique filename
      fileName = `${Date.now()}-${file.name}`;
      filePath = `/uploads/flashnews/${fileName}`;
      const fullPath = path.join(uploadDir, fileName);

      await writeFile(fullPath, buffer);
    }

    // Insert into database
    const [result] = await connect.execute(
      "INSERT INTO flashnews (title, file_name, file_path, expire_date, status) VALUES (?, ?, ?, ?, ?)",
      [title, file.name, filePath, expireDate, status]
    );

    return NextResponse.json({
      success: true,
      data: {
        id: result.insertId,
        title,
        file_name: file.name,
        file_path: filePath,
        expire_date: expireDate,
        status,
      },
    });
  } catch (error) {
    console.error("Error creating flash news:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create flash news" },
      { status: 500 }
    );
  }
}

// PUT - Update flash news
export async function PUT(request) {
  try {
    const formData = await request.formData();
    const id = formData.get("id");
    const title = formData.get("title");
    const file = formData.get("file");
    const expireDate = formData.get("expireDate");
    const status = formData.get("status") || "active";

    if (!id || !title || !expireDate) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    let updateQuery =
      "UPDATE flashnews SET title = ?, expire_date = ?, status = ? WHERE id = ?";
    let queryParams = [title, expireDate, status, id];

    // Handle file update if new file is provided
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadDir = path.join(
        process.cwd(),
        "public",
        "uploads",
        "flashnews"
      );
      await mkdir(uploadDir, { recursive: true });

      const fileName = `${Date.now()}-${file.name}`;
      const filePath = `/uploads/flashnews/${fileName}`;
      const fullPath = path.join(uploadDir, fileName);

      await writeFile(fullPath, buffer);

      updateQuery =
        "UPDATE flashnews SET title = ?, file_name = ?, file_path = ?, expire_date = ?, status = ? WHERE id = ?";
      queryParams = [title, file.name, filePath, expireDate, status, id];
    }

    const [result] = await connect.execute(updateQuery, queryParams);

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { success: false, error: "Flash news not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Flash news updated successfully",
    });
  } catch (error) {
    console.error("Error updating flash news:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update flash news" },
      { status: 500 }
    );
  }
}
