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

### 2026-08-28 [CODEX] Refocused Consulting & Innovation on YEIKCA and its faculty

- Area/files: Consulting & Innovation page and `src/assets/images/faculty/`
- Change: Removed the introductory capability, knowledge model, six-offering portfolio, and campus-partnership sections; promoted YEIKCA and its six outcomes into a compact black, site-consistent hero; and added a final Faculty & Mentors grid using the eight portraits and credentials supplied in the source deck.
- Validation: Production build passed; live browser checks at 1440 x 900 and 393 x 852 confirmed the tightened 627 px desktop hero, balanced responsive padding, all removed sections are absent, six outcome cards and eight mentor cards render, all faculty portraits load, responsive grids collapse correctly, no horizontal overflow occurs, and no browser warnings or errors are reported.

### 2026-08-28 [CODEX] Restyled YEIKCA outcome cards from supplied reference

- Area/files: Consulting & Innovation YEIKCA hero outcomes
- Change: Replaced the six dark text-only cards with white three-by-two cards featuring individual colour accents, circular line icons, navy headings, and the revised outcome wording supplied in the reference image. The black hero background and all other page sections remain unchanged.
- Validation: Production build passed; live browser checks confirmed six cards in three columns at 1440 px and one column at 393 px, exact displayed wording, coloured accents, icon sizing, no horizontal overflow, and no browser warnings or errors.

### 2026-08-28 [CODEX] Expanded YEIKCA research, training and partnership journey

- Area/files: Consulting & Innovation page only
- Change: Replaced the research-pathway introduction with Research Tracks; added student and faculty training programs; redesigned the six Areas of Research with supplied descriptions; added six publication and presentation destinations; introduced a high-contrast international-student fee-concession highlight; and replaced the former proven-outcomes block with four campus-partnership benefits.
- Validation: Production build passed; live desktop and 393 px mobile checks confirmed the requested eight-section order, five training levels, six research cards, six publication cards, three international benefits, four campus benefits, responsive one-column mobile layouts, no horizontal overflow, and no browser warnings or errors.

### 2026-08-28 [CODEX] Added three Research Tracks and removed closing contact block

- Area/files: Consulting & Innovation page only
- Change: Expanded the Research Tracks introduction into Basic, Advanced and Extended program cards with the supplied metadata, descriptions and upgrade-credit notice. Completely removed the dark campus-contact closing section and its exclusive RouterLink import and styles.
- Validation: Clean production build within the existing bundle budget; live 1440 px and 393 px browser checks confirmed three equal desktop cards, one-column mobile cards, the retained Training Program, the removed closing section, no horizontal overflow, and no browser warnings or errors.

### 2026-08-29 [CODEX] Added one-click local SVGI launcher

- Area/files: `scripts/Start-SVGI.ps1` and desktop `SVGI.cmd`
- Change: Added a one-click Windows launcher that starts the Angular development server on port 4300 in the background, waits for the Siddhavetha page to respond, and opens `/home` in the default browser. It safely reuses an already-running SVGI server and reports port conflicts or startup failures.
- Validation: PowerShell launcher syntax check, no-browser startup test, HTTP content verification at `http://127.0.0.1:4300/home`, and desktop launcher presence check.

### 2026-08-29 [CODEX] Allowed Cloudflare quick-tunnel hostnames

- Area/files: Angular development-server configuration
- Change: Allowed the scoped `.trycloudflare.com` hostname suffix so rotating Cloudflare quick-tunnel URLs can reach the local Angular server without disabling host validation for unrelated domains.
- Validation: Clean production build plus local HTTP checks using both the localhost host header and the reported Cloudflare hostname.

### 2026-08-29 [CLAUDE] Reorganized Consulting & Innovation for faster scanning

