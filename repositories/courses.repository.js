import pool from "../db.js";

// Get all courses
// GET /courses
export async function getAllCourses() {
    const result = await pool.query("SELECT * FROM courses");

    return result.rows;
}

// Get a single course with teacher and students
// GET /courses/:id
export async function getCourseById(id) {
    const courseResult = await pool.query(
        `SELECT
            courses.id,
            courses.name,
            courses.teacher_id,
            teachers.name AS teacher_name
         FROM courses
         LEFT JOIN teachers
         ON courses.teacher_id = teachers.id
         WHERE courses.id = $1`,
        [id]
    );

    if (courseResult.rowCount === 0) {
        return null;
    }

    const studentsResult = await pool.query(
        `SELECT students.*
         FROM students
         JOIN course_students
         ON students.id = course_students.student_id
         WHERE course_students.course_id = $1
         ORDER BY students.id`,
        [id]
    );

    const course = courseResult.rows[0];
    course.students = studentsResult.rows;

    return course;
}

// Delete an existing course by ID
// DELETE /courses/:id
export async function deleteCourse(id) {
    const result = await pool.query(
        "DELETE FROM courses WHERE id = $1 RETURNING *",
        [id]
    );

    return result.rows[0] || null;
}

// Create a new course
// POST /courses
export async function createCourse(name) {
    const result = await pool.query(
        "INSERT INTO courses (name) VALUES ($1) RETURNING *",
        [name]
    );

    return result.rows[0];
}

// Update an existing course by ID
// PUT /courses/:id
export async function updateCourse(id, name) {
    const result = await pool.query(
        "UPDATE courses SET name = $1 WHERE id = $2 RETURNING *",
        [name, id]
    );

    return result.rows[0] || null;
}

// Set teacher for an existing course
// PUT /courses/:id/teacher
export async function updateCourseTeacher(id, teacher_id) {
    const result = await pool.query(
        "UPDATE courses SET teacher_id = $1 WHERE id = $2 RETURNING *",
        [teacher_id, id]
    );

    return result.rows[0] || null;
}

// Add a student to an existing course
// // POST /courses/:id/students
export async function addStudentToCourse(id, student_id) {
    const result = await pool.query(
        `INSERT INTO course_students (course_id, student_id)
         VALUES ($1, $2)
         RETURNING *`,
        [id, student_id]
    );

    return result.rows[0];
}

// Remove a student from a course
// DELETE /courses/:id/students/:studentId
export async function removeStudentFromCourse(id, studentId) {
    const result = await pool.query(
        `DELETE FROM course_students
         WHERE course_id = $1 AND student_id = $2
         RETURNING *`,
        [id, studentId]
    );

    return result.rows[0] || null;
}
