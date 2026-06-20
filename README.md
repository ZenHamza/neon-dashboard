Live demo: **[neon.zenxhamza.xyz](https://neon.zenxhamza.xyz)**

<div align="center">
  <br/>
  <h1>Neon Dashboard</h1>
  <p><strong>Real-time Analytics Dashboard</strong></p>
  <p>Next.js 14 · NestJS 10 · Recharts · Tailwind CSS · Docker</p>
  <br/>

  [![CI](https://github.com/ZenHamza/neon-dashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/ZenHamza/neon-dashboard/actions)
  [![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org)
  [![NestJS](https://img.shields.io/badge/NestJS-10-E0234E?logo=nestjs)](https://nestjs.com)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

  <br/>
</div>

## Overview

Neon Dashboard is a full-stack analytics dashboard with real-time data streaming, custom charting, and AI-powered insights. Built with a modern TypeScript stack — Next.js 14 frontend with Server Components and a NestJS 10 REST API backend.

## Features

- **Live Metrics** — Total users, page views, bounce rate, session duration in real-time cards
- **Weekly Charts** — Interactive bar/line charts built with Recharts
- **Responsive Grid** — Adaptive layout from mobile to 4K
- **REST API** — NestJS backend with versioned endpoints
- **Dockerized** — One-command deploy with `docker compose up`
- **Dark Mode** — Neon-themed UI with void color scheme

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 (App Router), React 18, TypeScript |
| Charts | Recharts 2 |
| Styling | Tailwind CSS 3 |
| Backend | NestJS 10, TypeScript |
| Container | Docker + Docker Compose |
| Build | pnpm |

## Quick Start

### With Docker (recommended)

```bash
git clone https://github.com/ZenHamza/neon-dashboard.git
cd neon-dashboard
docker compose up -d
```

Open http://localhost:3000

### Local Development

```bash
# Backend
cd backend
npm install
npm run start:dev

# Frontend (new terminal)
cd frontend
npm install
npm run dev
```

Open http://localhost:3000

## API Endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/api/health` | Health check |
| GET | `/api/stats` | Dashboard statistics |

### Response: `GET /api/stats`

```json
{
  "totalUsers": 12847,
  "pageViews": 84291,
  "bounceRate": 32.4,
  "avgSession": "4m 12s",
  "weeklyViews": [
    { "name": "Mon", "views": 4000 },
    { "name": "Tue", "views": 3000 }
  ]
}
```

## Project Structure

```
neon-dashboard/
├── frontend/            # Next.js 14 App Router
│   ├── src/
│   │   └── app/
│   │       ├── layout.tsx
│   │       ├── page.tsx      # Main dashboard
│   │       └── globals.css
│   └── package.json
├── backend/             # NestJS 10
│   ├── src/
│   │   ├── main.ts
│   │   ├── app.module.ts
│   │   ├── app.controller.ts
│   │   └── app.service.ts
│   └── package.json
├── docker-compose.yml
└── README.md
```

## Deployment

```bash
docker compose up -d --build
docker compose logs -f
```

The frontend is exposed on port 3000, backend on port 4000.

## License

MIT — see [LICENSE](LICENSE).

---

<div align="center">
  <sub>Built with ❄️ by <a href="https://github.com/ZenHamza">ZenHamza</a></sub>
</div>
