# SiennaMaria.com

Personal website for Sienna Maria, built to provide a central location for her content, social media, PC setup, and latest YouTube videos.

## Features

- Responsive React frontend
- Latest YouTube video updated hourly through GitHub Actions
- Social media link page
- PC setup and hardware showcase
- Image carousel
- Responsive desktop and mobile layouts
- Repository-backed last-known-good video data

## Tech Stack

### Frontend

- React
- Vite
- React Router
- CSS

### External Services

- YouTube Data API v3
- Render
- Namecheap

## Project Structure

```text
SiennaMaria.com/
├── .github/workflows/
│   └── update-latest-video.yml
├── scripts/
│   └── updateLatestVideo.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── data/
│   │   └── components/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## Running Locally

Clone the repository and install the frontend dependencies.

### Frontend

Run:

```bash
cd frontend
npm install
npm run dev
```

The frontend development server will normally run on:

```text
http://localhost:5173
```

## Production

The application is deployed using Render.

The React application is deployed as a static site. GitHub Actions checks the
channel's uploads playlist once per hour using YouTube's low-cost
`playlistItems.list` endpoint. A commit and Render deployment occur only when a
different video is found.

```text
GitHub Actions → YouTube Data API → latestVideo.json → Render static frontend
```

The production website is available at:

**https://siennamaria.com**

## Latest YouTube Video

The scheduled workflow runs `node scripts/updateLatestVideo.js` with the
`YOUTUBE_API_KEY` GitHub Actions repository secret. The public uploads playlist
ID is stored in the script. Valid results are written to
`frontend/src/data/latestVideo.json`, which is durable last-known-good data.

React imports that JSON at build time. If the JSON is ever invalid, the frontend
retains the original hardcoded video ID as its final fallback. Failed YouTube
requests never overwrite the stored JSON.

## Deployment

The frontend is deployed as a Render static site:

```text
Frontend:
siennamaria.com
```

The custom domain is registered through Namecheap and configured to point to the Render frontend.

## Author

Designed and developed by Masood Saaed.
