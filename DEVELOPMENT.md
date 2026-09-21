# SBB Software redesign

Single-page React 19 + Vite site for SBB Software, a paid client concept (invoice SR-INV-260829-001, paid). Public repo `Wallas88/sbb-redesign`, live at https://wallas88.github.io/sbb-redesign/: a push to `main` deploys through `.github/workflows/deploy.yml`, so Waldo pushes. Node 18+.

## Commands

`npm install` · `npm run dev` · `npm run build && npm run preview`

## Structure

- `src/site.js` — contact and brand details. `src/content.js` — every word of copy, one export per section (NAV_LINKS, HERO, SERVICES, ABOUT, CONTACT, FLOATING_CTA). Copy changes go there, never into a component.
- `src/components/` — one file per section; `src/App.jsx` composes them in page order. `src/index.css` — the whole visual system; the README's "Style map" says which selector is which section.
- `src/assets/logo.svg` — the client's mark, with the owner's name in it; not for reuse anywhere else.
- `NOTES.md` — local status, git-excluded, never pushed.

## Rules specific to this repo

- Public repo: nothing about the client beyond what the live site shows; paperwork stays in `OneDrive/Business/Clients/SBB-Software/`. If the client wants the repo private, flip it on GitHub.
- The phoenix logo placement is tuned per breakpoint on purpose; keep those rules together in `index.css`.
- Shown on siterevivesa.com as work item 01 (About-section screenshot and the quote), with permission on file. Anything more needs a new yes.
- Every preview: 1440 and 360, edges swept; buttons keep their natural width and sit centred on phones.
