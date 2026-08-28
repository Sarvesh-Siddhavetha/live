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

### 2026-08-24 [CODEX] Matched event card content formatting to pillar cards

- Area/files: Event carousel styles
- Change: Added the same bordered white-card structure and 24px content inset used by pillar cards, kept event headings black on hover, and prevented the orange hover border from touching event text.
- Validation: Production build and browser hover inspection.

### 2026-08-25 [CODEX] Introduced S&P Global-inspired AkkuratPro typography

- Area/files: Global design system, homepage typography, and document metadata
- Change: Replaced the Fraunces/Poppins pairing with AkkuratPro Bold for headings and AkkuratPro Regular for body content, introduced a restrained corporate type scale, removed the Google Fonts request, and set the Siddhavetha logo as the browser and Apple touch icon.
- Note: The licensed AkkuratPro font binaries are not present in the project or installed locally, so the exact family names use local detection followed by Arial/Helvetica fallbacks until licensed webfont files are supplied.
- Validation: Production build plus desktop/mobile browser checks for hierarchy, wrapping, favicon loading, and overflow.

### 2026-08-25 [CODEX] Rebuilt Consumer Wellness as a curated ecommerce marketplace

- Area/files: `src/app/pages/shop/consumer-wellness/` and the component-style build budget in `angular.json`
- Change: Replaced the simple three-product landing page with a page-scoped ecommerce experience featuring marketplace search, category discovery, Siddhavetha and certified-partner product cards, sort/filter controls, wishlist and cart counters, detailed product spotlight, partner marketplace messaging, and quality standards. No other route or page component was changed.
- Validation: Production build passed; browser-tested desktop and 393 px mobile layouts, horizontal overflow, search filtering, category/product rendering, wishlist and cart counters, and product-detail switching. The page spec import was corrected; the repository-wide unit-test compile remains blocked by unrelated stale component names in ten existing spec files.

### 2026-08-25 [CODEX] Replaced AkkuratPro fallback with bundled Inter typography

- Area/files: Global typography, homepage hero, navbar, pillar/event carousel controls, package dependencies, and `src/assets/fonts/inter/LICENSE.txt`
- Change: Selected Inter as the closest free fit for the site's corporate and ecommerce UI, bundled Latin weights 400–700 through `@fontsource/inter`, retained its SIL OFL licence in production assets, added premium tracking to the lead hero title, set hero copy to 1.6 line-height, refined desktop navigation alignment, standardized pillar badge insets, and aligned carousel arrows with the third-card edge.
- Validation: Production build passed; verified generated Inter WOFF/WOFF2 assets, browser-confirmed Inter loading, exact header centre alignment, 18 px pillar badge insets, a 0.04 px arrow/card edge delta, deep-charcoal integrated-system heading, and overflow-free desktop/mobile layouts.

### 2026-08-25 [CODEX] Added in-page product and event detail modals

- Area/files: Consumer Wellness quick view, event carousel/data, application routes, and retired event-detail page
- Change: Replaced the below-page product spotlight with a responsive quick-view modal; converted event cards from route links into accessible modal triggers; added three-image autoplay galleries with manual arrows, captions, dots, keyboard navigation, scroll locking, backdrop/Escape closing, and responsive layouts; removed the unused `/events/:id` route and its exclusive component files.
- Validation: Production build passed; browser-tested desktop and 393 px mobile product/event modals, zero modal overflow, body scroll locking/restoration, unchanged URLs, automatic 4.5-second event slide advancement, manual previous/next controls, and close behavior.

### 2026-08-25 [CODEX] Replaced Partner & Invest with Consulting & Innovation

- Area/files: Consulting & Innovation company page, application routes, pillar 8 content, navbar and footer navigation
- Change: Removed the former Partner & Invest component and rebuilt its destination as a premium Consulting & Innovation page using the supplied GCC/YEIKCA pitch deck as the content source. Positioned YEIKCA as one of six offerings alongside GCC research and validation, campus centres of excellence, faculty and student development, publication readiness, and institutional research partnerships. Removed the standalone desktop Partner & Invest menu item, added Consulting & Innovation under What We Do → Institutions and to the mobile/footer navigation, updated pillar 8, and retained the legacy URL as a redirect.
- Validation: Production build passed. Verified the live tunnel in Chrome at desktop and 393 px width, including navigation labels and spacing, mega/mobile menus, six offering cards, six YEIKCA outcomes, six research areas, the offerings anchor, legacy redirect, responsive overflow, and an empty Chrome warning/error log.

### 2026-08-25 [CODEX] Restored left-aligned desktop navigation

- Area/files: Desktop navbar styles
- Change: Left-aligned the four remaining primary menu options immediately after the logo while preserving the existing mobile navigation behavior.
- Validation: Production build and live Chrome layout verification.
