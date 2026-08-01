# DNS cutover runbook

1. Export current Cloudflare DNS records, proxy state, SSL mode, redirects, WAF,
   cache, and rate-rule configuration. Record the export location outside Git.
2. Confirm the private Sites candidate and its rollback version.
3. Add the Sites custom-domain records exactly as shown by Sites. Keep TTL low
   during the change window.
4. Validate TLS for `junet.store` and `www.junet.store` before removing parking.
5. Make HTTP redirect to HTTPS and `www` redirect to the apex. Verify loops do
   not occur through the Cloudflare proxy.
6. Confirm `/vi` and `/en`, canonical URLs, assets, CSP, and mobile rendering.
7. Enable HSTS only after apex and `www` have remained correct through the agreed
   observation window. Start conservatively; do not preload in V1.
8. Record every DNS/edge change and rollback target in the journal.