- Area/files: Consulting & Innovation page only (`consulting-innovation.ts`, `.html`, `.css`)
- Change: Added a quick-facts strip (research tracks, time-to-publication, research areas, published researchers, faculty mentors) and a sticky in-page jump nav with anchors to all seven sections. Converted the side-by-side Student/Faculty training columns into an accessible tabbed view (`role="tablist"`) so only one track shows at a time. Condensed the six full publication article cards into a compact logo-wall of chips, keeping the existing stat summary line unchanged. No other page or route was touched.
- Fix: The jump-nav anchors initially used plain `href="#id"` links; under this app's `<base href="/">`, the browser resolved bare fragment hrefs against the root instead of the current path, and the root-path redirect sent the click to `/home#id` instead of scrolling in place. Replaced with a `(click)` handler that calls `preventDefault()` and `element.scrollIntoView()` directly (respecting `prefers-reduced-motion`), sidestepping the router/base-href interaction entirely.
- Validation: Production build passed (only the pre-existing bundle-budget warning). Browser-verified: quick-facts and sticky nav render with all seven correct labels; all seven anchors scroll to the correct section with the URL staying on `/consulting-innovation`; the Student/Faculty tab toggle switches content and renders the correct level-card count per track; the publication section renders exactly six chips with correct text; no horizontal overflow. `git status` confirmed only the three Consulting & Innovation files were modified by this change.

### 2026-08-30 [CLAUDE] Restructured Consulting & Innovation into a denser sidebar layout

- Area/files: Consulting & Innovation page only (`consulting-innovation.ts`, `.html`, `.css`)
- Change: Reviewed the page against the Vercel Web Interface Guidelines and the student's own feedback that the page felt like a long, sparse scroll. Replaced the full-width quick-facts band and horizontal jump-nav bar with a single sticky left sidebar (at-a-glance stats + section nav, active section tracked via `IntersectionObserver`) running alongside a narrower, denser main content column — a 2-pane layout instead of one long stack. Cut oversized section padding (108px to 40-48px), removed fixed card `min-height`s in favor of CSS Grid's natural row-stretch, reduced oversized heading sizes to fit the narrower column, and switched the Research Areas/Faculty grids to `auto-fit` for adaptive density. Restructured the "Where our students publish" section from a single stacked column into a genuine 2-pane row (chip logo-wall + a compact stats panel), preserving the original copy exactly.
- Fix (accessibility, from the guidelines review): `<h5>` training-level headings skipped `<h4>` in the hierarchy — changed to `<h4>`. The jump-nav's `(click)` handler was unconditionally calling `preventDefault()`, which silently broke Cmd/Ctrl/middle-click "open in new tab" on the nav links; the handler now bails out on modifier/non-primary clicks, and the link `href` was changed from a bare `#id` fragment to an absolute `/consulting-innovation#id` path so any native/new-tab navigation resolves correctly under this app's `<base href="/">` (a stronger fix than the workaround from the previous entry). Added `text-wrap: balance` to major headings to prevent widows.
- Validation: Production build passed (only the pre-existing bundle-budget warning). Browser-verified: sidebar renders with correct facts/nav, sticky positioning holds while scrolling, active-section highlighting updates correctly via IntersectionObserver as each section enters view, all training-level headings are now `<h4>` with no skipped level, a real click still scrolls to the right section while a simulated Ctrl+click no longer has its default prevented, the training-tab toggle still works, and no horizontal overflow at desktop width. `git status` confirmed only the three Consulting & Innovation files were modified. Mobile-viewport behavior (393px breakpoint) was written defensively following the same responsive patterns already used elsewhere in the file, but could not be empirically verified this pass — this session's browser-automation tooling could not get `window.innerWidth` to report anything but the host display's native width regardless of viewport-resize calls.

### 2026-08-31 [CLAUDE] Applied no-ai-slop edits and a further density pass to Consulting & Innovation

