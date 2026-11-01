import * as studentsRepository from "../repositories/students.repository.js";

// Get all students
// GET /students
export async function getAllStudents(req, res) {
    try {
        const allStudents = await studentsRepository.getAllStudents();
    
        res.status(200).json(allStudents);
    
    } catch (error) {
        console.error(error);
    
        res.status(500).json({
            message: "Error fetching students"
        });
    }
}

// Get a single student by ID
// GET /students/:id
export async function getStudentById(req, res) { 
    try {
        const id = req.params.id;
        const student = await studentsRepository.getStudentById(id);
    
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({
                message: "Student not found"
            });
        }
    
    } catch (error) {
        console.error(error);
    
        res.status(500).json({
            message: "Error fetching student"
        });
    }
}

// Delete an existing student by ID
// DELETE /students/:id
export async function deleteStudent(req, res) {    
    try {
        const id = req.params.id;
        const deletedStudent = await studentsRepository.deleteStudent(id);
    
        if (deletedStudent) {
            res.sendStatus(204);
        } else {
            res.status(404).json({
                message: "Student not found"
            });
        }
    
    } catch (error) {
        console.error(error);
    
        res.status(500).json({
            message: "Error deleting student"
        });
    }
}

// Create a new student
// POST /students
export async function createStudent(req, res) {
    try {
        const { name, year, house_id } = req.body;
        const newStudent = await studentsRepository.createStudent(name, year, house_id);
    
        res.status(201).json(newStudent);
    
    } catch (error) {
        console.error(error);
    
        res.status(500).json({
            message: "Error creating student"
        });
    }
}

// Update an existing student by ID
// PUT /students/:id
export async function updateStudent(req, res) {
    try {
        const id = req.params.id;
        const { name, year, house_id } = req.body;
            
        const updatedStudent = await studentsRepository.updateStudent(id, name, year, house_id);
    
        if (updatedStudent) {
            res.status(200).json(updatedStudent);
        } else {
            res.status(404).json({
                message: "Student not found"
            });
        }
    
    } catch (error) {
        console.error(error);
    
        res.status(500).json({
            message: "Error updating student"
        });
    }
}