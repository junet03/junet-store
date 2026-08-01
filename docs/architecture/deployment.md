# Deployment architecture

GitHub Actions validates changes but does not hold Sites or Cloudflare
credentials. A merge to protected `main` identifies a release-candidate commit.
Codex/Sites packages that exact clean commit, saves a version, and deploys it to
a private preview. Production remains blocked until the maintainer reviews the
preview and explicitly approves the saved version.

The public path is Cloudflare DNS and edge protection in front of Sites. Assets
with content hashes use immutable caching; visitor-specific root locale redirects
are private and non-cacheable. HSTS remains disabled until both apex and `www`
have valid TLS and redirect behavior has been proven, avoiding an irreversible
premature lockout.

Rollback redeploys the previous known-good Sites version. DNS records and edge
rules must be exported before cutover; see the deploy/rollback and DNS runbooks.
