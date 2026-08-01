---
id: connect-ai-agents
translationId: connect-ai-agents
locale: en
slug: connect-mql5-codegraph-mcp-to-ai-agents
title: Connect MQL5 CodeGraph MCP to Codex and other AI agents
summary: Understand the local MCP boundary, register mql5-codegraph-mcp per client, select a separate trusted project root, and maintain honest RAM-only snapshots.
publishedAt: "2026-08-02"
updatedAt: "2026-08-02"
category: AI agents
tags:
  - MCP
  - Codex
  - AI agents
featured: true
seoTitle: Connect mql5-codegraph-mcp to Codex and AI agents
seoDescription: Register the local MCP runtime for Codex, Cursor, Claude Code, or Antigravity without mistaking a GitHub URL for a completed installation.
---

MCP lets an agent call analysis tools through an explicit contract instead of guessing
commands and interpreting arbitrary JSON. A GitHub URL, however, does not turn every
agent into a prepared local environment.

## Minimum prerequisites

The client needs local terminal and filesystem access, Internet access for wheel
installation, Python 3.11+, package-install permission, and a way to register a stdio
MCP server. After installing v0.3.0, the executable is:

```text
mql5-codegraph-mcp
```

Cursor, Claude Code, and Antigravity use their own MCP configuration formats. Follow
the current client documentation to register this executable; do not blindly copy one
configuration file between applications.

## A working session

1. Start a fresh task inside the real MQL5 repository.
2. Call `project_status` to see whether the server has a snapshot.
3. Index only a local project root selected and trusted by the operator.
4. Use query, architecture, context, or impact before proposing code changes.
5. Re-index after source changes or an MCP process restart.

The experimental Codex plugin in the repository supplies five workflow skills and 13
read-only MCP tools. “Read-only” describes this tool surface. An unrestricted agent
with a shell or editor can still modify files through unrelated tools.

## When the transport closes

The snapshot lives in the MCP process memory. If that transport dies, the old server
cannot respawn itself inside the client. Reload or open a new task, call
`project_status`, and index the selected project again.

## Reference corpora are a separate lane

Operator-owned PDF material is built and attached separately. The corpus preserves
page citations but does not download or redistribute documents for the user. A
Graphify overlay is optional discovery evidence; its inference does not become a
normative citation.

A responsible setup never promises “paste the link and it works.” It states the
prerequisites, verifies the live MCP connection, and asks which MQL5 project is
authorized for analysis.
