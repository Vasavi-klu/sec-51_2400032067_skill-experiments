# Skill 14 — User authentication and session management (React + Spring Boot)

This repository contains a small full-stack app: **React (Vite)** in `frontend/` and **Spring Boot** in `backend/`. After login, the client stores `userId` and `username` in **localStorage**, loads the full profile from the API on the Profile page, and **Logout** clears storage and returns to Login.

## Run the backend

Requirements: Java 17+ and Maven.

```bash
cd backend
mvn spring-boot:run
```

API base: `http://localhost:8080`  
H2 console (dev): `http://localhost:8080/h2-console` (JDBC URL: `jdbc:h2:mem:skill14db`, user `sa`, empty password).

## Run the frontend

Requirements: Node.js 18+.

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`. The Vite dev server proxies `/api` to `http://localhost:8080`.

For production builds without the proxy, set `VITE_API_BASE` to your API origin (for example `https://api.example.com`).

## API summary

| Method | Path | Description |
|--------|------|----------------|
| POST | `/api/auth/register` | Body: `username`, `password`, optional `email`, `fullName` |
| POST | `/api/auth/login` | Body: `username`, `password` → `{ userId, username }` |
| GET | `/api/users/{userId}` | Full profile (no password) |

## Push to GitHub

From the folder that should become the repo root (this `git-skill14` folder or your course monorepo):

1. `git add frontend backend README.md .gitignore`
2. `git commit -m "Add Skill 14 full-stack auth demo"`
3. Create an empty repository on GitHub, then `git remote add origin <your-repo-url>` and `git push -u origin main` (use your default branch name if different).

Ensure the remote repository shows both `frontend/` and `backend/` as required by the assignment.
