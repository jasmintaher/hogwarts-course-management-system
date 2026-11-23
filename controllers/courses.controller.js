import * as coursesRepository from "../repositories/courses.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";

// Get all courses
// GET /courses
export async function getAllCourses(req, res) {
    const allCourses = await coursesRepository.getAllCourses();
    
    res.status(200).json(allCourses);
}

// Get a single course with teacher and students
// GET /courses/:id
export async function getCourseById(req, res) {
    const id = req.params.id;
    const course = await coursesRepository.getCourseById(id);
    
    if (!course) {
        throw new HTTPError(404, "Course not found")
    }

    res.status(200).json(course);
}

// Delete an existing course by ID
// DELETE /courses/:id
export async function deleteCourse(req, res) {
    const id = req.params.id;
    const deletedCourse = await coursesRepository.deleteCourse(id);
    
    if (!deletedCourse) {
        throw new HTTPError(404, "Course not found")
    }

    res.sendStatus(204);
}

// Create a new course
// POST /courses
export async function createCourse(req, res) {
    const { name } = req.body;
    const newCourse = await coursesRepository.createCourse(name);
    
    res.status(201).json(newCourse);
}

// Update an existing course by ID
// PUT /courses/:id
export async function updateCourse(req, res) {
    const id = req.params.id;
    const { name } = req.body;

    const updatedCourse = await coursesRepository.updateCourse(id, name);
    
    if (!updatedCourse) {
        throw new HTTPError(404, "Course not found")
    }

    res.status(200).json(updatedCourse);
}

// Set teacher for an existing course
// PUT /courses/:id/teacher
export async function updateCourseTeacher(req, res) {
    const id = req.params.id;
    const { teacher_id } = req.body;

    const updatedCourse = await coursesRepository.updateCourseTeacher(id, teacher_id);
    
    if (!updatedCourse) {
        throw new HTTPError(404, "Course not found")
    }

    res.status(200).json(updatedCourse);
}

// Add a student to an existing course
// POST /courses/:id/students
export async function addStudentToCourse(req, res) {
    const id = req.params.id;
    const { student_id } = req.body;

    const newEnrollment = await coursesRepository.addStudentToCourse(id, student_id);
    
    res.status(201).json(newEnrollment);
}

// Remove a student from a course
// DELETE /courses/:id/students/:studentId
export async function removeStudentFromCourse(req, res) {
    const id = req.params.id;
    const studentId = req.params.studentId;
            
    const removedStudent = await coursesRepository.removeStudentFromCourse(id, studentId);
    
    if (!removedStudent) {
        throw new HTTPError(404, "Student not found")
    }

    res.sendStatus(204);
}