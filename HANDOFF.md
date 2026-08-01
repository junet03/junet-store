# Junet.store handoff

## Current checkpoint

Feature `001-junet-store-foundation` is implemented locally. Production is not
authorized. The next allowed external release step is a private Sites preview of
an exact green commit, followed by explicit maintainer approval.

## Runtime

- Node.js: 22.13+
- Framework: Next 16.2.12 through Vinext 0.0.50 and Vite 8
- Storage/runtime services: none; Sites D1/R2 bindings disabled
- Content: five IDs × two locales, strict YAML front matter and safe GFM
- Canonical host: `https://junet.store`; Vietnamese is `x-default`

## Required candidate gate

```powershell
npm ci
npm run check
npm run audit:prod
```

Then refresh Graphify, index/query GitNexus, run the Chromium/WebKit viewport
matrix and Lighthouse mobile audit, verify the clean diff, save/deploy a private
Sites version, and append exact evidence to the project journal.

## Production blockers

- Explicit approval of the private Sites version.
- DNS/Cloudflare configuration export and rollback target.
- TLS and redirect proof for apex and `www` before HSTS.
- Protected `main` with required Quality, CodeQL, and dependency checks.

## Rollback

Redeploy the previous known-good Sites version and restore the backed-up DNS/edge
configuration when applicable. Follow `docs/runbooks/deploy-rollback.md` and add
a correction entry rather than rewriting journal history.
