# ADR 0006: Production edge activation

- Status: Accepted
- Date: 2026-08-02
- Governing spec: `001-junet-store-foundation`

## Context

The apex and `www` hostnames now have valid TLS, HTTP redirects to HTTPS, and
`www` redirects to the apex. The public Sites custom hostname does not inherit
the zone-level HSTS or application cache headers, so those guarantees must be
owned by the deployable response policy.

The live Cloudflare Free plan differs from the planning assumption: automatic
DDoS protection is available, but Managed Rules require Pro and the single
rate-limiting rule supports `Block`, not Managed Challenge.

## Decision

- Send HSTS with a 30-day max-age, without `includeSubDomains` or preload.
- Cache localized public HTML at the edge for one hour with a one-day stale
  window while keeping the browser max-age at zero.
- Cache hashed `/assets/` output immutably for one year; cache stable branded
  WebP assets for one day with a one-week stale window.
- Emit virtual `/edge-assets/` and `/edge-media/` URLs and proxy only bounded
  paths through the asset binding. This keeps MIME/cache/HSTS policy inside the
  versioned Worker when Sites serves physical static files before that Worker.
- Keep Cloudflare automatic DDoS protection. Do not silently replace the
  planned Managed Challenge with Block before false-positive evidence exists.
- Preserve the pre-cutover apex value `198.54.119.178` as the DNS rollback
  target; leave mail, MX, SPF, DKIM, DMARC, cPanel, tunnel, and `www` records
  unchanged.

## Consequences

The production transport and cache policy is reproducible in source and follows
the versioned Sites artifact. Rate limiting remains an explicit post-launch
decision: either observe enough traffic to justify Block or upgrade to a plan
that supports the intended Managed Challenge and managed WAF rules.

Production proof showed that Sites retained its physical static-file fast path
even with `assets.run_worker_first=true`. Cloudflare cache/response-transform
experiments did not govern that custom-hostname path and were removed. Virtual
asset namespaces are therefore the authoritative delivery contract, not an
unverified dashboard rule.
