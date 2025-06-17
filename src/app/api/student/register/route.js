// app/api/student/register/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { studentDB } from "../../../../../lib/db";

// Ensure uploads directory exists
async function ensureUploadDir() {
  const uploadDir = path.join(process.cwd(), "public/uploads");
  try {
    await mkdir(uploadDir, { recursive: true });
  } catch (error) {
    if (error.code !== "EEXIST") {
      throw error;
    }
  }
}

// Handle file upload
async function handleFileUpload(file, folder = "documents") {
  if (!file) return null;

  await ensureUploadDir();

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Generate unique filename
  const timestamp = Date.now();
  const originalName = file.name.replace(/\s+/g, "_");
  const fileName = `${timestamp}_${originalName}`;
  const filePath = path.join(process.cwd(), "public/uploads", folder, fileName);

  // Ensure folder exists
  await mkdir(path.dirname(filePath), { recursive: true });

  // Write file
  await writeFile(filePath, buffer);

  return `/uploads/${folder}/${fileName}`;
}

// Validate required fields
function validateStudentData(data) {
  const required = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "dateOfBirth",
    "password",
  ];
  const missing = required.filter((field) => !data[field]);

  if (missing.length > 0) {
    return {
      valid: false,
      message: `Missing required fields: ${missing.join(", ")}`,
    };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { valid: false, message: "Invalid email format" };
  }

  // Phone validation
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(data.phone.replace(/\D/g, ""))) {
    return { valid: false, message: "Invalid phone number format" };
  }

  return { valid: true };
}

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Extract text data
    const studentData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      dateOfBirth: formData.get("dateOfBirth"),
      gender: formData.get("gender"),
      bloodGroup: formData.get("bloodGroup"),
      nationality: formData.get("nationality"),
      religion: formData.get("religion"),
      category: formData.get("category"),

      // Address data
      permanentAddress: {
        street: formData.get("permanentAddress.street"),
        city: formData.get("permanentAddress.city"),
        state: formData.get("permanentAddress.state"),
        pincode: formData.get("permanentAddress.pincode"),
        country: formData.get("permanentAddress.country"),
      },
      currentAddress: {
        street: formData.get("currentAddress.street"),
        city: formData.get("currentAddress.city"),
        state: formData.get("currentAddress.state"),
        pincode: formData.get("currentAddress.pincode"),
        country: formData.get("currentAddress.country"),
      },
      sameAsPermanent: formData.get("sameAsPermanent") === "true",

      // Academic data
      course: formData.get("course"),
      branch: formData.get("branch"),
      semester: formData.get("semester"),
      admissionYear: formData.get("admissionYear"),

      // Previous education
      previousEducation: {
        schoolName: formData.get("previousEducation.schoolName"),
        board: formData.get("previousEducation.board"),
        percentage: formData.get("previousEducation.percentage"),
        passingYear: formData.get("previousEducation.passingYear"),
      },

      // Guardian information
      fatherName: formData.get("fatherName"),
      fatherOccupation: formData.get("fatherOccupation"),
      fatherPhone: formData.get("fatherPhone"),
      motherName: formData.get("motherName"),
      motherOccupation: formData.get("motherOccupation"),
      motherPhone: formData.get("motherPhone"),
      guardianName: formData.get("guardianName"),
      guardianRelation: formData.get("guardianRelation"),
      guardianPhone: formData.get("guardianPhone"),

      password: formData.get("password"),
    };

    // Validate data
    const validation = validateStudentData(studentData);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, message: validation.message },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingStudent = await studentDB.findByEmail(studentData.email);
    if (existingStudent) {
      return NextResponse.json(
        { success: false, message: "Email already registered" },
        { status: 409 }
      );
    }

    // Handle file uploads
    const files = {
      photo: formData.get("photo"),
      signature: formData.get("signature"),
      tenthCertificate: formData.get("tenthCertificate"),
      twelfthCertificate: formData.get("twelfthCertificate"),
      transferCertificate: formData.get("transferCertificate"),
      migrationCertificate: formData.get("migrationCertificate"),
    };

    // Upload files and get paths
    const filePaths = {};
    for (const [key, file] of Object.entries(files)) {
      if (file && file.size > 0) {
        const folder =
          key === "photo" || key === "signature" ? "profile" : "documents";
        filePaths[`${key}Path`] = await handleFileUpload(file, folder);
      }
    }

    // Hash password
    const passwordHash = await bcrypt.hash(studentData.password, 12);

    // Prepare data for database
    const dbData = {
      ...studentData,
      ...filePaths,
      passwordHash,
    };

    // Remove password from dbData (we only store hash)
    delete dbData.password;

    // Insert into database
    const result = await studentDB.create(dbData);

    return NextResponse.json(
      {
        success: true,
        message: "Student registration completed successfully",
        studentId: result.insertId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve student data (optional)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const studentId = searchParams.get("id");
    const email = searchParams.get("email");

    if (studentId) {
      const student = await studentDB.findById(studentId);
      if (!student) {
        return NextResponse.json(
          { success: false, message: "Student not found" },
          { status: 404 }
        );
      }

      // Remove password hash from response
      delete student.password_hash;

      return NextResponse.json({ success: true, student });
    }

    if (email) {
      const student = await studentDB.findByEmail(email);
      if (!student) {
        return NextResponse.json(
          { success: false, message: "Student not found" },
          { status: 404 }
        );
      }

      // Remove password hash from response
      delete student.password_hash;

      return NextResponse.json({ success: true, student });
    }

    // Get all students (with pagination)
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const offset = (page - 1) * limit;

    const students = await studentDB.findAll(limit, offset);

    // Remove password hashes from response
    students.forEach((student) => delete student.password_hash);

    return NextResponse.json({ success: true, students, page, limit });
  } catch (error) {
    console.error("GET students error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
