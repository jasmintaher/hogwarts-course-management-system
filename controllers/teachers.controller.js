import * as teachersRepository from "../repositories/teachers.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";
import updateTeacherDto from "../dtos/updateteacher.dto.js";

// Get all teachers
// GET /teachers
export async function getAllTeachers(req, res) {
    // try {
        const allTeachers = await teachersRepository.getAllTeachers();

        res.status(200).json(allTeachers);

    // } catch (error) {
    //     console.error(error);

    //     res.status(500).json({
    //         message: "Error fetching teachers"
    //     });
    // }
}

// Get a single teacher by ID
// GET /teachers/:id
export async function getTeacherById(req, res) {
    const id = req.params.id;
    const teacher = await teachersRepository.getTeacherById(id);

    if (teacher) {
        res.status(200).json(teacher);
    }
        
    throw new HTTPError(404, "Teacher not found");
}

// Delete an existing teacher by ID
// DELETE /teachers/:id
export async function deleteTeacher(req, res) {
    // try {
        const id = req.params.id;
        const deletedTeacher = await teachersRepository.deleteTeacher(id);

        if (deletedTeacher) {
            res.sendStatus(204);
        }

        throw new HTTPError(404, "Teacher not found");
        
        // else {
        //     res.status(404).json({
        //         message: "Teacher not found"
        //     });
        // }

    // } catch (error) {
    //     console.error(error);

    //     res.status(500).json({
    //         message: "Error deleting teacher"
    //     });
    // }
}

// Create a new teacher
// POST /teachers
export async function createTeacher(req, res) {
    
    // try {
        const { name, house_id } = req.body;
        const newTeacher = await teachersRepository.createTeacher(name, house_id);

        res.status(201).json(newTeacher);
    
    // } catch (error) {
    //     console.error(error);
    
    //     res.status(500).json({
    //         message: "Error creating teacher"
    //     });
    // }
}

// Update an existing teacher by ID
// PUT /teachers/:id
export async function updateTeacher(req, res) {
        const id = req.params.id;
        const input = req.body;

        const newTeacherData = updateTeacherDto.parse(input);

        const oldTeacher = await teachersRepository.getTeacherById(id);
    
        if (!oldTeacher) {throw new HTTPError(400, "Teacher does not exist");}

        const newTeacher = await teachersRepository.updateTeacher(id, newTeacherData.name, newTeacherData.house_id);
        res.status(201).json(newTeacher);
}