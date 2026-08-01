# Architecture overview

Junet.store V1 is a read-only content application compiled by Vinext into a
Cloudflare Worker-compatible Sites artifact. The Worker chooses the initial
locale, renders localized routes, and serves bundled assets. There is no
application origin, API, account, form, CMS, database, analytics, or remote
content dependency.

```mermaid
flowchart LR
  V["Visitor browser"] --> E["Cloudflare edge and Sites"]
  E --> W["Vinext Worker"]
  W --> R["Typed locale route registry"]
  W --> C["Validated Markdown and project data"]
  E --> A["Hashed local assets"]
  G["GitHub CI"] --> Q["Lint, types, content, build, Worker tests"]
  Q --> P["Private Sites version"]
  P -->|"explicit approval"| E
```

The core boundaries are:

- `app/`: HTTP routing, metadata, sitemap, robots, and localized layouts.
- `components/`: presentational and accessible interactive surfaces.
- `lib/`: route identities, locale negotiation, content contracts, SEO, facts.
- `content/`: ten repository-owned Markdown variants for five identities.
- `public/`: local images, icon, and the pre-hydration theme initializer.
- `worker/` and `build/`: Sites/Vinext runtime and packaging integration.

Graphify is durable cross-code/docs architecture evidence. GitNexus remains a
local symbol/impact index; `.gitnexus/` is never committed.
