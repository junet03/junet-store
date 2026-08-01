# Deploy and rollback runbook

## Candidate

1. Confirm the feature spec and ADRs are accepted.
2. Stop any Wrangler preview holding `dist/server/.wrangler`, then run `npm ci`,
   `npm run check`, and `npm run audit:security` from a clean worktree.
3. Record the exact commit SHA; do not rebuild from an uncommitted tree.
4. Refresh Graphify and GitNexus evidence and resolve unexplained impact.
5. Package/save a Sites version from that exact SHA and deploy it privately.
6. Run Chromium/WebKit mobile checks, Lighthouse, and HTTP/header smoke checks.
7. Record the preview URL, Sites version, evidence, risk, and previous stable
   version in the journal.
8. Ask for explicit production approval.

## Production

Deploy the already reviewed Sites version—never a new rebuild. Verify HTTPS,
`/vi`, `/en`, root negotiation, canonical/hreflang, CSP, hero, install command,
GitHub and Telegram links. Record the deployed version and smoke evidence.

## Rollback

Redeploy the previous known-good Sites version. If the failure is DNS-specific,
restore the exported DNS records. Verify both locales and headers, then append an
incident note; never rewrite the original release entry.
