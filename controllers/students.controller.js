import * as studentsRepository from "../repositories/students.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";

// Get all students
// GET /students
export async function getAllStudents(req, res) {
    const allStudents = await studentsRepository.getAllStudents();
    
    res.status(200).json(allStudents);
}

// Get a single student by ID
// GET /students/:id
export async function getStudentById(req, res) { 
    const id = req.params.id;
    const student = await studentsRepository.getStudentById(id);
    
    if (!student) {
        throw new HTTPError(404, "Student not found")
    }

    res.status(200).json(student);
}

// Delete an existing student by ID
// DELETE /students/:id
export async function deleteStudent(req, res) {
    const id = req.params.id;
    const deletedStudent = await studentsRepository.deleteStudent(id);
    
    if (!deletedStudent) {
        throw new HTTPError(404, "Student not found")
    }

    res.sendStatus(204);
}

// Create a new student
// POST /students
export async function createStudent(req, res) {
    const { name, year, house_id } = req.body;
    const newStudent = await studentsRepository.createStudent(name, year, house_id);
    
    res.status(201).json(newStudent);
}

// Update an existing student by ID
// PUT /students/:id
export async function updateStudent(req, res) {
    const id = req.params.id;
    const { name, year, house_id } = req.body;
            
    const updatedStudent = await studentsRepository.updateStudent(id, name, year, house_id);
    
    if (!updatedStudent) {
        throw new HTTPError(404, "Student not found")
    }
    
    res.status(200).json(updatedStudent);
}