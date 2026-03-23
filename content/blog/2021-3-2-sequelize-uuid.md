---
title: "Sequelize with Postgresql UUID"
date: "2021-03-02"
description: "Generating primary key with UUID"
readTime: "1 min read"
category: "Code Bites"
---

Quick guide on adding `gen_random_uuid()` to Sequelize while using Postgresql.

## Migration to add extension

```typescript
queryInterface.sequelize.query("CREATE EXTENSION IF NOT EXISTS pgcrypto;")
```

The migration enables PostgreSQL's `pgcrypto` extension, which provides the `gen_random_uuid()` function needed for UUID generation.

## Model definition

```typescript
const User = sequelize.define('User', {
  id: {
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.literal('gen_random_uuid()')
  },

  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
});
```

The model configuration sets the `id` field as a UUID primary key with automatic generation via the PostgreSQL function.
