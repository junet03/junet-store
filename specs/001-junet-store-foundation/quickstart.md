# Validation Quickstart

## Prerequisites

- Node.js 22.13 or newer
- npm with the committed lockfile
- Git for revision evidence

## Local validation

```powershell
npm ci
npm run check
npm run dev
```

Expected: content/schema, lint, typecheck, production build, and rendered Worker
tests pass. The local server exposes `/vi`, `/en`, project, article, projects,
about, community, sitemap, robots, and localized not-found behavior.

## Release validation

1. Run the documented Playwright Chromium/WebKit matrix at 375, 393, 412, 768,
   and 1440 CSS-pixel widths in light and dark modes.
2. Run the mobile Lighthouse profile and record scores and Web Vitals.
3. Refresh Graphify and GitNexus evidence against the clean candidate.
4. Save and privately deploy the exact candidate through Sites.
5. Probe preview CSP, security headers, canonical/hreflang, locale switching,
   theme persistence, menu and copy interactions.
6. Obtain explicit production approval before public access/domain cutover.
