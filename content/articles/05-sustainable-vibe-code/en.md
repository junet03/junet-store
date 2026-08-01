---
id: sustainable-vibe-code
translationId: sustainable-vibe-code
locale: en
slug: sustainable-vibe-coding-for-open-source-projects
title: Sustainable vibe coding for open-source MQL5 projects
summary: Keep AI-assisted creative speed while adding specs, small changes, impact review, tests, and a journal so the project remains understandable months later.
publishedAt: "2026-08-02"
updatedAt: "2026-08-02"
category: Vibe code
tags:
  - Vibe coding
  - Open source
  - Spec-driven
featured: false
seoTitle: Sustainable vibe coding for MQL5 open source
seoDescription: Keep AI development fast while using specs, graph impact, tests, ADRs, and an append-only journal to make an MQL5 project maintainable.
---

Vibe coding is at its best when it expands the space for experimentation, not when it
erases a project's memory. A change that runs today but cannot be explained three
months later is debt, not speed.

## 1. Write intent before code

A short spec should state who needs what, what success looks like, what is outside
scope, and which evidence will prove completion. Record an ADR for architectural or
security decisions so a future contributor also sees the alternatives that were
rejected.

## 2. Keep the patch bounded

Ask the AI agent to name the files it expects to touch, the contracts it must preserve,
and the tests it will run. If the answer introduces several new abstractions, ask which
specific problem requires each one.

## 3. Use graphs to find blast radius

CodeGraph or GitNexus can widen the review list across callers, callees, includes,
processes, and routes. Graphify connects code with documentation and decisions. These
graphs are maps; source, tests, and runtime remain the real terrain.

## 4. Prove the result in layers

- lint and type checking catch mechanical defects;
- tests verify known contracts;
- a build proves that an artifact can be produced;
- compiler and runtime evidence verify the MQL5 lane;
- browser or HTTP probes verify what a real visitor receives.

Do not replace “the tests are green” with “the agent said it was done.”

## 5. Keep an append-only journal

Each milestone should record its objective, spec and ADRs, changes, evidence, commit,
risks, and next action. If an old note turns out to be wrong, append a correction. Do
not rewrite history to make it look cleaner than reality.

## 6. Share responsibly

Open source is more than pushing code. It needs a usable README, a clear license,
contribution guidance, a security channel, and acknowledgements. Avoid adoption,
accuracy, or performance claims that have not been measured.

Vibe is the energy that starts the work. Specs, graphs, tests, and a journal turn that
energy into a community project that can keep living.
