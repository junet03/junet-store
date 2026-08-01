---
id: install-first-project
translationId: install-first-project
locale: en
slug: install-mql5-codegraph-and-analyze-your-first-project
title: Install MQL5 CodeGraph v0.3.0 and analyze your first project
summary: A Windows guide from Python 3.11 and the public wheel to a trusted MQL5 repository, a first JSON snapshot, and honest result checks.
publishedAt: "2026-08-02"
updatedAt: "2026-08-02"
category: Guide
tags:
  - Installation
  - Windows
  - MQL5 CodeGraph
featured: true
seoTitle: Install MQL5 CodeGraph v0.3.0 on Windows
seoDescription: Install the MQL5 CodeGraph v0.3.0 wheel, verify its CLI, and create a first static-analysis snapshot from a trusted local MQL5 repository.
---

Version 0.3.0 is a public beta for Python 3.11 and newer. The core analyzer needs no
cloud account or model API key.

## 1. Install the public wheel

Open PowerShell and run:

```powershell
python -m pip install "mql5-codegraph[reference,mcp] @ https://github.com/junet03/mql5-codegraph/releases/download/v0.3.0/mql5_codegraph-0.3.0-py3-none-any.whl"
```

Verify the entry points:

```powershell
mql5-codegraph --help
mql5-codegraph-mcp
```

The second command starts a stdio server for an MCP client. It is not an interactive
application. You can stop it with `Ctrl+C` after confirming that the process starts.

## 2. Select the right project root

Choose a repository containing an EA, indicator, or MQL5 library that you trust. Do
not use the `mql5-codegraph` tool repository itself as the target project. A public URL
is not permission to process untrusted source.

Create a snapshot:

```powershell
mql5-codegraph analyze C:\work\Example-MQL5 --output build/example.codegraph.json --max-work 2000000 --json
```

`--max-work` is a bounded analysis budget. If it is exhausted, the tool reports the
phase and counters instead of publishing an incomplete graph as if it were complete.

## 3. Inspect before asking an AI agent

Start with status and a symbol you recognize:

```powershell
mql5-codegraph status build/example.codegraph.json --json
mql5-codegraph intelligence query build/example.codegraph.json OnTick --json
mql5-codegraph intelligence context-package build/example.codegraph.json OnTick --context-units 40 --json
```

Read diagnostics and evidence origin. Stored locations describe the analyzed snapshot;
if the source changes, create a fresh snapshot.

## 4. Evidence the graph cannot provide

A static graph does not prove that code compiles. Run the project's MetaEditor workflow
and retain compile logs, tests, and backtests separately. CodeGraph helps orientation
and evidence linking; compiler and runtime evidence still govern release decisions.
