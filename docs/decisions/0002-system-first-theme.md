# ADR 0002: System-first persisted theme

- Status: Accepted
- Date: 2026-08-02
- Governing spec: `001-junet-store-foundation`

## Decision

Run a small local parser-blocking initializer before hydration. Accept only
`light` or `dark` from `localStorage`, otherwise use the system preference. The
localized sun/moon control persists manual selection.

## Consequences

The first paint has the intended theme without cookies or server state. The CSP
must permit the current local/RSC script behavior and must never permit remote
scripts or `unsafe-eval`.
