---
title: "The Agentic Mindset: Two Types of Engineers Are Emerging"
date: "2026-03-25"
description: "The engineers who thrive in the AI era aren't the ones using AI the most. They're the ones who've realized the job itself has changed."
readTime: "6 min read"
category: "Engineering"
draft: true
---

There are two types of engineers emerging right now. The difference between them isn't how much they use AI — it's how they think about it.

## Engineer 1

Engineer 1 is using AI heavily. Claude Code for 90% of their daily workflow. Prompting to build, pasting in errors, watching it fix things. They're moving faster in some ways. But their fundamental approach to software engineering hasn't changed much. They're still touching code manually, still doing manual testing, still thinking of AI as a faster keyboard.

Engineer 1 is productive. But they've adopted the tool without changing the mental model.

## Engineer 2

Engineer 2 has had a different realization: the job itself has changed. Not "build the thing, but faster" — but "design the system, environment, and feedback loops that enable agents to do useful work for me."

When something goes wrong, Engineer 2 doesn't just fix it. They ask what the agent couldn't see, and they document or fix that missing context. Over time, they lose tolerance for doing anything manually. They unlock enormous leverage and the ability to build at a pace that's hard to comprehend from the outside.

This is the agentic mindset.

## Why the distinction matters

It's easy to confuse these two. Both are "using AI." Both ship code. Both look productive in a standup. But the compounding effects are wildly different.

Engineer 1 hits a ceiling. They're still the bottleneck — they've just made the bottleneck faster. Every task still flows through their hands, their context, their manual interventions. When they're out, work stops.

Engineer 2 builds systems that scale beyond them. Their tickets are so well-specified that any agent (or human) can pick them up. Their documentation becomes the context layer that makes every subsequent AI interaction more effective. They're not doing more work — they're designing the conditions for more work to get done.

## What separates them isn't tooling fluency

The gap isn't about who knows more keyboard shortcuts in Claude Code or who writes better prompts. It's about whether you've internalized a fundamental shift: **generation is cheap. Evaluation is critical.**

AI can write code faster than any human. But AI cannot yet reliably judge whether that code is correct in the context of your system, your domain, your edge cases. The engineers who understand this — who invest their time in evaluation, in building the scaffolding that makes AI output trustworthy — are the ones building the future.

The ones who treat AI as autocomplete on steroids are building faster versions of the past.

## The ticket is the work

One of the clearest signals of which engineer you're talking to is how they write tickets. Engineer 1 writes a vague ticket and then does the real thinking while coding. Engineer 2 writes a ticket that carries everything an agent needs: acceptance criteria, edge cases, relevant file paths, schema references, links to related work.

For Engineer 2, the ticket _is_ the work. The thinking happens before a single line of code is generated. The code itself is the easy part.

This isn't just process improvement. It's a fundamentally different relationship with work. The ability to deeply comprehend a problem, break it into agent-sized units, and specify it precisely enough that a machine can execute it — that's the new core competency.

## Getting there

I don't expect anyone to become Engineer 2 overnight. But I do expect every engineer to understand that this shift is happening, and to be actively moving in this direction.

Some practical starting points:

- **When an agent produces bad output, don't just fix it.** Ask why. What context was missing? Write it down somewhere the agent can access next time.
- **Break work into smaller, focused units.** A single task shouldn't require an agent to make 15 unrelated changes. Decompose relentlessly.
- **Treat documentation as infrastructure.** Every time you explain something in Slack that you've explained before, that's a documentation failure — and an AI capability gap.
- **Review for intent, not syntax.** When reviewing AI-generated code, the question is whether it accomplishes what was specified, not whether you would have written it differently.

The engineers who combine deep domain knowledge with the ability to direct agents toward the right problems — that's the new core competency. The code is becoming commoditized. The judgment is not.

Over the next few weeks, I'll share more about how we're operationalizing this at Shepherd.
