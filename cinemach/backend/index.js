import Express from "express";
import cors from "cors";

import { getUsers, getUser, addUser } from "./DB/DB.js";

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
app.use(Express.json());

app.listen(PORT, () => {
  console.log(`\nServer is running on port ${PORT}`);
});

app.get("/api", (req, res) => {
  res.json({
    message: "server data",
  });
});

app.get("/users", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await getUser(id);
  res.send(user);
});

app.post("/user", async (req, res) => {
  const { name, surname, patronymic, login, password, email } = req.body;
  const user = await addUser(name, surname, patronymic, login, password, email);
  res.status(201).send(user);
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something go wrong");
});
