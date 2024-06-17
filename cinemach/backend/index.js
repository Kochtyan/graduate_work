import Express from "express";
import cors from "cors";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { getUsers, getUser } from "./DB/queries/queries.js";
import { addUser, setRating } from "./DB/mutations/mutations.js";
import { typeDefs } from "./graphql/schema/typeDefs.js";
import { resolvers } from "./graphql/resolvers/resolvers.js";

const PORT = process.env.PORT || 4000;

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

app.get("/users/:email", async (req, res) => {
  const email = req.params.email;
  const user = await getUser(email);
  res.send(user);
});

app.post("/user", async (req, res) => {
  const { name, surname, login, password, email } = req.body;
  const user = await addUser(name, surname, login, password, email);
  res.status(201).send(user);
});

app.post("/rating", async (req, res) => {
  const { userId, movieId, rating } = req.body;
  const movie = await setRating(userId, movieId, rating);
  res.status(201).send(movie);
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
