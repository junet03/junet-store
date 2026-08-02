# Changelog

All notable changes are recorded here. The project follows immutable feature
specs and append-only operational journal entries.

## [Unreleased]

No unreleased changes.

## [1.0.0] - 2026-08-02

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
- Production responses send HSTS after apex and `www` TLS/canonical behavior
  passed live cutover proof.
- Source-owned `/edge-assets/` and `/edge-media/` delivery provides immutable
  hashed-asset caching, correct WebP MIME, and bounded public-media access even
  when Sites serves physical static files before the Worker.
- Cloudflare automatic DDoS protection remains active. No false-positive-prone
  Block rate rule was substituted for unavailable Managed Challenge behavior.
