import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./graphql/schema/typeDefs.js";
import { resolvers } from "./graphql/resolvers/resolvers.js";

const PORT = process.env.PORT || 4444;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`Server is working on ${url}`);
