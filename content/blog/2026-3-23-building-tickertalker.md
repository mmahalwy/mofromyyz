---
title: "Building TickerTalker — AI-powered stock analysis from earnings calls"
date: "2026-03-23"
description: "How I built an AI-powered platform that analyzes earnings call transcripts, tracks management credibility, and gives you an edge in stock research"
readTime: "5 min read"
category: "Projects"
---

I've always been frustrated by how surface-level most stock research tools are. You get a P/E ratio, maybe a price target, and a "buy/hold/sell" that feels like a coin flip. The real signal — what management actually says on earnings calls, whether they follow through on promises, and how the market reacts — is buried in hours of transcripts that nobody has time to read.

So I built [TickerTalker](https://tickertalker.vercel.app).

## What is it?

TickerTalker is an AI-powered stock analysis platform that digs into earnings call transcripts and financial data to give you a deeper understanding of the companies you're researching. Enter a ticker symbol, and you get a comprehensive breakdown that would normally take hours of manual research.

## The core insight: management credibility

The feature I'm most proud of is the **management credibility analysis**. The AI reads through multiple quarters of earnings calls and tracks what executives promised versus what they actually delivered. Did the CEO say they'd hit 20% margins by Q4? Did the CFO commit to a buyback program? TickerTalker tracks all of it and gives each management team a credibility score.

It also picks up on subtler signals:

- **Hedging language** — when executives start using more qualifiers and vague language, it's often a red flag
- **Q&A tension** — how confrontational are analysts during the Q&A? Are questions being dodged?
- **Prepared vs. Q&A gap** — when the prepared remarks are optimistic but the Q&A is defensive, something's off
- **Sentiment trends** — is leadership tone improving or declining quarter over quarter?

## The deep research pipeline

When you look up a symbol, TickerTalker runs a two-stage AI analysis:

**Stage 1 — Deep Research:** Processes the last 6 quarters of earnings transcripts alongside financial data and price history. It extracts sentiment scores, tracks promises, analyzes guidance accuracy, and correlates everything with actual stock price reactions.

**Stage 2 — Research Verdict:** Takes all the deep research data plus news sentiment, SEC filing insights, insider trading patterns, and congressional trading data to produce a final signal dashboard with a buy/hold/sell rating, price target range, and risk assessment.

The AI uses structured output with detailed Zod schemas, so every analysis is consistent and comparable across companies.

## Beyond individual stocks

TickerTalker isn't just for single-stock research. I built several other tools:

- **Stock Screener** — filter the market by sector, market cap, price, beta, dividends, and more
- **Compare Stocks** — overlay multiple tickers for side-by-side financial and price comparison
- **Portfolio Backtesting** — enter your positions with buy dates and see how your portfolio performed against the S&P 500, including alpha calculation
- **Macro Dashboard** — market indices, sector performance, commodity prices, treasury yields, and economic indicators all in one view
- **Curated Watchlists** — 28 thematic lists covering AI infrastructure, semiconductors, nuclear energy, autonomous vehicles, fintech, and more

## Tech stack

- **Next.js 16** with App Router and Turbopack
- **Mantine UI** for the component library
- **Vercel AI SDK** with Google Gemini 2.5 Flash for the AI analysis
- **Financial Modeling Prep API** for all financial data — price history, income statements, earnings transcripts, insider trading, and more
- **Recharts** for interactive charts
- **SWR** for client-side data fetching
- **Zod** for structured AI output validation

The app is heavily server-component based. The data-heavy pages (symbol detail, macro dashboard, compare) render on the server with Suspense boundaries and skeleton fallbacks, while interactive features (search, screener filters, backtesting form) are client components.

## What I learned

Building TickerTalker reinforced a few things for me:

**Structured AI output is a game-changer.** Using Zod schemas with the Vercel AI SDK means every analysis follows the exact same format. No parsing HTML, no hoping the model gives you JSON — you define the shape and the SDK handles validation.

**Financial APIs are expensive and rate-limited.** Financial Modeling Prep is great for the price, but you have to be smart about caching and batching requests. The free tier gives you 250 requests/day, which disappears fast when a single symbol page can trigger 10+ API calls.

**Earnings calls contain more signal than most people realize.** The difference between a CEO who says "we expect strong growth" and one who says "we're targeting 15% revenue growth driven by our enterprise segment" is enormous. AI is genuinely good at picking up on these nuances at scale.

You can try it at [tickertalker.vercel.app](https://tickertalker.vercel.app).
