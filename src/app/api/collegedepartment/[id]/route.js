import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

// export async function PUT(req, { params }) {
//   const { id } = params;
//   const { title, content, priority, targetAudience, status } = await req.json();

//   try {
//     const connection = await mysql.createConnection({
//       host: "localhost",
//       user: "root",
//       password: "",
//       database: "gcoey",
//     });

//     await connection.execute(
//       `UPDATE collegedepartment
//        SET title = ?, content = ?, priority = ?, targetAudience = ?, status = ?
//        WHERE id = ?`,
//       [title, content, priority, targetAudience, status, id]
//     );

//     await connection.end();

//     return NextResponse.json({ message: "Updated successfully" });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ message: "Failed to update" }, { status: 500 });
//   }
// }

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "gcoey",
    });

    await connection.execute(`DELETE FROM collegedepartment WHERE id = ?`, [
      id,
    ]);

    await connection.end();

    return NextResponse.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Failed to delete" }, { status: 500 });
  }
}
