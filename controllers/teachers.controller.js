import * as teachersRepository from "../repositories/teachers.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";
import updateTeacherDto from "../dtos/updateteacher.dto.js";

// Get all teachers
// GET /teachers
export async function getAllTeachers(req, res) {
    const allTeachers = await teachersRepository.getAllTeachers();

    res.status(200).json(allTeachers);
}

// Get a single teacher by ID
// GET /teachers/:id
export async function getTeacherById(req, res) {
    const id = req.params.id;
    const teacher = await teachersRepository.getTeacherById(id);

    if (!teacher) {
        throw new HTTPError(404, "Teacher not found");
    }

    res.status(200).json(teacher);
}

// Delete an existing teacher by ID
// DELETE /teachers/:id
export async function deleteTeacher(req, res) {
    const id = req.params.id;
    const deletedTeacher = await teachersRepository.deleteTeacher(id);

    if (!deletedTeacher) {
        throw new HTTPError(404, "Teacher not found");
    }

    res.sendStatus(204);
}

// Create a new teacher
// POST /teachers
export async function createTeacher(req, res) {
    const { name, house_id } = req.body;
    const newTeacher = await teachersRepository.createTeacher(name, house_id);

    res.status(201).json(newTeacher);
}

// Update an existing teacher by ID
// PUT /teachers/:id
export async function updateTeacher(req, res) {
        const id = req.params.id;
        const input = req.body;

        const newTeacherData = updateTeacherDto.parse(input);

        const oldTeacher = await teachersRepository.getTeacherById(id);
    
        if (!oldTeacher) {throw new HTTPError(404, "Teacher does not exist");}

        const newTeacher = await teachersRepository.updateTeacher(id, newTeacherData.name, newTeacherData.house_id);
        res.status(200).json(newTeacher);
}