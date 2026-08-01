# Implementation Plan: Junet.store Foundation

**Branch**: `001-junet-store-foundation` | **Date**: 2026-08-02 | **Spec**: [spec.md](./spec.md)

**Input**: Accepted feature specification for a public bilingual, mobile-first
AI/MQL5/open-source knowledge hub with MQL5 CodeGraph as the flagship project.

## Summary

Replace the disposable Sites starter with a content-only Vinext application that
serves stable Vietnamese and English route identities, validates repository-owned
Markdown at build time, renders a no-flash persisted theme, and ships with strict
security headers, automated quality gates, living documentation, and controlled
Sites delivery. Keep the runtime stateless: no D1, R2, authentication, forms,
analytics, remote content APIs, or third-party scripts.

## Technical Context

**Language/Version**: TypeScript 5.9, React 19.2, Next 16.2 App Router, Node 22.13+

**Primary Dependencies**: Vinext 0.0.50, Vite 8, Tailwind CSS 4, React Markdown,
remark-gfm, YAML, Zod

**Storage**: Repository-owned Markdown and typed manifests only; visitor theme
preference in browser local storage

**Testing**: Node test runner, production Worker rendered-response tests,
Playwright CLI release QA, Lighthouse mobile audit

**Target Platform**: Cloudflare Worker-compatible Sites deployment; Chromium,
WebKit, Android/iPhone/tablet/desktop responsive browsers

**Project Type**: Multi-route public content website

**Performance Goals**: Lighthouse mobile categories >=95, LCP <=2.5 seconds,
CLS <=0.1, no layout overflow on the required viewport matrix

**Constraints**: Static/private-by-default content, no runtime filesystem,
no raw Markdown HTML, no third-party runtime scripts, no public application API,
full Vietnamese/English parity, production approval required

**Scale/Scope**: Seven route identities, five bilingual articles, one verified
flagship project, two themes, two locales, one public domain

## Constitution Check

*GATE: Passed before Phase 0 and re-checked after Phase 1.*

- **Community and flagship**: PASS. Stable project facts and disclaimers are
  sourced from the repository and v0.3.0 release.
- **Bilingual parity**: PASS. Content identities require exactly one `vi` and
  one `en` translation and missing pairs fail validation.
- **Mobile/accessibility/performance**: PASS. Measurable browser matrix and
  budgets are part of tests and release evidence.
- **Static/privacy/security**: PASS. No persistence/auth/form/API/analytics; CSP,
  headers, safe Markdown, cache boundaries, and edge controls are specified.
- **Evidence and living docs**: PASS. Build/tests/Playwright/Lighthouse/HTTP,
  Graphify, GitNexus, ADRs, handoff, and journal work are planned.
- **Controlled release**: PASS. Exact-SHA private preview, approval, saved-version
  publication, DNS backup, and rollback are explicit.

## Project Structure

### Documentation (this feature)

```text
specs/001-junet-store-foundation/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
└── tasks.md
```

### Source Code (repository root)

```text
app/
├── route.ts
├── [locale]/
│   ├── layout.tsx
│   └── [[...path]]/page.tsx
├── globals.css
├── sitemap.ts
└── robots.ts
components/
├── content/
├── layout/
├── project/
└── theme/
content/articles/<article-id>/{vi,en}.md
lib/
├── content/
├── i18n.ts
├── routes.ts
└── seo.ts
public/
tests/
docs/
```

**Structure Decision**: Use one localized optional catch-all dispatcher backed by
a typed route-identity registry. This supports locale-specific paths and slugs
without duplicate page implementations or unsafe string replacement. Markdown is
imported explicitly with Vite `?raw` imports, so no runtime filesystem access is
present in the Worker bundle.

## Complexity Tracking

No constitution violations require justification. The catch-all dispatcher,
typed registry, and Markdown validation are the smallest shared architecture that
can guarantee bilingual route equivalence and content parity.
