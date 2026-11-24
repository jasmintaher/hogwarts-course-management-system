import * as z from "zod";
import createCourseDto from "./createcourse.dto.js";

const updateCourseDto = createCourseDto.safeExtend({
    id: z.int().min(1),
});

export default updateCourseDto;