- Area/files: Consulting & Innovation page only (`consulting-innovation.css`, `.html`)
- Copy fix: Ran the `no-ai-slop` skill (detect mode) against the live page copy and, on confirmation, applied its three findings — removed a binary-contrast lead-in ("Not a promise — a record."), cut an unearned "leading" qualifier already proven by the journal/conference chips beside it, replaced a four-em-dash buzzword list ("Future-Ready Educators — Research — Innovation — AI — Ethics — Indigenous Knowledge") with a plain sentence, and cut a portability-test-failing phrase ("...on the global stage"). No other copy changed.
- Density pass: The user compared the page at 90% vs 100% browser zoom and found the smaller scale still fully readable with room to spare. Reduced the desktop/1180px-breakpoint type and spacing scale roughly 10% on fonts and further on padding/margins/gaps (section padding 48px→36px, card min-heights removed or reduced, heading clamps scaled down, sidebar/card gaps tightened) to reclaim that space as reduced scroll length. Mobile breakpoints (900px, 620px) were left untouched — already tight, and the request was specifically about desktop zoom.
- Process: Used the newly installed `impeccable` skill's `layout` playbook for this pass — ran its `context.mjs` setup (confirmed this is a narrow refinement, proceeds on the incumbent implementation without requiring `/impeccable init`) and its mechanical `detect.mjs --scope layout` scan after editing (ran in a degraded fallback mode — missing HTML-parser npm deps in the skill's own environment — so it returned no findings but isn't a clean bill of health on its own; treated as informational, not authoritative).
- Validation: Production build passed (only the pre-existing bundle-budget warning). Browser-measured total page height dropped from ~5700px to 4582px (~20% less scroll) with no horizontal overflow. Investigated an apparent uneven-row artifact in the faculty grid (Stanley Underwood North's long credential wraps to two lines) — confirmed via `scrollHeight`/`clientHeight` equality that nothing is clipped; the ~15px row-height difference is normal CSS Grid row-stretch from long content, not a regression. `git status` confirmed only the two Consulting & Innovation files were modified.

### 2026-09-01 [CLAUDE] Extended the density pass across the rest of the site

- Area/files: 12 page CSS files (`about`, `our-story`, `contact`, `retreats`, `tourism`, `home`, `initiative-detail`, `Agriculture`, `Digital`, `Preventive-Healthcare`, `The-Science`, `consumer-wellness`) and 8 shared component CSS files with matching values (`button`, `chips`, `events-carousel`, `feature-card`, `hero`, `pillars-carousel`, `product-card`, `promise-strip`). No HTML/TS changed on any of these — copy and structure untouched.
- Change: At the user's request, applied the same desktop-scale reduction used on Consulting & Innovation (font-size ~10% down, padding/margin/gap ~15% down, `clamp()` min/max px terms scaled while the `vw` middle term is left fluid) to every other page and the shared components they render through. Wrote a small Python script (`scale_css.py`, kept in the session scratchpad, not committed to the repo) to apply this mechanically rather than by hand across ~24 files, after verifying its output against `consulting-innovation.css`'s manually-tuned values. Deliberately excluded `navbar.css` and `footer.css` — both are fixed-position chrome with hardcoded height dependencies (Consulting & Innovation's sidebar `top` and `scroll-margin-top` offsets assume the navbar's 80px height) that a blind spacing cut could break site-wide; also excluded `feature-grid`, `newsletter`, `product-grid`, `testimonials` (no matching px declarations to scale) and `personal-care`/`sustainable-living` (no page-specific CSS — they compose shared components only). Mobile breakpoints (everything inside `@media` blocks) were left untouched everywhere, same policy as the original page.
- Copy check: Ran a comprehensive grep across every page and shared component for the full `no-ai-slop` pattern list (banned words, binary contrasts, em-dash buzzword clusters, puffery, weasel attribution, rhetorical setups, summary-recap endings). Found nothing beyond what was already fixed on Consulting & Innovation in the previous entry — the rest of the site's copy was already clean.
- Bug caught during scripting: the first version of the scaling script floored all spacing values at 0, which silently corrupted legitimate negative margins (e.g. `.sr-only{margin:-1px}`, a standard visually-hidden accessibility technique, and `margin: 0 -4px` edge-bleed tweaks in the carousels) into `0px`. Fixed by exempting `margin`/`margin-*` properties from the floor before applying to any file, then re-scanned every target file for negative px values in their desktop-base sections to confirm nothing else had been silently clamped.
- Validation: Production build passed (only the pre-existing bundle-budget warning) after the full 24-file pass. Browser-verified no horizontal overflow on any spot-checked route (`/home`, `/The-Science`, `/consumer-wellness`); visually inspected all three end-to-end (hero, pillars/events carousels, footer on home; hero/chips on The-Science; hero, product grid, pricing/ratings/badges on consumer-wellness) — all rendered correctly and proportionately. One transient blank-frame screenshot during the home-page check turned out to be a stale capture (confirmed via direct DOM measurement — the underlying content was fully present and correctly positioned), not a real rendering defect. `git status` confirmed the diff was limited to exactly the 24 intended CSS files plus this changelog entry.

### 2026-09-01 [CLAUDE] Fixed the findings from the ui-ux-pro-max review of the home page

- Area/files: `home.ts`, `home.html`, `home.css`, and three shared components rendered on other pages (`hero.html`/`hero.css`, `feature-card.html`, `product-card.html`).
- Fix 1 (WCAG 2.2.2, High): the hero slideshow's `setInterval` ran unconditionally forever with no pause control and no `prefers-reduced-motion` check. Added `isPaused`/`reduceMotion`/`hovering` state gated through a single `syncAutoplay()` method: autoplay now checks `matchMedia('(prefers-reduced-motion: reduce)')` on init and stays off entirely if set, pauses on mouse hover or keyboard focus anywhere in the hero (`(mouseenter)`/`(mouseleave)`/`(focusin)`/`(focusout)`) and resumes on leave, and a new pause/play toggle button next to the slide dots lets the user stop it explicitly — that explicit pause is not overridden by a hover-in/hover-out cycle.
- Fix 2 (touch target, High): `.hero-dot` was a 10×10px button with `padding:0` — the entire clickable area was 10px, well under the ~24px web minimum. Restructured to a 24×24px button containing a separate `.hero-dot-mark` inner span that stays visually 10px; the tap target quadrupled in area with no visual change. Added matching `:focus-visible` outlines to the dots and the new pause toggle.
- Fix 3 (CLS, High): the shared `<app-hero>` component's `<img>` had no `width`/`height`/`aspect-ratio` — used on 11 pages (about, our-story, contact, institutions ×4, experience ×2, shop ×2) with a different image passed in each time, so no single hardcoded size would fit. Added `aspect-ratio:3/2` to `.hero-image img` (matching the most common source-image ratio across the site; `object-fit:cover`, already in place, handles the rest) so space is reserved before the image loads, plus `fetchpriority="high"` since this is reliably the largest above-the-fold image on every page it appears on.
- Fix 4 (performance, Medium): `feature-card` and `product-card` images had no `loading="lazy"`, unlike every other repeated-card image on the site (pillars, events). Added it to both.
- Validation: Production build passed (only the pre-existing bundle-budget warning). Browser-verified: dot hit area measures 24×24px with the visible mark unchanged; pause toggle correctly flips its `aria-label` and stops slide advancement (confirmed by waiting past one full 6s interval with no index change); hover-pause and focus-pause both work and correctly resume on leave; an explicit user-pause survives a hover in/out cycle without auto-resuming; `fetchpriority="high"` and `aspect-ratio:3/2` are present on the rendered hero image on `/The-Science` and `/about`; visually confirmed the 3:2 crop reads cleanly even on a near-square source image (about page, 348×351 source) with no awkward composition loss. `git status` confirmed only the 6 intended files changed.

### 2026-09-01 [CLAUDE] Removed the About page's differentiation-strategy quote block

- Area/files: `about.html`, `about.css`
- Change: Removed the dark full-width section quoting "We do not compete on courses or campuses; we own an entirely new category — Conscious Living Campus & Community Development..." (`section-tag`, `blockquote`, and the "No direct competitor exists" note), at the user's request. Also removed the now-unused CSS (`.differentiation-section`, `.differentiation-content`, `.section-tag`, the blockquote rules, `.differentiation-note`, and its 600px-breakpoint override) rather than leaving dead selectors behind.
- Validation: Production build passed (only the pre-existing bundle-budget warning). Browser-confirmed the section and its quote text are gone from the rendered `/about` page with no horizontal overflow. `git status` confirmed only the two About page files changed.
