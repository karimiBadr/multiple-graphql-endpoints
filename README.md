# Multiple graphql endpoints

Simple voting app showcasing GraphQL queries, mutations and subscriptions on multiple GraphQL endpoints.

## Directories

- **api** - express server acting as database containing animal voting data
- **main-server** - GraphQL endpoint handling queries
- **sub-server** - GraphQL endpoint handling mutations and subscriptions
- **client** - Apollo/React app that executes queries on the main-server as well as mutations & subscriptions on the sub-server

## Setup

Install and run the servers as follows:

#### api

```bash
yarn
node index.js
```

#### main-server

```bash
yarn
node index.js
```

#### sub-server

```bash
yarn
node index.js
```

Now install and run the React client

#### client

```bash
yarn
yarn start
```
