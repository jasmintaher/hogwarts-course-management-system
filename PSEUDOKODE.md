# Pseudokode – Hogwarts Course Management System

## -------------------HOUSES-------------------
### GET /houses – Hent alle houses
1. Modtag en GET-request til `/houses`.
2. Routeren kalder `getAllHouses()` i controlleren.
3. Controlleren kalder `getAllHouses()` i repository.
4. Repository henter alle houses fra databasen med en SQL-query.
5. Repository returnerer resultatet til controlleren.
6. Controlleren sender houses tilbage som JSON med statuskode `200 OK`.
7. Hvis der opstår en fejl, returnerer controlleren `500 Internal Server Error`.

### GET /houses/:id – Hent et bestemt house
1. Modtag en GET-request til `/houses/:id`.
2. Routeren kalder `getHouseById()` i controlleren.
3. Controlleren henter `id` fra `req.params`.
4. Controlleren kalder `getHouseById(id)` i repository.
5. Repository søger efter det pågældende house i databasen med det angivne ID.
6. Repository returnerer resultatet til controlleren.
7. Controlleren kontrollerer resultatet:
   - Hvis house findes, returneres det som JSON med statuskode `200 OK`.
   - Hvis house ikke findes, returneres `404 Not Found`.
8. Hvis der opstår en fejl, returneres `500 Internal Server Error`.


## -------------------TEACHERS-------------------
### GET /teachers – Hent alle teachers
1. Modtag en GET-request til `/teachers`.
2. Routeren kalder `getAllTeachers()` i controlleren.
3. Controlleren kalder `getAllTeachers()` i repository.
4. Repository henter alle teachers fra databasen med en SQL-query.
5. Repository returnerer resultatet til controlleren.
6. Controlleren sender teachers tilbage som JSON med statuskode `200 OK`.
7. Hvis der opstår en fejl, returnerer controlleren `500 Internal Server Error`.

### GET /teachers/:id – Hent en bestemt teacher
1. Modtag en GET-request til `/teachers/:id`.
2. Routeren kalder `getTeacherById()` i controlleren.
3. Controlleren henter `id` fra `req.params`.
4. Controlleren kalder `getTeacherById(id)` i repository.
5. Repository søger efter den pågældende teacher i databasen med det angivne ID.
6. Repository returnerer resultatet til controlleren.
7. Controlleren kontrollerer resultatet:
   - Hvis teacher findes, returneres den som JSON med statuskode `200 OK`.
   - Hvis teacher ikke findes, returneres `404 Not Found`.
8. Hvis der opstår en fejl, returnerer controlleren `500 Internal Server Error`.

### DELETE /teachers/:id – Slet en teacher
1. Modtag en DELETE-request til `/teachers/:id`.
2. Routeren kalder `deleteTeacher()` i controlleren.
3. Controlleren henter `id` fra `req.params`.
4. Controlleren kalder `deleteTeacher(id)` i repository.
5. Repository forsøger at slette den pågældende teacher med det angivne ID fra databasen.
6. Repository returnerer resultatet til controlleren.
7. Controlleren kontrollerer resultatet:
   - Hvis teacher findes og bliver slettet, returneres statuskode `204 No Content`.
   - Hvis teacher ikke findes, returneres `404 Not Found`.
8. Hvis der opstår en fejl, returnerer controlleren `500 Internal Server Error`.

### POST /teachers – Opret en ny teacher
1. Modtag en POST-request til `/teachers`.
2. Routeren kalder `createTeacher()` i controlleren.
3. Controlleren henter oplysninger om den nye teacher fra `req.body`.
4. Controlleren kalder `createTeacher()` i repository med oplysningerne.
5. Repository indsætter den nye teacher i databasen med en SQL-query.
6. Repository returnerer den oprettede teacher til controlleren.
7. Controlleren sender den nye teacher tilbage som JSON med statuskode `201 Created`.
8. Hvis der opstår en fejl, returnerer controlleren `500 Internal Server Error`.

### PUT /teachers/:id – Opdater en teacher
1. Modtag en PUT-request til `/teachers/:id`.
2. Routeren kalder `updateTeacher()` i controlleren.
3. Controlleren henter `id` fra `req.params`.
4. Controlleren henter de nye oplysninger om teacher fra `req.body`.
5. Controlleren kalder `updateTeacher()` i repository med ID og de nye oplysninger.
6. Repository opdaterer den pågældende teacher i databasen med en SQL-query.
7. Repository returnerer resultatet til controlleren.
8. Controlleren kontrollerer resultatet:
   - Hvis teacher findes og er opdateret, returneres den opdaterede teacher som JSON med statuskode `200 OK`.
   - Hvis teacher ikke findes, returneres `404 Not Found`.
