---
title: "Shepherd raised $42M to build autonomous underwriting"
date: "2026-03-24"
description: "After four years of building, we just closed our Series B. Here's what we're building, why it matters, and what I've learned as CTO."
readTime: "8 min read"
category: "Startups"
image: "/blog/shepherd-series-b.jpeg"
---

![Shepherd Series B — $42M led by Intact Private Capital, Spark Capital, and Costanoa](/blog/shepherd-series-b.jpeg)

Today we announced Shepherd's $42M Series B. I want to use this post to share some personal reflections on what we've built, what I've learned, and where we're going — less of the polished company narrative, more of what it actually feels like to be in the middle of it.

## What Shepherd does

Commercial insurance underwriting hasn't changed in 30 years. A broker emails a submission with 6–12 different files — PDFs, spreadsheets, sometimes handwritten applications. An underwriter manually keys data into quoting tools, cross-references loss runs, checks appetite guides, pulls up comparable accounts, and eventually produces a price. A good underwriter handles maybe twenty accounts a month this way.

We're building the intelligence layer that changes this. Our platform ingests submissions, parses and structures the data, enriches it with external sources, and increasingly handles the analysis and pricing that used to be purely manual work.

The goal is autonomous underwriting — a system that can handle a submission end-to-end, from email to quote, with humans providing oversight and judgment rather than doing data entry.

## The data moat nobody talks about

The thing I'm proudest of isn't a feature. It's the dataset.

Shepherd is highly selective — we quote less than 40% of what we receive. But we extract and structure data from every single submission, regardless of whether we write it. Four years of doing this has produced large, statistically significant, industry-specific loss datasets that no other organization has.

This is our deepest moat. You can't replicate it with a better model or a bigger training run. You replicate it by doing the work, account by account, for years.

Every time our system parses a submission, enriches a dataset, or produces a recommendation that an underwriter accepts or rejects, the system gets better. The correction loop — the feedback from underwriters who accept, modify, or reject AI recommendations — compounds into institutional knowledge.

## The self-driving analogy (but for real)

When I think about our trajectory, the self-driving analogy is genuinely useful — not as marketing, but as an engineering framework.

Self-driving cars progressed through well-defined levels of autonomy. At each level, the operational domain — the set of conditions where the system could be trusted — expanded. Waymo didn't reach Level 4 by announcing it. They drove millions of miles. They built the sensor stack, the mapping layer, the decision engine, and the correction loop. Then they proved, mile by mile, that the system worked.

We're taking the same approach. Autonomy is earned, not declared. The metric that matters isn't capability — it's demonstrated reliability across thousands of decisions.

We see a clear two-year path to supervised autonomy for well-defined segments of commercial risk.

## The shift that changed everything

There's a conceptual shift in how AI systems work that matters enormously for what we're building.

The first generation of AI tools were **input-driven** — they waited for a human to ask a question. A chatbot retrieves information when prompted. A copilot suggests a next step when asked. The human drives; the AI assists.

The next generation is **output-driven**. The system doesn't wait for a prompt. A submission arrives in an inbox. The system reads it, parses it, enriches it, prices it, and presents a decision. The human reviews output, not input.

This is a fundamentally different operating model. In an input-driven system, the human's throughput is the ceiling. In an output-driven system, the AI's throughput is the baseline, and the human adds judgment where it matters.

We learned this the hard way. Our AI platform started as a chat interface — ask a question, get an answer. It worked, but it didn't transform the workflow. What mattered more was what we built underneath: the document parsing engine, the retrieval system, the citation layer, the structured data pipeline. Once we had that, we could stop building tools that respond and start building systems that act.

## What I've learned as CTO

Building Shepherd has been the hardest and most rewarding thing I've done. A few things I've internalized:

**Regulated industries demand explainability.** We can't use a model that produces the right answer but can't explain why. Every recommendation needs a citation trail. Every pricing decision needs to show its work. The system must know its own boundaries — when it's confident and when it should defer to a human. This constraint makes the engineering harder and, I'd argue, more interesting.

**Every model improvement accelerates us.** We're not building a company that gets disrupted by the next model release. We're building the data layer, the integration layer, the correction loop, and the domain expertise that sit on top of whatever the best available model is. When models improve, our system improves. That's a fundamentally different relationship with the AI frontier than most companies have.

**The feedback loop in insurance is unusually fast.** When the system produces a recommendation and an underwriter acts on it, we know within minutes whether the decision was good. The signal density — structured decisions, measurable outcomes, continuous feedback — is unusually high for an applied AI domain. This is not a research lab.

**The data problem is genuinely hard.** We're not working with clean, curated datasets. We're ingesting real-world data from construction sites — drone footage, project management updates, safety reports — across multiple platforms with different schemas, reliability characteristics, and update cadences. Building pipelines robust enough to stake underwriting decisions on is nontrivial.

## Autonomous underwriting doesn't mean no underwriters

Every discussion of AI in professional services arrives at the replacement question. The Greek root of "autonomy" is *autos* (self) and *nomos* (law) — self-governance. Autonomy doesn't mean no humans. It means humans with more agency.

Today, a skilled underwriter spends most of their time on manual data processing and wastes a lot of time on unqualified submissions. Maybe 20% of their time is the work that actually requires expertise: evaluating risk quality, structuring coverage, making judgment calls, managing portfolio construction.

In an agentic underwriting world, those ratios invert. The system handles intake, enrichment, analysis, and pricing. The underwriter orchestrates strategy, reviews exceptions, and allocates capital. Twenty accounts a month becomes two hundred — not because the underwriter works ten times harder, but because they spend their time on work that only an underwriter can do.

## What's next

We're months away from the first fully agentic submission in commercial insurance. A submission arrives by email. The system reads it, enriches it, prices it, and returns a quote. No human intervention — for a defined, well-understood segment of risk.

That's only the starting line. From there, the operational domain expands: more segments, more complexity, more nuance. The same way self-driving expanded from highway driving to city streets.

A year from now, commercial underwriting will be unrecognizable.

If you're an engineer and this is the kind of problem that excites you — [we're hiring](https://www.shepherdinsurance.com/careers).
