# AI Contributor Change Log

This file distinguishes work completed by Codex and Claude in the shared Siddhavetha website workspace.

## Entry format

`YYYY-MM-DD [CODEX|CLAUDE] Summary`

- Area/files: affected part of the project
- Validation: checks performed, or `Not run` with a reason

## Changes

### 2026-08-23 [CODEX] Established shared contributor convention

- Area/files: `AGENTS.md`, `CLAUDE.md`, `AI-CHANGELOG.md`
- Validation: Confirmed the designated Git working copy exists and was clean before these files were added.

### 2026-08-23 [CODEX] Clarified treatment of baseline authorship comments

- Area/files: `AGENTS.md`, `CLAUDE.md`, `AI-CHANGELOG.md`
- Decision: Preserve Claude comments already committed in baseline `a624dc5`, stop adding new inline authorship markers, and identify future work through commit prefixes and this changelog.
- Validation: Confirmed the existing comments belong to the committed Claude baseline and no production source files were changed.

### 2026-08-23 [CODEX] Integrated generated images for all eight pillar cards

- Area/files: `src/assets/images/pillar-photos/`, `src/app/components/pillars-carousel/pillars-carousel.ts`
- Change: Added eight distinct generated PNGs and mapped each pillar card to its corresponding image.
- Validation: Production build completed successfully.

### 2026-08-23 [CODEX] Refined homepage hero and added initiative destinations

- Area/files: `src/app/pages/home/`, `src/app/pages/initiatives/`, `src/app/app.routes.ts`, promise strip and carousel styles
- Change: Added two-line hero titles and supporting statements, made every hero slide clickable, created three premium placeholder destination pages, removed the `Our Promise` label, and tightened pillar and event spacing.
- Validation: Production build passed. Browser-tested all three slide titles, descriptions and links; all three destination routes; desktop and 390 px mobile layouts; section spacing; horizontal overflow; and browser console errors.

### 2026-08-23 [CODEX] Corrected pillar and event heading spacing

- Area/files: Homepage, pillar carousel and event carousel styles
- Change: Removed the separate arrow-row height from document flow, aligned controls beside each heading, and made the space above each heading equal to the space between the heading and its cards.
- Validation: Measured rendered element boundaries in the browser at desktop and mobile widths after the production build.

### 2026-08-24 [CODEX] Compacted promise tags on mobile

- Area/files: `src/app/components/promise-strip/promise-strip.css`
- Change: Arranged the six homepage tags in a two-column, three-row mobile-only grid with smaller typography and tighter padding. Desktop presentation is unchanged.
- Validation: Production build and iPhone 15 Pro-width browser layout check, including correction of mobile-only carousel control overlap. Desktop computed styles were confirmed unchanged.

### 2026-08-24 [CODEX] Simplified the second homepage tag

- Area/files: `src/app/pages/home/home.ts`
- Change: Replaced `600-Acre Campus Envisaged` with the centered label `Campus Envisaged`.
- Validation: Production build and rendered alignment check.

### 2026-08-24 [CODEX] Revised the second homepage tag

- Area/files: `src/app/pages/home/home.ts`
- Change: Replaced `Campus Envisaged` with `600-Acre Campus` while retaining centered alignment.
- Validation: Production build completed successfully.

### 2026-08-24 [CODEX] Removed homepage tag strip and enhanced pillar hover

- Area/files: Homepage template/component and pillar carousel styles
- Change: Removed the six-tag section, moved the integrated-system section directly beneath the hero with its established section spacing, and added an orange hover shadow and border to pillar cards.
- Validation: Production build plus desktop and mobile browser verification.

### 2026-08-24 [CODEX] Standardized orange hover shadows across site cards

- Area/files: Global styles and card styles across homepage, events, products, features, About, Contact, Science, Partner & Invest, and initiative pages
- Change: Introduced a shared orange hover-shadow token and applied it consistently to every card system with matching orange hover borders and smooth transitions.
- Validation: Production build, source audit of card hover selectors, and browser checks on representative card types.
