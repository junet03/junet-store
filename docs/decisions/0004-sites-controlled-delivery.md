# ADR 0004: Sites hosting with controlled delivery

- Status: Accepted
- Date: 2026-08-02
- Governing spec: `001-junet-store-foundation`

## Decision

Preserve the Sites Vinext/Vite/Worker runtime. GitHub Actions validates only;
Codex/Sites saves and privately deploys the exact green commit. The maintainer
must explicitly approve that saved version before public deployment or DNS
cutover.

## Consequences

No long-lived Sites credential is stored in GitHub. The previous stable version
and DNS export are required rollback inputs. An official future Sites CD
interface requires a new ADR before automation.
