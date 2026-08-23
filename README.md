<!-- Claude (Anthropic): rewritten by Claude — Siddhavetha EY-style rebuild -->

# Siddhavetha Global Innovations — Website

"Empower Humanity by Love & Compassion" — the Siddhavetha Global Innovations
marketing site, built with Angular 21. Content is sourced from the SVGI
Company Profile (Aug 2026) and the Siddhavetha Brand Design System V1.0,
structured EY-style (mega-menu nav, an 8-pillar carousel, stat strips,
dark section breaks) in a black / white / Surya Orange palette.

## Run it locally — fastest path (no Node required)

The `dist/siddha-shop/browser` folder is a pre-built, static copy of the
site. Serve it with any static file server, for example:

```bash
npx serve dist/siddha-shop/browser
```

or, with Python:

```bash
python -m http.server 8080 --directory dist/siddha-shop/browser
```

Then open the printed local URL in your browser.

## Run it as a live Angular dev server (for editing)

Requires [Node.js](https://nodejs.org) 20+ and npm.

```bash
npm install
npm start
```

This starts `ng serve` on `http://localhost:4200/` with hot reload on file
changes.

## Rebuilding for production

```bash
npm run build
```

Output is written to `dist/siddha-shop/browser`.

## Project structure

- `src/app/components/` — shared components: navbar (mega-menu), footer,
  hero, the `pillars-carousel` (the 8-pillar "What We Built" carousel),
  buttons, cards.
- `src/app/pages/` — routed pages: `home`, `about`, `contact`, `our-story`,
  `partner-invest`, the four `institutions/*` pages, the two
  `experience/*` pages, and the three `shop/*` pages.
- `src/assets/images/pillars/`, `knowledge-pillars/`, `wisdom-city/` —
  generated brand-styled SVG illustrations, one file per heading from the
  company profile deck.
- `src/styles.css` — global design tokens (colors, type scale, spacing).

## Brand system

Colors, typography (Fraunces + Poppins) and spacing all reference the
Siddhavetha Brand Design System V1.0 tokens. The interactive accent is
Surya Orange (`#EC5611`) against an Ink/Paper (`#1A1A1A` / `#FFFFFF`)
base — the black-white-orange system requested in place of the
greyscale-and-yellow reference site.
