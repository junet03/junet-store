# Refresh code intelligence runbook

## Graphify

Use a directed deep graph after architectural milestones. Preserve the meaning
of `EXTRACTED`, `INFERRED`, and `AMBIGUOUS`; never promote inference to fact just
to make health checks green. Review and commit only:

- `graphify-out/graph.json`
- `graphify-out/GRAPH_REPORT.md`
- `graphify-out/graph.html`

Ignore interpreter paths, caches, cost files, Obsidian output, and temporary
semantic-extraction files. Use incremental refresh before ordinary releases and
a full rebuild at architecture milestones.

## GitNexus

Confirm `git rev-parse --show-toplevel` equals this repository, then index it as
`junet-store`. Keep `.gitnexus/` local. Before merging routing, locale, theme,
security, or deployment work, run change detection and scoped impact queries.
Record the query, changed symbols/paths, interpreted blast radius, and unresolved
risk—not the generated database—in the journal.
