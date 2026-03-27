---
title: "Monorepos are the future — especially with AI"
date: "2026-03-26"
description: "In an AI-first engineering world, monorepos aren't just a preference — they're a multiplier. Here's why colocating your code is the highest-leverage infrastructure decision you can make right now."
readTime: "7 min read"
category: "Engineering"
draft: true
---

Every few years the monorepo debate resurfaces. It used to be about developer experience, build times, and whether Google's approach made sense for the rest of us. Those arguments still matter. But there's a new dimension now that changes the calculus entirely: AI.

If you're using AI to write, review, or maintain code — and you should be — the way you organize your codebase is no longer just a convenience decision. It's a leverage decision. And monorepos win that argument decisively.

## The old debate

The traditional case for monorepos was straightforward: shared code, atomic commits, unified CI, consistent tooling. The case against was equally familiar: slow builds, noisy diffs, forced coupling, and the operational complexity of making it all work at scale.

Both sides were right in context. If you had five engineers and two services, a monorepo was obviously simpler. If you had five hundred engineers and two hundred services, the tooling investment was non-trivial. The answer depended on your team size and your appetite for build infrastructure.

That tradeoff still exists. But it's been dwarfed by a new one.

## AI needs context. Repos are context boundaries.

Here's the thing nobody talks about enough: every repository boundary is a context boundary for AI.

When an agent works on a feature that spans your API and your frontend, and those live in separate repos, the agent has to work with an incomplete picture. It can't trace a type from the database model to the API response to the component that renders it. It can't verify that a schema change in the backend is compatible with the frontend that consumes it. It hallucinates the parts it can't see.

In a monorepo, the agent sees everything. A single prompt can produce a PR that touches the database migration, the API route, the shared types, and the UI component — and it can verify consistency across all of them. That's not a marginal improvement. That's a different category of capability.

At Shepherd, we felt this drag firsthand. We had separate repos for our frontend and backend — Brooklyn and Goldengate — connected by GraphQL, Apollo, and the layers of glue between them. Every cross-cutting change required coordination across repos, duplicate type definitions, and careful synchronization. Engineers held context in their heads. Agents couldn't hold it at all.

## The token economics

Let's talk about tokens, because they're a real engineering constraint now.

When an agent needs to understand your system, it reads files. Every file it reads costs tokens. In a multi-repo setup, the agent either:

1. **Works with partial context** — reads only the repo it's in, misses cross-boundary implications, produces code that compiles locally but breaks integration
2. **Gets stuffed with context** — you manually provide files from other repos, burning tokens on boilerplate and hoping you included the right ones

Neither is good. The first produces bugs. The second is expensive and fragile.

A monorepo lets the agent navigate naturally. It can follow imports, read shared types, trace function calls across boundaries — all within a single workspace. The token spend goes toward understanding your actual system, not reconstructing context that your repo structure destroyed.

This matters more than people realize. Token budgets are finite. Every token spent on redundant type definitions, GraphQL schema stitching, or cross-repo coordination is a token not spent on solving the actual problem. Monorepos are more token-efficient by default because there's less indirection to navigate.

## Speed compounds

The speed advantage of monorepos in an AI world isn't linear — it compounds.

**Single-ticket, single-PR features.** In a monorepo, a Linear ticket that says "add a new field to the policy summary" can become a single PR that adds the database column, updates the API, adjusts the shared type, and modifies the UI. In a multi-repo world, that's three or four PRs across repos, each requiring its own review, its own CI run, and careful ordering of deploys.

**Faster feedback loops.** The agent can run the full test suite in one pass. It can catch integration issues before they become deploy-time surprises. The feedback loop between "write code" and "know it works" gets dramatically tighter.

**Less hallucination.** When agents can see real implementations instead of guessing at interfaces, they produce better code. This is measurable. The error rate on cross-boundary changes drops significantly when the agent has access to both sides.

**Compounding returns on documentation.** In a monorepo, a well-written README, an architecture decision record, or a set of domain-specific docs benefits every agent session across the entire codebase. In multi-repo setups, documentation fragments across repos, gets duplicated, goes stale at different rates, and agents struggle to find the canonical version.

## The honest cons

Monorepos aren't free. Here's what you're signing up for:

**Build complexity.** You need real build tooling — Turborepo, Nx, Bazel, or something similar. Naive "build everything on every change" doesn't scale. This is solvable, and the tooling has gotten dramatically better, but it's not zero effort.

**CI/CD rethinking.** Your deployment pipeline needs to understand what changed and deploy only the affected services. This is table stakes for any serious monorepo, but if you're coming from separate repos with simple "deploy on merge" pipelines, there's migration work.

**Noisy history.** Git log gets busier. PRs touch more files. Code review requires more discipline to focus on what matters rather than getting overwhelmed by the diff size. AI-generated PRs especially can be large — reviewers need to focus on intent and architecture, not line-by-line syntax.

**Team boundaries blur.** In separate repos, ownership is implicit — you own your repo. In a monorepo, you need explicit code ownership (CODEOWNERS files, clear directory structure, review policies). Without this, you get either territorial conflicts or diffusion of responsibility.

**Migration is painful.** Let's not pretend otherwise. Merging repos means reconciling git histories, unifying build systems, resolving dependency conflicts, and often rewriting CI/CD from scratch. It's a multi-month project for most teams. The question isn't whether it's painful — it's whether the ongoing cost of staying separate exceeds the one-time cost of consolidating.

## AI makes the tradeoff asymmetric

Here's the core argument: AI shifts the monorepo tradeoff from "roughly equal, depends on your situation" to "monorepos win unless you have a very specific reason not to."

The cons of monorepos are mostly one-time or tooling costs. The cons of multi-repo in an AI world are ongoing and compounding:

- Every cross-repo feature takes more tokens
- Every agent session starts with less context
- Every integration issue that slips through costs more to debug
- Every piece of documentation that lives in the wrong repo is invisible to the agent working in the other one

The teams that will move fastest in the next few years are the ones where an agent can see the full picture — from the database to the screen — in a single workspace. Where a ticket becomes a PR without crossing repo boundaries. Where institutional knowledge lives alongside the code it describes.

## What this looks like in practice

If you're considering the move, here's a rough playbook:

1. **Start with shared types and utilities.** Move the things both repos already depend on into a shared workspace. This is low-risk and immediately valuable.
2. **Unify your build system.** Pick a monorepo tool and set up incremental builds before migrating application code. You don't want to discover build issues while also resolving merge conflicts.
3. **Migrate incrementally.** Move one service or one set of routes at a time. Maintain backward compatibility during the transition. Don't try to do it all in one big bang.
4. **Establish ownership early.** Set up CODEOWNERS, define directory structure conventions, and document review policies before the monorepo gets big enough to be confusing.
5. **Kill the glue layers.** Once frontend and backend are colocated, you can start removing the indirection — the GraphQL schema stitching, the duplicated types, the API client generation. Each layer you remove is less surface area for bugs and less tokens for agents to parse.

## The direction is set

The monorepo movement isn't new. But AI has turned it from a tooling preference into a strategic advantage. The teams that figure this out early — that invest in consolidation, simplification, and giving their agents maximum context — will build at a pace that feels impossible to teams still operating across fragmented repos.

Every layer of indirection is more surface area for garbage in, garbage out. Every repo boundary is a wall your agents can't see through. The future of AI-assisted engineering is one codebase, clear boundaries, and minimal indirection.

The code is becoming commoditized. The structure it lives in is not.
