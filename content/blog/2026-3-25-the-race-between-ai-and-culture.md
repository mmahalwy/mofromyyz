---
title: "The race between AI advancement and engineering culture"
date: "2026-03-25"
description: "Leaders are pushing for full AI adoption in engineering. But models aren't perfect yet, and the consequences are starting to show. Where's the middle ground?"
readTime: "5 min read"
category: "Engineering"
draft: true
---

There's a race happening right now that nobody's talking about clearly enough. On one side, AI models are getting better at an extraordinary pace. On the other, engineering cultures are fracturing over how much to actually use them.

## The mandate from the top

The message from leadership at many companies is unambiguous: use AI for everything. Claude Code, Copilot, Cursor — the expectation is that engineers write less code by hand and delegate more to AI. Some leaders have gone further, pushing toward a world where no code is written by humans at all. Engineers become reviewers, prompters, and orchestrators.

In theory, this is compelling. AI tools genuinely accelerate development. They eliminate boilerplate, catch patterns faster than humans, and can hold more context in working memory than any individual engineer. The productivity gains are real.

But theory and practice are diverging in ways that are starting to hurt.

## The consequences nobody planned for

AWS has experienced more SEV0 incidents this year than in any prior period. The pattern behind many of them is the same: code that was generated quickly, reviewed superficially, and deployed without the kind of deep understanding that would have caught the failure mode. Vibe coding at scale — fast, aimless, and without the mental model of how systems actually behave under pressure.

This isn't an AWS-specific problem. Companies across the industry are starting to see the same thing. More code ships faster, but the error rate isn't shrinking proportionally. In some cases, it's growing. The speed creates a false sense of confidence. The system looks correct. The tests pass. The PR gets approved. And then something breaks in production in a way that nobody on the team fully understands, because nobody on the team fully wrote it.

## The calculator analogy — and where it breaks down

When I was in school, calculators existed, but we were still required to learn long division and manual arithmetic. At the time, it felt pointless. Today, nobody does math by hand. The calculator won.

It's tempting to apply the same logic to AI and code. Why write it yourself when the machine can do it faster? But there's a critical difference: calculators are objective. 1 + 1 = 2. Every time. There's no ambiguity, no context-dependence, no emergent behavior.

Code isn't like that. Code interacts with state, with other systems, with edge cases that don't surface until production. Code doesn't always do what you expect it to do. An AI can generate syntactically correct, logically plausible code that still fails in ways that require deep system understanding to diagnose. The calculator analogy gives us permission to stop thinking. But with code, stopping thinking is exactly how you get SEV0s.

## The pendulum is swinging

Some companies are already pushing back. Not against AI entirely, but against the "no human in the loop" philosophy. They're reintroducing requirements for engineers to understand what they're shipping — not just review it, but be able to explain it. Some are limiting AI-generated code in critical paths. Others are requiring manual implementation for anything touching infrastructure, security, or data pipelines.

This is the cultural side of the race. While models get better every month, organizations are simultaneously building policies that constrain how much AI gets used. The irony is that by the time these policies are fully embedded, the models might actually be good enough to justify the original mandate.

## The real question leaders are asking

The conversation I keep having with other engineering leaders comes down to the same set of questions:

- **Full AI?** Ship faster, but accept higher incident rates and reduced system understanding across the team.
- **No AI?** Maintain deep expertise, but fall behind on velocity and lose engineers who don't want to work that way.
- **Somewhere in the middle?** Almost certainly the right answer — but what does "the middle" actually look like?

Does it mean AI for greenfield features but not for infrastructure? AI for first drafts but mandatory human rewrites? AI for junior engineers to accelerate learning, but constraints for senior engineers who should be thinking harder, not faster?

Nobody has a clean answer yet. The companies that figure it out first will have a meaningful advantage — not just in shipping speed, but in reliability, retention, and the kind of institutional knowledge that compounds over years.

## What's next

Over the next few weeks, I'll share what we're doing at Shepherd and what we're learning. How we're thinking about where AI fits in our engineering workflow, where we've pulled back, and the frameworks we're developing for making these decisions deliberately rather than reactively.

The race between model capability and organizational culture is the most important technical leadership challenge right now. The models will keep getting better. The question is whether our cultures will evolve fast enough to use them well.
