# Smart Home Platform

A full-stack, self-hosted smart-home platform for monitoring and controlling home devices (thermostat, camera/doorbell, smoke detector, and more).

## Tech Stack
- Frontend: React + TypeScript + Vite
- Styling: Tailwind CSS
- Backend: Node.js + Express + TypeScript
- Database: MongoDB + Mongoose
- API: REST
- Smart-home integration: Home Assistant-ready

## Folder Structure
- `backend/` Express API + Mongo models + services
- `frontend/` React dashboard + Tailwind UI

## Backend Setup
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

## Frontend Setup
```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

## Environment Variables
### Backend
- `PORT`
- `MONGODB_URI`
- `NODE_ENV`
- `HOME_ASSISTANT_URL`
- `HOME_ASSISTANT_TOKEN`

### Frontend
- `VITE_API_URL`

## MongoDB Local Run
Use MongoDB Community locally:
```bash
mongod --dbpath /path/to/your/data
```
Or run via Docker:
```bash
docker run -d -p 27017:27017 --name smart-home-mongo mongo:7
```

## Start Commands
- Backend: `npm run dev`
- Frontend: `npm run dev`

## API Routes
### Health
- `GET /health`

### Devices
- `GET /api/devices`
- `POST /api/devices`
- `GET /api/devices/health`
- `GET /api/devices/:id`
- `GET /api/devices/camera/status`

### Thermostat
- `GET /api/thermostat/current`
- `POST /api/thermostat/set`
- `POST /api/thermostat/increase`
- `POST /api/thermostat/decrease`

### Alerts
- `GET /api/alerts`
- `POST /api/alerts`

## Home Assistant Integration
The backend service checks `HOME_ASSISTANT_URL` and `HOME_ASSISTANT_TOKEN`.
- If both exist, it calls Home Assistant state APIs.
- If missing, it safely returns mock state so the app still works for learning/dev.

## What To Build Next
1. Authentication and role-based access control
2. Telemetry history charts (Recharts)
3. Automation rule execution engine
4. WebSocket live updates
5. Real Home Assistant command calls for thermostat/camera control
