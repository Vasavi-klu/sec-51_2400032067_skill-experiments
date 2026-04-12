# Student Management (Full-Stack CRUD)

Monorepo layout for FSAD coursework:

- `backend/` — Spring Boot REST API (H2 in-memory database)
- `frontend/` — React UI (Vite + axios)

## Prerequisites

- Java 17+ and Maven
- Node.js 18+ and npm

## Run the backend

```bash
cd backend
mvn spring-boot:run
```

API base: `http://localhost:8080`

- `GET /students` — list all students  
- `POST /students` — create (JSON body: `name`, `email`, `course`)  
- `PUT /students/{id}` — update  
- `DELETE /students/{id}` — delete  

CORS is enabled for `http://localhost:5173` and `http://localhost:3000`.

## Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`). Keep the backend running in another terminal.

## Push to GitHub

1. Create an empty repository on GitHub (no README if you already have this one).
2. From this folder:

```bash
git init
git add backend frontend README.md .gitignore
git commit -m "Add student management full-stack CRUD app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO` with your GitHub details.
