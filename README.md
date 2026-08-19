# SiennaMaria.com

Personal website for Sienna Maria, built to provide a central location for her content, social media, PC setup, and latest YouTube videos.

## Features

- Responsive React frontend
- Latest YouTube video automatically retrieved using the YouTube Data API
- Social media link page
- PC setup and hardware showcase
- Image carousel
- Responsive desktop and mobile layouts
- Express backend for handling external API requests
- Backend caching to reduce unnecessary YouTube API requests

## Tech Stack

### Frontend

- React
- Vite
- React Router
- CSS

### Backend

- Node.js
- Express
- CORS
- dotenv

### External Services

- YouTube Data API v3
- Render
- Namecheap

## Project Structure

```text
SiennaMaria.com/
├── backend/
│   ├── api/
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   └── components/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## Running Locally

Clone the repository and install the dependencies for both the frontend and backend.

### Backend

```bash
cd backend
npm install
npm start
```

Create a `.env` file inside the backend directory:

```env
API_KEY=your_youtube_api_key
```

The backend runs locally on:

```text
http://localhost:3000
```

### Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend development server will normally run on:

```text
http://localhost:5173
```

Create the appropriate frontend environment configuration for the backend API URL if required.

## Production

The application is deployed using Render.

The React application is deployed as a static site, while the Express API runs as a separate web service.

```text
Browser
   │
   ▼
React / Vite Frontend
   │
   │ HTTPS API Request
   ▼
Express Backend
   │
   ▼
YouTube Data API
```

The production website is available at:

**https://siennamaria.com**

## Environment Variables

The backend requires:

```env
API_KEY=your_youtube_api_key
```

API keys and other secrets should never be committed to the repository.

The production API key is configured through the backend hosting environment.

## Latest Video API

The frontend retrieves the latest YouTube video through the Express backend:

```http
GET /api/latest
```

The backend communicates with the YouTube Data API and returns the latest video's ID and title.

Example response:

```json
{
  "videoId": "VIDEO_ID",
  "title": "Video Title"
}
```

The result is cached by the backend to reduce unnecessary requests to the YouTube API.

## Deployment

The project uses separate Render services for the frontend and backend:

```text
Frontend:
siennamaria.com

Backend:
siennamaria-backend.onrender.com
```

The custom domain is registered through Namecheap and configured to point to the Render frontend.

## Author

Designed and developed by Masood Saaed.