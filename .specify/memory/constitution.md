<!--
Sync Impact Report
- Version change: template -> 1.0.0
- Added principles: Community and Flagship First; Bilingual Parity; Mobile Quality;
  Static Privacy and Security; Evidence-Backed Delivery; Living Documentation;
  Simple and Reversible Change
- Added sections: Product and Security Constraints; Delivery Workflow
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md
  - ✅ .specify/templates/spec-template.md
  - ✅ .specify/templates/tasks-template.md
- Deferred items: none
-->
# Junet.store Constitution

## Core Principles

### I. Community and Flagship First
Junet.store MUST serve the AI and MQL5 community before commercial or vanity
goals. MQL5 CodeGraph MUST remain the flagship project and all product claims,
installation commands, release identifiers, licenses, and trust boundaries MUST
be verified against its current public repository before publication. The site
MUST link readers to the repository, release, documentation, contribution
channels, and Interest AI MQL5 community without implying MetaQuotes endorsement.

### II. Bilingual Parity Is a Release Gate
Every public page and published article MUST have complete Vietnamese and English
versions joined by a stable translation identifier. Locale switching MUST resolve
to the equivalent content rather than a guessed path. Missing translations,
duplicate slugs, invalid locale metadata, or inconsistent material claims MUST
fail validation. Vietnamese and English copy MAY differ idiomatically but MUST
preserve the same facts, safety guidance, calls to action, and scope.

### III. Mobile Quality, Accessibility, and Performance
The product MUST be designed mobile-first and verified on Chromium and WebKit at
representative Android and iPhone viewports. Navigation and interactive controls
MUST be keyboard accessible, expose meaningful names, provide visible focus, use
touch targets of at least 44 CSS pixels, support safe-area insets, and respect
reduced-motion preferences. Release evidence MUST demonstrate no horizontal page
overflow and target Lighthouse scores of at least 95 with LCP at most 2.5 seconds
and CLS at most 0.1 on the agreed mobile profile.

### IV. Static, Private, and Secure by Default
V1 MUST remain a public read-only content site with no account, form, upload,
database, analytics, advertising, or third-party runtime script. Content MUST be
locally owned and bundled; Markdown raw HTML MUST remain disabled. Secrets,
credentials, local auth state, generated indexes, and runtime logs MUST NOT enter
Git, specifications, content, build artifacts, or chat. Security headers, a
strict Content Security Policy, HTTPS, Cloudflare edge protection, caching, and
documented incident and rollback procedures are mandatory release controls.

### V. Evidence-Backed Delivery
No feature is complete because source code looks correct. The strongest relevant
evidence MUST pass: content/schema validation, type checking, linting, production
build, automated tests, browser checks, security-header probes, and deployed HTTP
smoke tests. Graphify MUST describe code and documentation relationships honestly
as EXTRACTED, INFERRED, or AMBIGUOUS. GitNexus impact results are advisory evidence
and MUST be interpreted against a clean, scoped diff.

### VI. Living Documentation and Append-Only History
Architecture, security posture, operations, ADRs, handoff guidance, and project
journal entries are first-class deliverables. Project journal history MUST be
append-only: corrections are added as new dated notes rather than rewriting past
records. Each release entry MUST record the governing spec and ADRs, validation
evidence, Graphify/GitNexus status, deployed commit and Sites version, remaining
risks, rollback target, and next action.

### VII. Simple and Reversible Change
Implementations MUST use the smallest clear architecture that satisfies the
accepted specification. New persistence, authentication, APIs, runtime services,
third-party scripts, or abstractions require a new feature spec and ADR. Production
deployments MUST identify an exact validated commit, retain the previous stable
Sites version, and require explicit approval. DNS and security-policy changes MUST
be backed up and reversible.

## Product and Security Constraints

- Canonical public host: `https://junet.store`; locale prefixes are `/vi` and
  `/en`, with equivalent canonical and `hreflang` metadata.
- Runtime: Cloudflare-compatible Sites output with no dedicated origin or public
  application API in V1.
- Content: repository-owned Markdown and typed project metadata; external facts
  are revalidated before release.
- Theme: light and dark modes use shared semantic tokens, follow system preference
  on first visit, and persist an explicit visitor choice locally.
- Security: default-deny CSP, anti-framing, MIME sniffing protection, restrictive
  referrer and permissions policies, and no raw content HTML.
- Generated state: `.gitnexus/`, tool caches, local credentials, build output, and
  Playwright artifacts are not committed. Only reviewed Graphify public outputs
  may be versioned.

## Delivery Workflow

1. Every material feature follows constitution, specification, clarification,
   plan, tasks, analysis, implementation, and convergence review in that order.
2. Pull requests MUST pass bilingual content checks, typecheck, lint, build,
   tests, CodeQL/dependency gates, and scoped change review before merge.
3. Graphify is refreshed after meaningful code/documentation milestones;
   GitNexus is refreshed after meaningful code changes and queried before risky
   routing, locale, theme, security, or deployment changes.
4. A release candidate MUST be built from the exact green commit and reviewed on
   a private Sites deployment with mobile browser evidence.
5. Public deployment and domain cutover require explicit production approval.
6. Post-deploy HTTPS, locale, redirect, CSP, content marker, and rollback checks
   MUST be recorded in the append-only journal.

## Governance

This constitution overrides conflicting specifications, plans, tasks, generated
documentation, and convenience shortcuts. Amendments require an explicit ADR,
an updated Sync Impact Report, migration notes when behavior changes, and semantic
versioning: MAJOR for incompatible governance changes, MINOR for new or materially
expanded principles, and PATCH for clarifications. Every feature plan MUST pass a
constitution check before design and after contracts are defined. Every release
review MUST cite evidence for each applicable MUST statement or record a blocking
exception; silent exceptions are forbidden.

**Version**: 1.0.0 | **Ratified**: 2026-08-02 | **Last Amended**: 2026-08-02
