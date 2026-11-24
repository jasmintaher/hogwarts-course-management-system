import * as z from "zod";

const updateCourseTeacherDto = z.object({
    id: z.int().min(1),
    teacher_id: z.int().min(1),
});

export default updateCourseTeacherDto;