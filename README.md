# Hogwarts Course Management System

## Installation og opsætning

### 1. Installer dependencies
Åbn projektet i VS Code, og kør følgende kommando i terminalen:

```bash
npm install
```

### 2. Opret PostgreSQL-databasen
1. Åbn pgAdmin 4.
2. Opret en ny PostgreSQL-database med navnet `hogwarts`.
3. Åbn Query Tool for databasen.
4. Åbn SQL-filen `sql/hogwarts.sql`, og kør den for at oprette tabellerne og indsætte testdata.

### 3. Konfigurer miljøvariabler
1. Opret en `.env`-fil i projektets rodmappe.
2. Brug `.env.example` som skabelon.
3. Indsæt dine egne PostgreSQL-oplysninger, herunder host, databasenavn, brugernavn og adgangskode.

`.env` er ikke inkluderet i GitHub-repositoryet af sikkerhedsmæssige årsager.

### 4. Start serveren
Kør følgende kommando i terminalen:

```bash
npm run dev
```

Serveren starter på `http://localhost:3000`.

API-endpoints kan derefter testes ved hjælp af Insomnia.



## API Endpoints
### Houses
- `GET /houses` - Get all houses
- `GET /houses/:id` - Get a single house by ID

### Teachers
- `GET /teachers` - Get all teachers
- `GET /teachers/:id` - Get a single teacher by ID
- `DELETE /teachers/:id` - Delete an existing teacher
- `POST /teachers` - Create a new teacher
- `PUT /teachers/:id` - Update an existing teacher

### Students
- `GET /students` - Get all students
- `GET /students/:id` - Get a single student by ID
- `DELETE /students/:id` - Delete an existing student
- `POST /students` - Create a new student
- `PUT /students/:id` - Update an existing student

### Courses
- `GET /courses` - Get all courses
- `GET /courses/:id` - Get a single course by ID
- `DELETE /courses/:id` - Delete an existing course
- `POST /courses` - Create a new course
- `PUT /courses/:id` - Update an existing course

### Course + Teacher
- `PUT /courses/:id/teacher` - Set teacher for an existing course

### Course + Students
- `POST /courses/:id/students` - Add a student to an existing course
- `DELETE /courses/:id/students/:studentId` - Remove a student from a course



## Test af API-endpoints
API-endpoints kan testes ved hjælp af Insomnia.

1. Start serveren med `npm run dev`.
2. Åbn Insomnia, og opret en ny HTTP-request.
3. Vælg HTTP-metoden (GET, POST, PUT eller DELETE).
4. Indtast endpointets URL, f.eks. `http://localhost:3000/houses`.
5. Ved POST- og PUT-requests skal du vælge JSON som body-type og indtaste de nødvendige data.
6. Klik på **Send** for at sende requesten.
7. Kontrollér statuskoden og JSON-responsen for at se, om endpointet fungerer korrekt.



## Import af Insomnia Collection
Projektet indeholder en eksporteret Insomnia-collection med alle 20 API-endpoints.

Collectionen findes i filen `hogwarts-insomnia.yaml` i projektets rodmappe.

**Sådan importeres collectionen:**
1. Åbn Insomnia.
2. Vælg **Import** og derefter **File**.
3. Vælg filen `hogwarts-insomnia.yaml`.
4. Importér collectionen.
5. Start serveren med `npm run dev`.
6. Åbn den importerede collection, og test endpoints ved at klikke på **Send**.

API'et kører på `http://localhost:3000`.

**Bemærk:** POST-, PUT- og DELETE-requests kan ændre data i databasen. Nogle requests kræver derfor, at de angivne ID'er eksisterer, eller at der først oprettes testdata.