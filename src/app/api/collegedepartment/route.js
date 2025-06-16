import connect from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const dept = searchParams.get("dept");

  try {
    let rows;
    if (dept) {
      [rows] = await connect.query(
        "SELECT * FROM collegedepartment WHERE code = ?",
        [dept]
      );
    } else {
      [rows] = await connect.query("SELECT * FROM collegedepartment");
    }

    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to Fetch Department" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const body = await request.json();

  const {
    dname,
    code,
    idhod,
    dhod,
    hodemail,
    hodphone,
    established,
    dstudent,
    dteacher,
    dclassroom,
    dlabs,
    dmassage,
    dabout,
    vision,
    mission,
    dcurriculum,
    timetable,
  } = body;

  try {
    const [result] = await connect.execute(
      `INSERT INTO collegedepartment 
        (dname, code, idhod, dhod, hodemail, hodphone, established,
         dstudent, dteacher, dclassroom, dlabs, dmassage, dabout,
         vision, mission, dcurriculum, timetable)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        dname,
        code,
        idhod,
        dhod,
        hodemail,
        hodphone,
        established,
        parseInt(dstudent) || 0,
        parseInt(dteacher) || 0,
        parseInt(dclassroom) || 0,
        parseInt(dlabs) || 0,
        dmassage,
        dabout,
        vision,
        mission,
        dcurriculum,
        timetable,
      ]
    );

    return new Response(
      JSON.stringify({ message: "Inserted", id: result.insertId }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("DB Insert Error:", error);
    return new Response(JSON.stringify({ error: "Failed to insert data" }), {
      status: 500,
    });
  }
}
