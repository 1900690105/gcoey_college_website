// app/api/news/route.js
import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

// Database connection configuration
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "gcoey",
};

// Create database connection
async function createConnection() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    return connection;
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Failed to connect to database");
  }
}

// GET - Fetch all news or specific news by ID
export async function GET(request) {
  let connection;

  try {
    connection = await createConnection();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const category = searchParams.get("category");
    const status = searchParams.get("status");
    const featured = searchParams.get("featured");

    let query = "SELECT * FROM news";
    let params = [];
    let conditions = [];

    if (id) {
      conditions.push("id = ?");
      params.push(id);
    }

    if (category && category !== "all") {
      conditions.push("category = ?");
      params.push(category);
    }

    if (status) {
      conditions.push("status = ?");
      params.push(status);
    }

    if (featured) {
      conditions.push("featured = ?");
      params.push(featured === "true");
    }

    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }

    query += " ORDER BY created_at DESC";

    const [rows] = await connection.execute(query, params);

    // Parse JSON tags for each row
    const newsData = rows.map((row) => ({
      ...row,
      tags: row.tags ? JSON.parse(row.tags) : [],
      featured: Boolean(row.featured),
    }));

    return NextResponse.json({
      success: true,
      data: newsData,
    });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

// POST - Create new news article
export async function POST(request) {
  let connection;

  try {
    connection = await createConnection();

    const body = await request.json();
    const {
      title,
      excerpt,
      content,
      category = "general",
      author,
      status = "draft",
      featured = false,
      imageUrl,
      tags = [],
    } = body;

    // Validation
    if (!title || !excerpt || !content) {
      return NextResponse.json(
        {
          success: false,
          error: "Title, excerpt, and content are required",
        },
        { status: 400 }
      );
    }

    const publishDate =
      status === "published" ? new Date().toISOString().split("T")[0] : null;

    const query = `
      INSERT INTO news (
        title, excerpt, content, category, author, 
        publish_date, status, featured, image_url, tags
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [
      title,
      excerpt,
      content,
      category,
      author,
      publishDate,
      status,
      featured,
      imageUrl || null,
      JSON.stringify(tags),
    ];

    const [result] = await connection.execute(query, params);

    // Fetch the created record
    const [newRecord] = await connection.execute(
      "SELECT * FROM news WHERE id = ?",
      [result.insertId]
    );

    const newsData = {
      ...newRecord[0],
      tags: newRecord[0].tags ? JSON.parse(newRecord[0].tags) : [],
      featured: Boolean(newRecord[0].featured),
    };

    return NextResponse.json(
      {
        success: true,
        message: "News article created successfully",
        data: newsData,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

// PUT - Update existing news article
export async function PUT(request) {
  let connection;

  try {
    connection = await createConnection();

    const body = await request.json();
    const {
      id,
      title,
      excerpt,
      content,
      category,
      author,
      status,
      featured,
      imageUrl,
      tags = [],
    } = body;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "News ID is required",
        },
        { status: 400 }
      );
    }

    // Check if news exists
    const [existing] = await connection.execute(
      "SELECT id FROM news WHERE id = ?",
      [id]
    );

    if (existing.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "News article not found",
        },
        { status: 404 }
      );
    }

    const publishDate =
      status === "published" ? new Date().toISOString().split("T")[0] : null;

    const query = `
      UPDATE news SET 
        title = ?, excerpt = ?, content = ?, category = ?, 
        author = ?, publish_date = ?, status = ?, featured = ?, 
        image_url = ?, tags = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;

    const params = [
      title,
      excerpt,
      content,
      category,
      author,
      publishDate,
      status,
      featured,
      imageUrl || null,
      JSON.stringify(tags),
      id,
    ];

    await connection.execute(query, params);

    // Fetch the updated record
    const [updatedRecord] = await connection.execute(
      "SELECT * FROM news WHERE id = ?",
      [id]
    );

    const newsData = {
      ...updatedRecord[0],
      tags: updatedRecord[0].tags ? JSON.parse(updatedRecord[0].tags) : [],
      featured: Boolean(updatedRecord[0].featured),
    };

    return NextResponse.json({
      success: true,
      message: "News article updated successfully",
      data: newsData,
    });
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

// DELETE - Delete news article
export async function DELETE(request) {
  let connection;

  try {
    connection = await createConnection();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "News ID is required",
        },
        { status: 400 }
      );
    }

    // Check if news exists
    const [existing] = await connection.execute(
      "SELECT id FROM news WHERE id = ?",
      [id]
    );

    if (existing.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "News article not found",
        },
        { status: 404 }
      );
    }

    await connection.execute("DELETE FROM news WHERE id = ?", [id]);

    return NextResponse.json({
      success: true,
      message: "News article deleted successfully",
    });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
