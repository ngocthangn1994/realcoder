# ApplyFlow Monorepo MVP

ApplyFlow is an **AI-powered job application concierge with human assistants**.

## Tech stack
- Frontend: Next.js App Router, TypeScript, Tailwind CSS
- Backend: Node.js, Express.js, TypeScript, MongoDB + Mongoose, JWT, OpenAI Responses API

## Project structure
```
/
├── frontend
└── backend
```

## Setup
1. Install dependencies from repo root:
```bash
npm install
```
2. Configure environment files:
```bash
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env
```
3. Start both apps:
```bash
npm run dev
```

## Important business rule
ApplyFlow is **not** an auto-apply bot. AI is used for recommendations and drafting only; assistants manually submit applications and upload proof.

## API Endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/profile/me`
- `PUT /api/profile/me`
- `POST /api/resume/upload`
- `GET /api/resume/me`
- `POST /api/ai/analyze-resume`
- `POST /api/ai/job-matches`
- `POST /api/ai/generate-cover-letter`
- `GET /api/applications/me`
- `POST /api/applications`
- `PUT /api/applications/:id/status`
- `POST /api/applications/:id/evidence`
- `GET /api/admin/clients`
- `GET /api/admin/clients/:id`
- `PUT /api/admin/clients/:id/assign-assistant`
- `GET /api/admin/applications`
- `PUT /api/admin/applications/:id`
