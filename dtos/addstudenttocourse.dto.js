import * as z from "zod";

const addStudentToCourseDto = z.object({
    id: z.int().min(1),
    student_id: z.int().min(1),
});

export default addStudentToCourseDto;