// require("dotenv").config();
// const { Pool } = require("pg");
import "dotenv/config";
import { Pool } from "pg";

const pool = new Pool({
    host: process.env.PGHOST,
    // port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD
});

// module.exports = pool;
export default pool;
