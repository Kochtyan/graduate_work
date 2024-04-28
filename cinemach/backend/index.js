import Express from "express";
import cors from "cors";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const PORT = process.env.PORT || 4000;

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster123",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4444 },
});

const app = Express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`\nServer is running on port ${PORT}`);
});

app.get("/api", (req, res) => {
  res.json({
    message: "server data",
  });
});
