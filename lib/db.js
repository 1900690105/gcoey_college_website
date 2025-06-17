// lib/db.js
import mysql from "mysql2/promise";

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "gcoey",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 60000,
  timeout: 60000,
  reconnect: true,
};

// Create connection pool
const pool = mysql.createPool(dbConfig);

// Test connection
export async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("Database connected successfully");
    connection.release();
    return true;
  } catch (error) {
    console.error("Database connection failed:", error);
    return false;
  }
}

// Execute query
export async function executeQuery(query, params = []) {
  try {
    const [results] = await pool.execute(query, params);
    return results;
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
}

// Student-specific database operations
export const studentDB = {
  // Insert new student
  async create(studentData) {
    const query = `
      INSERT INTO student (
        first_name, last_name, email, phone, date_of_birth, gender, blood_group, 
        nationality, religion, category, permanent_street, permanent_city, 
        permanent_state, permanent_pincode, permanent_country, current_street, 
        current_city, current_state, current_pincode, current_country, 
        same_as_permanent, course, branch, semester, admission_year, 
        previous_school_name, previous_board, previous_percentage, 
        previous_passing_year, father_name, father_occupation, father_phone, 
        mother_name, mother_occupation, mother_phone, guardian_name, 
        guardian_relation, guardian_phone, photo_path, signature_path, 
        tenth_certificate_path, twelfth_certificate_path, transfer_certificate_path, 
        migration_certificate_path, password_hash
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      studentData.firstName,
      studentData.lastName,
      studentData.email,
      studentData.phone,
      studentData.dateOfBirth,
      studentData.gender,
      studentData.bloodGroup,
      studentData.nationality,
      studentData.religion,
      studentData.category,
      studentData.permanentAddress?.street,
      studentData.permanentAddress?.city,
      studentData.permanentAddress?.state,
      studentData.permanentAddress?.pincode,
      studentData.permanentAddress?.country,
      studentData.currentAddress?.street,
      studentData.currentAddress?.city,
      studentData.currentAddress?.state,
      studentData.currentAddress?.pincode,
      studentData.currentAddress?.country,
      studentData.sameAsPermanent,
      studentData.course,
      studentData.branch,
      studentData.semester,
      studentData.admissionYear,
      studentData.previousEducation?.schoolName,
      studentData.previousEducation?.board,
      studentData.previousEducation?.percentage,
      studentData.previousEducation?.passingYear,
      studentData.fatherName,
      studentData.fatherOccupation,
      studentData.fatherPhone,
      studentData.motherName,
      studentData.motherOccupation,
      studentData.motherPhone,
      studentData.guardianName,
      studentData.guardianRelation,
      studentData.guardianPhone,
      studentData.photoPath,
      studentData.signaturePath,
      studentData.tenthCertificatePath,
      studentData.twelfthCertificatePath,
      studentData.transferCertificatePath,
      studentData.migrationCertificatePath,
      studentData.passwordHash,
    ];

    return await executeQuery(query, values);
  },

  // Find student by email
  async findByEmail(email) {
    const query = "SELECT * FROM student WHERE email = ?";
    const results = await executeQuery(query, [email]);
    return results[0] || null;
  },

  // Find student by ID
  async findById(id) {
    const query = "SELECT * FROM student WHERE id = ?";
    const results = await executeQuery(query, [id]);
    return results[0] || null;
  },

  // Get all students
  async findAll(limit = 50, offset = 0) {
    const query =
      "SELECT * FROM student ORDER BY created_at DESC LIMIT ? OFFSET ?";
    return await executeQuery(query, [limit, offset]);
  },

  // Update student
  async update(id, updateData) {
    const fields = Object.keys(updateData);
    const values = Object.values(updateData);
    const setClause = fields.map((field) => `${field} = ?`).join(", ");

    const query = `UPDATE student SET ${setClause} WHERE id = ?`;
    return await executeQuery(query, [...values, id]);
  },

  // Delete student
  async delete(id) {
    const query = "DELETE FROM student WHERE id = ?";
    return await executeQuery(query, [id]);
  },
};

export default pool;
