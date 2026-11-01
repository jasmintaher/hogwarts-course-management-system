import pool from "../db.js";

// Get all students
// GET /students
export async function getAllStudents() {
    const result = await pool.query("SELECT * FROM students");

    return result.rows;
}

// Get a single student by ID
// GET /students/:id
export async function getStudentById(id) {
    const one = await pool.query(
        "SELECT * FROM students WHERE id = $1",
        [id]
    );

    if (one.rowCount === 0) {
        return null;
    } else {
        return one.rows[0];
    }
}

// Delete an existing student by ID
// DELETE /students/:id
export async function deleteStudent(id) {
    const result = await pool.query(
        "DELETE FROM students WHERE id = $1 RETURNING *",
        [id]
    );

    return result.rows[0] || null;
}

// Create a new student
// POST /students
export async function createStudent(name, year, house_id) {
    const result = await pool.query(
        "INSERT INTO students (name, year, house_id) VALUES ($1, $2, $3) RETURNING *",
        [name, year, house_id]
    );

    return result.rows[0];
}

// Update an existing student by ID
// PUT /students/:id
export async function updateStudent(id, name, year, house_id) {
    const result = await pool.query(
        "UPDATE students SET name = $1, year = $2, house_id = $3 WHERE id = $4 RETURNING *",
        [name, year, house_id, id]
    );

    return result.rows[0] || null;
}
