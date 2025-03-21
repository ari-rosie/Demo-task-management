# Farm Task Manager

A simple farm task management application built with **Spring Boot** (backend) and **React** (frontend).

## Features
- Add and view tasks
- Mark tasks as completed
- Delete tasks

## Tech Stack
- **Backend:** Java, Spring Boot, Maven
- **Frontend:** React, Next.js, TypeScript, Material-UI

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/ari-rosie/Demo-task-management.git

```

### 2. Run the Backend (Spring Boot)
Ensure you have **Java 17+** and **Maven** installed. Then, navigate to the backend directory and run:
```sh
cd task-manager
./mvnw spring-boot:run
```

The backend will start at `http://localhost:8080`.

### 3. Run the Frontend (React + Next.js)
Navigate to the frontend directory:
```sh
cd farm-task-manager-frontend
npm install  # Install dependencies
npm run dev  # Start the development server
```
The frontend will be available at `http://localhost:3000`.

## API Endpoints

### Get All Tasks
```http
GET /api/tasks
```
Response:
```json
[
  { "id": 1, "name": "Water crops", "completed": false }
]
```

### Create a Task
```http
POST /api/tasks
Content-Type: application/json
```
Body:
```json
{
  "name": "Feed animals",
  "completed": false
}
```

### Delete a Task
```http
DELETE /api/tasks/{id}
```

## Troubleshooting
- If the backend doesn’t start, check for **port conflicts** or missing dependencies.
- If the frontend fails to fetch tasks, ensure the backend is running at `http://localhost:8080`.

## License
MIT License

