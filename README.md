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
npm ci
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

## Security review — 2026-10-24

This repository serves a static React build, with no PHP, Composer, public Node
server, React Server Components, authentication backend, or database. Node runs
the build tools and the scheduled YouTube updater. This source review and npm
advisory scan do not establish whether hosting accounts or earlier deployments
have been compromised.

The October 21 PHP disclosures concern remote code execution in PHP itself
([OOM corruption](https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w)
and [stale global state](https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp)).
They do not directly apply to this repository. The
[Node security release](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases)
includes Brotli memory corruption and DNS/TLS issues; updating npm dependencies
alone does not patch Node. The repository now selects Node 24.22.1 for builds
and the YouTube workflow. Keep both `.node-version` files in sync when upgrading.

The original lockfile had 18 vulnerable npm entries (14 high, 3 moderate, 1 low),
including React Router, Vite, Rollup, and transitive build/lint dependencies.
These are dependency findings, not 18 demonstrated exploits against this site;
many concern server or tooling features that the static site does not expose.
Compatible updates brought React Router DOM to 7.18.4, Vite to 7.3.7, and Rollup
to 4.65.0. The updated full dependency audit reports zero known vulnerabilities.
Production build and ESLint pass on local Node 24.22.1; the selected runtime
still needs verification in CI/Render. No new direct
application dependencies were added.

External social links now explicitly disable opener access, local `.env` files
are ignored, and Dependabot is configured for weekly npm and Actions updates.
The YouTube key stays in GitHub Actions secrets; video IDs are validated before
being used in the iframe URL, and React escapes titles. No embedded credentials
or unsafe HTML injection were identified in the reviewed source. Git history
and private account settings were not audited.

### Deployment follow-up

- Use `npm ci && npm run build` with `frontend` as the Render root and `dist`
  as the publish directory. Deploy the updated lockfile and check the build log
  for Node 24.22.1. Local NVM now defaults to Node 24.22.1, and Node 25.3.0
  has been removed.
- Remove an obsolete Render `NODE_VERSION` override or set it to `24.22.1`.
  [Render gives that variable precedence over version files](https://render.com/docs/node-version).
  Account settings and deployment were not changed by this review.
- A read-only HTTPS check of the homepage found `X-Content-Type-Options: nosniff`,
  but no Content-Security-Policy, Strict-Transport-Security, X-Frame-Options, or
  Referrer-Policy headers. Configure `Referrer-Policy: strict-origin-when-cross-origin`
  and `X-Frame-Options: DENY` in Render. Once HTTPS coverage is confirmed, set
  `Strict-Transport-Security: max-age=31536000` without adding subdomains blindly.
- Develop and test a Content-Security-Policy in report-only mode before enforcing
  it. Account for Google Fonts, YouTube embeds, inline styles, and Font Awesome.
  The existing remote Font Awesome kit executes third-party JavaScript without
  integrity pinning; replacing it with locally bundled icons would reduce that
  supply-chain exposure. This review did not replace the site's icon system.
- Check subsequent Dependabot PRs, including upgrades to Actions whose bundled
  runtime is separate from the Node selected by `setup-node`. Rerun `npm audit`,
  `npm run build`, and `npm run lint` after dependency changes.

## Author

Designed and developed by Masood Saaed.
