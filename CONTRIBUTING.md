# Contributing

Notes for working on the template itself. If you are here to _use_ the template, [README.md](README.md) is the place to start.

## Setup

```bash
npm install
cp .env.example .env.local   # only if you need VITE_* variables
npm run dev
```

## Scripts

| Script                   | Purpose                                                            |
| ------------------------ | ------------------------------------------------------------------ |
| `npm run dev`            | Start the Vite dev server.                                         |
| `npm run build`          | Type-check and produce a production build.                         |
| `npm run preview`        | Preview the production build locally. **Audit this, not `dev`.**   |
| `npm run lint`           | Run ESLint.                                                        |
| `npm run typecheck`      | Run `tsc -b --noEmit`.                                             |
| `npm run format`         | Write Prettier formatting.                                         |
| `npm run prettier-check` | Verify Prettier formatting (used in CI).                           |
| `npm run verify`         | Prettier-check → lint → typecheck → build. Must pass before merge. |

## Project structure

```
src/
├── App.tsx                  # Route declarations + Suspense boundary
├── main.tsx                 # Entry: StrictMode + ErrorBoundary + BrowserRouter
├── index.css                # Tailwind @theme tokens + base styles + a11y globals
├── components/
│   ├── ErrorBoundary.tsx    # Route-aware error boundary
│   ├── RouteFallback.tsx    # <Suspense> fallback
│   └── layout/
│       └── Layout.tsx       # Header/Main/Footer shell
├── config/
│   └── env.ts               # VITE_* reader + build-time constants
├── hooks/
│   └── useDocumentTitle.ts  # Per-route <title>
├── pages/
│   ├── HomePage.tsx
│   ├── DemoPage.tsx         # Showcase — delete when you fork
│   └── NotFound.tsx
├── types/
│   └── index.ts             # All shared types
└── utils/
    └── fetchWithTimeout.ts  # fetch() + AbortController timeout
```

## Conventions

Full conventions are documented in [.github/copilot-instructions.md](.github/copilot-instructions.md). The highlights:

- All colors use semantic tokens. Never use raw palette classes (`text-red-600`).
- All env reads go through `src/config/env.ts`.
- Props types are local to each component file; no shared prop-type modules.
- State machines use typed string unions, not booleans.
- Run `npm run verify` before committing.

Anything added to the template must be exercised at least once by the demo app — the template ships no dead code.

## Auditing performance

Run Lighthouse against `npm run preview` (port 4173), never `npm run dev`. The dev server ships unminified modules, the HMR client, and react-refresh — roughly 5 MB over 22 requests, versus ~82 kB over 6 for the real build. Auditing `dev` measures Vite's development ergonomics, not your site:

```bash
npm run build && npm run preview   # then audit http://localhost:4173/
```

## Before opening a pull request

`npm run verify` must pass — it runs the same prettier-check → lint → typecheck → build chain as CI, so a green local run means a green badge.
