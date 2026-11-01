import pool from "../db.js";

// Get all houses
// GET /houses
export async function getAllHouses() {
    const result = await pool.query("SELECT * FROM houses");

    return result.rows;
}

// Get a single house by ID
// GET /houses/:id
export async function getHouseById(id) {
    const one = await pool.query("SELECT * FROM houses WHERE id = $1", [id]);

    if (one.rowCount === 0) {
        return null;
    } else {
        return one.rows[0];
    }
}