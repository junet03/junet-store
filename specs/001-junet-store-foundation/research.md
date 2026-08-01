# Phase 0 Research: Junet.store Foundation

## Decision 1: Preserve the Sites Vinext runtime

- **Decision**: Keep the generated Vinext/Vite/Cloudflare Worker structure and
  package lock, with D1/R2 disabled.
- **Rationale**: It is the supported Sites packaging path and already emits the
  required Worker-compatible ESM output.
- **Alternatives considered**: Replacing it with a standalone static generator
  would discard the hosting contract and add migration risk.

## Decision 2: Stable route identities with localized paths

- **Decision**: Use `/vi` and `/en` route families backed by one `RouteId` map and
  an optional catch-all localized page dispatcher. Root language selection is a
  non-cacheable 307 based on `Accept-Language`, defaulting to Vietnamese.
- **Rationale**: Stable identities let the language switch resolve equivalent
  content even when localized slugs differ.
- **Alternatives considered**: Path text replacement is unsafe; a single URL
  changing content weakens canonical and sharing semantics; subdomains add DNS
  and deployment complexity.

## Decision 3: Build-time Markdown with strict front matter

- **Decision**: Explicitly import ten Markdown bodies through Vite `?raw`, parse
  strict YAML front matter with `yaml`, validate through Zod, reject raw HTML and unsafe
  protocols, and render with React Markdown plus GFM without `rehype-raw`.
- **Rationale**: This honors the requested Markdown contract while avoiding
  runtime `fs` and executable MDX.
- **Alternatives considered**: MDX permits executable JSX/imports; runtime
  directory scanning is incompatible with a portable Worker bundle; remote CMS
  contradicts V1 privacy and availability goals.

## Decision 4: System-first, no-flash theme

- **Decision**: A checked-in blocking `/theme-init.js` reads only `light` or
  `dark`, otherwise follows `prefers-color-scheme`, and sets `data-theme` before
  content paints. The localized client toggle persists the explicit choice.
- **Rationale**: No third-party theme package is needed and storage denial has a
  deterministic system fallback.
- **Alternatives considered**: A hydration-only toggle flashes the wrong theme;
  a request cookie introduces unnecessary server state and cache variation.

## Decision 5: CSP compatible with current RSC output

- **Decision**: Apply a default-deny CSP and security headers globally. Permit
  self-hosted resources and the minimum inline script/style concession required
  by the verified Vinext/Next RSC build; never allow `unsafe-eval` or third-party
  origins. Test CSP on the private deployment before production.
- **Rationale**: A nonce-only policy risks dynamic responses and broken RSC
  hydration in the current pre-1.0 compatibility layer.
- **Alternatives considered**: A theoretical strict nonce policy is deferred
  until production output proves nonce propagation and caching behavior.

## Decision 6: Validation-only GitHub CI and controlled Sites CD

- **Decision**: Run shell-neutral `npm` checks on Ubuntu and Windows. Use minimal
  GitHub Actions permissions, full commit-SHA pins, CodeQL default setup,
  dependency review, Dependabot, protected `main`, and an operator-approved Sites
  publish of the exact green SHA.
- **Rationale**: Current Sites publishing uses interactive connector operations
  and short-lived credentials; no unsupported deployment API is invented.
- **Alternatives considered**: Automatic deployment on every merge violates the
  approved production gate; storing a reusable Sites credential expands risk.

## Decision 7: Evidence roles for Graphify and GitNexus

- **Decision**: Commit reviewed Graphify primary outputs for cross-code/docs
  navigation; keep `.gitnexus/` local and record only scoped impact summaries.
- **Rationale**: Graphify is durable architecture evidence, while GitNexus is a
  fast local change-impact index. Keeping their roles distinct avoids duplicate
  authority and generated-state leakage.
- **Alternatives considered**: Committing `.gitnexus/` exposes machine-local
  generated state; treating either graph as runtime truth violates the honesty
  boundary.

## Decision 8: Factual flagship content

- **Decision**: Publish only verified v0.3.0/Python 3.11+/MIT/public-beta facts,
  distinguish core local behavior from optional remote Graphify processing, and
  state that the MCP/plugin is experimental, read-only at its tool surface, and
  RAM-only.
- **Rationale**: This preserves the repository security and evidence boundaries.
- **Alternatives considered**: Claims of compiler completeness, runtime proof,
  profitability, sandboxing, hosted safety, or universal offline operation are
  explicitly rejected.
