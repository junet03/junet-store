---
id: codegraph-evidence
translationId: codegraph-evidence
locale: en
slug: why-ai-needs-evidence-backed-mql5-codegraph
title: What is MQL5 CodeGraph, and why does AI need evidence-backed graphs?
summary: AI can read many lines of code and still lose its bearings. A code graph connects symbols, calls, and event handlers to explicit evidence.
publishedAt: "2026-08-02"
updatedAt: "2026-08-02"
category: AI × MQL5
tags:
  - MQL5
  - CodeGraph
  - AI agents
featured: true
seoTitle: "MQL5 CodeGraph: evidence-backed maps for AI agents"
seoDescription: Learn how MQL5 CodeGraph maps an MQL5 repository into sourced relationships so AI can trace architecture, context, and impact more honestly.
---

An AI agent can read a few MQL5 files quickly. The hard part starts when a repository
contains many includes, classes, event handlers, and cross-file calls. Important context
gets separated, while a plausible inference can quietly be repeated as fact.

MQL5 CodeGraph provides orientation through a static graph snapshot. It reads `.mq5`
and `.mqh` files, records declarations, includes, calls, and standard MetaTrader runtime
relationships, and retains relationship type, direction, origin, and source location.

## Four questions a useful graph should answer

- Where is this symbol declared, and who calls it?
- Which path can connect `OnTick` to risk-management logic?
- What may be affected if a shared function changes?
- Which result came from source, and which result is inference?

The last question matters most. A graph edge does not prove that terminal execution
followed that path. Static analysis also does not replace MetaEditor compilation,
backtesting, or runtime observation.

## One kernel, several surfaces

The canonical snapshot is interpreted by the Intelligence Kernel. The CLI, local
dashboard, and MCP adapter project the same query, context, impact, and directed-path
semantics. That gives an agent and its operator a result they can cross-check instead
of an answer with no trail.

## Limits worth stating plainly

A tolerant tokenizer is not a complete MQL5 compiler. Complex macros, dynamic
dispatch, runtime-generated names, or incomplete source may produce partial results.
Diagnostics are part of the evidence, not noise to hide.

MQL5 CodeGraph is designed for trusted local repositories and a single-user loop. It
does not prove that an EA is safe, strategically correct, or profitable.

Within that boundary, a code graph is a practical map. It does not drive for the
developer, but it helps both people and AI understand where they are.
