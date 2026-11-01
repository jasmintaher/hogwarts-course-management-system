import express from "express";
import * as studentsController from "../controllers/students.controller.js";

const router = express.Router();

// Get all students
// GET /students
router.get("/", studentsController.getAllStudents);

// Get a single student by ID
// GET /students/:id
router.get("/:id", studentsController.getStudentById);

// Delete an existing student by ID
// DELETE /students/:id
router.delete("/:id", studentsController.deleteStudent);

// Create a new student
// POST /students
router.post("/", studentsController.createStudent);

// Update an existing student by ID
// PUT /students/:id
router.put("/:id", studentsController.updateStudent);

export default router;