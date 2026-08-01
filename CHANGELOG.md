# Changelog

All notable changes are recorded here. The project follows immutable feature
specs and append-only operational journal entries.

## [Unreleased]

### Added

- Bilingual Vietnamese/English mobile-first knowledge site with stable route IDs.
- Flagship MQL5 CodeGraph v0.3.0 discovery, install, trust, and contribution flow.
- Five complete bilingual articles about CodeGraph, installation, MCP agents,
  MQL5 architecture/impact review, and sustainable vibe coding.
- System-first persistent light/dark theme with accessible sun/moon control.
- Strict Markdown validation, canonical/hreflang/sitemap/robots metadata, and
  localized HTML 404 responses.
- Security headers, local-only assets, cross-platform CI, CodeQL, dependency
  review, Dependabot, Spec Kit governance, ADRs, runbooks, and project journal.

### Security

- Production dependency overrides pin patched PostCSS and Sharp releases while
  preserving the validated Vinext/Next build.
- HSTS is intentionally deferred until apex and `www` TLS/canonical behavior is
  proven at production cutover.
