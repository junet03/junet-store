# ADR 0001: Stable localized URL identities

- Status: Accepted
- Date: 2026-08-02
- Governing spec: `001-junet-store-foundation`

## Decision

Use `/vi` and `/en` route families backed by explicit stable route/article IDs.
The language switch looks up the equivalent path by identity. Root negotiation
uses a private, non-cacheable `307`; Vietnamese is `x-default` and fallback.

## Consequences

Localized slugs can be idiomatic without fragile string replacement. Every new
public identity must define both paths and all canonical/hreflang metadata.
