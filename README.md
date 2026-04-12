# ApplyFlow MVP Starter

ApplyFlow is an **AI-powered job application concierge with human assistants**. This repo contains a production-style MVP scaffold with:

- `frontend/`: Next.js App Router + TypeScript + Tailwind CSS
- `backend/`: Express + TypeScript + Mongoose + OpenAI Responses API integration

## Folder structure

```text
.
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── (admin)/admin/...
│   │   │   ├── (client)/dashboard/...
│   │   │   ├── about/ faq/ login/ pricing/ register/
│   │   │   ├── globals.css layout.tsx page.tsx
│   │   ├── components/
│   │   ├── hooks/ lib/ mock/ store/ types/
├── backend/
│   ├── src/
│   │   ├── config controllers middleware models routes services types utils
│   │   └── server.ts
├── package.json
```

## Quick start

### 1) Install dependencies

```bash
npm install
```

### 2) Configure backend env

```bash
cp backend/.env.example backend/.env
```

Fill `MONGODB_URI`, `JWT_SECRET`, and optional `OPENAI_API_KEY`.

### 3) Run dev servers

```bash
npm run dev
```

- Frontend: http://localhost:3000
- Backend: http://localhost:4000

## API summary

- Auth: `/api/auth/register`, `/api/auth/login`, `/api/auth/me`
- Profile: `/api/profile/me`
- Resume: `/api/resume/upload`, `/api/resume/me`
- AI: `/api/ai/analyze-resume`, `/api/ai/job-matches`, `/api/ai/generate-cover-letter`
- Applications: `/api/applications/me`, `/api/applications`, `/api/applications/:id/status`, `/api/applications/:id/evidence`
- Admin: `/api/admin/clients`, `/api/admin/clients/:id`, `/api/admin/clients/:id/assign-assistant`, `/api/admin/applications`, `/api/admin/applications/:id`

## Notes

- Manual-assistant workflow only (no auto-submitting bots).
- Frontend currently uses polished mock data so product demos work before backend wiring.
- OpenAI integration has fallback mock outputs when API key is not configured.
