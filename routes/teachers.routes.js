import express from "express";
import * as teachersController from "../controllers/teachers.controller.js";

const router = express.Router();

// get all teachers
// GET /teachers
router.get("/", teachersController.getAllTeachers);

// get a single teacher by ID
// GET /teachers/:id
router.get("/:id", teachersController.getTeacherById);

// Delete an existing teacher by ID
// DELETE /teachers/:id
router.delete("/:id", teachersController.deleteTeacher);

// Create a new teacher
// POST /teachers
router.post("/", teachersController.createTeacher);

// Update an existing teacher by ID
// PUT /teachers/:id
router.put("/:id", teachersController.updateTeacher);

export default router;