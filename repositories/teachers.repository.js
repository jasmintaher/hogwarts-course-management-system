import pool from "../db.js";

// Get all teachers
// GET /teachers
export async function getAllTeachers() {
    const result = await pool.query(/*sql*/`SELECT t.id, t.name, houses.name AS house
                                            FROM teachers t
                                            LEFT JOIN houses
                                            ON t.house_id = houses.id;`);

    return result.rows;
}

// Get a single teacher by ID
// GET /teachers/:id
export async function getTeacherById(id) {
    const one = await pool.query(
        /*sql*/`SELECT t.id, t.name, houses.name AS house
                FROM teachers t
                LEFT JOIN houses
                ON t.house_id = houses.id
                WHERE t.id = $1;`,
        [id]
    );

    if (one.rowCount === 0) {
        return null;
    } else {
        return one.rows[0];
    }
}

// Delete an existing teacher by ID
// DELETE /teachers/:id
export async function deleteTeacher(id) {
    const result = await pool.query(
        "DELETE FROM teachers WHERE id = $1 RETURNING *",
        [id]
    );

    return result.rows[0] || null;
}

// Create a new teacher
// POST /teachers
export async function createTeacher(name, house_id) {
    const result = await pool.query(
        "INSERT INTO teachers (name, house_id) VALUES ($1, $2) RETURNING *",
        [name, house_id]
    );

    return result.rows[0];
}

// Update an existing teacher by ID
// PUT /teachers/:id
export async function updateTeacher(id, name, house_id) {
    const result = await pool.query(
        "UPDATE teachers SET name = $1, house_id = $2 WHERE id = $3 RETURNING *",
        [name, house_id, id]
    );

    return result.rows[0] || null;
}
