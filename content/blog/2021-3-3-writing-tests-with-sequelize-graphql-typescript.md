---
title: "Writing tests with Sequelize, GraphQL and Typescript"
date: "2021-03-03"
description: "How to write tests with Jest, Sequelize and Typescript"
readTime: "4 min read"
category: "Code"
---

At Shepherd, we leverage GraphQL, Apollo, Typescript, and Sequelize extensively in our testing practices. Here's a practical guide for testing these technologies together.

## Key Setup Patterns

### Initialize Server and Database

```typescript
beforeAll(async () => {
  [server, sequelize] = await Promise.all([
    testApolloServer(),
    initializeDatabase({ logging: false }),
  ]);
});
```

### Create Test User

```typescript
beforeEach(async () => {
  user = await User.create({ email: faker.internet.email() });
});
```

### Clean Database After Tests

```typescript
afterEach(async () => {
  await Promise.all(
    Object.values(sequelize.models).map(async (model) => {
      return model.destroy({ where: {}, truncate: true, cascade: true });
    })
  );
});
```

**Important:** Run Jest with `--runInBand` flag since parallel test execution creates database cleaning conflicts.

### Close Database Connection

```typescript
afterAll(async () => {
  await sequelize.close();
});
```

## Testing Mutations

Here's how to test GraphQL mutations with proper type safety and context injection:

```typescript
test('should create organization', async () => {
  const companyName = faker.company.companyName();
  const thisServer = await testApolloServer(() => ({
    user,
  }));
  const res = await thisServer.mutate<
    CreateOrganizationMutation,
    CreateOrganizationMutationVariables
  >({
    mutation: CreateOrganizationDocument,
    variables: {
      input: {
        name: companyName,
        type: OrganizationTypeEnumGenerated.Brokerage,
      },
    },
  });

  expect(res?.data).toMatchSnapshot({
    createOrganization: {
      organization: {
        id: expect.any(String),
        name: expect.any(String),
      },
    },
  });
});
```

## Apollo Server Test Configuration

```typescript
const testApolloServer = async (context = () => ({})) => {
  const schema = await buildSchema({
    resolvers: [UserResolver, OrganizationResolver, RetoolResolver],
    authChecker: customAuthChecker,
    container: Container,
  });

  const server = new ApolloServer({
    schema,
    context,
  });

  return createTestClient(server);
};
```

This approach allows dynamic context configuration for different test scenarios, enabling flexible authentication state management during testing.
