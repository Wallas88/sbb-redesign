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
  site.webmanifest
src/
  assets/logo.svg
  components/
  App.jsx
  content.js
  icons.jsx
  index.css
  main.jsx
  site.js
```

## Where to edit

| Change | File |
| --- | --- |
| Contact details, brand name, links | `src/site.js` |
| Any copy: nav labels, hero, services, about, contact, floating button | `src/content.js` |
| Layout and visual system | `src/index.css` (see the style map) |
| The logo | `src/assets/logo.svg` (the client's mark; do not reuse elsewhere) |

## Style map

Sections by the names we use for them, so a style request names one row.

| Section | Component | Stylesheet | Root selector |
| --- | --- | --- | --- |
| Navbar | `src/components/Navbar.jsx` | `src/index.css` | `.navbar` |
| Hero | `src/components/Hero.jsx` | `src/index.css` | `.hero` |
| Services | `src/components/Services.jsx` | `src/index.css` | `#services` (a `.section`) |
| About | `src/components/About.jsx` | `src/index.css` | `#about` (a `.section`) |
| Contact | `src/components/Contact.jsx` | `src/index.css` | `#contact` (a `.section`) |
| Footer | `src/components/Footer.jsx` | `src/index.css` | `.footer` |
| Floating CTA | `src/components/FloatingCTA.jsx` | `src/index.css` | `.floating-cta` (`.visible` when shown) |

## Notes

- The navbar and About section use the supplied logo artwork.
- The responsive phoenix placement is intentionally tuned across the tested breakpoints in `src/index.css`.
- Deploys: a push to `main` runs `.github/workflows/deploy.yml` and publishes to GitHub Pages.
