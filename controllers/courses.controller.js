import * as coursesRepository from "../repositories/courses.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";
import createCourseDto from "../dtos/createcourse.dto.js";
import updateCourseDto from "../dtos/updateCourse.dto.js";
import updateCourseTeacherDto from "../dtos/updatecourseteacher.dto.js";
import addStudentToCourseDto from "../dtos/addstudenttocourse.dto.js";
import removeStudentFromCourseDto from "../dtos/removestudentfromcourse.dto.js";
import idDto from "../dtos/id.dto.js";

// Get all courses
// GET /courses
export async function getAllCourses(req, res) {
    const allCourses = await coursesRepository.getAllCourses();

    const formattedCourses = allCourses.map((course) => ({
        id: course.id,
        name: course.name,
        type: course.type,
        level: course.level,
        schoolYear: course.schoolYear,
        teacher: course.teacher_id !== null
            ? {
                id: course.teacher_id,
                name: course.teacher_name,
            }
            : null,
    }));
    
    res.status(200).json(formattedCourses);
}

// Get a single course with teacher and students
// GET /courses/:id
export async function getCourseById(req, res) {
    const id = Number(req.params.id);
    
    const courseData = idDto.parse({ id });

    const course = await coursesRepository.getCourseById(courseData.id);
    
    if (!course) {
        throw new HTTPError(404, "Course not found")
    }

    const formattedCourse = {
        id: course.id,
        name: course.name,
        type: course.type,
        level: course.level,
        schoolYear: course.schoolYear,
        teacher: course.teacher_id !== null
            ? {
                id: course.teacher_id,
                name: course.teacher_name,
            }
            : null,
        students: course.students.map((student) => ({
            id: student.id,
            name: student.name,
            birthday: student.birthday,
            schoolYear: student.schoolYear,
            house: student.house_id !== null
                ? {
                    id: student.house_id,
                    name: student.house_name,
                    color1: student.color1,
                    color2: student.color2,
                    founder: student.founder,
                }
                : null,
        })),
    };

    res.status(200).json(formattedCourse);
}

// Delete an existing course by ID
// DELETE /courses/:id
export async function deleteCourse(req, res) {
    const id = Number(req.params.id);

    const courseData = idDto.parse({ id });

    const deletedCourse = await coursesRepository.deleteCourse(courseData.id);
    
    if (!deletedCourse) {
        throw new HTTPError(404, "Course not found")
    }

    res.sendStatus(204);
}

// Create a new course
// POST /courses
export async function createCourse(req, res) {
    // const { name } = req.body;
    const newCourseData = createCourseDto.parse(req.body)
    const newCourse = await coursesRepository.createCourse(
        newCourseData.name,
        newCourseData.type,
        newCourseData.level,
        newCourseData.schoolYear,
    );

    const formattedCourse = {
        id: newCourse.id,
        name: newCourse.name,
        type: newCourse.type,
        level: newCourse.level,
        schoolYear: newCourse.school_year,
        teacher: null,
    };
    
    res.status(201).json(formattedCourse);
}

// Update an existing course by ID
// PUT /courses/:id
export async function updateCourse(req, res) {
    const id = Number(req.params.id);
    const { name, type, level, schoolYear } = req.body;

    const updatedCourseData = updateCourseDto.parse({
        id,
        name,
        type,
        level,
        schoolYear,
    });

    const updatedCourse = await coursesRepository.updateCourse(
        updatedCourseData.id,
        updatedCourseData.name,
        updatedCourseData.type,
        updatedCourseData.level,
        updatedCourseData.schoolYear,
    );
    
    if (!updatedCourse) {
        throw new HTTPError(404, "Course not found")
    }

    const course = await coursesRepository.getCourseById(id);

    const formattedCourse = {
        id: course.id,
        name: course.name,
        type: course.type,
        level: course.level,
        schoolYear: course.schoolYear,
        teacher: course.teacher_id !== null
            ? {
                id: course.teacher_id,
                name: course.teacher_name,
            }
            : null,
    };

    res.status(200).json(formattedCourse);
}

// Set teacher for an existing course
// PUT /courses/:id/teacher
export async function updateCourseTeacher(req, res) {
    const id = Number(req.params.id);
    const { teacher_id } = req.body;

    const updatedCourseTeacherData = updateCourseTeacherDto.parse({
        id,
        teacher_id,
    });

    const updatedCourse = await coursesRepository.updateCourseTeacher(updatedCourseTeacherData.id, updatedCourseTeacherData.teacher_id);
    
    if (!updatedCourse) {
        throw new HTTPError(404, "Course not found")
    }

    const course = await coursesRepository.getCourseById(id);

    const formattedCourse = {
        id: course.id,
        name: course.name,
        type: course.type,
        level: course.level,
        schoolYear: course.schoolYear,
        teacher: course.teacher_id !== null
            ? {
                id: course.teacher_id,
                name: course.teacher_name,
            }
            : null,
    };

    res.status(200).json(formattedCourse);
}

// Add a student to an existing course
// POST /courses/:id/students
export async function addStudentToCourse(req, res) {
    const id = Number(req.params.id);
    const { student_id } = req.body;

    const newEnrollmentData = addStudentToCourseDto.parse({
        id,
        student_id,
    });

    const newEnrollment = await coursesRepository.addStudentToCourse(
        newEnrollmentData.id,
        newEnrollmentData.student_id);
    
    res.status(201).json(newEnrollment);
}

// Remove a student from a course
// DELETE /courses/:id/students/:studentId
export async function removeStudentFromCourse(req, res) {
    const id = Number(req.params.id);
    const studentId = Number(req.params.studentId);

    const removedStudentData = removeStudentFromCourseDto.parse({
        id,
        studentId,
    });
            
    const removedStudent = await coursesRepository.removeStudentFromCourse(
        removedStudentData.id,
        removedStudentData.studentId);
    
    if (!removedStudent) {
        throw new HTTPError(404, "Student not found")
    }

    res.sendStatus(204);
}