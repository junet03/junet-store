---
id: ai-mql5-review
translationId: ai-mql5-review
locale: en
slug: ai-assisted-mql5-architecture-and-impact-review
title: Use AI to read MQL5 architecture, trace impact, and review changes
summary: A practical workflow that starts from an entry point, gathers bounded context, checks blast radius, and separates static evidence from compiler and runtime truth.
publishedAt: "2026-08-02"
updatedAt: "2026-08-02"
category: Workflow
tags:
  - Review
  - Impact
  - MQL5
featured: false
seoTitle: An AI workflow for MQL5 architecture and impact review
seoDescription: Use a code graph to help AI trace MQL5 entry points, bounded context, and blast radius before editing, then verify with compiler and runtime evidence.
---

AI reviews often fail not because a model lacks syntax knowledge, but because the
question starts too broadly. “Read the whole EA and optimize it” fills context quickly
and blurs what was inspected versus inferred.

## 1. Start from one behavior

Choose an entry point such as `OnInit`, `OnTick`, `OnTradeTransaction`, or a specific
risk function. Write a testable question. “Which callers can change lot size before an
order is sent?” is better than “How does risk management work?”.

## 2. Gather bounded context

Use query to identify the symbol, then collect callers, callees, includes, and a bounded
context package. If multiple symbols share a name, preserve the ambiguity instead of
selecting the first result.

## 3. Review impact before editing

An impact graph identifies upstream callers, downstream dependencies, and relevant
directed paths. It is a review list, not proof that every node executes in the terminal.

Before editing, the agent should record:

- the symbol and file it expects to touch;
- behavior that must remain unchanged;
- important callers and callees;
- outstanding diagnostics or ambiguity;
- tests and compiler evidence still required.

## 4. Make the smallest causal change

Fix one root cause, preserve existing contracts, and avoid unrelated refactors. Create a
new snapshot after the change; an old graph does not know that source has changed.

## 5. Layer the evidence

A static graph supports claims about structure observed by the analyzer. A MetaEditor
log supports claims about a particular entry point and source state being compiled.
Backtests, forward tests, and terminal logs add runtime evidence. No layer should
pretend to be another.

## A short review checklist

1. Does the question name an entry point and specific behavior?
2. Are source location and evidence origin cited?
3. Were both callers and dependencies reviewed for impact?
4. Does the snapshot match the current source revision?
5. Which compile, test, or runtime checks remain undone?

AI is most useful when it knows when to say, “There is not enough evidence yet.”
