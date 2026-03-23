---
title: "Startup problems"
date: "2021-01-29"
description: "Problems and ideas for startups"
readTime: "3 min read"
category: "Startups"
---

Here's an ongoing list of challenges I've encountered while building a startup — areas where solutions are either lacking or difficult to implement.

## Email Rendering and Testing

Development email testing tools like Rails ActionMailer work well initially, but significant friction emerges when using third-party providers like SendGrid. Creating visually appealing emails and converting them to HTML strings through APIs remains problematic, making the workflow cumbersome when sending through external services.

## Managing Files

While services like Flatfile.io, Filestack, Uploadcare, and Docspring excel at their specific functions, generating file outputs for end users remains challenging. I've been using a workaround: building PDFs in React/Next.js, server-side rendering them in Rails, uploading to cloud storage, and saving CDN URLs to the database. File compression tasks — combining multiple CDN files into a single zip — have proven equally frustrating, requiring deep familiarity with Ruby's Tempfile utilities.

## Travel Insurance

The travel insurance industry presents antiquated purchasing experiences, particularly problematic for frequent international travelers and digital nomads. Current offerings terminate after certificate issuance, missing partnership opportunities with travel brands. The sector demonstrates untapped potential for bundled value propositions similar to what Walnut offers in life insurance.

## TurboTax for LLCs, Trusts, and Similar Entities

Complex questions about entity structure — whether to use LLCs for property investments, establish self-directed IRAs, or create trusts — typically require professional advice. There's an opportunity for software to simplify governance and logistics decisions the way TurboTax democratized tax preparation, with potential for recurring revenue models.
