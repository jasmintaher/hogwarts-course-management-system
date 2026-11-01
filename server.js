import express from "express";

//ROUTES
import housesRoutes from "./routes/houses.routes.js";
import teachersRoutes from "./routes/teachers.routes.js";
import studentsRoutes from "./routes/students.routes.js";
import coursesRoutes from "./routes/courses.routes.js";

//SERVER
const app = express();
app.use(express.json()); // parse JSON bodies, gør det muligt at modtage JSON
const port = 3000;

//START SERVER
app.listen(port, () => {
    console.log(`Hogwarts Course Management System listening on http://localhost:${port}`);
});


//-------------------HOUSES-------------------
app.use("/houses", housesRoutes);


//-------------------TEACHERS-------------------
app.use("/teachers", teachersRoutes);


//-------------------STUDENTS-------------------
app.use("/students", studentsRoutes);


//-------------------COURSES-------------------
app.use("/courses", coursesRoutes);