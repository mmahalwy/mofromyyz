---
title: "Typescript sourcemaps with Sentry"
date: "2021-02-17"
description: "Our setup to make it work"
readTime: "2 min read"
category: "Code"
---

Setting up sourcemap support for TypeScript with Sentry requires careful configuration across multiple files. Getting this working properly took considerable effort, so here's the complete setup.

## src/index.ts

Initialize Sentry with the `RewriteFrames` integration:

```typescript
Sentry.init({
  dsn: SENTRY_DSN,
  tracesSampleRate: 1.0,
  release: process.env.HEROKU_SLUG_COMMIT,
  integrations: [
    new RewriteFrames({
      root: process.cwd(),
    }),
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Postgres(),
  ],
});
```

The key detail is setting `root: process.cwd()`, which establishes the repo root directory. On Heroku, this resolves to `/app`.

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "module": "commonjs",
    "lib": ["es6", "es2017", "esnext.asynciterable"],
    "skipLibCheck": true,
    "outDir": "./build",
    "moduleResolution": "node",
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "resolveJsonModule": true,
    "allowJs": true
  },
  "exclude": ["node_modules"],
  "include": ["./src/**/*.tsx", "./src/**/*.ts", "src/modules.d.ts"]
}
```

Note that `outDir` is set to `./build`.

## tsconfig.prod.json

Extend the base configuration with production-specific settings:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "sourceMap": true,
    "removeComments": true,
    "inlineSources": true,
    "sourceRoot": "/",
    "noEmitHelpers": true,
    "importHelpers": true
  }
}
```

The critical setting here is `"sourceMap": true`.

## package.json

```json
{
  "scripts": {
    "prebuild": "del ./build",
    "build": "tsc --project tsconfig.prod.json",
    "sentry-release": "sentry-cli releases files \"$HEROKU_SLUG_COMMIT\" upload-sourcemaps --url-prefix '~/app/build' ./build"
  }
}
```

## The Critical Step

The `sentry-release` script is essential — it tells Sentry to prefix all assets with `~/app/build`, enabling proper sourcemap resolution and debugging capabilities in production.
