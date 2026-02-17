# React + Vite

A minimal React boilerplate with Vite for fast development.

## Quick Start

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

- `pnpm dev` - Start development server with HMR
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally

## Mobile ↔ Desktop Sync

To sync slides between the mobile presenter view and desktop presentation, add Supabase:

1. Create a free project at [supabase.com](https://supabase.com)
2. Copy `.env.example` to `.env` and add your Project URL and anon key
3. For Netlify: add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in Site settings → Environment variables

Without Supabase, sync works only for same-device (e.g. two browser tabs).

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
