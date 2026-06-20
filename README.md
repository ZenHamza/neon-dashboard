# Neon Dashboard

Full-stack analytics dashboard with real-time data streaming, built with Next.js 14 and NestJS 10.

## Features

- Real-time analytics charts powered by Recharts
- RESTful API with NestJS backend
- Dark neon UI with Tailwind CSS custom theme
- Docker Compose deployment for production
- TypeScript throughout the stack

## Tech Stack

| Layer    | Technology                                 |
| -------- | ------------------------------------------ |
| Frontend | Next.js 14 (App Router), React 18, Recharts, Tailwind CSS, TypeScript |
| Backend  | NestJS 10, Express, TypeScript             |
| Tooling  | Docker Compose, ESLint                     |

## Quick Start (Docker)

```bash
docker compose up -d
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:4000/api

## Local Development

### Backend

```bash
cd backend
npm install
npm run start:dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

| Method | Endpoint      | Description                |
| ------ | ------------- | -------------------------- |
| GET    | `/api/stats`  | Returns dashboard stats    |
| GET    | `/api/health` | Health check               |
