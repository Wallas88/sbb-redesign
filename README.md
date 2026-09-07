# SBB Software

Responsive React/Vite single-page site for SBB Software.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Node 18+ is recommended.

## Project structure

```text
public/
  favicon.svg
  apple-touch-icon.png
  logo.svg
  site.webmanifest
src/
  components/
  App.jsx
  icons.jsx
  index.css
  main.jsx
  site.js
```

## Notes

- The navbar and About section use the supplied `logo.svg` artwork.
- Site-wide contact and brand details are centralized in `src/site.js`.
- The responsive phoenix placement is intentionally tuned across the tested breakpoints in `src/index.css`.
- `node_modules` is intentionally not included in the clean handoff ZIP. Run `npm install` after extracting.
