# TarkaSangrahaTeekaSangraha

A Next.js website dedicated to the study of **Tarkasaṅgraha** and its commentaries (ṭīkās) within the Nyāya-Vaiśeṣika tradition.

## Tech stack

- **Framework:** Next.js 16 (App Router) with React 19
- **UI:** Material UI + Tailwind CSS 4
- **Hosting:** Firebase App Hosting (project: `tarkasangraha-teekasangraha`)
- **Package manager:** pnpm

## Prerequisites

- Node.js 20+
- [pnpm](https://pnpm.io/) 9+
- Python 3 (only for local JSON serving)
- Firebase CLI (only for deploys): `npm install -g firebase-tools`

## Install

```bash
pnpm install
```

## Running locally

The book content (Tarkasaṅgraha, Dīpikā, Nyāyabodhinī, etc.) is loaded from JSON files. Locally those are served by a small Python HTTP server; in production they're fetched from GitHub raw.

The switch is automatic based on `NODE_ENV`:
- `pnpm dev` → `NODE_ENV=development` → local JSON server on port 8000
- `pnpm build` / Firebase → `NODE_ENV=production` → GitHub raw URLs

No manual flag to flip.

### Two terminals

**Terminal 1 — JSON server (port 8000):**

```bash
cd nyayarepo/json_data
python3 custom_http_server.py
```

This serves the `.json` files in `nyayarepo/json_data/` with CORS + no-cache headers so the app can hot-reload content as you edit it.

**Terminal 2 — Next.js dev server (port 3000):**

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Writing blogs

Blog posts live in `content/blogs/` as markdown files. Filename becomes the URL slug.

```bash
# New post at /lekhah/my-new-post
touch content/blogs/my-new-post.md
```

Add frontmatter + content:

```markdown
---
title: "शीर्षकम्"
titleEn: "Your English Title"
date: "2026-05-03"
author: "Your Name"
excerpt: "Short preview shown on the listing card"
tags: ["tag1", "tag2"]
image: "/your-image.png"
hidden: false
---

# Your heading

Your content in markdown.
```

Images go in `public/` and are referenced as `/filename.ext`. Set `hidden: true` to keep a post from appearing on the `/lekhah` listing (direct URL still works — good for drafts).

Posts sort by `date` (newest first) automatically.

## Building for production

```bash
pnpm build
pnpm start
```

`pnpm build` runs `next build` and then `next-sitemap` (via the `postbuild` hook) to regenerate `public/sitemap.xml` and `public/sitemap-0.xml`.

## Deploying

The site is deployed on **Firebase App Hosting** (`apphosting.yaml`). A push to the connected Git branch triggers a new rollout automatically.

If you need to deploy from the CLI:

```bash
firebase login
firebase deploy
```

Deploy configuration:
- `apphosting.yaml` — runtime config (min/max instances, CPU)
- `firebase.json` — hosting config
- `.firebaserc` — project binding (`tarkasangraha-teekasangraha`)

## Useful scripts

| Command        | What it does                                      |
| -------------- | ------------------------------------------------- |
| `pnpm dev`     | Start Next.js dev server with Turbopack           |
| `pnpm build`   | Production build + regenerate sitemap             |
| `pnpm start`   | Run the built app                                 |
| `pnpm lint`    | Run ESLint                                        |

## Project layout

```
content/blogs/              # Blog markdown files
nyayarepo/json_data/        # Source JSON for books + local server
public/                     # Static assets (images, sitemap, robots)
src/app/
  anveshanam/               # Search page
  grantha/                  # Book reader (Tarkasaṅgraha + commentaries)
  interactive-tarkasangraha/# Interactive padārtha visualizations
  introduction-to-tarka/    # Intro page
  lekhah/                   # Blog listing + [slug] route
    blogs.ts                # Shared blog metadata utility
  utils/book_urls.ts        # Local vs prod JSON source toggle
```

## Notes

- Edits made to JSON files while the Python server is running are reflected immediately (no-cache headers). Good for iterating on section content.
- The edit-section flow (pencil icon on each section in `/grantha`) only shows up in development mode — it writes back to the local JSON files via `/api/save-section`.
