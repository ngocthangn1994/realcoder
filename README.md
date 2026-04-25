# GoLink (Internal URL Shortener + Browser Keyword Redirect)

GoLink is a production-style monorepo with:

- **Backend**: Node.js + Express + TypeScript + MongoDB/Mongoose
- **Frontend**: Next.js App Router + React + TypeScript + Tailwind CSS

## Project structure

```text
golink/
  frontend/
  backend/
```

## 1) Environment setup

### Backend

Create `backend/.env`:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:3000
```

### Frontend

Create `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 2) Install and run

```bash
npm install
npm run dev
```

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 3) Backend API

- `GET /api/health`
- `POST /api/links`
- `GET /api/links`
- `GET /api/links/:slug`
- `PUT /api/links/:id`
- `DELETE /api/links/:id`
- `GET /go/:slug` (redirect and increments click count)

## 4) curl test examples

### Health check

```bash
curl http://localhost:5000/api/health
```

### Create sample slug `sam`

```bash
curl -X POST http://localhost:5000/api/links \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Sam\'s Club",
    "slug": "sam",
    "destinationUrl": "https://www.samsclub.com/",
    "description": "Sam\'s Club homepage",
    "tags": ["shopping", "retail"]
  }'
```

### List all links

```bash
curl http://localhost:5000/api/links
```

### Test redirect

```bash
curl -i http://localhost:5000/go/sam
```

Expect a `302` redirect to the saved destination URL.

## 5) Chrome keyword shortcut setup

- **Name**: GoLink
- **Shortcut**: go
- **URL**: `http://localhost:5000/go/%s`

Then type in address bar:

```text
go + Tab + sam + Enter
```

Your browser hits `http://localhost:5000/go/sam` and GoLink redirects.

## 6) Scripts

### Backend

- `npm run dev -w backend`
- `npm run build -w backend`
- `npm run start -w backend`

### Frontend

- `npm run dev -w frontend`
- `npm run build -w frontend`
- `npm run start -w frontend`