9. Hvis der opstår en fejl, returnerer controlleren `500 Internal Server Error`.


## -------------------STUDENTS-------------------
### GET /students – Hent alle students
1. Modtag en GET-request til `/students`.
2. Routeren kalder `getAllStudents()` i controlleren.
3. Controlleren kalder `getAllStudents()` i repository.
4. Repository henter alle students fra databasen med en SQL-query.
5. Repository returnerer resultatet til controlleren.
6. Controlleren sender students tilbage som JSON med statuskode `200 OK`.
7. Hvis der opstår en fejl, returnerer controlleren `500 Internal Server Error`.

### GET /students/:id – Hent en bestemt student
1. Modtag en GET-request til `/students/:id`.
2. Routeren kalder `getStudentById()` i controlleren.
3. Controlleren henter `id` fra `req.params`.
4. Controlleren kalder `getStudentById(id)` i repository.
5. Repository søger efter den pågældende student i databasen med det angivne ID.
6. Repository returnerer resultatet til controlleren.
7. Controlleren kontrollerer resultatet:
   - Hvis student findes, returneres den som JSON med statuskode `200 OK`.
   - Hvis student ikke findes, returneres `404 Not Found`.
8. Hvis der opstår en fejl, returnerer controlleren `500 Internal Server Error`.

### DELETE /students/:id – Slet en student
1. Modtag en DELETE-request til `/students/:id`.
2. Routeren kalder `deleteStudent()` i controlleren.
3. Controlleren henter `id` fra `req.params`.
4. Controlleren kalder `deleteStudent(id)` i repository.
5. Repository forsøger at slette den pågældende student med det angivne ID fra databasen.
6. Repository returnerer resultatet til controlleren.
7. Controlleren kontrollerer resultatet:
   - Hvis student findes og bliver slettet, returneres statuskode `204 No Content`.
   - Hvis student ikke findes, returneres `404 Not Found`.
8. Hvis der opstår en fejl, returnerer controlleren `500 Internal Server Error`.

### POST /students – Opret en ny student
1. Modtag en POST-request til `/students`.
2. Routeren kalder `createStudent()` i controlleren.
3. Controlleren henter oplysninger om den nye student fra `req.body`.
4. Controlleren kalder `createStudent()` i repository med oplysningerne.
5. Repository indsætter den nye student i databasen med en SQL-query.
6. Repository returnerer den oprettede student til controlleren.
7. Controlleren sender den nye student tilbage som JSON med statuskode `201 Created`.
8. Hvis der opstår en fejl, returnerer controlleren `500 Internal Server Error`.

### PUT /students/:id – Opdater en student
1. Modtag en PUT-request til `/students/:id`.
2. Routeren kalder `updateStudent()` i controlleren.
3. Controlleren henter `id` fra `req.params`.
4. Controlleren henter de nye oplysninger om student fra `req.body`.
5. Controlleren kalder `updateStudent()` i repository med ID og de nye oplysninger.
6. Repository opdaterer den pågældende student i databasen med en SQL-query.
7. Repository returnerer resultatet til controlleren.
8. Controlleren kontrollerer resultatet:
   - Hvis student findes og bliver opdateret, returneres den opdaterede student som JSON med statuskode `200 OK`.
   - Hvis student ikke findes, returneres `404 Not Found`.
9. Hvis der opstår en fejl, returnerer controlleren `500 Internal Server Error`.


## -------------------COURSES-------------------
### GET /courses – Hent alle courses
1. Modtag en GET-request til `/courses`.
2. Routeren kalder `getAllCourses()` i controlleren.
3. Controlleren kalder `getAllCourses()` i repository.
4. Repository henter alle courses fra databasen med en SQL-query.
5. Repository returnerer resultatet til controlleren.
6. Controlleren sender courses tilbage som JSON med statuskode `200 OK`.
7. Hvis der opstår en fejl, returnerer controlleren `500 Internal Server Error`.

### GET /courses/:id – Hent en bestemt course
1. Modtag en GET-request til `/courses/:id`.
2. Routeren kalder `getCourseById()` i controlleren.
3. Controlleren henter `id` fra `req.params`.
4. Controlleren kalder `getCourseById(id)` i repository.
5. Repository søger efter den pågældende course i databasen med det angivne ID.
6. Repository returnerer resultatet til controlleren.
7. Controlleren kontrollerer resultatet:
   - Hvis course findes, returneres den som JSON med statuskode `200 OK`.
   - Hvis course ikke findes, returneres `404 Not Found`.
8. Hvis der opstår en fejl, returnerer controlleren `500 Internal Server Error`.

