---
title: "Migrating from Rails to Nodejs"
date: "2021-02-11"
description: "Why I did it, how it went and what I learnt"
readTime: "6 min read"
category: "Code"
---

I spent six years working with Ruby on Rails before deciding to transition to Node.js and TypeScript. After initially loving Rails' simplicity, I recognized the advantages offered by modern JavaScript tooling and ecosystem improvements.

## Why Make the Switch?

### Frontend Ecosystem Evolution

React, TypeScript, and GraphQL were game-changers. Writing frontend not only became joyful, but easier, safer. TypeScript particularly impressed me, offering type safety that prevents common errors caught only through extensive testing in Rails.

### Tooling Improvements

Modern editors like VS Code dramatically accelerate development through intelligent code completion and automatic formatting.

### Rails Limitations

While Rails excels at rapid initial development, its convention-over-configuration approach created challenges. I struggled with unclear variable origins and typos that went undetected — problems Rails typically solved through high test coverage, which wasn't feasible during early development stages.

## The Migration Decision

After 2-3 days of deliberation, three considerations pushed me forward:

1. **Team Scaling:** Full-stack engineers would benefit both frontend and backend work in a JavaScript/TypeScript environment, unlike Rails where frontend engineers often avoided touching the API.

2. **ORM Support:** Modern ORMs now embrace TypeScript, improving the Node.js experience.

3. **Code Sharing:** A monorepo allows sharing files between frontend and backend.

## Technical Stack

The setup leverages:

- **Runtime:** Node.js with TypeScript
- **Framework:** Koa (web server)
- **Database:** PostgreSQL with Sequelize ORM
- **API:** Apollo Server (GraphQL)
- **Validation:** Class-validator and Type-GraphQL

## Key Learnings

Node.js APIs become powerful once properly configured. While I miss Rails console, I wouldn't sacrifice TypeScript's benefits. Deployment proved trickier than Rails + Heroku integration. Ultimately, Sequelize was chosen over TypeORM and MikroORM due to switching costs, though I appreciate modern ORMs finally adopting TypeScript support.

The transition demonstrates that onboarding frontend developers to backend work becomes feasible when both use JavaScript.
