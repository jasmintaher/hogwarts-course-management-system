import * as z from "zod";

const removeStudentFromCourseDto = z.object({
    id: z.int().min(1),
    studentId: z.int().min(1),
});

export default removeStudentFromCourseDto;