### DELETE /courses/:id – Slet en course
1. Modtag en DELETE-request til `/courses/:id`.
2. Routeren kalder `deleteCourse()` i controlleren.
3. Controlleren henter `id` fra `req.params`.
4. Controlleren kalder `deleteCourse(id)` i repository.
5. Repository forsøger at slette den pågældende course med det angivne ID fra databasen.
6. Repository returnerer resultatet til controlleren.
7. Controlleren kontrollerer resultatet:
   - Hvis course findes og bliver slettet, returneres statuskode `204 No Content`.
   - Hvis course ikke findes, returneres `404 Not Found`.
8. Hvis der opstår en fejl, returnerer controlleren `500 Internal Server Error`.

### POST /courses – Opret en ny course
1. Modtag en POST-request til `/courses`.
2. Routeren kalder `createCourse()` i controlleren.
3. Controlleren henter oplysninger om den nye course fra `req.body`.
4. Controlleren kalder `createCourse()` i repository med oplysningerne.
5. Repository indsætter den nye course i databasen med en SQL-query.
6. Repository returnerer den oprettede course til controlleren.
7. Controlleren sender den nye course tilbage som JSON med statuskode `201 Created`.
8. Hvis der opstår en fejl, returnerer controlleren `500 Internal Server Error`.

### PUT /courses/:id – Opdater en course
1. Modtag en PUT-request til `/courses/:id`.
2. Routeren kalder `updateCourse()` i controlleren.
3. Controlleren henter `id` fra `req.params`.
4. Controlleren henter det nye `name` for course fra `req.body`.
5. Controlleren kalder `updateCourse(id, name)` i repository.
6. Repository opdaterer navnet på den pågældende course i databasen med en SQL-query.
7. Repository returnerer resultatet til controlleren.
8. Controlleren kontrollerer resultatet:
   - Hvis course findes og bliver opdateret, returneres den opdaterede course som JSON med statuskode `200 OK`.
   - Hvis course ikke findes, returneres `404 Not Found`.
9. Hvis der opstår en fejl, returnerer controlleren `500 Internal Server Error`.


### PUT /courses/:id/teacher – Tilknyt eller opdater en teacher til en course
1. Modtag en PUT-request til `/courses/:id/teacher`.
2. Routeren kalder controller-funktionen, der opdaterer teacher for den pågældende course.
3. Controlleren henter `id` for course fra `req.params`.
4. Controlleren henter `teacher_id` fra `req.body`.
5. Controlleren kalder repository med ID for course og ID for teacher.
6. Repository opdaterer `teacher_id` for den angivne course i databasen.
7. Repository returnerer resultatet til controlleren.
8. Controlleren kontrollerer resultatet:
   - Hvis course findes og bliver opdateret, returneres den opdaterede course som JSON med statuskode `200 OK`.
   - Hvis course ikke findes, returneres `404 Not Found`.
9. Hvis der opstår en fejl, returnerer controlleren `500 Internal Server Error`.


### POST /courses/:id/students – Tilmeld en student til en course
1. Modtag en POST-request til `/courses/:id/students`.
2. Routeren kalder `addStudentToCourse()` i controlleren.
3. Controlleren henter `id` for course fra `req.params`.
4. Controlleren henter `student_id` fra `req.body`.
5. Controlleren kalder `addStudentToCourse(id, student_id)` i repository.
6. Repository indsætter en ny relation mellem course og student i tabellen `course_students`.
7. Repository returnerer den nye tilmelding til controlleren.
8. Controlleren sender tilmeldingen tilbage som JSON med statuskode `201 Created`.
9. Hvis der opstår en fejl, kontrollerer controlleren fejlkoden:
   - `23505`: Student er allerede tilmeldt den pågældende course. Returnér `409 Conflict`.
   - `23503`: Course eller student findes ikke. Returnér `400 Bad Request`.
   - Andre fejl: Returnér `500 Internal Server Error`.

### DELETE /courses/:id/students/:studentId – Fjern en student fra en course
1. Modtag en DELETE-request til `/courses/:id/students/:studentId`.
2. Routeren kalder `removeStudentFromCourse()` i controlleren.
3. Controlleren henter `id` for course og `studentId` fra `req.params`.
4. Controlleren kalder `removeStudentFromCourse(id, studentId)` i repository.
5. Repository forsøger at slette relationen mellem course og student fra tabellen `course_students`.
6. Repository returnerer resultatet til controlleren.
7. Controlleren kontrollerer resultatet:
   - Hvis tilmeldingen findes og bliver slettet, returneres statuskode `204 No Content`.
   - Hvis tilmeldingen ikke findes, returneres `404 Not Found`.
8. Hvis der opstår en fejl, returnerer controlleren `500 Internal Server Error`.