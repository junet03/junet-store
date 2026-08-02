# Junet.store handoff

## Current checkpoint

Feature `001-junet-store-foundation` is live in production at
`https://junet.store/vi` and `https://junet.store/en`. Maintainer approval,
protected merges, DNS cutover, custom-domain TLS, mobile/browser evidence,
production security smoke, and source-owned asset delivery are complete.

## Runtime

- Node.js: 22.13+
- Framework: Next 16.2.12 through Vinext 0.0.50 and Vite 8
- Storage/runtime services: none; Sites D1/R2 bindings disabled
- Content: five IDs × two locales, strict YAML front matter and safe GFM
- Canonical host: `https://junet.store`; Vietnamese is `x-default`

## Released artifact

- Production code commit: `0c263b41be0c5e67516b019dc164daf15b7ffc57`
- Sites version: 6
  (`appgprj_6a6e4e5c613081918a0b7004b0e5e9da~appgver_bd3b0bcee3e4819181cd4b80c249e6f6`)
- Deployment: `appgdep_6a6ed1bfa7008191adf32ecbf8c4d570`
- Immediate Sites rollback: version 5
  (`appgprj_6a6e4e5c613081918a0b7004b0e5e9da~appgver_4b1ccef17d788191a6a9075f84084c4f`)
- DNS rollback apex: `198.54.119.178`

## Ongoing release gate

```powershell
npm ci
npm run check
npm run audit:security
```

For future releases, refresh Graphify, index/query GitNexus, run the
Chromium/WebKit viewport matrix and Lighthouse mobile audit, verify the clean
diff, deploy an exact green SHA through Sites, and append exact evidence to the
project journal.

## Known platform constraints

- Cloudflare Free does not expose Managed Rules and its available rate-limit
  action is Block, not Managed Challenge. Automatic DDoS protection is active;
  no Block rule is enabled without traffic evidence.
- Sites serves physical static assets ahead of the Worker. The application uses
  virtual `/edge-assets/` and `/edge-media/` routes so production cache and MIME
  policy remain versioned in source.
- HSTS uses a 30-day max-age without `includeSubDomains` or preload during the
  initial observation period.

## Next checkpoint

Review production health and Cloudflare Security Events daily for seven days.
Append observations and any rule change to the project journal/ADR before
changing the security posture.

## Rollback

Redeploy Sites version 5 first. Restore the backed-up DNS/edge configuration only
when the incident requires it. Follow `docs/runbooks/deploy-rollback.md` and add
a correction entry rather than rewriting journal history.
