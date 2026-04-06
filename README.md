# AI Comparison + Reliability Scoring Platform (MVP)

Production-style MVP with a modern SaaS UI and modular backend.

## 1) Project Structure

```bash
/workspace/realcoder
├── frontend/
│   ├── app/
│   │   ├── compare/page.tsx
│   │   ├── dashboard/page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── CompareButton.tsx
│   │   ├── FeatureGrid.tsx
│   │   ├── HeroSection.tsx
│   │   ├── HistoryCard.tsx
│   │   ├── ModelCard.tsx
│   │   ├── ModelPicker.tsx
│   │   ├── Navbar.tsx
│   │   ├── PromptInput.tsx
│   │   ├── ResultCard.tsx
│   │   ├── ScoreBadge.tsx
│   │   └── WinnerBadge.tsx
│   ├── data/models.ts
│   ├── lib/api.ts
│   ├── lib/utils.ts
│   ├── types/index.ts
│   ├── .env.local.example
│   ├── next.config.mjs
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.ts
│   └── tsconfig.json
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── env.ts
│   │   │   └── models.ts
│   │   ├── controllers/
│   │   │   ├── compareController.ts
│   │   │   └── historyController.ts
│   │   ├── models/
│   │   │   └── Comparison.ts
│   │   ├── routes/
│   │   │   ├── compareRoutes.ts
│   │   │   └── historyRoutes.ts
│   │   ├── services/
│   │   │   ├── compareService.ts
│   │   │   ├── scoringService.ts
│   │   │   └── providers/
│   │   │       ├── anthropicService.ts
│   │   │       ├── openaiService.ts
│   │   │       └── xaiService.ts
│   │   ├── utils/
│   │   │   ├── calculateWinner.ts
│   │   │   └── validateModels.ts
│   │   └── server.ts
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## 2) Features Delivered

- Landing page with polished SaaS UI (`/`).
- Compare flow (`/compare`) with:
  - 10 model options.
  - Max 3 selection in UI.
  - Default 3 model fallback if none selected.
  - Coming Soon badges.
  - Loading + error + empty states.
  - Side-by-side result cards, score breakdown, winner and fastest badges.
- Dashboard (`/dashboard`) showing comparison history from MongoDB.
- Backend API:
  - `GET /health`
  - `POST /api/compare`
  - `GET /api/history`
- Real provider modules for OpenAI, Anthropic, and xAI.
- Modular scoring service and winner/fastest helpers.

## 3) Exact Setup Commands

### Create and install dependencies

```bash
cd /workspace/realcoder

# Frontend
cd frontend
npm install
cp .env.local.example .env.local
cd ..

# Backend
cd backend
npm install
cp .env.example .env
cd ..
```

### Connect MongoDB

Use local MongoDB or Atlas. Then set `MONGO_URI` in `backend/.env`.

Examples:

```bash
# local
MONGO_URI=mongodb://127.0.0.1:27017/ai_compare_mvp

# atlas
MONGO_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority
```

### Add API keys

In `backend/.env`:

```bash
OPENAI_API_KEY=...
ANTHROPIC_API_KEY=...
XAI_API_KEY=...
```

### Run backend

```bash
cd /workspace/realcoder/backend
npm run dev
```

Backend runs at `http://localhost:5001`.

### Run frontend

```bash
cd /workspace/realcoder/frontend
npm run dev
```

Frontend runs at `http://localhost:3000`.

## 4) Notes on Model Availability

All 10 models are shown in UI. Enabled models for MVP:
- `gpt-4.1`
- `gpt-4.1-mini`
- `claude-sonnet`
- `grok`

Default fallback models (if user selects none):
- `gpt-4.1-mini`
- `claude-sonnet`
- `grok`

Other listed models are displayed as Coming Soon and blocked from backend execution.
