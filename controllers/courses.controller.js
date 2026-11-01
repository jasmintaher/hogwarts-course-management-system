import * as coursesRepository from "../repositories/courses.repository.js";

// Get all courses
// GET /courses
export async function getAllCourses(req, res) {
    try {
        const allCourses = await coursesRepository.getAllCourses();
    
        res.status(200).json(allCourses);
    
    } catch (error) {
        console.error(error);
    
        res.status(500).json({
            message: "Error fetching courses"
        });
    }
}

// Get a single course with teacher and students
// GET /courses/:id
export async function getCourseById(req, res) {
    try {
        const id = req.params.id;
        const course = await coursesRepository.getCourseById(id);
    
        if (course) {
            res.status(200).json(course);
        } else {
            res.status(404).json({
                message: "Course not found"
            });
        }
    
    } catch (error) {
        console.error(error);
    
        res.status(500).json({
            message: "Error fetching course"
        });
    }
}

// Delete an existing course by ID
// DELETE /courses/:id
export async function deleteCourse(req, res) {
    try {
        const id = req.params.id;
        const deletedCourse = await coursesRepository.deleteCourse(id);
    
        if (deletedCourse) {
            res.sendStatus(204);
        } else {
            res.status(404).json({
                message: "Course not found"
            });
        }
    
    } catch (error) {
        console.error(error);
    
        res.status(500).json({
            message: "Error deleting course"
        });
    }
}

// Create a new course
// POST /courses
export async function createCourse(req, res) {
    try {
        const { name } = req.body;
        const newCourse = await coursesRepository.createCourse(name);
    
        res.status(201).json(newCourse);
    
    } catch (error) {
        console.error(error);
    
        res.status(500).json({
            message: "Error creating course"
        });
    }
}

// Update an existing course by ID
// PUT /courses/:id
export async function updateCourse(req, res) {
    try {
        const id = req.params.id;
        const { name } = req.body;

        const updatedCourse = await coursesRepository.updateCourse(id, name);
    
        if (updatedCourse) {
            res.status(200).json(updatedCourse);
        } else {
            res.status(404).json({
                message: "Course not found"
            });
        }
    
    } catch (error) {
        console.error(error);
    
        res.status(500).json({
            message: "Error updating course"
        });
    }
}

// Set teacher for an existing course
// PUT /courses/:id/teacher
export async function updateCourseTeacher(req, res) {    
    try {
        const id = req.params.id;
        const { teacher_id } = req.body;

        const updatedCourse = await coursesRepository.updateCourseTeacher(id, teacher_id);
    
        if (updatedCourse) {
            res.status(200).json(updatedCourse);
        } else {
            res.status(404).json({
                message: "Course not found"
            });
        }
    
    } catch (error) {
        console.error(error);
    
        res.status(500).json({
            message: "Error updating course teacher"
        });
    }
}

// Add a student to an existing course
// POST /courses/:id/students
export async function addStudentToCourse(req, res) {
    try {
        const id = req.params.id;
        const { student_id } = req.body;

        const newEnrollment = await coursesRepository.addStudentToCourse(id, student_id);
    
        res.status(201).json(newEnrollment);
    
    } catch (error) {
        console.error(error);
    
        if (error.code === "23505") {   //Duplicate
            return res.status(409).json({
                message: "Student is already enrolled in this course"
            });
        }
    
        if (error.code === "23503") {   // Foreign key violation
            return res.status(400).json({
                message: "Course or student does not exist"
            });
        }
    
        res.status(500).json({
            message: "Error adding student to course"
        });
    }
}

// Remove a student from a course
// DELETE /courses/:id/students/:studentId
export async function removeStudentFromCourse(req, res) {    
    try {
        const id = req.params.id;
        const studentId = req.params.studentId;
            
        const removedStudent = await coursesRepository.removeStudentFromCourse(id, studentId);
    
        if (removedStudent) {
            res.sendStatus(204);
        } else {
            res.status(404).json({
                message: "Student not found in this course"
            });
        }
    
    } catch (error) {
        console.error(error);
    
        res.status(500).json({
            message: "Error removing student from course"
        });
    }
}