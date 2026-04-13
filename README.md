# ApplyFlow Monorepo

ApplyFlow is a full-stack SaaS platform for job seekers that combines **human assistant execution** with **AI resume intelligence** and **job matching**. The product includes a marketing site, onboarding journey, client workspace, assistant workspace, admin operations portal, REST API, seeded demo data, and Docker orchestration.

## Architecture

- `frontend` — Next.js App Router UI for:
  - marketing pages (`/`, `/pricing`, `/about`, `/faq`, `/contact`)
  - auth (`/login`, `/register`)
  - onboarding (`/onboarding/*`)
  - client app (`/client/*`)
  - assistant app (`/assistant/*`)
  - admin app (`/admin/*`)
- `backend` — Express + TypeScript API under `/api/v1` with MongoDB + Mongoose models.

## Stack

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: Express, TypeScript, MongoDB, Mongoose, JWT, bcrypt
- Real-time: Socket.IO
- File upload/parsing plumbing: multer + pdf-parse (API ready)
- AI provider pattern: OpenAI + mock-compatible mode
- Billing adapter pattern: Stripe-ready with mock fallback

## Setup (Local)

### 1) Install dependencies

```bash
npm install
npm install -w backend
npm install -w frontend
```

### 2) Configure environment

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

### 3) Start infrastructure

```bash
docker compose up -d mongo redis
```

### 4) Seed database

```bash
npm run seed
```

### 5) Run apps

```bash
npm run dev
```

- Web: `http://localhost:3000`
- API: `http://localhost:4000`
- Health: `http://localhost:4000/health`

## Demo Credentials

- `client@applyflow.dev / Password123!`
- `assistant@applyflow.dev / Password123!`
- `admin@applyflow.dev / Password123!`

## Scripts

Root:
- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run typecheck`
- `npm run seed`

Backend:
- `npm run dev -w backend`
- `npm run build -w backend`
- `npm run typecheck -w backend`
- `npm run seed -w backend`

Frontend:
- `npm run dev -w frontend`
- `npm run build -w frontend`
- `npm run typecheck -w frontend`

## Environment Variables

### backend/.env
- `NODE_ENV`
- `PORT`
- `MONGODB_URI`
- `JWT_SECRET`
- `OPENAI_API_KEY`
- `OPENAI_MODEL`
- `STRIPE_SECRET_KEY` (optional)

### frontend/.env
- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_SOCKET_URL`

## API Modules (`/api/v1`)

- `/auth`
- `/profile`
- `/resumes`
- `/ai`
- `/applications`
- `/jobs`
- `/chat`
- `/inbox`
- `/plans`
- `/billing`
- `/application-answers`
- `/notifications`
- `/assistant`
- `/admin`

## Docker (full stack)

```bash
docker compose up --build
```

Starts MongoDB, Redis, API, and web services.

## Notes on Integrations

- If `OPENAI_API_KEY` is missing, app can run in mock behavior mode.
- If Stripe secret key is missing, billing endpoints return mock subscription checkout behavior.
- Socket.IO server emits `chat-message` and `typing` events for team chat workflows.
