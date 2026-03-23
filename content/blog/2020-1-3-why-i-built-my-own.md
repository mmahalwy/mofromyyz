---
title: "Why I built my own blog"
date: "2020-01-03"
description: "A little about the process"
readTime: "3 min read"
category: "Engineering"
---

I had grown dissatisfied with Medium as a blogging platform. Click-bait became a common curse amongst many Medium posts, and the introduction of paywalls prompted me to seek alternatives.

## Exploring Options

### Notion as a Platform

I was initially attracted to Notion — with more and more of my life moving onto Notion, it seemed like a natural fit. But it lacked essential features like Google Analytics and signup forms needed for a serious blogging endeavor.

### Notion API Approach

Attempting to reverse-engineer Notion's undocumented API proved too cryptic and impractical, so this path was abandoned.

### Headless CMS Solutions

Options like ButterCMS, Contentful, and Contentstack were rejected due to cost, poor code snippet support, and limited customization capabilities.

## Building a Custom Solution

I chose to build my own blog using Next.js, drawn to its benefits: React with all the benefits of server side rendering, SEO friendliness, speed, and 1 command deploy.

Inspired by Dan Abramov's overreacted.io and a GitHub repository for Next.js MDX blogging, I forked the project and customized it. The solution uses MDX (Markdown plus JSX), enabling me to write content flexibly while maintaining full control over design and functionality.

The source code is available on [GitHub](https://github.com/mofromyyz/mofromyyz) for others to use and modify.
