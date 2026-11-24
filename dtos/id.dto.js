import * as z from "zod";

const idDto = z.object({
    id: z.int().min(1),
});

export default idDto;