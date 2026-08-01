# Tasks: Junet.store Foundation

**Input**: Design documents from `/specs/001-junet-store-foundation/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: Required by the accepted feature specification and constitution.

## Phase 1: Setup (Shared Infrastructure)

- [X] T001 Replace starter-only dependencies and define shell-neutral npm scripts in package.json
- [X] T002 Remove disposable Sites preview files in app/_sites-preview and starter public icons
- [X] T003 Update .gitignore and ESLint ignores for local indexes, browser evidence, build output, and secrets
- [X] T004 Add the bilingual application, content, component, documentation, and test directory structure

## Phase 2: Foundational (Blocking Prerequisites)

- [X] T005 [P] Define locale, route identity, and SEO contracts in lib/i18n.ts, lib/routes.ts, and lib/seo.ts
- [X] T006 [P] Implement strict article front-matter parsing and parity validation in lib/content/articles.ts and lib/content/validate.ts
- [X] T007 [P] Implement project metadata and verified external destinations in lib/content/projects.ts
- [X] T008 [P] Implement system-first theme initialization and accessible persistence in public/theme-init.js and components/theme/ThemeToggle.tsx
- [X] T009 Configure security and cache headers in next.config.ts and root locale routing in app/route.ts
- [X] T010 Create the localized root layout, global design tokens, header, footer, language switcher, and mobile navigation in app/[locale]/layout.tsx, app/globals.css, and components/layout/

## Phase 3: User Story 1 - Discover and install MQL5 CodeGraph (P1)

**Goal**: Make the flagship value, trust boundary, repository, release, and install path immediately actionable.

**Independent Test**: A new visitor reaches either locale homepage, opens the flagship page, and copies the verified v0.3.0 command.

- [X] T011 [P] [US1] Add rendered-route and flagship contract tests in tests/rendered-html.test.mjs
- [X] T012 [P] [US1] Add the reviewed MQL5 CodeGraph hero asset and project facts in public/ and lib/content/projects.ts
- [X] T013 [US1] Build localized homepage hero, trust strip, flagship sections, and calls to action in components/project/ and app/[locale]/[[...path]]/page.tsx
- [X] T014 [US1] Build the localized project installation, evidence, security-boundary, and contribution sections in components/project/ProjectDetail.tsx
- [X] T015 [US1] Implement the accessible install-command copy interaction in components/content/CopyCode.tsx

## Phase 4: User Story 2 - Learn in Vietnamese or English (P2)

**Goal**: Publish five complete bilingual articles with stable identity switching.

**Independent Test**: All ten article variants render, index correctly, and switch to their exact translation.

- [X] T016 [P] [US2] Add schema, raw-HTML, unsafe-link, slug, and translation-parity tests in tests/content.test.mjs
- [X] T017 [P] [US2] Author five Vietnamese Markdown articles in content/articles/*/vi.md
- [X] T018 [P] [US2] Author five equivalent English Markdown articles in content/articles/*/en.md
- [X] T019 [US2] Implement safe GFM article rendering and code components in components/content/MarkdownArticle.tsx
- [X] T020 [US2] Build localized article index, detail, related-content, reading-time, and not-found views in app/[locale]/[[...path]]/page.tsx

## Phase 5: User Story 3 - Use the site comfortably on any screen (P3)

**Goal**: Deliver no-flash themes and responsive, accessible interaction across the viewport matrix.

**Independent Test**: Critical routes pass Chromium and WebKit at all required widths in both themes.

- [X] T021 [P] [US3] Add locale/theme/navigation unit tests in tests/ui-contracts.test.mjs
- [X] T022 [US3] Complete the sun/moon theme control, localized labels, storage fallback, and reduced-motion behavior in components/theme/ThemeToggle.tsx
- [X] T023 [US3] Complete mobile menu focus, scroll locking, safe-area behavior, and touch targets in components/layout/SiteHeader.tsx and app/globals.css
- [X] T024 [US3] Enforce responsive typography, cards, code overflow, media fallback, and light/dark contrast in app/globals.css

## Phase 6: User Story 4 - Join and sustain the community (P4)

**Goal**: Connect visitors to Interest AI MQL5 and verified contribution channels without inventing projects.

**Independent Test**: About, projects, community, Discussions, Issues, contribution, and Telegram paths work in both locales.

- [X] T025 [P] [US4] Add projects/community route and external-link tests in tests/rendered-html.test.mjs
- [X] T026 [US4] Build localized projects, about, and community views in components/content/ and app/[locale]/[[...path]]/page.tsx
- [X] T027 [US4] Add verified repository, release, contribution, advisory, contributor, and Telegram destinations in lib/content/projects.ts

## Phase 7: User Story 5 - Operate a trustworthy public site (P5)

**Goal**: Gate releases with security, CI, documented evidence, approval, and rollback.

**Independent Test**: One exact candidate passes required checks, private preview QA, approval, deployment smoke, and rollback documentation.

- [X] T028 [P] [US5] Add sitemap, robots, canonical, hreflang, metadata, and security-header response tests in tests/rendered-html.test.mjs
- [X] T029 [P] [US5] Add SHA-pinned cross-platform CI, dependency review, and Dependabot configuration in .github/
- [X] T030 [P] [US5] Add architecture, ADR, security, deployment, rollback, DNS, content, and code-intelligence docs in docs/
- [X] T031 [US5] Add release evidence, append-only journal, changelog, and handoff records in docs/project-journal/, CHANGELOG.md, and HANDOFF.md
- [X] T032 [US5] Implement localized metadata, sitemap, robots, and security response policy in app/ and next.config.ts

## Phase 8: Polish and Release Evidence

- [X] T033 Generate and validate the site-specific social preview in public/og.png and metadata
- [X] T034 Run lint, typecheck, content tests, production build, rendered Worker tests, and diff hygiene
- [X] T035 Run Playwright Chromium/WebKit mobile matrix and store temporary evidence in output/playwright/
- [X] T036 Run the documented Lighthouse mobile audit and record measured results in the project journal
- [X] T037 Build and health-check the directed deep Graphify graph; retain reviewed primary outputs in graphify-out/
- [X] T038 Index the canonical repository with GitNexus, run scoped impact/change detection, and journal the summary
- [X] T039 Create and push the public junet03/junet-store repository, configure protected main checks, and preserve the clean intended history
- [X] T040 Save and privately deploy the exact validated Sites version, run preview smoke checks, and record rollback data
- [ ] T041 After explicit approval, publish the saved version, cut over junet.store, apply available Cloudflare protections, and record production smoke/rollback evidence

## Dependencies & Execution Order

- Phase 1 precedes all other work.
- Phase 2 blocks every user story.
- US1 establishes the flagship page used by US2 and US4 navigation.
- US2 and US3 may proceed independently after Phase 2.
- US4 depends on shared navigation and verified project data.
- US5 depends on the finished public route and content contract.
- Release evidence starts only after all selected user stories and required checks pass.

## Parallel Opportunities

- Locale/routes, content validation, project data, and theme foundation touch separate files.
- Vietnamese and English article authoring can proceed independently against the same schema.
- CI configuration and documentation can proceed after the route/content contracts stabilize.

## Implementation Strategy

1. Finish setup and foundational contracts.
2. Deliver the flagship journey first and validate it independently.
3. Add the bilingual knowledge library and responsive/theme experience.
4. Add community surfaces and operational gates.
5. Produce browser, performance, Graphify, GitNexus, and private deployment evidence.
