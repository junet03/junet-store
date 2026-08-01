# ADR 0005: Static-first edge security

- Status: Accepted
- Date: 2026-08-02
- Governing spec: `001-junet-store-foundation`

## Decision

Keep V1 content-only and apply a default-deny response policy. Use Cloudflare
baseline DDoS protection and available managed rules. Do not enable HSTS before
TLS/canonical redirects are proven. Do not rate-limit normal static GET requests
without measured abuse; add a narrow Managed Challenge rule first if needed.

## Consequences

The attack surface stays small and bot/search access is not accidentally harmed.
Every edge-rule change, false positive, emergency action, and HSTS activation is
recorded in the append-only journal.
