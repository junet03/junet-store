# Repository map

| Path | Responsibility | Release rule |
| --- | --- | --- |
| `.specify/`, `specs/` | Constitution and immutable feature history | Material work starts with a new feature spec |
| `app/` | App Router entry points and HTTP policy | Routing/security changes require impact review |
| `components/` | Shared UI and client interactions | Keyboard, touch, theme, and responsive QA required |
| `content/articles/` | Five paired Vietnamese/English articles | Missing pair, unsafe Markdown, or bad slug fails tests |
| `lib/content/` | Typed content and verified flagship facts | Revalidate external release facts before publication |
| `docs/` | Architecture, ADRs, runbooks, journal | Journal is append-only |
| `graphify-out/` | Reviewed public graph outputs | Commit only `graph.json`, `GRAPH_REPORT.md`, `graph.html` |
| `.gitnexus/` | Local code-intelligence index | Always ignored |
| `output/playwright/` | Temporary browser evidence | Never committed |

Generated build output (`dist/`, `.vinext/`, `.next/`, `.wrangler/`) and all
credentials, tokens, caches, traces, and local indexes stay outside version
control.
