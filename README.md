 # Student API

        Simple RESTful API for managing students using Express and MongoDB (Mongoose).

        ## Features
        - Create, read, update, delete students
        - JSON request/response
        - Minimal, easy to extend

        ## Prerequisites
        - Node.js v14+
        - npm or yarn
        - MongoDB (local or Atlas)

        ## Installation
        1. Clone the repo
        2. Install dependencies
            ```bash
            npm install
            ```
        3. Create a `.env` file (example below) and set your MongoDB connection string
            ```env
            MONGO_URI=mongodb://localhost:27017/your-db-name
            PORT=3000
            ```
        4. Start the server
            ```bash
            npm start
            ```
            or for development with auto-reload:
            ```bash
            npm run dev
            ```

        ## Project structure (relevant)
        - routes/studentRoutes.js — Express routes for students
        - models/student.js — Mongoose model for Student
        - app.js / server.js — Express app and server bootstrap

        ## API Endpoints
        Base URL: `http://localhost:3000` (adjust PORT as needed)

        - Fetch all students
          - GET `/students`
          - Example:
             ```bash
             curl http://localhost:3000/students
             ```

        - Create a new student
          - POST `/students`
          - Body (JSON): `{ "name": "Alice", "age": 20, "email": "alice@example.com" }`
          - Example:
             ```bash
             curl -X POST http://localhost:3000/students \
                -H "Content-Type: application/json" \
                -d '{"name":"Alice","age":20,"email":"alice@example.com"}'
             ```

        - Update a student by id
          - PUT `/students/:id`
          - Body: partial or full student JSON
          - Example:
             ```bash
             curl -X PUT http://localhost:3000/students/<id> \
                -H "Content-Type: application/json" \
                -d '{"age":21}'
             ```

        - Delete a student by id
          - DELETE `/students/:id`
          - Example:
             ```bash
             curl -X DELETE http://localhost:3000/students/<id>
             ```
          - Success response:
             ```json
             { "message": "Student deleted successfully" }
             ```

        ## Error handling
        - 400: Bad request (validation errors)
        - 500: Server errors (database, unexpected)

        ## Notes
        - Ensure the `Student` model schema matches the fields used in the routes (`name`, `age`, `email`).
        - Adjust route mounting in your main app (e.g., `app.use('/students', require('./routes/studentRoutes'))`).

        ## Contributing
        - Open issues or submit PRs for improvements.

        ## License
        MIT