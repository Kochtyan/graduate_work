import Express from "express";
import cors from "cors";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./graphql/schema/typeDefs.js";
import { resolvers } from "./graphql/resolvers/resolvers.js";

const PORT = process.env.PORT || 4000;

const app = Express();
app.use(cors());
app.use(Express.json());

app.listen(PORT, () => {
  console.log(`\nServer is running on port ${PORT}`);
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something go wrong");
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4444 },
});
