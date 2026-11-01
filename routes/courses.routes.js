import express from "express";
import * as coursesController from "../controllers/courses.controller.js";

const router = express.Router();

// Get all courses
// GET /courses
router.get("/", coursesController.getAllCourses);

// Get a single course with teacher and students
// GET /courses/:id
router.get("/:id", coursesController.getCourseById);

// Delete an existing course by ID
// DELETE /courses/:id
router.delete("/:id", coursesController.deleteCourse);

// Create a new course
// POST /courses
router.post("/", coursesController.createCourse);

// Update an existing course by ID
// PUT /courses/:id
router.put("/:id", coursesController.updateCourse);


// Set teacher for an existing course
// PUT /courses/:id/teacher
router.put("/:id/teacher", coursesController.updateCourseTeacher);


// Add a student to a course
// POST /courses/:id/students
router.post("/:id/students", coursesController.addStudentToCourse);

// Remove a student from a course
// DELETE /courses/:id/students/:studentId
router.delete("/:id/students/:studentId", coursesController.removeStudentFromCourse);

export default router;