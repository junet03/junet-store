# ADR 0003: Repository-owned Markdown

- Status: Accepted
- Date: 2026-08-02
- Governing spec: `001-junet-store-foundation`

## Decision

Store each article as paired `vi.md`/`en.md`, parse strict YAML front matter with
`yaml`, validate with Zod plus project rules, and render GFM without raw HTML.
Imports are explicit and bundled; there is no runtime file-system scan.

## Consequences

Content changes are reviewed and versioned like code. Missing translations,
unknown fields, duplicate slugs, unsafe protocols, or raw HTML fail the gate.
