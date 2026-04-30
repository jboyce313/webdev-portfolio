# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

## Architecture

Single-page portfolio site — no routing library, no state management, no TypeScript. Navigation uses anchor links (`#hero`, `#about`, etc.) with smooth scroll.

**Stack:** React 19 + Vite, plain JSX (`.jsx`), vanilla CSS only.

**Component structure:** `src/App.jsx` composes 6 section components in order: `Nav → Hero → About → Portfolio → Contact → Footer`. Each component is a stateless functional component; no hooks are used.

**Styling:** All styles live in `src/index.css` (global resets + CSS variables) and `src/App.css` (component styles). Theming uses CSS custom properties (`--navy`, `--accent`, etc.). Responsive breakpoint is 768px. Do not introduce a CSS framework — vanilla CSS is intentional.

**Static data:** Project portfolio entries are hardcoded as an array inside `Portfolio.jsx`. There is no CMS or API.

**Public assets:** `selfie.jpg` (hero photo) and `swimmingwithlyndsay.png` (project thumbnail) live in `/public/`.
