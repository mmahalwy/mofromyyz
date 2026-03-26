---
title: "A Tale of Three Engineers"
date: "2026-03-25"
description: "Three types of engineers are emerging in the AI era. Only one has realized the job itself has changed. The difference isn't tooling — it's mindset."
readTime: "6 min read"
category: "Engineering"
draft: true
---

There are three types of engineers emerging right now. The difference between them isn't how much they use AI — it's how they think about it.

## E1: The hand-coder

Engineer 1 is still writing most code by hand. They might use modest helpers in a text editor — autocomplete, snippets, maybe the occasional Copilot suggestion they accept one out of ten times. But fundamentally, they're building the same way they were three years ago.

They're not anti-AI. They're just not convinced it's worth changing their workflow for. They've tried it, hit some rough edges, and quietly gone back to what they know.

**The verdict: falling behind.** Not because hand-coding is wrong, but because the gap between what they produce and what AI-augmented engineers produce is widening every month. The math stops working.

## E2: The AI-assisted engineer

Engineer 2 is using AI tools for 90% of their daily workflow. Claude Code, Copilot, Cursor — they're prompting to build, pasting in errors, watching it fix things. They're moving faster. Shipping more. Their output has genuinely increased.

But their fundamental approach to software engineering hasn't changed. They're still touching code manually, still doing manual testing, still thinking of AI as a faster keyboard. They've adopted the tool without changing the mental model.

**The verdict: better, not transformed.** Engineer 2 is more productive, but they hit a ceiling. They're still the bottleneck — they've just made the bottleneck faster. Every task still flows through their hands, their context, their manual interventions. When they're out, work stops.

## E3: The agentic engineer

Engineer 3 has had a different realization: the job itself has changed. Not "build the thing, but faster" — but "design the system, environment, and feedback loops that enable agents to do useful work for me."

E3 thinks in written instructions, not the work needed. They design systems and feedback loops that enable agents. When something goes wrong, they don't just fix it — they ask what the agent couldn't see, and they document or fix that missing context. Over time, they lose tolerance for doing anything manually. They unlock enormous leverage and the ability to build at a pace that's hard to comprehend from the outside.

**The verdict: multiplying output.** E3 builds systems that scale beyond them. Their tickets are so well-specified that any agent (or human) can pick them up. Their documentation becomes the context layer that makes every subsequent AI interaction more effective. They're not doing more work — they're designing the conditions for more work to get done.

This is the agentic mindset.

## Why the third type matters

It's easy to confuse E2 and E3. Both are "using AI." Both ship code. Both look productive in a standup. But the compounding effects are wildly different.

E2's productivity gains are linear. They work faster, but the leverage doesn't compound. E3's gains are exponential. Every piece of documentation they write, every feedback loop they build, every system they design makes the next interaction more effective — not just for them, but for everyone on the team.

## What separates them isn't tooling fluency

The gap isn't about who knows more keyboard shortcuts or who writes better prompts. It's about whether you've internalized a fundamental shift: **generation is cheap. Evaluation is critical.**

AI can write code faster than any human. But AI cannot yet reliably judge whether that code is correct in the context of your system, your domain, your edge cases. The engineers who understand this — who invest their time in evaluation, in building the scaffolding that makes AI output trustworthy — are the ones building the future.

The ones who treat AI as autocomplete on steroids are building faster versions of the past.

## The ticket is the work

One of the clearest signals of which engineer you're talking to is how they write tickets. E1 doesn't write detailed tickets — the thinking happens while coding. E2 writes a decent ticket and then does the real thinking while prompting. E3 writes a ticket that carries everything an agent needs: acceptance criteria, edge cases, relevant file paths, schema references, links to related work.

For E3, the ticket _is_ the work. The thinking happens before a single line of code is generated. The code itself is the easy part.

This isn't just process improvement. It's a fundamentally different relationship with work. The ability to deeply comprehend a problem, break it into agent-sized units, and specify it precisely enough that a machine can execute it — that's the new core competency.

## Getting there

I don't expect anyone to jump from E1 to E3 overnight. But I do expect every engineer to understand that this spectrum exists, and to be actively moving rightward on it.

Some practical starting points:

- **When an agent produces bad output, don't just fix it.** Ask why. What context was missing? Write it down somewhere the agent can access next time.
- **Break work into smaller, focused units.** A single task shouldn't require an agent to make 15 unrelated changes. Decompose relentlessly.
- **Treat documentation as infrastructure.** Every time you explain something in Slack that you've explained before, that's a documentation failure — and an AI capability gap.
- **Review for intent, not syntax.** When reviewing AI-generated code, the question is whether it accomplishes what was specified, not whether you would have written it differently.

The engineers who combine deep domain knowledge with the ability to direct agents toward the right problems — that's the new core competency. The code is becoming commoditized. The judgment is not.

Over the next few weeks, I'll share more about how we're operationalizing this at Shepherd.
