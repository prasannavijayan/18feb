# DeckCast

React + Vite slide deck with optional **cross-device sync**: control the same deck from a phone while the big screen shows the presentation. Without Supabase, sync still works **on one device** (for example two browser tabs) via `BroadcastChannel` and `sessionStorage`.

## Introduction

- **Audience view**: open the app on a desktop or projector browser. The URL includes a `room` query parameter that identifies the session.
- **Presenter / mobile**: open the **same URL** on another device (or add `?presenter=1` on desktop to test presenter controls). Slide changes are kept in step when Supabase Realtime is configured.
- **Stack**: React 19, Vite 7, Tailwind CSS, [`@supabase/supabase-js`](https://supabase.com/docs/reference/javascript/introduction) for Realtime **broadcast** channels (no database tables required for basic slide sync).

## Installation

Prerequisites: [Node.js](https://nodejs.org/) (see `netlify.toml` for the version used in CI) and [pnpm](https://pnpm.io/) (this repo pins `packageManager` in `package.json`).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173). For production assets locally:

```bash
pnpm build
pnpm preview
```

### Environment variables (optional, for cross-device sync)

Copy the example file and fill in values from your Supabase project (**Settings → API**):

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `VITE_SUPABASE_URL` | Project URL |
| `VITE_SUPABASE_ANON_KEY` | `anon` `public` key (safe to expose in the browser; still treat it as a client credential) |

If either variable is missing, the app runs without Supabase and only same-device sync is available.

## How real-time presentation works with Supabase

1. **Create a project** at [supabase.com](https://supabase.com) (free tier is enough for demos).
2. In **Project Settings → API**, copy the **Project URL** and **anon public** key into `.env` as `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
3. **Realtime** must be available on the project. New projects ship with Realtime enabled; if you disabled it, turn it back on under your project’s Realtime settings so clients can subscribe to channels.
4. **No SQL schema is required** for this app’s sync path: slide updates use Realtime **broadcast** on a channel named `presentation:<roomId>`, where `roomId` comes from the `room` query string (the app assigns one automatically if it is missing).

**Pairing devices:** use the **exact same** base URL on both devices, including the same `room` value—for example `https://yoursite.netlify.app/?room=abc12345`. The desktop UI shows a “Connect mobile” box with the full URL to copy.

**Same device, no Supabase:** two tabs on one machine still sync via `BroadcastChannel`.

## How to deploy on Netlify

This repository includes [`netlify.toml`](netlify.toml):

- **Build command:** `pnpm build`
- **Publish directory:** `dist`
- **Node:** `22` (see `[build.environment]`)

**Steps:**

1. Push the repo to GitHub (or GitLab / Bitbucket).
2. In [Netlify](https://www.netlify.com/), choose **Add new site → Import an existing project**, select the repo, and confirm the build settings match `netlify.toml`.
3. Under **Site configuration → Environment variables**, add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`  
   Redeploy after adding or changing variables so Vite can embed them at build time.
4. Deploy. Netlify’s SPA redirect in `netlify.toml` sends all routes to `index.html`, which keeps client-side routing and deep links working.

## Is there one-click deployment in Supabase?

**Not for hosting this React app.** Supabase is primarily your **backend**: Postgres, Auth, Storage, Realtime, Edge Functions, etc. You still deploy the **frontend** to a static host (Netlify, Vercel, Cloudflare Pages, S3, etc.).

What *is* quick in Supabase:

- **One-click (or very fast) project creation** for the database and Realtime backend.
- **Edge Functions** deploy via the [Supabase CLI](https://supabase.com/docs/guides/functions) or CI—not the same as “drop in a Vite bundle and publish.”

So the usual pattern for DeckCast is: **Supabase for realtime**, **Netlify (or similar) for the site**—which matches the sections above.

## Scripts

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Dev server with HMR |
| `pnpm build` | Production build to `dist/` |
| `pnpm preview` | Serve the production build locally |
| `pnpm lint` | ESLint |
