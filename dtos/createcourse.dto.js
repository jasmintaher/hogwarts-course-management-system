import * as z from "zod";

const createCourseDto = z.object({
    name: z.string().trim().min(1).max(100),
    type: z.enum(["core", "elective", "extra-curricular"]),
    level: z.enum(["OWL", "NEWT"]),
    schoolYear: z.int().min(1).max(7),
}).refine(
    (data) => {
        if (data.level === "OWL") {
            return data.schoolYear <= 5;
        }

        if (data.level === "NEWT") {
            return data.schoolYear >= 6;
        }

        return false;
    },
    {
        message: "OWL is for school years 1-5 and NEWT is for school years 6-7",
        path: ["schoolYear"],
    }
);

export default createCourseDto;