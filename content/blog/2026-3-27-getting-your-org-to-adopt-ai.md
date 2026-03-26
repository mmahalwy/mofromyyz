---
title: "Getting your org to actually adopt AI — a framework"
date: "2026-03-27"
description: "You gave everyone access to AI tools. Adoption is still inconsistent. Here's the stair-step framework and the hard lessons from getting it wrong."
readTime: "7 min read"
category: "Engineering"
draft: true
---

You've bought the licenses. You've sent the Slack message. You've told your engineering team to use Claude Code, Copilot, Cursor — whatever they want. Budget is unlimited. The mandate is clear.

And yet. Adoption is uneven. Some engineers are shipping at 3x speed. Others are using AI to autocomplete variable names and calling it a day. A few have quietly stopped using it altogether because "it kept getting things wrong."

Sound familiar? I've had this exact conversation with a dozen founders and engineering leaders in the past month. The pattern is remarkably consistent. Here's what I've learned about what actually works.

## The stair-step framework

The most effective adoption strategy I've seen follows four stages. Skipping stages doesn't work — you just create resentment without behavior change.

### Stage 1: Opportunity

Make AI tools available with zero friction. Unlimited budgets. Access to every tool the team wants to try. Clear documentation on how to get started. The message is: "This is here for you. We believe it will make you better."

This stage is necessary but wildly insufficient. Most companies stop here and wonder why adoption is inconsistent.

### Stage 2: Champions

Find the engineers who are already getting outsized results with AI. Celebrate them publicly. Give them platforms to demo their workflows at all-hands meetings. Let them run workshops and teach others.

This is where AI office hours become powerful. A standing weekly session — ours is Fridays — where anyone can bring questions, share what they've built, or watch someone else work with AI in real time. The best way to convince a skeptic isn't a mandate. It's watching a peer solve a problem in 10 minutes that would have taken them a day.

Champions create social proof. Social proof changes behavior faster than policy.

### Stage 3: Requirement

Once the tools are accessible and the proof points exist, progress to explicit expectations. "You must use AI tools in your workflow." This is where it becomes part of how you work, not an optional add-on.

This stage requires infrastructure. If the tooling is flaky, if the documentation is poor, if the AI keeps hallucinating because it doesn't have enough context — requiring adoption just creates frustration. The requirement has to be backed by a system that actually works.

### Stage 4: Accountability

The final stage: non-adoption has real consequences. It affects performance reviews, compensation discussions, and ultimately employment. This sounds harsh, but by this stage you've provided the tools, the support, the proof points, and the expectation. Someone who still refuses to adapt is making a choice — and that choice has an impact on the team.

Most companies never reach this stage, and many shouldn't rush to it. But knowing it exists creates a clear trajectory.

## Where most companies actually fail

It's not the framework that trips people up. It's the foundation underneath it.

### Failure 1: No context layer

The single biggest reason AI tools "don't work" for a team is that the AI doesn't have the context it needs. Your domain knowledge lives in heads and Slack threads. The agent generates plausible code that misses critical business logic. The engineer concludes the tool is broken.

The fix isn't better prompts. It's better documentation. Write down the things that only three people know. Capture the assumptions baked into your pricing models, the edge cases that burned you before, the regulatory constraints that aren't obvious. AI consumes written text — not knowledge in heads.

### Failure 2: No guardrails

Full autonomy without guardrails produces the vibe coding problem. More code ships faster, but the error rate doesn't shrink proportionally. Some companies are seeing more production incidents than ever, specifically because AI-generated code is being deployed without deep understanding.

Guardrails look like: requiring Linear tickets before any PR, reviewing for intent and architecture rather than syntax, mandating test coverage on AI-generated code, and treating code review as judgment validation rather than rubber stamping.

### Failure 3: Breadth over depth

AI lets an individual do more — but it's important not to confuse that with doing more _things_. I've seen teams scatter their AI-augmented engineers across five initiatives, thinking the productivity boost means everyone can context-switch more. The opposite is true.

The leverage comes from going deep. Spawn a large number of agents tackling a single core problem rather than spreading thin across many. Focus and creativity are the core commodities now. Protect them.

## The role of leadership

PMs and engineering managers have to evolve too. The quality of a PRD directly determines the quality of what AI produces. A vague product spec produces vague code — this was always true, but AI makes it painfully visible. Treat PRDs not as alignment documents but as build specifications.

Leaders also need to model the behavior. If you're asking your team to adopt AI but you're still writing emails from scratch, reviewing PRDs without AI assistance, and doing all your analysis manually — the message is clear regardless of what you say.

## Hackathons accelerate everything

One tactic that's worked better than anything else: pause the company for 2-3 days and run an AI-focused hackathon. Give everyone a real problem to solve with AI tools. Nothing creates champions faster than hands-on experience.

The engineers who were skeptical often come out of hackathons as the most enthusiastic adopters — because they finally had the space to experiment without the pressure of sprint deadlines.

## The honest truth

Here's what I tell every founder who asks: there is no clean answer yet. The right amount of AI is somewhere between "none" and "everything," and the exact midpoint depends on your domain, your team's maturity, your documentation quality, and how critical your systems are.

Full AI means shipping faster but accepting higher incident rates. No AI means maintaining expertise but falling behind on velocity. The middle ground is where every company needs to land — but what that middle ground looks like is something each team has to figure out for themselves.

Over the next few weeks, I'll share more specifics about what we're doing at Shepherd: where AI fits in our workflow, where we've pulled back, and the frameworks we're using to make these decisions deliberately.
