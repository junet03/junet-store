# junet.store

`junet.store` is a bilingual, mobile-first knowledge hub for practical AI,
MQL5, sustainable vibe coding, and open source. Its flagship project is
[MQL5 CodeGraph](https://github.com/junet03/mql5-codegraph).

`junet.store` là không gian kiến thức Việt–Anh, ưu tiên mobile, dành cho AI thực
dụng, MQL5, vibe coding bền vững và mã nguồn mở. Dự án flagship là
[MQL5 CodeGraph](https://github.com/junet03/mql5-codegraph).

## Local development

Requirements: Node.js 22.13 or newer and npm.

```powershell
npm ci
npm run dev
```

Open `http://localhost:3000`. Run the full validation gate with:

```powershell
npm run check
npm run audit:prod
```

The site has no CMS, database, forms, accounts, analytics, advertising, or
third-party runtime scripts. Content is repository-owned Markdown and every
published article requires both Vietnamese and English files.

## Project governance

- Constitution and feature history: [`.specify/`](.specify/) and [`specs/`](specs/)
- Architecture and ADRs: [`docs/architecture/`](docs/architecture/) and [`docs/decisions/`](docs/decisions/)
- Operations: [`docs/runbooks/`](docs/runbooks/)
- Append-only journal: [`docs/project-journal/`](docs/project-journal/)
- Release handoff: [`HANDOFF.md`](HANDOFF.md)

MQL5 and MetaTrader are trademarks of MetaQuotes Ltd. Junet.store and MQL5
CodeGraph are independent community projects and are not affiliated with,
endorsed by, or sponsored by MetaQuotes Ltd.
